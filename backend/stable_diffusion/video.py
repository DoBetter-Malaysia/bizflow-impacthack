from modelscope.outputs import OutputKeys
from modelscope.pipelines import pipeline

p = pipeline('text-to-video-synthesis', 'damo/text-to-video-synthesis')
test_text = {
        'text': 'Cheese pepperoni pizza, advertisement, delicious, high quaity, HD, Commercial.',
    }
output_video_path = p(test_text,)[OutputKeys.OUTPUT_VIDEO]
print('output_video_path:', output_video_path)