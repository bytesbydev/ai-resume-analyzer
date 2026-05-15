import { GoogleGenAI } from "@google/genai";

// Gemini client setup
const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

/**
 * AI Resume Analysis using Gemini
 */
export const aiAnalysis = async (rawText, parsedData) => {
  try {
    if (!rawText) throw new Error("No resume text provided");

    const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the following resume carefully.

====================================
RAW RESUME TEXT:
====================================
${rawText}

====================================
PARSED RESUME DATA:
====================================
${JSON.stringify(parsedData, null, 2)}

====================================
RULES:
====================================
- Return ONLY valid JSON
- No markdown, no explanation, no backticks
- ATS score must be 0-100
- Minimum 3 strengths, 3 weaknesses, 5 suggestions

====================================
OUTPUT FORMAT:
====================================
{
  "atsScore": 0,
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "recommendedSkills": [],
  "sectionBreakdown": {
    "skills": 0,
    "experience": 0,
    "projects": 0,
    "education": 0
  },
  "summaryFeedback": "",
  "experienceFeedback": "",
  "projectsFeedback": "",
  "certificationsFeedback": "",
  "overallSummary": ""
}
`;

    // Call Gemini
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const aiText = response?.text;

    if (!aiText) {
      throw new Error("Empty response from Gemini");
    }

    // Clean response (remove markdown if any)
    const cleanedText = aiText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsed;

    try {
      parsed = JSON.parse(cleanedText);
    } catch (err) {
      console.error("JSON Parse Error. Raw output:", cleanedText,err);
      throw new Error("Invalid JSON returned by AI");
    }

    return parsed;
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return null;
  }
};