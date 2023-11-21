from openai import OpenAI
from utils.keys import OPENAI_API_KEY

client = OpenAI(
    api_key=OPENAI_API_KEY
)

completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "user", "content": "Can you provide general advice on managing stress and anxiety?"}
    ]

)

print(completion.choices[0].message)
