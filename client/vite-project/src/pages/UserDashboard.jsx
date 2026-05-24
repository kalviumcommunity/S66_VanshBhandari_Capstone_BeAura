import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  if (!user) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-[#1a1c1a]/70 backdrop-blur-xl">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="font-headline text-2xl font-bold text-[#3e5219] dark:text-[#c2ceaa] tracking-tighter">BeAura</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/user-dashboard" className="font-headline text-lg tracking-tight text-[#3e5219] dark:text-[#c2ceaa] font-semibold border-b-2 border-[#3e5219] pb-1">Men's Dashboard</Link>
            <Link to="/women-dashboard" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors">Women's Hub</Link>
            <Link to="/products" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors">Shop</Link>
            <Link to="/booking" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors">Appointments</Link>
            <Link to="/clinic" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors">Clinic Finder</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">notifications</button>
            <button onClick={() => { localStorage.removeItem('user'); navigate('/'); }} className="text-secondary text-sm font-semibold hover:underline">Logout</button>
            <div className="h-10 w-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 overflow-hidden">
              <span className="material-symbols-outlined text-2xl">person</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <header className="space-y-2">
          <span className="font-label text-[0.6875rem] uppercase tracking-[0.15em] text-on-surface-variant font-medium">Welcome back, {user.name}</span>
          <h1 className="font-headline text-4xl md:text-5xl text-on-surface tracking-tight font-bold">Your Radiance Dashboard</h1>
          <p className="text-on-surface-variant max-w-xl text-lg">A curated overview of your bespoke clinical journey, harmonizing science and self-care.</p>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <section className="md:col-span-8 bg-surface-container-low rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="font-headline text-2xl text-primary font-semibold mb-1">Daily Routine</h2>
                  <p className="font-label text-[0.6875rem] uppercase tracking-wider text-on-surface-variant">4 Steps Remaining Today</p>
                </div>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">Phase: Restorative</span>
              </div>
              
              <div className="space-y-4">
                <div className="group flex items-center gap-6 p-5 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/5 hover:border-primary/20 transition-all cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-container/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" data-icon="water_drop">water_drop</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-on-surface">Cleansing Ritual</h3>
                    <p className="text-sm text-on-surface-variant">Use lukewarm water and Ph-balanced milk</p>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors cursor-pointer">check_circle</span>
                </div>
                
                <div className="group flex items-center gap-6 p-5 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/5 hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-container/30 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined" data-icon="biotech">biotech</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-on-surface">Clinical Serum Application</h3>
                    <p className="text-sm text-on-surface-variant">3 drops of Vit-C complex, press gently</p>
                  </div>
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          </section>

          {/* Diet Suggestion Bento Items */}
          <section className="md:col-span-4 bg-secondary-container/10 rounded-[2rem] p-8 flex flex-col border border-secondary-container/20">
            <div className="mb-6">
              <span className="material-symbols-outlined text-secondary text-3xl mb-4">restaurant</span>
              <h2 className="font-headline text-2xl text-secondary font-semibold">Dietary Focus</h2>
              <p className="text-sm text-on-surface-variant mt-2 italic">Inner health for outer glow.</p>
            </div>
            <div className="mt-auto space-y-6">
              <div className="bg-surface-container-lowest/80 backdrop-blur-md p-4 rounded-xl">
                <span className="font-label text-[0.6rem] uppercase tracking-widest text-secondary block mb-1">Morning Ritual</span>
                <p className="text-sm font-medium text-on-surface">Matcha with Collagen Peptides</p>
              </div>
              <div className="bg-surface-container-lowest/80 backdrop-blur-md p-4 rounded-xl">
                <span className="font-label text-[0.6rem] uppercase tracking-widest text-secondary block mb-1">Key Ingredient</span>
                <p className="text-sm font-medium text-on-surface">Omega-3 Rich Walnut & Chia Mix</p>
              </div>
              <button className="w-full py-3 rounded-xl bg-secondary text-on-secondary font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">Full Meal Plan</button>
            </div>
          </section>
        </div>

        {/* Categories / Link Buttons */}
        <div className="flex gap-4">
            <button onClick={() => navigate('/booking')} className="px-6 py-3 bg-primary text-white rounded-xl shadow hover:bg-opacity-90 transition-all font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined">event</span> Book Consult
            </button>
            <button onClick={() => navigate('/products')} className="px-6 py-3 bg-surface-container-lowest text-primary border border-primary/20 rounded-xl shadow hover:bg-primary hover:text-white transition-all font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined">shopping_bag</span> Shop Routine
            </button>
        </div>

        {/* Footer section... kept brief here */}
      </main>
    </div>
  );
}
