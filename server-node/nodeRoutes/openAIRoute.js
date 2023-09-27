import express from "express";
const router = express.Router();
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: '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',
});

    const AICall = async (req, res) => {
        console.log(req.body)
        const prompt = `Analyze Emotional Data: 
        - Average Emotions: ${JSON.stringify(req.body.averageEmotions)}
        - Max Emotions: ${JSON.stringify(req.body.maxEmotions)}`;

        // const prompt = "this is a test";
        const params = {
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
        };
        const chatCompletion = await openai.chat.completions.create(params);
        console.log(chatCompletion.choices[0].message);
        res.send(chatCompletion.choices[0].message);
    }

    router.post("/openai", AICall);

export default router;
