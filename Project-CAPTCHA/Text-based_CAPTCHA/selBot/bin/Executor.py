""" Executor of all models to solve CAPTCHA."""

import time
from Selenium_bot import SelBot
from Falcon_model import Falcon
from Roberta_model import Roberta
from OpenAI_model import OpenAI_4o
from Falcon_executor import FalconExecutor
from Roberta_executor import RobertaExecutor
from OpenAI_executor import OpenAIExecutor


def main():
    """ Main function which runs all models."""
    falcon_model = Falcon()
    roberta_model = Roberta()
    openai_model = OpenAI_4o()

    # Use OpenAI
    openai_executor = OpenAIExecutor(SelBot(), openai_model)
    time.sleep(3)
    openai_executor.execute_bot()

    # Use Falcon
    falcon_executor = FalconExecutor(SelBot(), falcon_model)
    time.sleep(3)
    falcon_executor.execute_bot()

    # Use RoBERTa
    roberta_executor = RobertaExecutor(SelBot(),
                                       falcon_model,
                                       roberta_model)
    time.sleep(3)
    roberta_executor.execute_bot()


if __name__ == "__main__":
    main()
