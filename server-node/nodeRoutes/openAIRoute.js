import express from "express";
const router = express.Router();
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: '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',
});

    const AICall = async (req, res) => {
        console.log(req.body)
        const {prompt} = `Analyzing Emotional Data: 
        - Average Emotions: ${JSON.stringify(req.body.averageEmotions)}
        - Max Emotions: ${JSON.stringify(req.body.maxEmotions)}`;
        
        const params = {
            messages: [{ role: 'user', content: prompt }],
            model: 'gpt-3.5-turbo',
          };
          const chatCompletion = await openai.chat.completions.create(params);
        
        res.send(chatCompletion.choices[0].message)
    }

    router.post("/openai", AICall);

export default router;
