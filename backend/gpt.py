import os

import gradio as gr
import openai
from langchain.chat_models import ChatOpenAI
from llama_index import (
    GPTVectorStoreIndex,
    LLMPredictor,
    PromptHelper,
    SimpleDirectoryReader,
    StorageContext,
    load_index_from_storage,
)
from server import config

os.environ["OPENAI_API_KEY"] = config.get("GPT_KEY")

openai.api_key = config.get("GPT_KEY")


def construct_index(directory_path):
    max_input_size = 4096
    num_outputs = 512
    chunk_overlap_ratio = 0.4
    chunk_size_limit = 600

    prompt_helper = PromptHelper(
        max_input_size,
        num_outputs,
        chunk_size_limit=chunk_size_limit,
        chunk_overlap_ratio=chunk_overlap_ratio,
    )
    llm_predictor = LLMPredictor(
        llm=ChatOpenAI(
            temperature=0.7, model_name="gpt-3.5-turbo", max_tokens=num_outputs
        )
    )
    documents = SimpleDirectoryReader(directory_path).load_data()
    index = GPTVectorStoreIndex.from_documents(
        documents, llm_predictor=llm_predictor, prompt_helper=prompt_helper
    )
    index.storage_context.persist(persist_dir="./index")

    return index


def chatbot(input_text):
    storage_context = StorageContext.from_defaults(persist_dir="./index")
    index = load_index_from_storage(storage_context)

    # create a query engine to ask question
    query_engine = index.as_query_engine()
    response = query_engine.query(input_text)
    print(response)
    return response.response
