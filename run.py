import asyncio
from openai import AsyncOpenAI

client = AsyncOpenAI(
    # defaults to os.environ.get("OPENAI_API_KEY")
    api_key="My API Key",
)


async def main() -> None:
    chat_completion = await client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": "Say this is a test",
            }
        ],
        model="gpt-3.5-turbo",
    )


asyncio.run(main())
