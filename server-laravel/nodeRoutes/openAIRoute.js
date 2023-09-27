import express from "express";
const router = express.Router();
import axios from "axios";

router.post("/openai", async (req, res) => {
    try {
            console.log('entered')
        const openaiResponse = await axios.post(
            "https://api.openai.com/v1/engines/davinci-codex/completions",
            {
                prompt: "Translate the following English text to French: 'Hello, world!'",
                max_tokens: 50,
            },
            {
                headers: {
                    Authorization: `Bearer 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`,
                    "Content-Type": "application/json",
                },
            }
        );

        const responseData = openaiResponse.data;

        res.json(responseData);
    } catch (error) {
        console.error("Error calling OpenAI API:", error.message);
        res.status(500).json({ error: "Error calling OpenAI API" });
    }
});

export default router;
