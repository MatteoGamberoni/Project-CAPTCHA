"""
Executor of Falcon model to solve text-based CHAPTCHA.
"""

import time


class FalconExecutor:
    """ Class which executes Falcon model in Selenium."""

    def __init__(self, selenium_bot, falcon_model):
        self.sel_bot = selenium_bot
        self.model = falcon_model

    def solve_captcha(self):
        """ Solve CAPTCHA using Falcon model."""
        captcha_question = self.sel_bot.get_captcha_question()
        self.model.set_question(captcha_question)
        answer = self.model.generate_answer(self.model.question)
        self.model.set_answer(answer)
        self.sel_bot.submit_answer(self.model.answer)

    def print_results(self):
        """ Print results: question, answer and final message. """
        print("CAPTCHA Question:", self.model.question)
        print("Generated Answer:", self.model.answer)
        print("Falcon " + self.sel_bot.print_result_message())

    def execute_bot(self):
        """ Execute Selenium bot with Falcon model. """
        self.solve_captcha()
        time.sleep(1)
        self.print_results()
        self.sel_bot.driver.quit()
