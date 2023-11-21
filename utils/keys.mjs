import dotenv from 'dotenv'

dotenv.config()

export const keys = {
    OPENAI_API_KEY: process.env.CHAT_GPT_API_KEY
}
