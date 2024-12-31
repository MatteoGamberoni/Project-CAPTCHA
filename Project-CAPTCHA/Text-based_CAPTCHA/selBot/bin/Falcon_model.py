"""
This module contains the class to use the Falcon model to solve the CAPTCHA.
"""

import transformers
import torch
from Base_model import BaseModel


class Falcon(BaseModel):
    """ Class based on Falcon-Mamba model used to solve CAPTCHA."""

    ###############
    # CONSTRUCTOR #
    ###############

    def __init__(self):
        """ Class implementing the Q&A of the CAPTCHA based on Falcon model."""
        self.model_name = "tiiuae/falcon-7b-instruct"
        self.tokenizer = self.init_tokenizer()
        self.pipeline = self.init_pipeline()
        self.question = ""
        self.context = ""
        self.answer = ""

    #################
    # CLASS METHODS #
    #################

    def init_tokenizer(self):
        """ Sets value for attribute self.tokenizer."""
        return transformers.AutoTokenizer.from_pretrained(self.model_name)

    def set_question(self, question):
        self.question = question

    def set_context(self, context):
        self.context = context

    def set_answer(self, answer):
        self.answer = answer

    def generate_context(self, captcha_question):
        """Generate context provided a question.."""
        context_prompt = f"Provide a detailed context for answering the question: {captcha_question}\n"

        falcon_context = self.pipeline(
            context_prompt,
            do_sample=True,
            num_return_sequences=1,
            eos_token_id=self.tokenizer.eos_token_id,
            max_new_tokens=70,
            temperature=0.65,
        )

        return falcon_context[0]['generated_text']

    ################################################
    # IMPLEMENTING ABSTRACT-METHODS FROM INTERFACE #
    ################################################

    def generate_answer(self,  captcha_question):
        """Generate answer for the CAPTCHA question using the Falcon model."""

        input_text = f"Answer the following question with one word exactly: % {captcha_question}\n"

        sequences = self.pipeline(
            input_text,
            do_sample=False,
            num_return_sequences=1,
            eos_token_id=self.tokenizer.eos_token_id,
            max_new_tokens=5,
        )

        return sequences[0]['generated_text'].strip().split()[-1]

    def init_pipeline(self):
        """ Sets value for attribute self.pipeline."""
        pipeline = transformers.pipeline(
            "text-generation",
            model=self.model_name,
            torch_dtype=torch.bfloat16,
            device_map="auto",
            pad_token_id=self.tokenizer.eos_token_id,
        )
        return pipeline
