import asyncio
import os
import random
import string
from datetime import datetime

import ngrok
from ai import process_document_docvqa
from configs import config
from flask import Flask, jsonify, request, send_from_directory
from gpt import chatbot, construct_index
from PIL import Image
from werkzeug.utils import secure_filename

app = Flask(__name__)
UPLOAD_FOLDER = "./files/"

if not os.path.isdir(UPLOAD_FOLDER):
    os.mkdir(UPLOAD_FOLDER)


def random_string():
    return "".join(random.choices(string.ascii_uppercase + string.digits, k=12))


@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"message": "No File Part"}), 400

    f = request.files["file"]
    filename = f"{datetime.now().timestamp() // 3600}-{random_string()}-{secure_filename(f.filename)}"
    f.save(os.path.join(UPLOAD_FOLDER, filename))
    return jsonify({"message": "File uploaded successfully", "file": filename}), 201


@app.route("/uploads/<name>")
def download_file(name: str):
    return send_from_directory(UPLOAD_FOLDER, name)


@app.route("/predict/<name>")
def predict(name: str):
    filename = os.path.join(UPLOAD_FOLDER, name)
    if not os.path.isfile(filename):
        return jsonify({"message": "File not found"}), 404
    image = Image.open(os.path.join(UPLOAD_FOLDER, name))
    return (
        jsonify({"from": process_document_docvqa(image, "Who issued the receipt?")}),
        200,
    )


@app.route("/good-questions")
def goodQuestions():
    res = chatbot(
        "Based on the pizza sales this week, what are some good questions to ask as the business owner? Make it short and concise, and separate the questions using |"
    )
    return jsonify({"questions": res.split("|")}), 200


# /prompt?question=...
@app.route("/prompt")
def prompt():
    prompt = request.args.get("question")


async def setup():
    debug = config.get("DEBUG") == "1"
    if not debug:
        session = (
            await ngrok.NgrokSessionBuilder()
            .authtoken(config.get("NGROK_TOKEN"))
            .connect()
        )
        tunnel = await session.http_endpoint().listen()
        print(f"Ingress established at {tunnel.url()}")
        tunnel.forward_tcp("localhost:5050")
    app.run(debug=debug, port=5050)
    print(app.url_map)


if __name__ == "__main__":
    asyncio.run(setup())
