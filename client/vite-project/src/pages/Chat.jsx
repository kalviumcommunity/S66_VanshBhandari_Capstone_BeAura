import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "doctor",
      time: "09:12 AM",
      text: "Good morning. I've had a chance to review the images you uploaded of the inflammation area. Based on the texture and redness pattern, it appears to be a mild contact dermatitis."
    },
    {
      id: 2,
      sender: "user",
      time: "09:15 AM",
      text: "Thank you, Dr. Voss. I started noticing it after using a new botanical serum last Tuesday. Should I stop using it immediately or try reducing the frequency?"
    },
    {
      id: 3,
      sender: "doctor",
      time: "09:18 AM",
      text: "Definitely discontinue use for now. I'm attaching a guide on the specific ingredients in that serum that might be the trigger. I'd like you to switch to a pH-neutral cleanser for the next 72 hours.",
      attachments: [
        { name: "Serum_Trigger_List.pdf", size: "1.2 MB", icon: "description" },
        { name: "Prescription_Draft.pdf", size: "450 KB", icon: "medication" }
      ]
    }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, {
      id: messages.length + 1,
      sender: "user",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: input
    }]);
    setInput('');
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      {/* Top Navigation Shell (Shared Component Mapping) */}
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 backdrop-blur-xl no-border flex justify-between items-center px-8 py-4 max-w-7xl mx-auto left-0 right-0">
        <Link to="/" className="font-noto-serif text-2xl font-bold text-[#3e5219] tracking-tighter">BeAura</Link>
        <div className="hidden md:flex items-center gap-8 font-noto-serif text-lg tracking-tight">
          <Link to="/" className="text-[#45483c] hover:text-[#3e5219] transition-colors">Home</Link>
        </div>
        <Link to="/login" className="px-6 py-2 rounded-full bg-primary text-on-primary font-medium scale-95 duration-200 ease-out hover:bg-primary-container transition-all">
          Logout
        </Link>
      </nav>

      {/* Main Chat Canvas */}
      <main className="flex-grow pt-24 pb-32 flex flex-col max-w-4xl mx-auto w-full px-4 md:px-0">
        {/* Clinical Header: Doctor Info */}
        <header className="bg-surface-container-low rounded-xl p-6 flex items-center justify-between mb-8 transition-all">
          <div className="flex items-center gap-5">
            <div className="relative">
              <img alt="Doctor Portrait" className="w-16 h-16 rounded-full object-cover grayscale-[20%]" data-alt="Professional portrait of a healthcare professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzjhBDVNNWJcgcbCPr6ryZ7aaE6S-O2fE9S8LmKxA0-O7R9dGtOaF5va0xuJlykgsi6a3qIxGzHXAxqDrkp6W5KHRQSt0OsvhRtnhMaDJ7TslcFhw5ksmwNJVsZLGCgy8huqh-sr2RHu1LnjlL4gTQxbVPtbEm2f9IFRWHeNX5VDKh0Jl8xUwnx1c6cpAuUCzfsTri5fp44i4gBZBvRLYxLAqlyHtJQpJda5aUcp5x2Qi5oEuVFDWvURFHLBYjUw3mr-8LPJetAEHX" />
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-primary border-4 border-surface-container-low rounded-full"></span>
            </div>
            <div>
              <h1 className="serif-heading text-xl font-bold text-on-surface tracking-tight leading-tight">Dr. Julianne Voss</h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[0.6875rem] uppercase tracking-widest font-semibold text-tertiary-container bg-tertiary-container/10 px-2 py-0.5 rounded-sm">Clinical Dermatologist</span>
                <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                <span className="text-label-sm text-on-surface-variant font-medium text-xs">Online now</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-primary bg-surface-container-lowest hover:bg-surface-container-high transition-colors text-xl">
              <span className="material-symbols-outlined" data-icon="videocam">videocam</span>
            </button>
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-primary bg-surface-container-lowest hover:bg-surface-container-high transition-colors text-xl">
              <span className="material-symbols-outlined" data-icon="info">info</span>
            </button>
          </div>
        </header>

        {/* Chat Timeline */}
        <div className="flex-grow space-y-10 custom-scrollbar overflow-y-auto px-2">
          {/* Date Divider */}
          <div className="flex justify-center">
            <span className="text-[0.6875rem] uppercase tracking-[0.2em] font-medium text-on-surface-variant bg-surface-container px-4 py-1 rounded-full">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric'})}</span>
          </div>

          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-end self-end max-w-[85%] ml-auto' : 'items-start max-w-[85%]'}`}>
              <div className={`${msg.sender === 'user' ? 'bg-primary text-on-primary rounded-tr-none' : 'bg-surface-container-low text-on-surface rounded-tl-none'} p-5 rounded-xl shadow-sm`}>
                <p className="text-sm leading-relaxed font-body">{msg.text}</p>
                {msg.attachments && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-on-surface">
                    {msg.attachments.map((att, i) => (
                      <div key={i} className="bg-surface-container-lowest p-3 rounded-lg flex items-center gap-3 border border-outline-variant/10">
                        <span className="material-symbols-outlined text-primary text-xl" data-icon={att.icon}>{att.icon}</span>
                        <div className="overflow-hidden">
                          <p className="text-xs font-semibold truncate">{att.name}</p>
                          <p className="text-[10px] text-on-surface-variant">{att.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className={`flex items-center gap-1 mt-2 ${msg.sender === 'user' ? 'mr-1' : 'ml-1'}`}>
                <span className="text-[10px] text-on-surface-variant">{msg.time}</span>
                {msg.sender === 'user' && <span className="material-symbols-outlined text-[14px] text-primary" data-icon="done_all" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>}
              </div>
            </div>
          ))}
          
        </div>
      </main>

      {/* Bottom Action Bar / Input */}
      <section className="fixed bottom-0 w-full bg-surface/80 backdrop-blur-xl border-t border-transparent pb-8 pt-4">
        <div className="max-w-4xl mx-auto px-4 flex items-end gap-4">
          <div className="flex-grow bg-surface-container-highest rounded-xl p-2 flex items-center gap-2 focus-within:ring-1 focus-within:ring-primary/20 transition-all shadow-sm">
            <button className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors text-xl">
              <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
            </button>
            <textarea 
              className="w-full bg-transparent border-none focus:ring-0 text-sm py-2 outline-none resize-none placeholder:text-on-surface-variant/50 font-body" 
              placeholder="Type clinical query or response..." 
              rows="1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
            ></textarea>
            <button className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors text-xl">
              <span className="material-symbols-outlined" data-icon="mood">mood</span>
            </button>
          </div>
          <button onClick={handleSend} className="bg-primary text-on-primary w-14 h-14 rounded-xl flex items-center justify-center shadow-lg hover:bg-primary-container transition-transform active:scale-95 text-xl cursor-pointer">
            <span className="material-symbols-outlined text-2xl" data-icon="send" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
          </button>
        </div>
      </section>

    </div>
  );
}
