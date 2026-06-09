import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-[#1a1c1a]/70 backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="font-headline text-2xl font-bold text-primary dark:text-[#c2ceaa] tracking-tighter">
            BeAura
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-primary dark:text-[#c2ceaa] font-semibold border-b-2 border-primary pb-1 font-headline text-lg tracking-tight">Home</Link>
            <Link to="/about" className="text-on-surface-variant dark:text-[#e3e2e0] hover:text-primary transition-colors font-headline text-lg tracking-tight">About</Link>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/login')} className="px-6 py-2 text-primary font-medium hover:bg-surface-container-low/50 transition-all rounded-full">Login</button>
            <button onClick={() => navigate('/signup')} className="px-6 py-2 bg-primary text-on-primary rounded-full font-medium transition-all scale-95 hover:scale-100">Get Started</button>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex items-center px-8 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="inline-block px-4 py-1.5 bg-tertiary-container/30 text-on-tertiary-container font-label text-[0.6875rem] uppercase tracking-widest rounded-full mb-8">Clinical Atelier & AI Research</span>
              <h1 className="text-5xl md:text-7xl font-headline text-on-surface leading-[1.1] tracking-tight mb-8">
                Personalized <br /><span className="italic text-primary">Skincare & Haircare</span> <br />for You
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg mb-12 font-body leading-relaxed">
                Experience the precision of an AI-driven laboratory. We analyze your unique biological markers to formulate a routine that evolves with your environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => navigate('/signup')} className="px-8 py-4 bg-primary text-on-primary rounded-3xl font-medium text-lg hover:shadow-xl transition-all">Get Started</button>
                <button onClick={() => navigate('/user-dashboard')} className="px-8 py-4 bg-surface-container-lowest border border-outline-variant/30 text-primary rounded-3xl font-medium text-lg hover:bg-surface-container-low transition-all">Analyze Now</button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square w-full bg-surface-container-low rounded-[3rem] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10"></div>
                <div className="w-2/3 h-2/3 border border-primary/10 rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border border-primary/20 rounded-full flex items-center justify-center">
                    <div className="w-1/2 h-1/2 bg-surface-container-lowest shadow-2xl rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-4xl" data-icon="dna">genetics</span>
                    </div>
                  </div>
                </div>
                {/* Floating Data Points */}
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

        {/* Categories Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div onClick={() => navigate('/products')} className="cursor-pointer group p-10 bg-surface-container-lowest rounded-3xl transition-all hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined" data-icon="face_6">face_6</span>
                </div>
                <h3 className="text-2xl font-headline mb-4">Skincare</h3>
                <p className="text-on-surface-variant leading-relaxed">Biometric analysis for barrier repair and hydration optimization tailored to your skin's microbiome.</p>
              </div>
              <div onClick={() => navigate('/products')} className="cursor-pointer group p-10 bg-surface-container-lowest rounded-3xl transition-all hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined" data-icon="brush">brush</span>
                </div>
                <h3 className="text-2xl font-headline mb-4">Haircare</h3>
                <p className="text-on-surface-variant leading-relaxed">Follicle-level diagnostics to address thinning, texture, and scalp health through plant-based chemistry.</p>
              </div>
              <div onClick={() => navigate('/products')} className="cursor-pointer group p-10 bg-surface-container-lowest rounded-3xl transition-all hover:-translate-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                  <span className="material-symbols-outlined" data-icon="spa">spa</span>
                </div>
                <h3 className="text-2xl font-headline mb-4">Wellness</h3>
                <p className="text-on-surface-variant leading-relaxed">Holistic integration of sleep, diet, and stress markers into your topical application routine.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-surface-container-highest/30 rounded-[3rem] p-16 md:p-24 text-center border border-outline-variant/10">
              <h2 className="text-4xl md:text-6xl font-headline mb-8 tracking-tight">Ready for your <br /><span className="italic text-primary">Atelier Routine?</span></h2>
              <p className="text-on-surface-variant max-w-xl mx-auto mb-12 text-lg">Start your diagnostic journey today and receive your first personalized kit within 48 hours.</p>
              <div className="flex justify-center gap-4 flex-col sm:flex-row">
                <button onClick={() => navigate('/user-dashboard')} className="px-10 py-5 bg-primary text-on-primary rounded-full font-medium text-lg hover:shadow-2xl transition-all">Begin Analysis</button>
                <button onClick={() => navigate('/about')} className="px-10 py-5 text-primary font-medium text-lg hover:bg-surface-container-low rounded-full transition-all">Explore Science</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-16 bg-[#f4f3f1] dark:bg-[#1a1c1a]">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 gap-6 w-full max-w-7xl mx-auto">
          <div className="font-headline text-xl text-primary dark:text-[#c2ceaa]">
            BeAura
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-label text-xs tracking-widest uppercase text-on-surface-variant dark:text-[#e3e2e0] hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-label text-xs tracking-widest uppercase text-on-surface-variant dark:text-[#e3e2e0] hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="font-label text-xs tracking-widest uppercase text-on-surface-variant dark:text-[#e3e2e0] hover:text-primary transition-colors" href="#">Contact Us</a>
          </div>
          <div className="text-on-surface-variant dark:text-stone-400 font-label text-[10px] tracking-widest uppercase opacity-80">
            © 2026 BeAura Clinical Atelier. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
