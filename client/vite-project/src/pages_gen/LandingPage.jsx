import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      
{/*  Top Navigation  */}
<nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-[#1a1c1a]/70 backdrop-blur-xl">
<div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
<div className="font-headline text-2xl font-bold text-primary dark:text-[#c2ceaa] tracking-tighter">
                BeAura
            </div>
<div className="hidden md:flex items-center gap-10">
<a className="text-primary dark:text-[#c2ceaa] font-semibold border-b-2 border-primary pb-1 font-headline text-lg tracking-tight" href="#">Home</a>
<a className="text-on-surface-variant dark:text-[#e3e2e0] hover:text-primary transition-colors font-headline text-lg tracking-tight" href="#">About</a>
<a className="text-on-surface-variant dark:text-[#e3e2e0] hover:text-primary transition-colors font-headline text-lg tracking-tight" href="#">Services</a>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-2 text-primary font-medium hover:bg-surface-container-low/50 transition-all rounded-full">Login</button>
<button className="px-6 py-2 bg-primary text-on-primary rounded-full font-medium transition-all scale-95 hover:scale-100">Get Started</button>
</div>
</div>
</nav>
<main className="pt-24">
{/*  Hero Section  */}
<section className="relative min-h-[921px] flex items-center px-8 py-20 overflow-hidden">
<div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
<div className="z-10">
<span className="inline-block px-4 py-1.5 bg-tertiary-container/30 text-on-tertiary-container font-label text-[0.6875rem] uppercase tracking-widest rounded-full mb-8">Clinical Atelier &amp; AI Research</span>
<h1 className="text-5xl md:text-7xl font-headline text-on-surface leading-[1.1] tracking-tight mb-8">
                        Personalized <br/><span className="italic text-primary">Skincare &amp; Haircare</span> <br/>for You
                    </h1>
<p className="text-lg text-on-surface-variant max-w-lg mb-12 font-body leading-relaxed">
                        Experience the precision of an AI-driven laboratory. We analyze your unique biological markers to formulate a routine that evolves with your environment.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 bg-primary text-on-primary rounded-3xl font-medium text-lg hover:shadow-xl transition-all">Get Started</button>
<button className="px-8 py-4 bg-surface-container-lowest border border-outline-variant/30 text-primary rounded-3xl font-medium text-lg hover:bg-surface-container-low transition-all">Analyze Now</button>
</div>
</div>
<div className="relative">
{/*  Abstract Visual Representation  */}
<div className="aspect-square w-full bg-surface-container-low rounded-[3rem] relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10"></div>
<div className="w-2/3 h-2/3 border border-primary/10 rounded-full animate-pulse flex items-center justify-center">
<div className="w-3/4 h-3/4 border border-primary/20 rounded-full flex items-center justify-center">
<div className="w-1/2 h-1/2 bg-surface-container-lowest shadow-2xl rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="dna">genetics</span>
</div>
</div>
</div>
{/*  Floating Data Points  */}
<div className="absolute top-10 right-10 p-4 bg-surface-container-lowest/80 backdrop-blur-md rounded-2xl shadow-sm border border-outline-variant/10">
<span className="block text-[10px] uppercase tracking-widest text-on-surface-variant font-label mb-1">Moisture Level</span>
<span className="text-primary font-headline text-xl">84% Optimal</span>
</div>
<div className="absolute bottom-12 left-8 p-4 bg-surface-container-lowest/80 backdrop-blur-md rounded-2xl shadow-sm border border-outline-variant/10">
<span className="block text-[10px] uppercase tracking-widest text-on-surface-variant font-label mb-1">AI Recommendation</span>
<span className="text-primary font-headline text-xl">Retinoid 0.05%</span>
</div>
</div>
</div>
</div>
</section>
{/*  Categories Section  */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
<div className="grid md:grid-cols-3 gap-8">
<div className="group p-10 bg-surface-container-lowest rounded-3xl transition-all hover:-translate-y-2">
<div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined" data-icon="face_6">face_6</span>
</div>
<h3 className="text-2xl font-headline mb-4">Skincare</h3>
<p className="text-on-surface-variant leading-relaxed">Biometric analysis for barrier repair and hydration optimization tailored to your skin's microbiome.</p>
</div>
<div className="group p-10 bg-surface-container-lowest rounded-3xl transition-all hover:-translate-y-2">
<div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined" data-icon="brush">brush</span>
</div>
<h3 className="text-2xl font-headline mb-4">Haircare</h3>
<p className="text-on-surface-variant leading-relaxed">Follicle-level diagnostics to address thinning, texture, and scalp health through plant-based chemistry.</p>
</div>
<div className="group p-10 bg-surface-container-lowest rounded-3xl transition-all hover:-translate-y-2">
<div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined" data-icon="spa">spa</span>
</div>
<h3 className="text-2xl font-headline mb-4">Wellness</h3>
<p className="text-on-surface-variant leading-relaxed">Holistic integration of sleep, diet, and stress markers into your topical application routine.</p>
</div>
</div>
</div>
</section>
{/*  Features Bento Grid  */}
<section className="py-32 px-8">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<span className="text-primary font-label text-xs uppercase tracking-[0.2em]">The Technology</span>
<h2 className="text-4xl md:text-5xl mt-4 font-headline tracking-tight">Precision in every drop</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
{/*  Large Feature Card  */}
<div className="md:col-span-8 bg-surface-container-low rounded-3xl p-12 relative overflow-hidden flex flex-col justify-end group">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[300px]" data-icon="biometric_setup">android_fingerprint</span>
</div>
<div className="relative z-10 max-w-md">
<h3 className="text-3xl font-headline mb-4">AI Recommendations</h3>
<p className="text-on-surface-variant text-lg">Our proprietary engine processes 40+ skin variables to generate a formula uniquely yours. No generic solutions, just your skin's blueprint realized.</p>
</div>
</div>
{/*  Small Feature Card  */}
<div className="md:col-span-4 bg-primary text-on-primary rounded-3xl p-10 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="event_available">event_available</span>
</div>
</div>
<div>
<h3 className="text-2xl font-headline mb-2">Expert Booking</h3>
<p className="opacity-80 text-sm">Direct access to certified dermatologists for virtual consultations and formula validation.</p>
<button className="mt-6 flex items-center gap-2 font-medium hover:gap-4 transition-all">
                                Meet our experts <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
{/*  Bottom Small Feature Card  */}
<div className="md:col-span-4 bg-secondary-container/20 rounded-3xl p-10 border border-secondary-container/10">
<h3 className="text-xl font-headline mb-4 text-secondary">Ingredient Traceability</h3>
<p className="text-on-surface-variant text-sm">Every botanical oil and active peptide is sourced with 100% clinical transparency. Scan your bottle to see its origin.</p>
</div>
{/*  Bottom Wide Feature Card  */}
<div className="md:col-span-8 bg-surface-container-highest/40 rounded-3xl p-10 flex items-center gap-12">
<div className="hidden sm:block">
<div className="flex -space-x-4">
<div className="w-12 h-12 rounded-full border-2 border-surface bg-gray-200 overflow-hidden"><img alt="user" data-alt="Portrait of a smiling young woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg_G5KYka5HpAVGdjl7LLQm2E6bnSRk0t8P3xL9C_4mm8HbJ5Tv9nBd9ZiA0kncwZVXytGC3True3CwssK9qUxaZydcmfq_Q1rxT8aS70FMVrkQC805uaJSt9OaIiEuAbKpWT-BDFB5gr_pLDKb22sVRen6Cz3Zq-tFXgBTiiJLtQIzSvDt0DeE8AcU-SGkrytKuy-aeqNnfq28LliHpeReRgGC8eJF7nRY4KhZ0cHkLWvP9qajY20ozJ-n63Gm1wE_NyuMr0-QYzs"/></div>
<div className="w-12 h-12 rounded-full border-2 border-surface bg-gray-300 overflow-hidden"><img alt="user" data-alt="Portrait of a professional man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhkGVg69oUXOEiZh_yVtHH72Q5BGiHFklzg30QF_Fa_pvGq2wvbzA5pjB7n_pP-16hbNOGcYaZ1ptBkJGMvzGW6KyfafqzgO6BaOApjT9d4CXvQd6_daA7xonbEr7cMwolDOHE-ySkyfI255dfzfTN3O0VOsL0HXb_-0238mXgeujqQE293wEA8kUwsRaKWO_3vntORiezD-RcmnYlqZKKHXS_jhsaBXzkFwUpzDjE-CE7TzFYIrl2m73gozUoepmrgU7lJ-Pkr3P5"/></div>
<div className="w-12 h-12 rounded-full border-2 border-surface bg-gray-100 flex items-center justify-center text-xs font-bold">+12k</div>
</div>
</div>
<div>
<h3 className="text-xl font-headline mb-1">Global Community</h3>
<p className="text-on-surface-variant text-sm">Join 12,000+ users who have transformed their routine through data-driven wellness.</p>
</div>
</div>
</div>
</div>
</section>
{/*  How It Works  */}
<section className="py-24 bg-primary text-on-primary overflow-hidden">
<div className="max-w-7xl mx-auto px-8">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-headline mb-12">The Atelier Journey</h2>
<div className="space-y-12">
<div className="flex gap-6">
<span className="text-4xl font-headline opacity-30 italic">01</span>
<div>
<h4 className="text-xl font-bold mb-2">Digital Scan</h4>
<p className="opacity-70">Use our AI interface to perform a high-resolution analysis of your skin's surface texture and moisture retention.</p>
</div>
</div>
<div className="flex gap-6">
<span className="text-4xl font-headline opacity-30 italic">02</span>
<div>
<h4 className="text-xl font-bold mb-2">Routine Synthesis</h4>
<p className="opacity-70">Our algorithms cross-reference your results with local climate data and lifestyle factors to build your kit.</p>
</div>
</div>
<div className="flex gap-6">
<span className="text-4xl font-headline opacity-30 italic">03</span>
<div>
<h4 className="text-xl font-bold mb-2">Evolving Care</h4>
<p className="opacity-70">As the seasons change, your formula adjusts. We ship updated serums based on your evolving skin needs.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="w-full aspect-square rounded-full bg-white/5 absolute -right-1/2 scale-150"></div>
<div className="relative z-10 p-8 border border-white/10 rounded-[4rem] backdrop-blur-sm bg-white/5">
<div className="flex justify-between items-center mb-8">
<div className="text-xs uppercase tracking-widest font-label opacity-60">Session #8201</div>
<div className="px-3 py-1 bg-white/10 rounded-full text-[10px] uppercase">Active</div>
</div>
<div className="space-y-6">
<div className="h-2 bg-white/10 rounded-full w-full">
<div className="h-full bg-secondary-container w-[75%] rounded-full"></div>
</div>
<div className="h-2 bg-white/10 rounded-full w-full">
<div className="h-full bg-white/40 w-[45%] rounded-full"></div>
</div>
<div className="h-2 bg-white/10 rounded-full w-full">
<div className="h-full bg-white/60 w-[90%] rounded-full"></div>
</div>
</div>
<div className="mt-12 flex items-center justify-center">
<div className="text-center">
<div className="text-5xl font-headline mb-2">A+</div>
<div className="text-xs uppercase tracking-widest opacity-60 font-label">Barrier Integrity</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Testimonials  */}
<section className="py-32 px-8 bg-surface">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-16">
<h2 className="text-4xl font-headline mb-4">Reflections from our users</h2>
<p className="text-on-surface-variant">Real transformations, backed by biological data.</p>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div className="relative p-12 bg-surface-container-low rounded-3xl">
<span className="material-symbols-outlined text-primary/20 absolute top-8 right-8 text-6xl" data-icon="format_quote">format_quote</span>
<p className="text-xl font-body italic mb-8 leading-relaxed text-on-surface-variant">
                            "I spent years trying high-end brands that never quite worked. BeAura's AI identified that my skin was actually over-exfoliated. Within three weeks of their tailored routine, my redness vanished."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
<img alt="Elena" data-alt="Portrait of a young woman with radiant skin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDGRP0PJEjqmpJAreBKwkHn7P5FWVYei9LMwSJWfiszJc1RKETxPlIIbXtIVYVsg3ziCBtt63nv7NRdbTCIySyTLHHUVhJ4TABNH589zR-B_aUb2aW-c5eU8w8V2oR9DrmXsse5-4u8kLfMIgcyqnDTfojkwYP4g4Af6lG5U2X-L4z-WOx382tAUGeNB2FgGYGrZlmIazNGXwjsAkzHl5FjFQhPM1Nfq5yvpgcdCv7BRTku20hBoH8LaxLWn_tZDP0BUr4hheyo2pF"/>
</div>
<div>
<h5 className="font-bold text-on-surface">Elena G.</h5>
<p className="text-xs text-on-surface-variant font-label uppercase tracking-wider">Architect, London</p>
</div>
</div>
</div>
<div className="relative p-12 bg-surface-container-low rounded-3xl">
<span className="material-symbols-outlined text-primary/20 absolute top-8 right-8 text-6xl" data-icon="format_quote">format_quote</span>
<p className="text-xl font-body italic mb-8 leading-relaxed text-on-surface-variant">
                            "The haircare analysis was a game changer. I realized my hard water was the main issue. The personalized chelating treatment has completely restored my hair's natural texture."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface-container-highest overflow-hidden">
<img alt="Marcus" data-alt="Portrait of a stylish man with healthy hair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUxsiSlQJGycOufmnuqx_ivROjSvg-uDwsjE8UQw-Kw8UHIuCw_qYmrhrkNjq9QBECv_qlvnJRVrGbGLZ21G2d7YXoFEXObQUC3J380KKlPkCSCV5qTdjPtZpzFFn3GcHPGcmJSQmBt9RAEsqPxyPJmqg1tyelONeIwdK_9Kd3qpeOpQYTlHgINKaKLqPpzt3WZneZFOjMYWoGgm4_XLcSS61XEJn0SLMQdKh_h6vtokksYfKc446L3IPFtgAY6G5IVxcae1sY049L"/>
</div>
<div>
<h5 className="font-bold text-on-surface">Marcus L.</h5>
<p className="text-xs text-on-surface-variant font-label uppercase tracking-wider">Creative Director, NY</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="py-24 px-8">
<div className="max-w-7xl mx-auto">
<div className="bg-surface-container-highest/30 rounded-[3rem] p-16 md:p-24 text-center border border-outline-variant/10">
<h2 className="text-4xl md:text-6xl font-headline mb-8 tracking-tight">Ready for your <br/><span className="italic text-primary">Atelier Routine?</span></h2>
<p className="text-on-surface-variant max-w-xl mx-auto mb-12 text-lg">Start your diagnostic journey today and receive your first personalized kit within 48 hours.</p>
<div className="flex justify-center gap-4 flex-col sm:flex-row">
<button className="px-10 py-5 bg-primary text-on-primary rounded-full font-medium text-lg hover:shadow-2xl transition-all">Begin Analysis</button>
<button className="px-10 py-5 text-primary font-medium text-lg hover:bg-surface-container-low rounded-full transition-all">Explore Science</button>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full mt-16 bg-[#f4f3f1] dark:bg-[#1a1c1a]">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 gap-6 w-full max-w-7xl mx-auto">
<div className="font-headline text-xl text-primary dark:text-[#c2ceaa]">
                BeAura
            </div>
<div className="flex flex-wrap justify-center gap-8">
<a className="font-label text-xs tracking-widest uppercase text-on-surface-variant dark:text-[#e3e2e0] hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="font-label text-xs tracking-widest uppercase text-on-surface-variant dark:text-[#e3e2e0] hover:text-primary transition-colors" href="#">Terms of Service</a>
<a className="font-label text-xs tracking-widest uppercase text-on-surface-variant dark:text-[#e3e2e0] hover:text-primary transition-colors" href="#">Contact Us</a>
<a className="font-label text-xs tracking-widest uppercase text-on-surface-variant dark:text-[#e3e2e0] hover:text-primary transition-colors" href="#">Shipping</a>
</div>
<div className="text-on-surface-variant dark:text-stone-400 font-label text-[10px] tracking-widest uppercase opacity-80">
                © 2024 BeAura Clinical Atelier. All rights reserved.
            </div>
</div>
</footer>

    </div>
  );
}
