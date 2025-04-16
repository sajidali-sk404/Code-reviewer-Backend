import pkg from '@google/genai';
const { GoogleGenerativeAI } = pkg;

// Assuming 'genAI' is your initialized GoogleGenerativeAI instance
// Assuming 'modelName' is your model (e.g., "gemini-pro")
// Assuming 'requestData' is the object you pass to generateContent

export const generateContent = async (requestData) => {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Or your model name

    // --- DEBUG LOGGING ---
    console.log("--- Sending Request to Google GenAI ---");
    console.log("Model:", model.model); // Verify model name
    console.log("Request Data:", JSON.stringify(requestData, null, 2));
    // --- END DEBUG LOGGING ---

    try {
        // Your original line 7 call (might be generateContent or generateContentStream)
        const result = await model.generateContent(requestData);
        // or: const result = await model.generateContentStream(requestData);

        // ... rest of your function
        return result; // Or however you handle the result
    } catch (error) {
        console.error("Error calling Google GenAI:", error); // Log the full error object
        throw error; // Re-throw or handle appropriately
    }
};

export default { generateContent };