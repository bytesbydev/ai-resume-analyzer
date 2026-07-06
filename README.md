# 👾 ScanStack — AI Resume Analyzer

**ScanStack** is an AI-powered Resume Analyzer built with **React.js** and the **Google Gemini API**. It evaluates resumes against modern ATS (Applicant Tracking System) standards, providing detailed insights, skill analysis, keyword optimization, and personalized recommendations to help candidates improve their chances of landing interviews.

Whether you're a student, job seeker, or professional, ScanStack delivers actionable feedback to strengthen your resume and make it more recruiter-friendly.

---

## 🚀 Live Demo

🔗 **https://ai-resume-analyzer-seven-rouge.vercel.app/**

---

## ✨ Features

- 📄 Upload resumes in PDF format
- 🤖 AI-powered resume analysis using Google Gemini
- 📊 ATS compatibility score (0–100)
- 🧠 Technical & soft skills detection
- 📈 Industry benchmarking and radar chart analysis
- 💡 Personalized improvement suggestions
- 🎯 Keyword optimization insights
- 📉 Section-wise resume evaluation
- ⚡ Real-time analysis with interactive loading animations
- 📱 Fully responsive and modern UI

---

## 🧠 AI Analysis Includes

- 👤 Basic candidate information extraction
- 💪 Resume strengths identification
- ⚠️ Weakness and improvement detection
- 🚨 Critical issue identification
- 📊 ATS compatibility evaluation
- 🎯 Keyword matching analysis
- 📈 Industry comparison
- 🛠️ Recommended skills
- ✅ Actionable recommendations with priority levels (High, Medium, Low)

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚛️ React.js | Frontend Framework |
| 🎨 Tailwind CSS | Styling |
| 🤖 Google Gemini API | AI Processing |
| 📦 React Router DOM | Routing |
| 📊 Chart.js | Data Visualization |
| 🧩 Lucide React | Icons |

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Home/
│   ├── loader/
│   ├── results/
│   └── common/
│
├── pages/
│   ├── Home.jsx
│   ├── Analyzing.jsx
│   └── Results.jsx
│
├── utils/
│   ├── aiAnalysis.js
│   ├── extractText.js
│   └── analyzeResume.js
│
└── App.jsx
```

---

## 🔄 Application Workflow

```text
🏠 Home Page
      │
      ▼
📄 Upload Resume (PDF)
      │
      ▼
📝 Extract Resume Text
      │
      ▼
🤖 Process with Gemini API
      │
      ▼
⚡ AI Analysis
      │
      ▼
📊 Generate ATS Score & Insights
      │
      ▼
📋 Display Detailed Results
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/bytesbydev/ScanStack.git
cd ScanStack
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root.

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

### 4. Start the Development Server

```bash
npm run dev
```

Visit:

```text
http://localhost:5173
```

---

## 🔑 Gemini API Setup

1. Visit **Google AI Studio**
2. Generate an API Key
3. Add the key to your `.env` file
4. Restart the development server

> **Note:** A valid Gemini API key is required for AI-powered resume analysis.

---

## 📊 Sample Response

```json
{
  "statsData": {
    "atsScore": 78,
    "readabilityScore": 85,
    "wordCount": 420,
    "keywordMatch": 72
  },
  "strengths": [],
  "improvements": [],
  "criticalIssues": [],
  "suggestions": []
}
```

---

## 🚧 Current Limitations

- ⏳ AI analysis may take a few seconds depending on API response time.
- 📄 Large PDF files can increase processing time.
- 🌐 Internet connectivity is required for AI processing.

---

## 🚀 Future Enhancements

- 📂 Drag-and-drop resume upload
- 👀 PDF preview before analysis
- 🔐 User authentication
- 💾 Resume analysis history
- 📄 Export analysis as PDF
- 🎯 AI-powered job matching
- 📈 Resume comparison
- 🌙 Dark mode support

---

## 🤝 Contributing

Contributions are welcome!

1. 🍴 Fork the repository
2. 🌿 Create a feature branch
3. 💻 Commit your changes
4. 🚀 Open a Pull Request

---

## 👨‍💻 Author

**Devendra Rawat**

GitHub: **https://github.com/bytesbydev**

---

## 📄 License

This project is licensed under the **MIT License**.

---

⭐ **If ScanStack helped you improve your resume, consider giving the repository a star—it supports the project and encourages future development!**