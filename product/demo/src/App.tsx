import { useState, useEffect, useRef } from 'react'

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'ai';
    timestamp: string;
}

function App() {
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', text: 'Hey LifePilot, I want to meet with David for coffee next Tuesday afternoon.', sender: 'user', timestamp: '10:00' }
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

        // Simulate AI Response Flow
        if (inputText.toLowerCase().includes('yes') || inputText.toLowerCase().includes('perfect')) {
            triggerResponse('Done! Calendar invite sent for Tuesday at 2:00 PM at your usual spot (Third Wave Coffee).');
        } else {
            triggerResponse("I see you're free at 2:00 PM and 4:30 PM. I'll check David's shared availability and propose 2:00 PM. Sound good?");
        }
    };

    const triggerResponse = (text: string) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const aiMsg: Message = {
                id: (Date.now() + 1).toString(),
                text,
                sender: 'ai',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, aiMsg]);
        }, 1500);
    };

    return (
        <div className="flex flex-col h-screen bg-whatsapp-bg font-sans">
            {/* Header */}
            <header className="bg-whatsapp-dark text-white p-4 flex items-center shadow-md">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center overflow-hidden">
                    <span className="text-xl font-bold">LP</span>
                </div>
                <div>
                    <h1 className="font-bold">LifePilot AI</h1>
                    <p className="text-xs opacity-80">{isTyping ? 'typing...' : 'online'}</p>
                </div>
            </header>

            {/* Chat Area */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-4"
                style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}
            >
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] rounded-lg p-3 shadow-sm relative ${msg.sender === 'user'
                                ? 'bg-whatsapp-bubble rounded-tr-none'
                                : 'bg-white rounded-tl-none'
                            }`}>
                            <p className="text-sm text-gray-800">{msg.text}</p>
                            <span className="text-[10px] text-gray-500 block text-right mt-1">{msg.timestamp}</span>
                        </div>
                    </div>
                ))}
                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-white rounded-lg p-3 shadow-sm rounded-tl-none animate-pulse">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <footer className="bg-[#f0f2f5] p-3 flex items-center space-x-2">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Type a message"
                    className="flex-1 bg-white rounded-full px-4 py-2 outline-none text-sm shadow-inner"
                />
                <button
                    onClick={handleSend}
                    className="bg-whatsapp-dark text-white rounded-full p-2 w-10 h-10 flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z" />
                    </svg>
                </button>
            </footer>
        </div>
    )
}

export default App
