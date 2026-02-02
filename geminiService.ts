import { GoogleGenAI } from "@google/genai";
import { PROJECTS, AGENCY, WORK_CATEGORIES } from "./constants";

// Validate API key on initialization
const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY || '';
if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
  console.warn('Gemini API key not configured. AI Assistant will return fallback responses.');
}

const ai = apiKey && apiKey !== 'PLACEHOLDER_API_KEY' ? new GoogleGenAI({ apiKey }) : null;

export const askPortfolioAssistant = async (prompt: string): Promise<string> => {
  // Fallback response if API key is not configured
  if (!ai) {
    return "Hey! The AI assistant isn't fully configured yet, but I'd love to chat about Shubh's work in UI/UX, web apps, video editing, and graphics design. Feel free to reach out directly at shubhxwork@gmail.com!";
  }

  const systemInstruction = `
    You are the "Creative Twin" assistant for Shubh.
    Shubh is a high-end visual expert specializing in 4 main categories:
    
    WORK CATEGORIES:
    ${WORK_CATEGORIES.map(cat => `
    ${cat.name} (${cat.coolName}): ${cat.description}
    ${cat.subcategories && cat.subcategories.length > 0 ? `Subcategories: ${cat.subcategories.join(', ')}` : ''}
    `).join('\n')}
    
    Shubh also runs an agency called ${AGENCY.name} (${AGENCY.url}).
    
    Agency details: ${AGENCY.description}
    
    Recent projects:
    ${PROJECTS.map(p => `- ${p.title} (${p.category}${p.subcategory ? ` - ${p.subcategory}` : ''}): ${p.description}`).join('\n')}

    Your personality: Professional, creative, slightly witty, and very concise.
    UX Law Awareness: Aesthetic-Usability Effect, Hick's Law, and Miller's Law.
    
    Goal: Answer questions about Shubh's multifaceted work across UI/UX, Web Apps, Video Editing, and Graphics Design.
    Keep answers under 80 words.
  `;

  try {
    const response = await ai.generateContent({
      contents: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        { role: 'user', parts: [{ text: prompt }] }
      ]
    });

    const result = response.response;
    return result.text() || "I'm having trouble processing that right now. Try asking about Shubh's projects or reach out directly!";
    
  } catch (error) {
    console.error('Gemini API Error:', error);
    
    // Provide helpful fallback responses based on common queries
    const lowerPrompt = prompt.toLowerCase();
    
    if (lowerPrompt.includes('project') || lowerPrompt.includes('work')) {
      return "Check out Shubh's work across 4 main categories: PIXEL ARCHITECTS (UI/UX), CODE SCULPTORS (Web Apps), MOTION MASTERS (Video Editing with vlogs, ads, motion graphics, talking head), and VISUAL ALCHEMISTS (Graphics Design with thumbnails & logos)!";
    }
    
    if (lowerPrompt.includes('video') || lowerPrompt.includes('editing')) {
      return "Shubh's MOTION MASTERS specialization covers vlogs, ads, motion graphics, and talking head videos. Each project applies cinematic storytelling principles for maximum impact!";
    }
    
    if (lowerPrompt.includes('graphics') || lowerPrompt.includes('design') || lowerPrompt.includes('thumbnail') || lowerPrompt.includes('logo')) {
      return "The VISUAL ALCHEMISTS category includes high-conversion thumbnails and brand identity logos. Psychology-driven design that converts viewers into customers!";
    }
    
    if (lowerPrompt.includes('ui') || lowerPrompt.includes('ux') || lowerPrompt.includes('web')) {
      return "PIXEL ARCHITECTS (UI/UX) and CODE SCULPTORS (Web Apps) represent Shubh's digital expertise. From aesthetic interfaces to high-performance web applications!";
    }
    
    if (lowerPrompt.includes('agency') || lowerPrompt.includes('redwhisk')) {
      return `${AGENCY.name} is Shubh's elite creative collective focused on high-performance visual content. We deliver enterprise-scale solutions at the speed of culture. Check us out at ${AGENCY.url}`;
    }
    
    if (lowerPrompt.includes('contact') || lowerPrompt.includes('hire')) {
      return "Ready to collaborate? Reach out to Shubh directly at shubhxwork@gmail.com for project inquiries and creative briefs!";
    }
    
    return "I'm experiencing some technical difficulties, but I'd love to help! Try asking about Shubh's work categories, projects, or reach out directly at shubhxwork@gmail.com";
  }
};