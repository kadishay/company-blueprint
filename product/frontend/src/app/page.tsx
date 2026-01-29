'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hey LifePilot, I want to meet with David for coffee next Tuesday afternoon.', sender: 'user', timestamp: '10:00 AM' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputText('');

    // Production Mock Logic (to be replaced by API calls)
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        sender: 'ai',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
    }, 1500);
  };

  const getAIResponse = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes('yes') || lower.includes('perfect') || lower.includes('sounds good')) {
      return "Done! I've sent the calendar invite for Tuesday at 2:00 PM. Anything else I can help with?";
    }
    return "Checking your calendar and David's availability... How does 2:00 PM on Tuesday sound?";
  };

  return (
    <div className="flex h-screen bg-[#f0f2f5] overflow-hidden font-sans">
      {/* Sidebar (Company-style) */}
      <aside className="w-80 bg-white border-r flex flex-col hidden md:flex">
        <div className="p-4 bg-[#f0f2f5] border-b flex items-center justify-between">
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div className="flex space-x-3 text-slate-500">
            <button aria-label="Status">⭕</button>
            <button aria-label="New Chat">💬</button>
            <button aria-label="Menu">⋮</button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 bg-white border-b hover:bg-slate-50 cursor-pointer flex items-center">
            <div className="w-12 h-12 rounded-full bg-whatsapp-dark text-white flex items-center justify-center font-bold mr-4">LP</div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-slate-900">LifePilot AI</span>
                <span className="text-xs text-slate-500">10:33 AM</span>
              </div>
              <p className="text-sm text-slate-500 truncate">Done! I've sent the calendar invite...</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Chat Interface */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#f0f2f5] border-b p-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-whatsapp-dark text-white flex items-center justify-center font-bold mr-3">LP</div>
            <div>
              <h1 className="font-bold text-slate-900">LifePilot AI</h1>
              <p className="text-xs text-slate-500">{isTyping ? 'typing...' : 'online'}</p>
            </div>
          </div>
          <div className="flex space-x-4 text-slate-500">
            <button aria-label="Search">🔍</button>
            <button aria-label="Attach">📎</button>
            <button aria-label="Menu">⋮</button>
          </div>
        </header>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 whatsapp-chat-bg"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[70%] rounded-lg px-4 py-2 shadow-sm relative ${msg.sender === 'user'
                  ? 'bg-whatsapp-bubble rounded-tr-none'
                  : 'bg-white rounded-tl-none'
                }`}>
                <p className="text-sm text-slate-800 leading-relaxed">{msg.text}</p>
                <span className="text-[10px] text-slate-400 block text-right mt-1">{msg.timestamp}</span>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white rounded-lg px-4 py-2 shadow-sm rounded-tl-none animate-pulse">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-300 rounded-full" />
                  <div className="w-2 h-2 bg-slate-300 rounded-full" />
                  <div className="w-2 h-2 bg-slate-300 rounded-full" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <footer className="bg-[#f0f2f5] p-3 flex items-center space-x-3 shadow-md">
          <button className="text-slate-500 px-2 text-xl" aria-label="Emoji">😊</button>
          <button className="text-slate-500 px-2 text-xl" aria-label="Attach">📎</button>
          <div className="flex-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message"
              className="w-full bg-white rounded-lg px-4 py-2.5 outline-none text-sm text-slate-800 focus:ring-1 focus:ring-whatsapp-green transition-all"
            />
          </div>
          <button
            onClick={handleSend}
            className="bg-whatsapp-dark text-white rounded-full p-2.5 hover:opacity-90 transition-all shadow-sm"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" />
            </svg>
          </button>
        </footer>
      </main>
    </div>
  );
}
