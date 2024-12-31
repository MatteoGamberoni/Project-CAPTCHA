"""
Executor of RoBerta model to solve text-Based CAPTCHA with LLMs stacked approach.
"""

import time


class RobertaExecutor:
    """ Class which executes RoBerta model in Selenium."""

    def __init__(self, selenium_bot, falcon_model, roberta_model):
        self.sel_bot = selenium_bot
        self.falcon_model = falcon_model
        self.roberta_model = roberta_model

    def solve_captcha(self):
        """ Solve CAPTCHA using Roberta Q&A model."""
        captcha_question = self.sel_bot.get_captcha_question()
        self.falcon_model.set_question(captcha_question)

        context = self.falcon_model.generate_context(
            self.falcon_model.question)
        self.falcon_model.set_context(context)

        answer = self.roberta_model.generate_answer(
            self.falcon_model.question, self.falcon_model.context)
        self.falcon_model.set_answer(answer)

        self.sel_bot.submit_answer(self.falcon_model.answer)

    def print_results(self):
        """ Print results: question, answer and final message. """
        print("CAPTCHA Question:", self.falcon_model.question)
        print("Generated Context:", self.falcon_model.context)
        print("Generated Answer:", self.falcon_model.answer)
        print("RoBerta " + self.sel_bot.print_result_message())

    def execute_bot(self):
        """ Execute Selenium bot with RoBerta Q&A model. """
        self.solve_captcha()
        time.sleep(1)
        self.print_results()
        self.sel_bot.driver.quit()
