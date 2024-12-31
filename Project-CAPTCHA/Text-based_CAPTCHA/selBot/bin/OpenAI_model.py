import openai
from Base_model import BaseModel


class OpenAI_4o(BaseModel):
    def __init__(self):
        self.api_key = "YOUR_KEY"
        self.question = ""
        self.answer = ""

    def set_question(self, question):
        self.question = question

    def set_answer(self, answer):
        self.answer = answer

    def generate_answer(self, captcha_question):
        client = openai.OpenAI(api_key=self.api_key)
        input_text = f"Answer the following question with one word: {captcha_question}\n"

        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {
                    "role": "system",
                    "content": "You are an assistant who answers questions exactly with one word. Do not use any punctuation characters."
                },
                {
                    "role": "user",
                    "content": input_text
                }
            ]
        )

        return response.choices[0].message.content

    def init_pipeline(self):
        raise NotImplementedError(
            "OpenAI model does not need pipeline set-up.")
