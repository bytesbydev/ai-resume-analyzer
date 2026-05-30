export const testGemini = async () => {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`
  );

  const data = await res.json();

  console.log(data);
};