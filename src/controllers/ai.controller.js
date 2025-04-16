import aiService from "../services/ai.service.js"

export const getResponse = async  (req, res) => {
    const prompt = req.query.prompt;

    if(!prompt) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await aiService.generateContent(prompt);
    if (!response) {
        return res.status(500).json({ error: "Failed to generate content" });
    }

    return res.status(200).json({ response });
}