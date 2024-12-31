"""
Interface for different AI models.
"""

from abc import ABC, abstractmethod


class BaseModel(ABC):
    """ Base interface for different models. """

    @abstractmethod
    def init_pipeline(self):
        """ Initialization of pipeline for open-source models. """

    @abstractmethod
    def generate_answer(self, *args):
        """ Generate answer to 'captcha_question' for Falcon and OpenAI models. """
