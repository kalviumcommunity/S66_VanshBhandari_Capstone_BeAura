import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileModal from '../components/ProfileModal';

export default function About() {
  const [user, setUser] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed bg-[#faf9f6] text-[#1a1c1a] min-h-screen">
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-[#1a1c1a]/70 backdrop-blur-xl no-border bg-[#f4f3f1]">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="font-noto-serif text-2xl font-bold text-[#3e5219] dark:text-[#c2ceaa] tracking-tighter">BeAura</Link>
          {user ? (
            /* Logged In Navbar */
            <>
              <nav className="hidden md:flex items-center space-x-8">
                <Link to="/user-dashboard" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors">Men's Dashboard</Link>
                <Link to="/women-dashboard" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors">Women's Hub</Link>
                <Link to="/products" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors">Shop</Link>
                <Link to="/booking" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors">Appointments</Link>
                <Link to="/clinic" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors">Clinic Finder</Link>
              </nav>
              <div className="flex items-center gap-4">
                <button onClick={handleLogout} className="text-secondary text-sm font-semibold hover:underline">Logout</button>
                <div onClick={() => setShowProfileModal(true)} className="h-10 w-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 overflow-hidden cursor-pointer hover:scale-105 hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-2xl text-on-surface">person</span>
                </div>
              </div>
            </>
          ) : (
            /* Guest Navbar */
            <>
              <nav className="hidden md:flex items-center space-x-8">
                <Link className="text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors font-noto-serif text-lg tracking-tight" to="/">Home</Link>
                <Link className="text-[#3e5219] font-semibold border-b-2 border-[#3e5219] pb-1 font-noto-serif text-lg tracking-tight" to="/about">About</Link>
              </nav>
              <div className="flex items-center gap-4">
                <Link to="/login" className="px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ease-out bg-primary text-on-primary hover:opacity-90 active:scale-95">Login</Link>
              </div>
            </>
          )}
        </div>
      </header>

      <main className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
        {/* Introduction Header */}
        <header className="mb-16 text-center">
          <span className="font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant mb-4 block">Personalized Diagnostics</span>
          <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-primary tracking-tighter mb-6">The Clinical Atelier Analysis</h1>
          <p className="text-on-surface-variant max-w-xl mx-auto leading-relaxed">Let our precision diagnostics guide your journey. Share your unique biological profile for a bespoke skincare and hair health protocol.</p>
        </header>

        {/* Progress Indicator */}
        <div className="mb-12 flex justify-between items-center relative max-w-md mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-variant -z-10 -translate-y-1/2"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold">1</div>
            <span className="font-label text-[0.625rem] uppercase tracking-tighter text-primary font-bold">Base</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center text-xs font-bold">2</div>
            <span className="font-label text-[0.625rem] uppercase tracking-tighter text-on-surface-variant">Focus</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center text-xs font-bold">3</div>
            <span className="font-label text-[0.625rem] uppercase tracking-tighter text-on-surface-variant">Review</span>
          </div>
        </div>

        {/* Diagnostic Form Container */}
        <section className="bg-surface-container-low rounded-xl p-8 md:p-12 shadow-sm border border-outline-variant/10">
          <form className="space-y-12">
            {/* Section: Skin Profile */}
            <fieldset>
              <legend className="font-headline text-2xl text-primary mb-8 border-b border-outline-variant/20 w-full pb-4">01. Skin Topology</legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <label className="relative cursor-pointer group">
                  <input className="peer sr-only" name="skin_type" type="radio" value="oily" />
                  <div className="p-6 bg-surface-container-lowest rounded-xl border border-transparent peer-checked:border-primary peer-checked:bg-primary/5 transition-all duration-300 group-hover:bg-surface-bright shadow-sm">
                    <span className="material-symbols-outlined text-primary mb-3 block" data-icon="opacity">opacity</span>
                    <p className="font-medium text-on-surface">Oily</p>
                    <p className="text-xs text-on-surface-variant mt-1">High sebum production, visible pores.</p>
                  </div>
                </label>
                <label className="relative cursor-pointer group">
                  <input className="peer sr-only" name="skin_type" type="radio" value="dry" />
                  <div className="p-6 bg-surface-container-lowest rounded-xl border border-transparent peer-checked:border-primary peer-checked:bg-primary/5 transition-all duration-300 group-hover:bg-surface-bright shadow-sm">
                    <span className="material-symbols-outlined text-primary mb-3 block" data-icon="water_drop">water_drop</span>
                    <p className="font-medium text-on-surface">Dry</p>
                    <p className="text-xs text-on-surface-variant mt-1">Lacks moisture, feeling of tightness.</p>
                  </div>
                </label>
                <label className="relative cursor-pointer group">
                  <input className="peer sr-only" name="skin_type" type="radio" value="combination" />
                  <div className="p-6 bg-surface-container-lowest rounded-xl border border-transparent peer-checked:border-primary peer-checked:bg-primary/5 transition-all duration-300 group-hover:bg-surface-bright shadow-sm">
                    <span className="material-symbols-outlined text-primary mb-3 block" data-icon="waves">waves</span>
                    <p className="font-medium text-on-surface">Combination</p>
                    <p className="text-xs text-on-surface-variant mt-1">Oily T-zone, dry or normal cheeks.</p>
                  </div>
                </label>
              </div>
            </fieldset>

            {/* Section: Hair Profile */}
            <fieldset>
              <legend className="font-headline text-2xl text-primary mb-8 border-b border-outline-variant/20 w-full pb-4">02. Hair Texture</legend>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <label className="relative cursor-pointer group">
                  <input className="peer sr-only" name="hair_type" type="radio" value="dry" />
                  <div className="p-6 bg-surface-container-lowest rounded-xl border border-transparent peer-checked:border-primary peer-checked:bg-primary/5 transition-all duration-300 group-hover:bg-surface-bright shadow-sm">
                    <span className="material-symbols-outlined text-primary mb-3 block" data-icon="spa">spa</span>
                    <p className="font-medium text-on-surface">Dry</p>
                    <p className="text-xs text-on-surface-variant mt-1">Brittle or lack of shine.</p>
                  </div>
                </label>
                <label className="relative cursor-pointer group">
                  <input className="peer sr-only" name="hair_type" type="radio" value="normal" />
                  <div className="p-6 bg-surface-container-lowest rounded-xl border border-transparent peer-checked:border-primary peer-checked:bg-primary/5 transition-all duration-300 group-hover:bg-surface-bright shadow-sm">
                    <span className="material-symbols-outlined text-primary mb-3 block" data-icon="check_circle">check_circle</span>
                    <p className="font-medium text-on-surface">Normal</p>
                    <p className="text-xs text-on-surface-variant mt-1">Balanced scalp and hair moisture.</p>
                  </div>
                </label>
                <label className="relative cursor-pointer group">
                  <input className="peer sr-only" name="hair_type" type="radio" value="oily" />
                  <div className="p-6 bg-surface-container-lowest rounded-xl border border-transparent peer-checked:border-primary peer-checked:bg-primary/5 transition-all duration-300 group-hover:bg-surface-bright shadow-sm">
                    <span className="material-symbols-outlined text-primary mb-3 block" data-icon="oil_barrel">oil_barrel</span>
                    <p className="font-medium text-on-surface">Oily</p>
                    <p className="text-xs text-on-surface-variant mt-1">Greasy appearance shortly after wash.</p>
                  </div>
                </label>
              </div>
            </fieldset>

            {/* Section: Clinical Concerns */}
            <fieldset>
              <legend className="font-headline text-2xl text-primary mb-8 border-b border-outline-variant/20 w-full pb-4">03. Target Concerns</legend>
              <div className="flex flex-wrap gap-4">
                <label className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container-lowest border border-outline-variant/30 rounded-full cursor-pointer hover:bg-surface-bright transition-colors has-[:checked]:bg-primary has-[:checked]:text-on-primary shadow-sm">
                  <input className="sr-only" name="concerns" type="checkbox" value="acne" />
                  <span className="text-sm font-medium">Acne</span>
                </label>
                <label className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container-lowest border border-outline-variant/30 rounded-full cursor-pointer hover:bg-surface-bright transition-colors has-[:checked]:bg-primary has-[:checked]:text-on-primary shadow-sm">
                  <input className="sr-only" name="concerns" type="checkbox" value="hair_fall" />
                  <span className="text-sm font-medium">Hair Fall</span>
                </label>
                <label className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container-lowest border border-outline-variant/30 rounded-full cursor-pointer hover:bg-surface-bright transition-colors has-[:checked]:bg-primary has-[:checked]:text-on-primary shadow-sm">
                  <input className="sr-only" name="concerns" type="checkbox" value="dandruff" />
                  <span className="text-sm font-medium">Dandruff</span>
                </label>
                <label className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container-lowest border border-outline-variant/30 rounded-full cursor-pointer hover:bg-surface-bright transition-colors has-[:checked]:bg-primary has-[:checked]:text-on-primary shadow-sm">
                  <input className="sr-only" name="concerns" type="checkbox" value="hyperpigmentation" />
                  <span className="text-sm font-medium">Hyperpigmentation</span>
                </label>
                <label className="inline-flex items-center gap-2 px-6 py-3 bg-surface-container-lowest border border-outline-variant/30 rounded-full cursor-pointer hover:bg-surface-bright transition-colors has-[:checked]:bg-primary has-[:checked]:text-on-primary shadow-sm">
                  <input className="sr-only" name="concerns" type="checkbox" value="anti_aging" />
                  <span className="text-sm font-medium">Anti-Aging</span>
                </label>
              </div>
            </fieldset>

            {/* Image Upload Section */}
            <fieldset>
              <legend className="font-headline text-2xl text-primary mb-8 border-b border-outline-variant/20 w-full pb-4">04. Visual Verification</legend>
              <div className="relative group">
                <input className="sr-only" id="image-upload" type="file" />
                <label className="flex flex-col items-center justify-center w-full min-h-[200px] border-2 border-dashed border-outline-variant/40 rounded-xl bg-surface-container-lowest hover:bg-surface-bright cursor-pointer transition-all duration-300" htmlFor="image-upload">
                  <div className="text-center p-8">
                    <span className="material-symbols-outlined text-4xl text-outline mb-4 block" data-icon="add_a_photo">add_a_photo</span>
                    <p className="text-on-surface font-medium">Upload a High-Res Close-up</p>
                    <p className="text-on-surface-variant text-xs mt-2">Optional. Use natural lighting for more accurate clinical AI analysis.</p>
                  </div>
                </label>
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="aspect-square bg-surface-variant/20 rounded-lg overflow-hidden flex items-center justify-center border border-outline-variant/10">
                    <span className="material-symbols-outlined text-outline/30" data-icon="image">image</span>
                  </div>
                  <div className="aspect-square bg-surface-variant/20 rounded-lg overflow-hidden flex items-center justify-center border border-outline-variant/10">
                    <span className="material-symbols-outlined text-outline/30" data-icon="image">image</span>
                  </div>
                </div>
              </div>
            </fieldset>

            {/* Form Navigation */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
              <button className="text-primary font-medium hover:underline flex items-center gap-2" type="button">
                <span className="material-symbols-outlined text-sm" data-icon="arrow_back">arrow_back</span>
                Save Draft
              </button>
              <button className="w-full md:w-auto px-12 py-4 bg-primary text-on-primary rounded-full font-semibold shadow-lg hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300" type="submit">
                Generate My Protocol
              </button>
            </div>
          </form>
        </section>

        {/* Trust Badge Section */}
        <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-outline-variant/20 pt-16">
          <div className="space-y-4">
            <span className="material-symbols-outlined text-primary text-3xl" data-icon="science">science</span>
            <h4 className="font-headline text-lg font-bold">Lab Verified</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Formulations based on clinical benchmarks and dermatological standards.</p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-primary text-3xl" data-icon="privacy_tip">privacy_tip</span>
            <h4 className="font-headline text-lg font-bold">Privacy First</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">Your biological data is encrypted and never shared with third parties.</p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-primary text-3xl" data-icon="ecg_heart">ecg_heart</span>
            <h4 className="font-headline text-lg font-bold">Holistic Data</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">AI analysis merges sensory feedback with visual clinical markers.</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-16 bg-[#f4f3f1] dark:bg-[#1a1c1a] tonal-shift bg-[#f4f3f1]">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 gap-6 w-full max-w-7xl mx-auto">
          <div className="font-noto-serif text-xl text-[#3e5219] dark:text-[#c2ceaa]">BeAura Clinical Atelier</div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] dark:hover:text-[#c2ceaa] transition-colors" href="#">Privacy Policy</a>
            <a className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] dark:hover:text-[#c2ceaa] transition-colors" href="#">Terms of Service</a>
            <a className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] dark:hover:text-[#c2ceaa] transition-colors" href="#">Contact Us</a>
            <a className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] dark:hover:text-[#c2ceaa] transition-colors" href="#">Shipping</a>
          </div>
          <div className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0] opacity-80">© 2024 BeAura Clinical Atelier. All rights reserved.</div>
        </div>
      </footer>
      <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} user={user} />
    </div>
  );
}
