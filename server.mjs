import OpenAI from "openai";

import {keys} from "./utils/keys.mjs";

const openai = new OpenAI({apiKey:keys.OPENAI_API_KEY});

async function main() {
    await openai.chat.completions.create({
        messages: [{ role: "user", content: "Can you provide general advice on managing stress and anxiety?" }],
        model: "gpt-3.5-turbo",
    }).then((res) => {
        console.log('res', res.choices[0])
    })

}

main().then(() => console.log('message received'))