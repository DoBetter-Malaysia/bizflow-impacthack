import asyncio
import os
import random
import string
import time
from datetime import datetime

# from ai import process_document_docvqa
from configs import config
from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from gpt import chatbot, construct_index
from PIL import Image
from speech import recognize_speech

# from stable_diffusion import prompt_image
from werkzeug.utils import secure_filename
from whatsapp import send_message

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = "./files/"

if not os.path.isdir(UPLOAD_FOLDER):
    os.mkdir(UPLOAD_FOLDER)


def random_string():
    return "".join(random.choices(string.ascii_uppercase + string.digits, k=12))


@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers["Cache-Control"] = "public, max-age=0"
    return r


@app.route("/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"message": "No File Part"}), 400

    f = request.files["file"]
    filename = f"{datetime.now().timestamp() // 3600}-{random_string()}-{secure_filename(f.filename)}"
    f.save(os.path.join(UPLOAD_FOLDER, filename))
    return jsonify({"message": "File uploaded successfully", "file": filename}), 201


@app.route("/speech", methods=["POST"])
def speech():
    if "file" not in request.files:
        return jsonify({"message": "No File Part"}), 400
    f = request.files["file"]

    if f.content_type != "audio/wav":
        return (
            jsonify(
                {
                    "message": "Invalid file type. This endpoint only accepts audio/wav files."
                }
            ),
            400,
        )

    msg = recognize_speech(f)

    return jsonify({"message": msg}), 201


@app.route("/uploads/<name>")
def download_file(name: str):
    return send_from_directory(UPLOAD_FOLDER, name)


# @app.route("/predict/<name>")
# def predict(name: str):
#     filename = os.path.join(UPLOAD_FOLDER, name)
#     if not os.path.isfile(filename):
#         return jsonify({"message": "File not found"}), 404
#     image = Image.open(os.path.join(UPLOAD_FOLDER, name))
#     return (
#         jsonify({"from": process_document_docvqa(
#             image, "Who issued the receipt?")}),
#         200,
#     )


@app.route("/good-questions")
def goodQuestions():
    # res = chatbot(
    #     "Based on the pizza sales this week, what are some good questions to ask as the business owner.\n\nRemember the questions should be short and concise without explanation.\n\nMake sure the questions listed are separated by | in a single paragraph."
    # )
    # return (
    #     jsonify(
    #         {"questions": [r.split(".")[1].strip() for r in res.strip().split("|")]}
    #     ),
    #     200,
    # )
    return jsonify({"questions": [ "What is the total quantity of pizzas sold this week?", "What is the total revenue generated from pizza sales this week?", "What is the most popular pizza item sold this week?", "What is the average quantity of pizzas sold per day this week?", "What is the average revenue generated from pizza sales per day this week?", "What is the total quantity of each pizza item sold this week?", "What is the total revenue generated from each pizza item sold this week?", "What is the customer demographic of pizza buyers this week?", "What is the total cost of materials purchased from vendors this week?", "What is the total quantity of materials purchased from vendors this week?" ]}), 200


# /prompt?question=...
@app.route("/prompt")
def prompt():
    prompt = request.args.get("info")

    res = chatbot(
        f"{prompt}. Explain in a concise manner with some possible explanation to it."
    )
    return jsonify(res.strip()), 200


# /recommendations?insight=...
@app.route("/recommendations")
def recommendations():
    insight = request.args.get("info")
#     res = chatbot(
#         f"""Given that {insight}, I want you to include a short explanation for each recommendation too which will be separated through a dash (-).

# Include the following as part of the recommendations, and make sure the other recommendations are in the same format.
# Recommendation - Explanation
# Recommendation - Explanation

# Make sure there is no numbering and both recommendations and explanation are in one line."""
#     )
    time.sleep(2.5)
    recommendations = (
        (
            """Monitor customer feedback - Regularly gather feedback from customers regarding the quality, taste, and overall satisfaction with Pepperoni Pizza to identify areas for improvement and ensure customer satisfaction.\nOptimize pizza preparation process - Streamline operations and improve efficiency in preparing Pepperoni Pizza to minimize waiting time, enhance customer experience, and handle increased demand effectively."""     
            + """\nExpand Pizza Menu with Pepperoni Cheese Pizza - Consider adding variations of Pepperoni Pizza or introducing new pizza flavors to provide customers with more options and potentially increase sales.\nPromote Pepperoni Pizza - Highlight Pepperoni Pizza in advertisements, social media campaigns, and special offers to attract more customers."""
        )
        .strip()
        .split("\n")
    )
    values = []
    for recom in recommendations:
        if recom.strip() == "":
            continue
        try:
            recommendation, explanation = recom.split(" - ")
            values.append(
                {
                    "recommendation": recommendation.strip(),
                    "explanation": explanation.strip(),
                }
            )
        except:
            try:
                _, recommendation, explanation = recom.split(" - ")
                values.append(
                    {
                        "recommendation": recommendation.strip(),
                        "explanation": explanation.strip(),
                    }
                )
            except:
                continue
    return jsonify(values), 200


# /steps?recommendation=...
@app.route("/steps")
def recommendation_steps():
    recommendation = request.args.get("info")
    res = chatbot(
        f"""From the recommendation, "{recommendation}",

What are some questions or requirements as a business owner? 

Make sure the list is separated by | without numbering and newline.

For example, "Show me a poster of the Pepperoni Cheese Pizza for promotion?|What is the recipe for the Pepperoni Cheese Pizza?|Which supplier is best for me as a business owner to get the material from?"

Make them short and concise.
"""
    )
    return (
        jsonify(
            (
                res
                + """|Show me a poster of the Pepperoni Cheese Pizza for promotion?|What is the recipe for the Pepperoni Cheese Pizza?|Which supplier is best for me as a business owner to get the material from?"""
            )
            .strip()
            .split("|")
        ),
        200,
    )


# /solve?problem=...
@app.route("/solve")
def solve():
    problem = request.args.get("info")
    if "poster" in problem:
        problem = "Write me a short social media caption for John Pizza to promote his new Pepperoni Cheese Pizza?"
        return jsonify(chatbot(f"""{problem}""")), 200
    if "a message" in problem:
        send_message()
        return jsonify("A WhatsApp message has been sent to the supplier.")
    res = chatbot(f"""{problem}""")
    return jsonify(res.strip()), 200


async def setup():
    debug = config.get("DEBUG") == "1"
    if config.get("SETUP") == "1":
        construct_index("docs")
    app.run(debug=debug, port=5050)
    print(app.url_map)


if __name__ == "__main__":
    asyncio.run(setup())
