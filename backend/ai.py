# import re

# import torch
# from donut import DonutModel
# from PIL import Image
# from transformers import DonutProcessor, VisionEncoderDecoderModel

# processor_docvqa = DonutProcessor.from_pretrained("naver-clova-ix/donut-base-finetuned-docvqa")
# model_docvqa = VisionEncoderDecoderModel.from_pretrained("naver-clova-ix/donut-base-finetuned-docvqa")

# model_docvqa.to('cuda')

# def process_document_docvqa(image: "Image", question: str):
#     # prepare encoder inputs
#     pixel_values = processor_docvqa(image, return_tensors="pt").pixel_values
    
#     # prepare decoder inputs
#     task_prompt = "<s_docvqa><s_question>{user_input}</s_question><s_answer>"
#     prompt = task_prompt.replace("{user_input}", question)
#     decoder_input_ids = processor_docvqa.tokenizer(prompt, add_special_tokens=False, return_tensors="pt").input_ids
          
#     # generate answer
#     outputs = model_docvqa.generate(
#         pixel_values.to("cuda"),
#         decoder_input_ids=decoder_input_ids.to("cuda"),
#         max_length=model_docvqa.decoder.config.max_position_embeddings,
#         early_stopping=True,
#         pad_token_id=processor_docvqa.tokenizer.pad_token_id,
#         eos_token_id=processor_docvqa.tokenizer.eos_token_id,
#         use_cache=True,
#         num_beams=1,
#         bad_words_ids=[[processor_docvqa.tokenizer.unk_token_id]],
#         return_dict_in_generate=True,
#     )
    
#     # postprocess
#     sequence = processor_docvqa.batch_decode(outputs.sequences)[0]
#     sequence = sequence.replace(processor_docvqa.tokenizer.eos_token, "").replace(processor_docvqa.tokenizer.pad_token, "")
#     sequence = re.sub(r"<.*?>", "", sequence, count=1).strip()  # remove first task start token
    
#     return processor_docvqa.token2json(sequence)