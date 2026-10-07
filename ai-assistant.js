/**
 * AI Assistant — Chat Widget Logic
 * Powered by Groq API via Secure Netlify Function
 * Session memory: full conversation history sent on every request.
 */

const USE_API = true; // Set to true to use the backend function, false for mock mode

class AIAssistant {
  constructor() {
    this.isOpen = false;
    this.isTyping = false;
    this.hasGreeted = false;
    this.messageCount = 0;
    this.conversationHistory = []; // Session memory: [{role, text}]
    this.lastBotAnswer = "";       // For mock follow-up context

    this.fab      = document.getElementById("chat-fab");
    this.panel    = document.getElementById("chat-panel");
    this.messages = document.getElementById("chat-messages");
    this.input    = document.getElementById("chat-input");
    this.sendBtn  = document.getElementById("chat-send-btn");
    this.closeBtn = document.getElementById("chat-close");
    this.badge    = document.getElementById("chat-badge");

    if (!this.fab) return;
    this.bindEvents();
  }

  bindEvents() {
    this.fab.addEventListener("click", () => this.toggle());
    this.closeBtn.addEventListener("click", () => this.close());
    this.sendBtn.addEventListener("click", () => this.handleSend());
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); this.handleSend(); }
    });

    // Suggestion chips
    document.querySelectorAll(".chip").forEach(chip => {
      chip.addEventListener("click", () => {
        this.input.value = chip.textContent.trim();
        this.handleSend();
      });
    });
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.isOpen = true;
    this.panel.classList.add("open");
    this.fab.querySelector(".chat-fab-icon").textContent = "✕";
    if (this.badge) this.badge.style.display = "none";

    if (!this.hasGreeted) {
      this.hasGreeted = true;
      setTimeout(() => {
        this.addBotMessage(`Hi! I'm Srujana's AI assistant 🤖\n\nI know everything about her background, skills, projects, and what she's looking for. Ask me anything!`);
      }, 300);
    }

    setTimeout(() => { this.input.focus(); }, 400);
  }

  close() {
    this.isOpen = false;
    this.panel.classList.remove("open");
    this.fab.querySelector(".chat-fab-icon").textContent = "💬";
  }

  handleSend() {
    const text = this.input.value.trim();
    if (!text || this.isTyping) return;

    this.addUserMessage(text);
    this.input.value = "";
    this.messageCount++;

    // Hide suggestions after first user message
    const suggestions = document.getElementById("chat-suggestions");
    if (suggestions && this.messageCount === 1) {
      suggestions.style.opacity = "0.4";
    }

    if (USE_API) {
      this.getGroqResponse(text);
    } else {
      this.getMockResponse(text);
    }
  }

  addUserMessage(text) {
    const msg = this.createMsgEl("user", "👤", text);
    this.messages.appendChild(msg);
    this.scrollToBottom();
    // Store in session history
    this.conversationHistory.push({ role: "user", text });
  }

  addBotMessage(text) {
    const msg = this.createMsgEl("bot", "🤖", text);
    this.messages.appendChild(msg);
    this.scrollToBottom();
    // Store in session history
    this.lastBotAnswer = text;
    this.conversationHistory.push({ role: "assistant", text });
    return msg;
  }

  createMsgEl(type, avatar, text) {
    const el = document.createElement("div");
    el.className = `chat-msg ${type}`;
    el.innerHTML = `
      <div class="msg-avatar">${avatar}</div>
      <div class="msg-bubble">${this.formatText(text)}</div>
    `;
    return el;
  }

  formatText(text) {
    return text
      .replace(/\n\n/g, "</p><p>")
      .replace(/\n/g, "<br>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/^/, "<p>")
      .replace(/$/, "</p>");
  }

  showTyping() {
    this.isTyping = true;
    const el = document.createElement("div");
    el.className = "chat-msg bot";
    el.id = "typing-indicator";
    el.innerHTML = `
      <div class="msg-avatar">🤖</div>
      <div class="msg-bubble">
        <div class="typing-dots">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
    this.messages.appendChild(el);
    this.scrollToBottom();
  }

  hideTyping() {
    this.isTyping = false;
    const el = document.getElementById("typing-indicator");
    if (el) el.remove();
  }

  getMockResponse(userText) {
    this.showTyping();
    const lower = userText.toLowerCase();

    // Detect follow-up intent — refer to previous answer
    const followUpTriggers = ["tell me more", "elaborate", "explain more", "more details", "can you expand", "what else", "go on"];
    const isFollowUp = followUpTriggers.some(t => lower.includes(t));

    let answer;
    if (isFollowUp && this.lastBotAnswer) {
      answer = `Here's a bit more context on that:\n\n${this.lastBotAnswer}\n\nFeel free to ask a more specific question and I'll go deeper!`;
    } else {
      const match = SRUJANA.qa.find(item =>
        item.keywords.some(kw => lower.includes(kw))
      );
      answer = match
        ? match.answer
        : `Great question! I might not have the exact answer, but you can reach Srujana directly at **${SRUJANA.contact.email}** — she'd love to chat.\n\nYou can also check her GitHub or LinkedIn for more details!`;
    }

    const delay = 500 + Math.random() * 700;
    setTimeout(() => {
      this.hideTyping();
      this.addBotMessage(answer);
    }, delay);
  }

  async getGroqResponse(userText) {
    this.showTyping();

    // System prompt built from data.js
    const systemPrompt = `You are an AI assistant for ${SRUJANA.name}'s personal portfolio website.
You know everything about her and answer questions on her behalf, warmly and professionally.
You have memory of the current conversation — use prior context for coherent follow-up answers.

Her complete background:

NAME: ${SRUJANA.name}
CURRENT ROLE: ${SRUJANA.experience[0].role} at ${SRUJANA.experience[0].company}
TAGLINE: ${SRUJANA.taglines.join(" | ")}
EMAIL: ${SRUJANA.contact.email}
LINKEDIN: ${SRUJANA.contact.linkedin}
GITHUB: ${SRUJANA.contact.github}

BIO:
${SRUJANA.bio.join("\n\n")}

EXPERIENCE:
${SRUJANA.experience.map(e => `- ${e.role} @ ${e.company} (${e.period}): ${e.summary}\n  Key work: ${e.highlights.join("; ")}`).join("\n\n")}

PROJECTS:
${SRUJANA.projects.map(p => `- ${p.name} (${p.subtitle}): ${p.description}. Tech: ${p.tags.join(", ")}`).join("\n")}

SKILLS:
${Object.entries(SRUJANA.skills).map(([cat, skills]) => `${cat}: ${skills.map(s => s.name).join(", ")}`).join("\n")}

EDUCATION:
${SRUJANA.education.map(e => `${e.degree} from ${e.institution} (${e.period}), CGPA: ${e.cgpa}`).join("\n")}

Guidelines:
- Keep answers concise (2-4 sentences) and friendly.
- Speak in first-person on her behalf (e.g. "I worked on...", "My strongest skill is...").
- If you don't know something, redirect to: ${SRUJANA.contact.email}`;

    // Build messages array: system prompt + full session history (Groq/OpenAI format)
    const messages = [
      { role: "system", content: systemPrompt },
      ...this.conversationHistory.map(msg => ({
        role: msg.role,        // "user" or "assistant"
        content: msg.text
      }))
    ];

    try {
      const response = await fetch(
        "/.netlify/functions/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            messages
          })
        }
      );

      const data = await response.json();
      console.log("[AI Assistant] Groq response:", data);

      // Handle API-level errors
      if (data.error) {
        console.error("[AI Assistant] Groq error:", data.error);
        this.hideTyping();
        this.addBotMessage(`⚠️ API Error: ${data.error.message}\n\nPlease reach out to Srujana at **${SRUJANA.contact.email}**.`);
        return;
      }

      const answer = data?.choices?.[0]?.message?.content;

      this.hideTyping();
      this.addBotMessage(answer || `I couldn't generate a response. Please reach out at **${SRUJANA.contact.email}**.`);
    } catch (err) {
      console.error("[AI Assistant] Fetch error:", err);
      this.hideTyping();
      this.addBotMessage(`Something went wrong! You can reach Srujana at **${SRUJANA.contact.email}**.`);
    }
  }

  scrollToBottom() {
    requestAnimationFrame(() => {
      this.messages.scrollTop = this.messages.scrollHeight;
    });
  }
}
