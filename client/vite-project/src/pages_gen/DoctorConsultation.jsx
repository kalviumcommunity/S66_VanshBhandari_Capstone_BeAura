import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function DoctorConsultation() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      
{/*  Top Navigation Bar  */}
<nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-[#1a1c1a]/70 backdrop-blur-xl no-border bg-[#f4f3f1] dark:bg-[#252822] flat no shadows">
<div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
<div className="font-noto-serif text-2xl font-bold text-[#3e5219] dark:text-[#c2ceaa] tracking-tighter">BeAura</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors font-noto-serif text-lg tracking-tight" href="#">Home</a>
<a className="text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors font-noto-serif text-lg tracking-tight" href="#">About</a>
<a className="text-[#3e5219] dark:text-[#c2ceaa] font-semibold border-b-2 border-[#3e5219] pb-1 font-noto-serif text-lg tracking-tight" href="#">Services</a>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-2 rounded-full text-[#3e5219] dark:text-[#c2ceaa] font-medium scale-95 duration-200 ease-out hover:bg-[#f4f3f1]/50 transition-all">Login</button>
<button className="px-6 py-2 rounded-full bg-primary text-on-primary font-medium hover:opacity-90 transition-all">Get Started</button>
</div>
</div>
</nav>
<main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
{/*  Header Section  */}
<header className="mb-16">
<span className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-4 block">Clinical Atelier</span>
<h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-6">Expert Dermatologists</h1>
<p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">
                Connect with our world-class medical professionals for personalized skin health consultations. Precise diagnostics meets aesthetic excellence.
            </p>
</header>
{/*  Filters / Categories  */}
<div className="flex flex-wrap gap-3 mb-12">
<button className="px-6 py-2 bg-primary text-on-primary rounded-full text-sm font-medium">All Specialists</button>
<button className="px-6 py-2 bg-surface-container-low text-on-surface-variant rounded-full text-sm font-medium hover:bg-surface-container-high transition-colors">Medical Dermatology</button>
<button className="px-6 py-2 bg-surface-container-low text-on-surface-variant rounded-full text-sm font-medium hover:bg-surface-container-high transition-colors">Cosmetic Aesthetic</button>
<button className="px-6 py-2 bg-surface-container-low text-on-surface-variant rounded-full text-sm font-medium hover:bg-surface-container-high transition-colors">Laser Therapy</button>
<button className="px-6 py-2 bg-surface-container-low text-on-surface-variant rounded-full text-sm font-medium hover:bg-surface-container-high transition-colors">Oncology Skin Care</button>
</div>
{/*  Doctor Directory Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Doctor Card 1  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden group border border-outline-variant/15 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
<div className="aspect-[4/5] overflow-hidden bg-surface-container-low relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Professional male doctor in clinical setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbWaLjCN0quOIA_SzcfKpHSp_PpWe5akotSUr1G6bZKeeQjj7HNlESbI3hG9_Z8tApjydlzakdReC_4Lcx2fEa0D-f9TtgVUEOTkwCwWeEEf5iAT0y0iFfuvhIOV2eaT2-VGP8UrgJ2KbmvdKH9lj2JwT7Ua6Vm0X9Axu1PaG6em8XlHIMvMMS6rX-9ui3UyW-dlv3ZbDSqhMM4Y4xXC8nlV5xD_xIo5BxxJXHoBnQYqZeBljuBG8TYp0BKXkqm3NUR0otedYogfIo"/>
<div className="absolute top-4 left-4">
<span className="bg-tertiary-container/90 backdrop-blur-md text-on-tertiary-container px-3 py-1 rounded-sm text-[10px] font-label tracking-widest uppercase">Senior Lead</span>
</div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline text-2xl text-on-surface">Dr. Julian Vance</h3>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
<span className="font-label text-xs font-semibold">4.9</span>
</div>
</div>
<p className="text-on-surface-variant text-sm mb-6">Surgical Dermatology &amp; Mohs Specialist</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="bg-surface-container-low px-2 py-1 rounded text-[10px] text-on-surface-variant uppercase font-medium">Acne</span>
<span className="bg-surface-container-low px-2 py-1 rounded text-[10px] text-on-surface-variant uppercase font-medium">Surgical</span>
<span className="bg-surface-container-low px-2 py-1 rounded text-[10px] text-on-surface-variant uppercase font-medium">Anti-Aging</span>
</div>
<button className="w-full py-4 bg-primary text-on-primary rounded-xl font-medium tracking-wide hover:bg-primary-container transition-colors flex justify-center items-center gap-2">
                        Book Appointment
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
</button>
</div>
</div>
{/*  Doctor Card 2  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden group border border-outline-variant/15 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
<div className="aspect-[4/5] overflow-hidden bg-surface-container-low relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Professional female dermatologist in white lab coat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt5iKjLOljR7jIWN3ELb9GNwomF4aHaHkZDrtZxQJNTAOSEDmmBKS_0ttaQqywIsoDNSMWw7O_TeBKGE2RDX-rnFqbjL3I4ZecnB4zpbjlss9WmI4DgOl-DDiYp2OmC2sdyXPbPgZx12Y1SuQfWpC9lluiiySp-4gxNcmIL3pbyi_5ytZBLJHBYGLWO9Lcpbdqd1lBYdJ5hiGhHSENnRdBGbXUEEt27YuGZ_U-FAbDX_xP4FV66pEfEK8fW5-kyjXJhk-KGBFIeSwt"/>
<div className="absolute top-4 left-4">
<span className="bg-tertiary-container/90 backdrop-blur-md text-on-tertiary-container px-3 py-1 rounded-sm text-[10px] font-label tracking-widest uppercase">Aesthetic Lead</span>
</div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline text-2xl text-on-surface">Dr. Elena Rossi</h3>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
<span className="font-label text-xs font-semibold">5.0</span>
</div>
</div>
<p className="text-on-surface-variant text-sm mb-6">Cosmetic Dermatology &amp; Laser Science</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="bg-surface-container-low px-2 py-1 rounded text-[10px] text-on-surface-variant uppercase font-medium">Fillers</span>
<span className="bg-surface-container-low px-2 py-1 rounded text-[10px] text-on-surface-variant uppercase font-medium">Laser</span>
<span className="bg-surface-container-low px-2 py-1 rounded text-[10px] text-on-surface-variant uppercase font-medium">Revitalization</span>
</div>
<button className="w-full py-4 bg-primary text-on-primary rounded-xl font-medium tracking-wide hover:bg-primary-container transition-colors flex justify-center items-center gap-2">
                        Book Appointment
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
</button>
</div>
</div>
{/*  Doctor Card 3  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden group border border-outline-variant/15 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
<div className="aspect-[4/5] overflow-hidden bg-surface-container-low relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Doctor in clinical room with medical equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiZ8uOl25GfFYdFkP-Cz4GkZB-l4KkkV_7hLBfTj-vpnFnyI_u4APxKs-JsfhD48SnZScajIGuyT7HhH6yXEPlrk81ZalUOQurQda4N3Jn4FqyKZjWN6mnuTkWqaF6b1LUNtzigzGS6prxfTYhZaB0I6h8NOmcGk3LykBfdheqoIQZ5hRUOlQBNKkzyqG4ReWAFfay62tW41mnUrmCOu6bv5vBViIDkng2MiH4STQ0ADZ_IZe0CVkoLWAG7e8YYviNaKNJN-4t24S1"/>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline text-2xl text-on-surface">Dr. Marcus Chen</h3>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
<span className="font-label text-xs font-semibold">4.8</span>
</div>
</div>
<p className="text-on-surface-variant text-sm mb-6">Pediatric &amp; Clinical Dermatology</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="bg-surface-container-low px-2 py-1 rounded text-[10px] text-on-surface-variant uppercase font-medium">Eczema</span>
<span className="bg-surface-container-low px-2 py-1 rounded text-[10px] text-on-surface-variant uppercase font-medium">Pediatric</span>
<span className="bg-surface-container-low px-2 py-1 rounded text-[10px] text-on-surface-variant uppercase font-medium">Biopsy</span>
</div>
<button className="w-full py-4 bg-primary text-on-primary rounded-xl font-medium tracking-wide hover:bg-primary-container transition-colors flex justify-center items-center gap-2">
                        Book Appointment
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
</button>
</div>
</div>
{/*  Doctor Card 4  */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden group border border-outline-variant/15 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
<div className="aspect-[4/5] overflow-hidden bg-surface-container-low relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Female doctor smiling in clinical setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGqtYcRJf97Nyzdjr0matmHN9Htc8yivyCZ_nGEL8X8Dp3rDv189F8yc5rtrr4W-M7OLttiwiIyVwPucSO0K8TIRhF40MK0hzFTJlqubIn03EbZQlUGpTfuHz4eTwzn6JUroB8Okb1sG9B0lmOSzBTmRq48yVX5JXf6jVbZlcACK74PTTcOo73_hqkrggO0Vz0E_Z4Bl1cFxrt0JdY_KgOKaJxpCh_oGnS4ARnRqd2dmUgYjwGfTIr81oRN6SHcJ8JP3oBml6kUFjO"/>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline text-2xl text-on-surface">Dr. Sarah Khalil</h3>
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-sm" style={{fontVariationSettings: '"FILL" 1'}}>star</span>
<span className="font-label text-xs font-semibold">4.9</span>
</div>
</div>
<p className="text-on-surface-variant text-sm mb-6">Immunology &amp; Skin Pathology</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="bg-surface-container-low px-2 py-1 rounded text-[10px] text-on-surface-variant uppercase font-medium">Psoriasis</span>
<span className="bg-surface-container-low px-2 py-1 rounded text-[10px] text-on-surface-variant uppercase font-medium">Autoimmune</span>
<span className="bg-surface-container-low px-2 py-1 rounded text-[10px] text-on-surface-variant uppercase font-medium">Research</span>
</div>
<button className="w-full py-4 bg-primary text-on-primary rounded-xl font-medium tracking-wide hover:bg-primary-container transition-colors flex justify-center items-center gap-2">
                        Book Appointment
                        <span className="material-symbols-outlined text-sm">calendar_today</span>
</button>
</div>
</div>
{/*  Info Panel / Bento Element  */}
<div className="lg:col-span-2 bg-surface-container-low rounded-xl p-12 flex flex-col md:flex-row items-center gap-12 border border-outline-variant/10">
<div className="flex-1">
<span className="font-label text-[10px] tracking-widest uppercase text-primary mb-4 block">Tele-Health Support</span>
<h2 className="font-headline text-4xl text-on-surface mb-6 leading-tight">Can't make it to the Atelier in person?</h2>
<p className="text-on-surface-variant mb-8 leading-relaxed">
                        We offer high-definition digital consultations for select skin concerns. Receive professional guidance from the comfort of your home using our encrypted clinical portal.
                    </p>
<a className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all" href="#">
                        Learn about Virtual Care
                        <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<div className="w-full md:w-1/3 aspect-square bg-surface-container-lowest rounded-full p-4 border border-outline-variant/10 flex items-center justify-center">
<div className="text-center">
<span className="material-symbols-outlined text-primary text-6xl mb-4">video_chat</span>
<p className="font-headline text-lg">1:1 Virtual</p>
</div>
</div>
</div>
</div>
</main>
{/*  Professional Footer  */}
<footer className="w-full mt-16 bg-[#f4f3f1] dark:bg-[#1a1c1a] tonal-shift bg-[#f4f3f1] dark:bg-[#252822] flat no shadows">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 gap-6 w-full max-w-7xl mx-auto">
<div className="font-noto-serif text-xl text-[#3e5219] dark:text-[#c2ceaa]">BeAura Clinical Atelier</div>
<div className="flex flex-wrap justify-center gap-8">
<a className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors opacity-80 hover:opacity-100" href="#">Contact Us</a>
<a className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors opacity-80 hover:opacity-100" href="#">Shipping</a>
</div>
<div className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0] opacity-60">
                © 2024 BeAura Clinical Atelier. All rights reserved.
            </div>
</div>
</footer>

    </div>
  );
}
