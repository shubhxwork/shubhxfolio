
import React, { useState, useRef, useEffect } from 'react';
import { askPortfolioAssistant } from '../geminiService';
import { ChatMessage } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hey! Shubh's Creative Twin here. Need insights on projects, UX laws, or our agency REDWHISK?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await askPortfolioAssistant(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm having trouble right now. Try asking about Shubh's projects or reach out directly at shubhxwork@gmail.com!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-[100]">
      {isOpen ? (
        <div className="glass-card w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] max-w-[400px] h-[70vh] sm:h-[550px] rounded-2xl sm:rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl border-black/5">
          <div className="p-4 sm:p-6 border-b border-black/5 flex justify-between items-center bg-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h4 className="font-black text-sm text-black">Creative Twin</h4>
                <p className="text-[9px] sm:text-[10px] text-red-600 font-black uppercase tracking-widest animate-pulse">Thinking...</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-zinc-100 rounded-full transition-colors text-black"
              aria-label="Close chat"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 sm:space-y-6 bg-zinc-50/30"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 sm:p-4 rounded-2xl sm:rounded-3xl text-sm font-medium leading-relaxed ${m.role === 'user' ? 'bg-black text-white rounded-tr-none shadow-lg' : 'bg-white text-zinc-600 rounded-tl-none border border-black/5 shadow-sm'}`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 sm:p-4 rounded-2xl sm:rounded-3xl rounded-tl-none border border-black/5 flex gap-1.5">
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 sm:p-6 bg-white border-t border-black/5">
            <div className="flex gap-2 sm:gap-3">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="flex-1 bg-zinc-100 border-none rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-sm focus:ring-2 focus:ring-red-600/20 outline-none text-black font-medium"
                disabled={isLoading}
                aria-label="Chat message input"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 text-white rounded-full hover:bg-black transition-all disabled:opacity-50 flex items-center justify-center shadow-lg"
                aria-label="Send message"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black text-white flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-red-600 transition-all group relative overflow-hidden"
          aria-label="Open AI assistant"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-transparent opacity-0 group-hover:opacity-40 transition-opacity"></div>
          <svg className="w-6 h-6 sm:w-8 sm:h-8 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
