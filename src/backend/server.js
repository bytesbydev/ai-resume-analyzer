const express = require("express");
const multer = require("multer");
const pdf = require("pdf-parse");
const mammoth = require("mammoth");
const fs = require("fs");

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("resume"), async (req, res) => {
  const filePath = req.file.path;
  let text = "";

  try {
    // 📄 PDF
    if (req.file.mimetype === "application/pdf") {
      const data = await pdf(fs.readFileSync(filePath));
      text = data.text;
    }

    // 📄 DOCX
    else if (
      req.file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const result = await mammoth.extractRawText({ path: filePath });
      text = result.value;
    }

    // ❌ Unsupported file
    else {
      return res.status(400).send("Only PDF and DOCX allowed");
    }

    // 🧠 CLEAN TEXT (important)
    text = text.replace(/\s+/g, " ").trim();

    // 🖨️ PRINT IN CONSOLE
    console.log("----- RESUME TEXT -----");
    console.log(text);

    res.send("Text extracted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error extracting file");
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
