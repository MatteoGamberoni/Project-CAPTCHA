# PROJECT-CAPTCHA
This repository contains the implementation of a method which attempts to solve two CAPTCHA systems: a textual and a image-based system.
The textual CAPTCHA consists of English questions. The image-based challenge contains distorted text that needs to be understood.

## Installation
In order to run this repository, different packages need to be installed based on which CAPTCHA is challenged.

For Textual captcha, the following is needed:
  1. transformers library from HuggingFace
  2. openai package to query the OpenAI API

For the image-based CAPTCHA, the following Python packages are needed:
  1. keras
  2. tensorflow
  3. imutils
  4. opencv-python
  5. selenium
  6. scikit-learn

The approach to solve image-based CAPTCHAs is based on an already existing heuristic. This can be found here:
https://github.com/AdityaAtri/captcha-breaker

this approach uses outdated binaries, namely  *scikit-learn 0.21*,  so running the program with the following method is suggested.
Create a different **conda** environment and install the outdated packages.
```
conda create -n captcha_venv scikit-learn=0.21 python=3.7 numpy=1.19
```
This setup allowed to use the old methods while following the requirements below:
  1. Python >= 3.5
  2. NumPy  >= 1.11.0
  3. SciPy  >= 0.17.0
  4. joblib >= 0.11
   
After installing all necessary modules within the conda environment, delete the lines  45, 48, 49, 50, 52 and 97 from the file *solving_captcha.py* and the program can be successfully executed.
