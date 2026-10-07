exports.handler = async function (event, context) {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const GROQ_API_KEY = process.env.GROQ_API_KEY;

  if (!GROQ_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: { message: "Server configuration error: Missing API Key" } }),
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "qwen/qwen3.8-27b",
        messages: messages,
        temperature: 0.7,
        max_tokens: 512,
      }),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: { message: "Internal Server Error" } }),
    };
  }
};
