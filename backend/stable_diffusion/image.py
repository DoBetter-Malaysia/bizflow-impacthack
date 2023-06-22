import torch
from compel import Compel
from diffusers import StableDiffusionPipeline
from PIL import Image

model = "prompthero/openjourney"
pipe = StableDiffusionPipeline.from_pretrained(
    model,
    torch_dtype=torch.float16,
)
pipe = pipe.to("cuda")
compel = Compel(tokenizer=pipe.tokenizer, text_encoder=pipe.text_encoder)


def prompt_image(prompt, negative_prompt=""):
    conditioning = compel.build_conditioning_tensor(prompt)
    negative_conditioning = compel.build_conditioning_tensor(negative_prompt)
    image = pipe(
        prompt_embeds=conditioning,
        negative_prompt_embeds=negative_conditioning,
        height=768,
        width=512,
        num_inference_steps=30,
    ).images[0]
    # image here is in [PIL format](https://pillow.readthedocs.io/en/stable/)
    return image
