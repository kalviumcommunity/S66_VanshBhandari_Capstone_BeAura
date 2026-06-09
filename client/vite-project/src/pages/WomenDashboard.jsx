import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileModal from '../components/ProfileModal';

export default function WomenDashboard() {
  const [user, setUser] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
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
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-[#1a1c1a]/70 backdrop-blur-xl border-b border-rose-100">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="font-headline text-2xl font-bold text-rose-800 tracking-tighter">BeAura Woman</Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/user-dashboard" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-rose-800 transition-colors">Men's Dashboard</Link>
            <Link to="/women-dashboard" className="font-headline text-lg tracking-tight text-rose-800 font-semibold border-b-2 border-rose-800 pb-1">Women's Hub</Link>
            <Link to="/products" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-rose-800 transition-colors">Shop</Link>
            <Link to="/booking" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-rose-800 transition-colors">Appointments</Link>
            <Link to="/clinic" className="font-headline text-lg tracking-tight text-[#45483c] hover:text-rose-800 transition-colors">Clinic Finder</Link>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('user'); navigate('/'); }} className="text-secondary text-sm font-semibold hover:underline">Logout</button>
            <div onClick={() => setShowProfileModal(true)} className="h-10 w-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 overflow-hidden cursor-pointer hover:scale-105 hover:border-primary transition-all">
              <span className="material-symbols-outlined text-2xl text-rose-800">person</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 px-6 max-w-7xl mx-auto space-y-16">
        <header className="space-y-2">
          <span className="font-label text-[0.6875rem] uppercase tracking-[0.15em] text-rose-600 font-medium">Hello there, {user.name}</span>
          <h1 className="font-headline text-4xl md:text-5xl text-on-surface tracking-tight font-bold">Your Essence Dashboard</h1>
          <p className="text-on-surface-variant max-w-xl text-lg">Your curated space for tailored feminine wellness, beauty care, and clinic bookings.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-rose-50 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden relative shadow-sm border border-rose-100">
            <div className="relative z-10 space-y-4">
              <h2 className="font-headline text-3xl text-rose-900 font-semibold mb-1">Face Care Routine</h2>
              <p className="text-sm text-rose-700 font-medium">Morning Hydration Focus</p>
              
              <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer hover:border-rose-300 border border-transparent transition-all">
                  <span className="material-symbols-outlined text-rose-400 text-3xl">spa</span>
                  <div>
                      <h3 className="font-semibold text-rose-900">Hydrating Cleanser</h3>
                      <p className="text-xs text-stone-500">Apply to damp skin</p>
                  </div>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer hover:border-rose-300 border border-transparent transition-all">
                  <span className="material-symbols-outlined text-rose-400 text-3xl">water_drop</span>
                  <div>
                      <h3 className="font-semibold text-rose-900">Hyaluronic Serum</h3>
                      <p className="text-xs text-stone-500">Pat gently until absorbed</p>
                  </div>
              </div>
            </div>
          </section>

          <section className="bg-amber-50 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden relative shadow-sm border border-amber-100">
            <div className="relative z-10 space-y-4">
              <h2 className="font-headline text-3xl text-amber-900 font-semibold mb-1">Hair Care Routine</h2>
              <p className="text-sm text-amber-700 font-medium">Volume & Scalp Health</p>
              
              <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer hover:border-amber-300 border border-transparent transition-all">
                  <span className="material-symbols-outlined text-amber-400 text-3xl">face_retouching_natural</span>
                  <div>
                      <h3 className="font-semibold text-amber-900">Scalp Exfoliant</h3>
                      <p className="text-xs text-stone-500">Pre-wash 2x a week</p>
                  </div>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer hover:border-amber-300 border border-transparent transition-all">
                  <span className="material-symbols-outlined text-amber-400 text-3xl">brush</span>
                  <div>
                      <h3 className="font-semibold text-amber-900">Keratin Mask</h3>
                      <p className="text-xs text-stone-500">Leave in for 15 minutes</p>
                  </div>
              </div>
            </div>
          </section>
        </div>

        <div className="flex gap-4">
            <button onClick={() => navigate('/booking')} className="px-6 py-3 bg-rose-700 text-white rounded-xl shadow hover:bg-rose-800 transition-all font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined">calendar_month</span> Book Clinic Appt
            </button>
            <button onClick={() => navigate('/products')} className="px-6 py-3 bg-white text-rose-700 border border-rose-200 rounded-xl shadow hover:bg-rose-50 transition-all font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined">shopping_bag</span> Personalised Shop
            </button>
        </div>
      </main>

      <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} user={user} />
    </div>
  );
}
