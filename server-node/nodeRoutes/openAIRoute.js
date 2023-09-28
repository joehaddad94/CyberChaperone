import express from "express";
const router = express.Router();
import OpenAI from 'openai';
require('dotenv').config();

const openai = new OpenAI({
    organization: "org-cktUSxa7TqUUdFSJgduFJ4a9",
    apiKey: process.env.OPENAI_API_KEY,
});

    const AICall = async (req, res) => {
        console.log(req.body)
        const prompt = `
        Don't repeat the data I sent you.
        no introduction. 
        no bullet points.
        don't say overall anaylysis and no titles.
        Give me straight a 2 line answer of the overall analysis. 
        - Average Emotions: ${JSON.stringify(req.body.emotionAverages)}
        - Max Emotions: ${JSON.stringify(req.body.maxEmotions)}`;

        const params = {
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
        };
        const chatCompletion = await openai.chat.completions.create(params);
        console.log(chatCompletion.choices[0].message);
        res.send(chatCompletion.choices[0].message.content);
    }

    router.post("/openai", AICall);

export default router;
