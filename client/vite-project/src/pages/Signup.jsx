import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Signup failed');
      
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/user-dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      {/* TopAppBar */}
      <nav className="w-full z-50 bg-[#faf9f6]/70 dark:bg-[#1a1c1a]/70 backdrop-blur-xl flex justify-between items-center px-8 py-6 max-w-none">
        <Link to="/" className="font-headline text-2xl tracking-tight text-primary dark:text-[#faf9f6]">
            BeAura
        </Link>
        <div className="flex items-center gap-8">
            <button onClick={() => navigate('/chat')} className="text-on-surface-variant dark:text-[#e3e2e0] hover:text-primary transition-colors font-label text-[11px] uppercase tracking-[0.05em]">
                Support
            </button>
        </div>
      </nav>

      {/* Main Content: Login Canvas */}
      <main className="flex-grow flex items-center justify-center px-6 pt-32 pb-20">
        <div className="w-full max-w-md">
          {/* Center Focus Card */}
          <div className="bg-surface-container-lowest rounded-xl p-10 md:p-14 shadow-[0_32px_64px_-16px_rgba(26,28,26,0.06)] border border-outline-variant/10 relative overflow-hidden">
            {/* Botanical Accent */}
            <div className="flex justify-center mb-8">
              <span className="material-symbols-outlined text-primary text-3xl opacity-60" data-icon="eco">eco</span>
            </div>
            {/* Header */}
            <header className="text-center mb-10">
              <h1 className="font-headline text-3xl text-on-surface tracking-tight mb-3">Create Your Account</h1>
              <p className="text-on-surface-variant text-sm font-light leading-relaxed">Join the clinical skincare atelier for a personalized diagnostic experience.</p>
            </header>

            {error && <p className="text-error text-sm mb-4 text-center">{error}</p>}

            {/* Form */}
            <form onSubmit={handleSignup} className="space-y-6">
              <div className="space-y-1.5">
                  <label className="block font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant ml-1" htmlFor="full-name">Full Name</label>
                  <input 
                    value={name} onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3.5 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary/20 transition-all text-sm" 
                    id="full-name" placeholder="Evelyn Harper" type="text" required 
                  />
              </div>
              <div className="space-y-1.5">
                  <label className="block font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
                  <input 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3.5 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary/20 transition-all text-sm" 
                    id="email" placeholder="name@example.com" type="email" required 
                  />
              </div>
              <div className="space-y-1.5">
                  <div className="flex justify-between items-center px-1">
                      <label className="block font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant" htmlFor="password">Password</label>
                  </div>
                  <input 
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3.5 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary/20 transition-all text-sm" 
                    id="password" placeholder="••••••••" type="password" required
                  />
              </div>
              <div className="pt-4">
                  <button className="w-full bg-primary text-on-primary font-body font-medium py-4 rounded-full hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98] transition-all duration-200" type="submit">
                      Create Account
                  </button>
              </div>
            </form>

            {/* Footer Link */}
            <div className="mt-10 text-center">
                <p className="text-on-surface-variant text-xs">
                    Already have an account? 
                    <Link to="/login" className="text-secondary font-medium ml-1 hover:underline underline-offset-4">Login</Link>
                </p>
            </div>
            
            {/* Subtle Decorative Element */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          </div>
          
          <p className="text-center mt-8 font-label text-[10px] uppercase tracking-[0.15em] text-outline opacity-50">
              Precision Skincare ⋅ Clinical Excellence
          </p>
        </div>
      </main>
    </div>
  );
}
