// utils/aiAnalysis.js

const aiAnalysis = async (resumeText) => {

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const prompt = `
You are an advanced ATS Resume Analyzer.

Analyze the following resume and return ONLY valid JSON.

Rules:
- Do not include markdown
- Do not include explanation
- Do not wrap in backticks
- Return clean JSON only
- Generate realistic ATS analysis
- Scores must be between 0-100
- Keep response professional

Return response in this exact structure:

{
  "basicInfo": {
    "name": "",
    "email": "",
    "phone": "",
    "linkedin": "",
    "github": "",
    "portfolio": "",
    "location": "",
    "summary": ""
  },

  "strengths": [
    {
      "label": "",
      "severity": ""
    }
  ],

  "improvements": [
    {
      "label": "",
      "severity": ""
    }
  ],

  "criticalIssues": [
    {
      "label": "",
      "severity": ""
    }
  ],

  "statsData": {
    "atsScore": 0,
    "readabilityScore": 0,
    "wordCount": 0,
    "keywordMatch": 0
  },

  "sectionScores": [
    {
      "section": "",
      "score": 0
    }
  ],

  "industryComparison": [
    {
      "aspect": "",
      "yourScore": 0,
      "industry": 0
    }
  ],

  "trendingKeywords": [
    {
      "keyword": "",
      "frequency": 0,
      "inResume": true
    }
  ],

  "atsAnalysis": [
    {
      "title": "",
      "description": "",
      "type": ""
    }
  ],

  "performanceStats": [
    {
      "label": "",
      "value": ""
    }
  ],

  "skillCategories": [
    {
      "section": "",
      "score": 0
    }
  ],

  "technicalSkills": [
    {
      "label": "",
      "level": "",
      "proficiency": 0
    }
  ],

  "softSkills": [
    {
      "label": "",
      "level": "",
      "proficiency": 0
    }
  ],

  "recommendedSkills": [
    {
      "label": "",
      "severity": ""
    }
  ],

  "suggestions": [
    {
      "id": "",
      "title": "",
      "priority": "",
      "category": "",
      "impact": "",
      "before": "",
      "after": "",
      "timeToFix": ""
    }
  ]
}

Resume:
${resumeText}
`;

  try {

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const rawText =
      data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      throw new Error("No AI response generated");
    }

    // CLEAN JSON RESPONSE

    const cleanedText = rawText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedText);

  } catch (error) {

    console.error("AI Analysis Error:", error);

    return {
      error: "Failed to analyze resume",
    };

  }
};

export default aiAnalysis;