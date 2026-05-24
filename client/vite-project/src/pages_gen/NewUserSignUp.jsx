import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NewUserSignUp() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      
{/*  TopAppBar  */}
<nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-[#1a1c1a]/70 backdrop-blur-xl flex justify-between items-center px-8 py-6 w-full max-w-none">
<div className="font-noto-serif text-2xl tracking-tight text-[#1a1c1a] dark:text-[#faf9f6] font-headline">
            BeAura
        </div>
<div className="flex items-center gap-8">
<button className="text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] dark:hover:text-[#c2d0a0] transition-colors font-label text-[11px] uppercase tracking-[0.05em]">
                Support
            </button>
</div>
</nav>
{/*  Main Content: Login Canvas  */}
<main className="flex-grow flex items-center justify-center px-6 pt-32 pb-20">
<div className="w-full max-w-md">
{/*  Center Focus Card  */}
<div className="bg-surface-container-lowest rounded-xl p-10 md:p-14 shadow-[0_32px_64px_-16px_rgba(26,28,26,0.06)] border border-outline-variant/10 relative overflow-hidden">
{/*  Botanical Accent  */}
<div className="flex justify-center mb-8">
<span className="material-symbols-outlined text-primary text-3xl opacity-60" data-icon="eco">eco</span>
</div>
{/*  Header  */}
<header className="text-center mb-10">
<h1 className="font-headline text-3xl text-on-surface tracking-tight mb-3">Create Your Account</h1>
<p className="text-on-surface-variant text-sm font-light leading-relaxed">Join the clinical skincare atelier for a personalized diagnostic experience.</p>
</header>
{/*  Form  */}
<form className="space-y-6">
<div className="space-y-1.5">
<label className="block font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant ml-1" htmlFor="full-name">Full Name</label>
<input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3.5 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary/20 transition-all text-sm" id="full-name" name="full-name" placeholder="Evelyn Harper" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant ml-1" htmlFor="email">Email Address</label>
<input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3.5 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary/20 transition-all text-sm" id="email" name="email" placeholder="name@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<div className="flex justify-between items-center px-1">
<label className="block font-label text-[10px] uppercase tracking-[0.1em] text-on-surface-variant" htmlFor="password">Password</label>
</div>
<input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3.5 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary/20 transition-all text-sm" id="password" name="password" placeholder="••••••••" type="password"/>
</div>
<div className="pt-4">
<button className="w-full bg-primary text-on-primary font-body font-medium py-4 rounded-full hover:shadow-lg hover:shadow-primary/10 active:scale-[0.98] transition-all duration-200" type="submit">
                            Create Account
                        </button>
</div>
</form>
{/*  Footer Link  */}
<div className="mt-10 text-center">
<p className="text-on-surface-variant text-xs">
                        Already have an account? 
                        <a className="text-secondary font-medium ml-1 hover:underline underline-offset-4" href="#">Login</a>
</p>
</div>
{/*  Subtle Decorative Element  */}
<div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
</div>
{/*  Aesthetic Note  */}
<p className="text-center mt-8 font-label text-[10px] uppercase tracking-[0.15em] text-outline opacity-50">
                Precision Skincare ⋅ Clinical Excellence
            </p>
</div>
</main>
{/*  Footer  */}
<footer className="bg-[#f4f3f1] dark:bg-[#1a1c1a] flex flex-col md:flex-row justify-between items-center px-16 py-12 w-full mt-auto">
<div className="font-noto-serif text-lg text-[#1a1c1a] dark:text-[#faf9f6] mb-6 md:mb-0">
            BeAura
        </div>
<div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
<a className="font-inter text-[11px] uppercase tracking-[0.05em] text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors" href="#">Privacy Policy</a>
<a className="font-inter text-[11px] uppercase tracking-[0.05em] text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors" href="#">Terms of Service</a>
<a className="font-inter text-[11px] uppercase tracking-[0.05em] text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors" href="#">Sustainability</a>
<a className="font-inter text-[11px] uppercase tracking-[0.05em] text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors" href="#">Contact</a>
</div>
<div className="font-inter text-[11px] uppercase tracking-[0.05em] text-[#45483c] dark:text-[#e3e2e0] opacity-80">
            © 2024 BeAura Clinical Atelier. All rights reserved.
        </div>
</footer>

    </div>
  );
}
