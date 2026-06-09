import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [resetUrl, setResetUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setResetUrl('');
    setLoading(true);

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    try {
      const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      let data = {};
      const contentType = res.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        data = await res.json();
      } else {
        throw new Error(`Server returned unexpected response (status ${res.status}). Please make sure your backend server is updated and running.`);
      }
      
      if (!res.ok) throw new Error(data.message || 'Something went wrong');

      setMessage('A password reset link has been generated.');
      if (data.resetUrl) {
        // Capture link for easy demo purposes
        setResetUrl(data.resetUrl);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      {/* TopNavBar */}
      <nav className="w-full z-50 bg-[#faf9f6]/70 dark:bg-stone-900/70 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full">
        <Link to="/" className="text-2xl font-serif italic text-primary dark:text-[#c5d3a5]">
          BeAura
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="text-on-surface-variant dark:text-[#e3e2e0] font-medium hover:text-primary transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-on-surface-variant dark:text-[#e3e2e0] font-medium hover:text-primary transition-colors duration-300">About</Link>
        </div>
        <div className="w-10"></div>
      </nav>

      {/* Main Content Canvas */}
      <main className="flex-grow flex items-center justify-center px-6 py-24 md:py-32 bg-surface">
        <div className="relative w-full max-w-5xl grid md:grid-cols-2 overflow-hidden bg-surface-container-lowest rounded-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
          
          {/* Visual Editorial Side */}
          <div className="hidden md:block relative h-full min-h-[600px] bg-surface-container-low overflow-hidden">
            <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-gradient-to-tr from-primary/20 to-transparent"></div>
            <img alt="Minimalist botanical bottles on marble" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw0RUbHJG4UzfvYA7XwhM2iHUglS8NuuAMU5JQbyTkkb483Y3L1bbEOv1GIUe4AweBWQbILcNyyADbExZvFIxMolVCShhcONZNJ0whPME99KFjJ-slVWLgma8qiSstNDYcyRIooNnuWAOORJdBEqwkHrusoDhJASDN6oElHlGelZSo99AjRwoeiAOzNMfp0Yct_ict46aD-KEOpkflFYtrGfbdD3Gma-1iB6CD9QqN23XRAe0IdcHS6Lway1qmB7B4_dv5XY42evtv" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end text-white bg-gradient-to-t from-black/40 to-transparent">
              <h2 className="font-headline text-3xl italic mb-4 leading-tight">Recover your customized skincare dashboard seamlessly.</h2>
              <p className="font-body text-sm tracking-wide opacity-90 uppercase">Secure Recovery Portal</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-16 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <header className="mb-12">
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold mb-3 block">Account Security</span>
                <h1 className="font-headline text-4xl text-on-surface tracking-tight leading-none mb-4">Forgot Password</h1>
                <p className="text-on-surface-variant font-body text-sm leading-relaxed">Enter your registered email address, and we'll generate a password reset link for you.</p>
              </header>

              {error && <p className="text-error text-sm mb-4">{error}</p>}
              {message && <p className="text-primary font-medium text-sm mb-4">{message}</p>}

              {resetUrl ? (
                <div className="space-y-6 bg-surface-container-low p-6 rounded-2xl border border-primary/20 mb-6">
                  <h3 className="font-headline text-lg font-bold text-primary">Demo Mode Link</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Since this application does not have a live email server attached, you can click the button below to directly simulate following the link in the email.</p>
                  <Link 
                    to={`/reset-password/${resetUrl.split('/reset-password/')[1]}`} 
                    className="block w-full text-center bg-secondary text-white py-3 rounded-full font-semibold text-xs tracking-wider uppercase hover:opacity-90 transition-all shadow-md"
                  >
                    Go to Reset Password Form
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label className="block font-label text-[11px] uppercase tracking-widest text-on-surface-variant mb-2 ml-1" htmlFor="email">Email Address</label>
                    <input 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-surface-container-high border-none rounded-t-xl py-4 px-5 focus:ring-0 focus:bg-surface-container-highest transition-all duration-300 placeholder:text-outline-variant/60" 
                      id="email" 
                      placeholder="atelier@beaura.com" 
                      type="email" 
                      required 
                    />
                    <div className="h-[1px] w-0 group-focus-within:w-full bg-primary transition-all duration-500"></div>
                  </div>

                  <div className="pt-4">
                    <button 
                      disabled={loading}
                      className="w-full bg-primary text-on-primary py-5 rounded-full font-body font-semibold text-sm tracking-wide hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 shadow-lg shadow-primary/10 disabled:opacity-50" 
                      type="submit"
                    >
                      {loading ? 'Generating...' : 'Reset Password'}
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-12 pt-8 border-t border-outline-variant/20 text-center">
                <p className="text-on-surface-variant text-xs font-body tracking-tight">
                  Remembered your password?
                  <Link to="/login" className="text-primary font-bold ml-1 hover:underline decoration-primary/30 underline-offset-4">Log in</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
