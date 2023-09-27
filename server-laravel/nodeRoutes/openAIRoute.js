import express from "express";
const router = express.Router();
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: "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"
})

const openai = new OpenAIApi(config);

router.post("/openai", async (req, res) => {
    try {
        const prompt = "PHP is"

        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 100,
            temperature: 1,
        });
        console.log(response.data)
    } catch (error) {
        console.error("Error calling OpenAI API:", error.message);
        res.status(500).json({ error: "Error calling OpenAI API" });
    }
});

export default router;
