// src/utils/analyzeResume.js

export const analyzeResume = (text = "") => {

  if (!text || typeof text !== "string") {
    console.log("Invalid text input");
    return {};
  }



  // -----------------------------
  // REGEX PATTERNS
  // -----------------------------

  const emailRegex =
    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/;

  const phoneRegex =
    /(\+91[\\-\s]?)?[0]?(91)?[6789]\d{9}/g;

  const linkedinRegex =
    /https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-_%]+/g;

  const githubRegex =
    /https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9-_%]+/g;

  const portfolioRegex =
    /https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[a-z]{2,}/g;

  const pinCodeRegex =
    /\b\d{6}\b/g;

  const dobRegex =
    /\b(\d{1,2}[\\/\\-]\d{1,2}[\\/\\-]\d{2,4})\b/g;

  const graduationYearRegex =
    /\b(19|20)\d{2}\b/g;

  // -----------------------------
  // NAME EXTRACTION
  // -----------------------------
  const lines = text.split("\n").filter(line => line.trim() !== "");

  const name = lines[0] || "Not Found";

  // -----------------------------
  // SKILLS LIST
  // -----------------------------

  const skillsList = [
    "React",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express",
    "Python",
    "Java",
    "C++",
    "HTML",
    "CSS",
    "Tailwind",
    "SQL",
    "Git",
    "GitHub",
    "AWS",
    "Docker",
    "Firebase",
    "TypeScript",
    "Next.js",
  ];

  const foundSkills = skillsList.filter(skill =>
    text.toLowerCase().includes(skill.toLowerCase())
  );

  // -----------------------------
  // BASIC EXTRACTIONS
  // -----------------------------

  const email = text.match(emailRegex);
  const phone = text.match(phoneRegex);
  const linkedin = text.match(linkedinRegex);
  const github = text.match(githubRegex);
  const portfolio = text.match(portfolioRegex);
  const pinCode = text.match(pinCodeRegex);
  const dob = text.match(dobRegex);
  const graduationYear = text.match(graduationYearRegex);

  // -----------------------------
  // EDUCATION
  // -----------------------------

  const degreeKeywords = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "MCA",
    "B.Sc",
    "M.Sc",
    "Bachelor",
    "Master",
    "MBA",
  ];

  const educationDegree =
    degreeKeywords.find(degree =>
      text.toLowerCase().includes(degree.toLowerCase())
    ) || "Not Found";

  // -----------------------------
  // UNIVERSITY
  // -----------------------------

  const universityRegex =
    /(University|College|Institute)[A-Za-z ,.]*/g;

  const university = text.match(universityRegex);

  // -----------------------------
  // EXPERIENCE
  // -----------------------------

  const experienceRegex =
    /(\d+)\+?\s*(years|year)/i;

  const totalExperience = text.match(experienceRegex);

  // -----------------------------
  // CURRENT JOB TITLE
  // -----------------------------

  const jobTitleKeywords = [
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Web Developer",
  ];

  const currentJobTitle =
    jobTitleKeywords.find(job =>
      text.toLowerCase().includes(job.toLowerCase())
    ) || "Not Found";

  // -----------------------------
  // COMPANY NAMES
  // -----------------------------

  const companyRegex =
    /(Infosys|TCS|Google|Microsoft|Amazon|Wipro|Accenture)/gi;

  const companies = text.match(companyRegex);

  // -----------------------------
  // EMPLOYMENT DATES
  // -----------------------------

  const employmentDateRegex =
    /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s?\d{4}\b/gi;

  const employmentDates = text.match(employmentDateRegex);

  // -----------------------------
  // LOCATION
  // -----------------------------

  const cityRegex =
    /(Delhi|Mumbai|Bangalore|Hyderabad|Chennai|Pune|Kolkata)/gi;

  const city = text.match(cityRegex);

  // -----------------------------
  // SUMMARY / OBJECTIVE
  // -----------------------------

  let summary = "Not Found";

  if (text.toLowerCase().includes("summary")) {
    summary = text.substring(
      text.toLowerCase().indexOf("summary"),
      text.toLowerCase().indexOf("education")
    );
  }

  // -----------------------------
  // CERTIFICATIONS
  // -----------------------------

  const certificationKeywords = [
    "AWS Certified",
    "Google Certification",
    "Meta Frontend",
    "Coursera",
    "Udemy",
  ];

  const certifications = certificationKeywords.filter(cert =>
    text.toLowerCase().includes(cert.toLowerCase())
  );

  // -----------------------------
  // PROJECTS
  // -----------------------------

  const projectRegex =
    /Project[:-]?\s*(.*)/gi;

  const projects = [...text.matchAll(projectRegex)].map(
    match => match[1]
  );

  // -----------------------------
  // FINAL OBJECT
  // -----------------------------

  return {

    name,

    email: email ? email[0] : "Not Found",

    phone: phone ? phone[0] : "Not Found",

    linkedin: linkedin ? linkedin[0] : "Not Found",

    github: github ? github[0] : "Not Found",

    portfolio:
      portfolio ? portfolio[0] : "Not Found",

    currentJobTitle,

    currentCompany:
      companies ? companies[0] : "Not Found",

    totalExperience:
      totalExperience ? totalExperience[0] : "Not Found",

    educationDegree,

    university:
      university ? university[0] : "Not Found",

    graduationYear:
      graduationYear ? graduationYear[0] : "Not Found",

    skills: foundSkills,

    jobTitles: jobTitleKeywords.filter(job =>
      text.toLowerCase().includes(job.toLowerCase())
    ),

    companies:
      companies || [],

    employmentDates:
      employmentDates || [],

    location:
      city ? city[0] : "Not Found",

    pinCode:
      pinCode ? pinCode[0] : "Not Found",

    dateOfBirth:
      dob ? dob[0] : "Not Found",

    summary,

    certifications,

    projects,

  };

};