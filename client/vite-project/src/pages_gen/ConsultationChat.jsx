import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function ConsultationChat() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      
{/*  Top Navigation Shell (Shared Component Mapping)  */}
<nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 backdrop-blur-xl no-border flex justify-between items-center px-8 py-4 max-w-7xl mx-auto left-0 right-0">
<div className="font-noto-serif text-2xl font-bold text-[#3e5219] tracking-tighter">BeAura</div>
<div className="hidden md:flex items-center gap-8 font-noto-serif text-lg tracking-tight">
<a className="text-[#45483c] hover:text-[#3e5219] transition-colors" href="#">Home</a>
<a className="text-[#45483c] hover:text-[#3e5219] transition-colors" href="#">About</a>
<a className="text-[#3e5219] font-semibold border-b-2 border-[#3e5219] pb-1" href="#">Services</a>
</div>
<button className="px-6 py-2 rounded-full bg-primary text-on-primary font-medium scale-95 duration-200 ease-out hover:bg-primary-container transition-all">
            Login
        </button>
</nav>
{/*  Main Chat Canvas  */}
<main className="flex-grow pt-24 pb-32 flex flex-col max-w-4xl mx-auto w-full px-4 md:px-0">
{/*  Clinical Header: Doctor Info  */}
<header className="bg-surface-container-low rounded-xl p-6 flex items-center justify-between mb-8 transition-all">
<div className="flex items-center gap-5">
<div className="relative">
<img alt="Doctor Portrait" className="w-16 h-16 rounded-full object-cover grayscale-[20%]" data-alt="Professional portrait of a healthcare professional" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzjhBDVNNWJcgcbCPr6ryZ7aaE6S-O2fE9S8LmKxA0-O7R9dGtOaF5va0xuJlykgsi6a3qIxGzHXAxqDrkp6W5KHRQSt0OsvhRtnhMaDJ7TslcFhw5ksmwNJVsZLGCgy8huqh-sr2RHu1LnjlL4gTQxbVPtbEm2f9IFRWHeNX5VDKh0Jl8xUwnx1c6cpAuUCzfsTri5fp44i4gBZBvRLYxLAqlyHtJQpJda5aUcp5x2Qi5oEuVFDWvURFHLBYjUw3mr-8LPJetAEHX"/>
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
<button className="w-10 h-10 rounded-full flex items-center justify-center text-primary bg-surface-container-lowest hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined" data-icon="videocam">videocam</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-primary bg-surface-container-lowest hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined" data-icon="info">info</span>
</button>
</div>
</header>
{/*  Chat Timeline  */}
<div className="flex-grow space-y-10 custom-scrollbar overflow-y-auto px-2">
{/*  Date Divider  */}
<div className="flex justify-center">
<span className="text-[0.6875rem] uppercase tracking-[0.2em] font-medium text-on-surface-variant bg-surface-container px-4 py-1 rounded-full">Today, Oct 24</span>
</div>
{/*  Doctor Message  */}
<div className="flex flex-col items-start max-w-[85%]">
<div className="bg-surface-container-low text-on-surface p-5 rounded-xl rounded-tl-none shadow-sm">
<p className="text-sm leading-relaxed font-body">Good morning. I've had a chance to review the images you uploaded of the inflammation area. Based on the texture and redness pattern, it appears to be a mild contact dermatitis.</p>
</div>
<span className="text-[10px] text-on-surface-variant mt-2 ml-1">09:12 AM</span>
</div>
{/*  User Message  */}
<div className="flex flex-col items-end self-end max-w-[85%]">
<div className="bg-primary text-on-primary p-5 rounded-xl rounded-tr-none shadow-sm">
<p className="text-sm leading-relaxed font-body">Thank you, Dr. Voss. I started noticing it after using a new botanical serum last Tuesday. Should I stop using it immediately or try reducing the frequency?</p>
</div>
<div className="flex items-center gap-1 mt-2 mr-1">
<span className="text-[10px] text-on-surface-variant">09:15 AM</span>
<span className="material-symbols-outlined text-[14px] text-primary" data-icon="done_all" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>done_all</span>
</div>
</div>
{/*  Doctor Message with Image Attachments  */}
<div className="flex flex-col items-start max-w-[85%]">
<div className="bg-surface-container-low text-on-surface p-5 rounded-xl rounded-tl-none shadow-sm">
<p className="text-sm leading-relaxed font-body">Definitely discontinue use for now. I'm attaching a guide on the specific ingredients in that serum that might be the trigger. I'd like you to switch to a pH-neutral cleanser for the next 72 hours.</p>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="bg-surface-container-lowest p-3 rounded-lg flex items-center gap-3 border border-outline-variant/10">
<span className="material-symbols-outlined text-primary" data-icon="description">description</span>
<div className="overflow-hidden">
<p className="text-xs font-semibold truncate">Serum_Trigger_List.pdf</p>
<p className="text-[10px] text-on-surface-variant">1.2 MB</p>
</div>
</div>
<div className="bg-surface-container-lowest p-3 rounded-lg flex items-center gap-3 border border-outline-variant/10">
<span className="material-symbols-outlined text-primary" data-icon="medication">medication</span>
<div className="overflow-hidden">
<p className="text-xs font-semibold truncate">Prescription_Draft.pdf</p>
<p className="text-[10px] text-on-surface-variant">450 KB</p>
</div>
</div>
</div>
</div>
<span className="text-[10px] text-on-surface-variant mt-2 ml-1">09:18 AM</span>
</div>
{/*  Typing Indicator (Clinical/Minimal)  */}
<div className="flex items-center gap-2 ml-1">
<div className="flex gap-1">
<span className="w-1.5 h-1.5 bg-outline-variant rounded-full animate-pulse"></span>
<span className="w-1.5 h-1.5 bg-outline-variant rounded-full animate-pulse delay-75"></span>
<span className="w-1.5 h-1.5 bg-outline-variant rounded-full animate-pulse delay-150"></span>
</div>
<span className="text-[10px] font-medium text-on-surface-variant italic">Dr. Voss is typing...</span>
</div>
</div>
</main>
{/*  Bottom Action Bar / Input  */}
<section className="fixed bottom-0 w-full bg-surface/80 backdrop-blur-xl border-t border-transparent pb-8 pt-4">
<div className="max-w-4xl mx-auto px-4 flex items-end gap-4">
<div className="flex-grow bg-surface-container-highest rounded-xl p-2 flex items-center gap-2 focus-within:ring-1 focus-within:ring-primary/20 transition-all shadow-sm">
<button className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
</button>
<textarea className="w-full bg-transparent border-none focus:ring-0 text-sm py-2 resize-none placeholder:text-on-surface-variant/50 font-body" placeholder="Type clinical query or response..." rows="1"></textarea>
<button className="w-10 h-10 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="mood">mood</span>
</button>
</div>
<button className="bg-primary text-on-primary w-14 h-14 rounded-xl flex items-center justify-center shadow-lg hover:bg-primary-container transition-transform active:scale-95">
<span className="material-symbols-outlined text-2xl" data-icon="send" data-weight="fill" style={{fontVariationSettings: '"FILL" 1'}}>send</span>
</button>
</div>
</section>
{/*  Footer Shell (Shared Component Mapping)  */}
<footer className="w-full mt-16 bg-[#f4f3f1] dark:bg-[#1a1c1a] tonal-shift">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 gap-6 w-full max-w-7xl mx-auto">
<div className="font-noto-serif text-xl text-[#3e5219] dark:text-[#c2ceaa]">BeAura</div>
<div className="flex gap-8 font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0]">
<a className="hover:text-[#3e5219] dark:hover:text-[#c2ceaa] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#3e5219] dark:hover:text-[#c2ceaa] transition-colors" href="#">Terms of Service</a>
<a className="hover:text-[#3e5219] dark:hover:text-[#c2ceaa] transition-colors" href="#">Contact Us</a>
</div>
<p className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0] opacity-80">
                © 2024 BeAura Clinical Atelier. All rights reserved.
            </p>
</div>
</footer>

    </div>
  );
}
