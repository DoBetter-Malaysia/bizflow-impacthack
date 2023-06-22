import os

import cv2
import gradio as gr
import imageio
import numpy as np
import paddlehub as hub
import torch
from moviepy.editor import *
from PIL import Image, ImageOps


def get_frames(video_in):
    frames = []
    #resize the video
    clip = VideoFileClip(video_in)
    
    #check fps
    if clip.fps > 30:
        print("vide rate is over 30, resetting to 30")
        clip_resized = clip.resize(height=256)
        clip_resized.write_videofile("video_resized.mp4", fps=30)
    else:
        print("video rate is OK")
        clip_resized = clip.resize(height=256)
        clip_resized.write_videofile("video_resized.mp4", fps=clip.fps)
    
    print("video resized to 512 height")
    
    # Opens the Video file with CV2
    cap= cv2.VideoCapture("video_resized.mp4")
    
    fps = cap.get(cv2.CAP_PROP_FPS)
    print("video fps: " + str(fps))
    i=0
    while(cap.isOpened()):
        ret, frame = cap.read()
        if ret == False:
            break
        cv2.imwrite('kang'+str(i)+'.jpg',frame)
        frames.append('kang'+str(i)+'.jpg')
        i+=1
    
    cap.release()
    cv2.destroyAllWindows()
    print("broke the video into frames")
    
    return frames, fps

def create_video(frames, fps, type):
    print("building video result")
    clip = ImageSequenceClip(frames, fps=fps)
    clip.write_videofile(type + "_result.mp4", fps=fps)
    
    return type + "_result.mp4"


def magic_lama(img):
    
    i = img
    img = Image.open(img)
    mask = Image.open("./masks/modelscope-mask.png")
    inverted_mask = ImageOps.invert(mask)
    
    
    imageio.imwrite(f"./data/data.png", img)
    imageio.imwrite(f"./data/data_mask.png", inverted_mask)
    os.system(f'python predict.py model.path={os.getcwd()} indir={os.getcwd()}\\data/ outdir={os.getcwd()}/dataout/ device=gpu')
    return f"./dataout/data_mask.png"

def infer(video_in):
    # 1. break video into frames and get FPS
    break_vid = get_frames(video_in)
    frames_list= break_vid[0]
    fps = break_vid[1]
    #n_frame = int(trim_value*fps)
    n_frame = len(frames_list)
    
    if n_frame >= len(frames_list):
        print("video is shorter than the cut value")
        n_frame = len(frames_list)
    
    # 2. prepare frames result arrays
    result_frames = []
    print("set stop frames to: " + str(n_frame))
    
    for i in frames_list[0:int(n_frame)]:
        lama_frame = magic_lama(i)
        lama_frame = Image.open(lama_frame)
        imageio.imwrite(f"cleaned_frame_{i}", lama_frame)
        result_frames.append(f"cleaned_frame_{i}")
        print("frame " + i + "/" + str(n_frame) + ": done;")

    
    final_vid = create_video(result_frames, fps, "cleaned")

    files = [final_vid]

    return final_vid

infer("test-video.mp4")