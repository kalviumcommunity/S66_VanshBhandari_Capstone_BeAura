import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function LoginAndSignIn() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-stone-900/70 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full">
<div className="text-2xl font-serif italic text-[#3e5219] dark:text-[#c5d3a5]">
            BeAura
        </div>
<div className="hidden md:flex items-center gap-10">
<a className="text-[#45483c] dark:text-[#e3e2e0] font-medium hover:text-[#3e5219] transition-colors duration-300" href="#">Shop</a>
<a className="text-[#45483c] dark:text-[#e3e2e0] font-medium hover:text-[#3e5219] transition-colors duration-300" href="#">Philosophy</a>
<a className="text-[#45483c] dark:text-[#e3e2e0] font-medium hover:text-[#3e5219] transition-colors duration-300" href="#">Concierge</a>
</div>
<div className="flex items-center gap-6 text-[#3e5219] dark:text-[#c5d3a5]">
<button className="hover:scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
</button>
<button className="hover:scale-95 duration-200 ease-in-out">
<span className="material-symbols-outlined" data-icon="person">person</span>
</button>
</div>
</nav>
{/*  Main Content Canvas  */}
<main className="flex-grow flex items-center justify-center px-6 py-24 md:py-32 bg-surface">
<div className="relative w-full max-w-5xl grid md:grid-cols-2 overflow-hidden bg-surface-container-lowest rounded-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
{/*  Visual Editorial Side  */}
<div className="hidden md:block relative h-full min-h-[600px] bg-surface-container-low overflow-hidden">
<div className="absolute inset-0 opacity-40 mix-blend-multiply bg-gradient-to-tr from-primary/20 to-transparent"></div>
<img alt="Minimalist botanical skincare bottles on a textured surface" className="absolute inset-0 w-full h-full object-cover" data-alt="Soft aesthetic of botanical skincare and oils" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw0RUbHJG4UzfvYA7XwhM2iHUglS8NuuAMU5JQbyTkkb483Y3L1bbEOv1GIUe4AweBWQbILcNyyADbExZvFIxMolVCShhcONZNJ0whPME99KFjJ-slVWLgma8qiSstNDYcyRIooNnuWAOORJdBEqwkHrusoDhJASDN6oElHlGelZSo99AjRwoeiAOzNMfp0Yct_ict46aD-KEOpkflFYtrGfbdD3Gma-1iB6CD9QqN23XRAe0IdcHS6Lway1qmB7B4_dv5XY42evtv"/>
<div className="absolute inset-0 p-12 flex flex-col justify-end text-white bg-gradient-to-t from-black/40 to-transparent">
<h2 className="font-headline text-3xl italic mb-4 leading-tight">The intersection of botanical wisdom and clinical precision.</h2>
<p className="font-body text-sm tracking-wide opacity-90 uppercase">Welcome to the Atelier</p>
</div>
</div>
{/*  Form Side  */}
<div className="p-8 md:p-16 flex flex-col justify-center">
<div className="max-w-md mx-auto w-full">
<header className="mb-12">
<span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold mb-3 block">Member Access</span>
<h1 className="font-headline text-4xl text-on-surface tracking-tight leading-none mb-4">Welcome back</h1>
<p className="text-on-surface-variant font-body text-sm leading-relaxed">Please enter your credentials to access your curated clinical ritual.</p>
</header>
<form className="space-y-6">
<div className="group">
<label className="block font-label text-[11px] uppercase tracking-widest text-on-surface-variant mb-2 ml-1" htmlFor="email">Email Address</label>
<input className="w-full bg-surface-container-high border-none rounded-t-xl py-4 px-5 focus:ring-0 focus:bg-surface-container-highest transition-all duration-300 placeholder:text-outline-variant/60" id="email" placeholder="atelier@beaura.com" type="email"/>
<div className="h-[1px] w-0 group-focus-within:w-full bg-primary transition-all duration-500"></div>
</div>
<div className="group">
<div className="flex justify-between items-center mb-2 px-1">
<label className="block font-label text-[11px] uppercase tracking-widest text-on-surface-variant" htmlFor="password">Password</label>
<a className="text-[11px] uppercase tracking-widest text-primary hover:opacity-70 transition-opacity" href="#">Forgot?</a>
</div>
<input className="w-full bg-surface-container-high border-none rounded-t-xl py-4 px-5 focus:ring-0 focus:bg-surface-container-highest transition-all duration-300 placeholder:text-outline-variant/60" id="password" placeholder="••••••••" type="password"/>
<div className="h-[1px] w-0 group-focus-within:w-full bg-primary transition-all duration-500"></div>
</div>
<div className="pt-4">
<button className="w-full bg-primary text-on-primary py-5 rounded-full font-body font-semibold text-sm tracking-wide hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 shadow-lg shadow-primary/10" type="submit">Login</button>
</div>
</form>
<div className="mt-12 pt-8 border-t border-outline-variant/20 text-center">
<p className="text-on-surface-variant text-xs font-body tracking-tight">
                            New to BeAura? 
                            <a className="text-primary font-bold ml-1 hover:underline decoration-primary/30 underline-offset-4" href="#">Create an account</a>
</p>
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="w-full mt-auto bg-[#f4f3f1] dark:bg-stone-950 flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full gap-8">
<div className="font-serif text-lg text-[#1a1c1a] dark:text-[#faf9f6]">
            BeAura Clinical Atelier
        </div>
<div className="flex flex-wrap justify-center gap-8">
<a className="font-sans text-xs uppercase tracking-widest text-[#45483c] dark:text-stone-500 hover:text-[#3e5219] dark:hover:text-[#faf9f6] transition-all opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a className="font-sans text-xs uppercase tracking-widest text-[#45483c] dark:text-stone-500 hover:text-[#3e5219] dark:hover:text-[#faf9f6] transition-all opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a className="font-sans text-xs uppercase tracking-widest text-[#45483c] dark:text-stone-500 hover:text-[#3e5219] dark:hover:text-[#faf9f6] transition-all opacity-80 hover:opacity-100" href="#">Shipping &amp; Returns</a>
<a className="font-sans text-xs uppercase tracking-widest text-[#45483c] dark:text-stone-500 hover:text-[#3e5219] dark:hover:text-[#faf9f6] transition-all opacity-80 hover:opacity-100" href="#">Contact</a>
</div>
<p className="font-sans text-xs uppercase tracking-widest text-[#45483c] dark:text-[#c5d3a5] opacity-60">
            © 2024 BeAura Clinical Atelier. All rights reserved.
        </p>
</footer>

    </div>
  );
}
