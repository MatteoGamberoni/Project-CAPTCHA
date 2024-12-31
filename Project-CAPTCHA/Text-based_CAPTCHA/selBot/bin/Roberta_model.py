"""
This module contains the class to use the Roberta model to solve the CAPTCHA. 
"""

from transformers import pipeline
from Base_model import BaseModel


class Roberta(BaseModel):
    """ Class based on RoBerta model used to solve CAPTCHA as a Q&A."""

    def __init__(self):
        """ Class implementing the Q&A of the CAPTCHA based on Roberta
            model."""
        self.model_name = "deepset/roberta-base-squad2"
        self.pipeline = self.init_pipeline()

    def init_pipeline(self):
        """ Sets value for attribute self.pipeline."""
        return pipeline('question-answering', model=self.model_name)

    def generate_answer(self, captcha_question, generated_context):
        """Answer the CAPTCHA question using the QA model and generated context."""
        input_data = {
            'question': 'Answer this question with exactly one word: '
            + captcha_question,
            'context': generated_context
        }
        result = self.pipeline(**input_data)
        return result['answer']
