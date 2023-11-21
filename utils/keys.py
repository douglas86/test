import heroku3

import os
from dotenv import load_dotenv


load_dotenv()

OPENAI_API_KEY = os.environ["CHAT_GPT_API_KEY"] or heroku3.from_key("CHAT_GPT_API_KEY")
