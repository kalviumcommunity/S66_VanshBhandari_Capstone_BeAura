import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserDashboard() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-[#1a1c1a]/70 backdrop-blur-xl">
<div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
<span className="font-headline text-2xl font-bold text-[#3e5219] dark:text-[#c2ceaa] tracking-tighter">BeAura</span>
<div className="hidden md:flex items-center space-x-8">
<a className="font-headline text-lg tracking-tight text-[#3e5219] dark:text-[#c2ceaa] font-semibold border-b-2 border-[#3e5219] pb-1" href="#">Home</a>
<a className="font-headline text-lg tracking-tight text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors" href="#">About</a>
<a className="font-headline text-lg tracking-tight text-[#45483c] dark:text-[#e3e2e0] hover:text-[#3e5219] transition-colors" href="#">Services</a>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">notifications</button>
<div className="h-10 w-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a woman with glowing skin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgG4I26Clv2ss8wyP9E0W5h1rst84CQ57gxWylH48yDr-JKvhBqGHugsH4GJouTmadRwSfRCdnlLLFh1AHtjENBmoZlkuxtglbmCQnmAPkY7YudJz7tHsX9jqgokG9TAwnEZHYu3HL7abN80GPI1MdL97g315vxsXoeqfa0MxnhdGr9KmFkIq5PCN82I4OmXQpwXw03-N740_aKPBmFe_NVh5IIlzKJx0EzNDtXJMOAl7jJ1dy3AO0zI6A5h59pxNjTHoH_c_RXzZa"/>
</div>
</div>
</div>
</nav>
<main className="pt-24 pb-16 px-6 max-w-7xl mx-auto space-y-16">
{/*  Header Section  */}
<header className="space-y-2">
<span className="font-label text-[0.6875rem] uppercase tracking-[0.15em] text-on-surface-variant font-medium">Welcome back, Elara</span>
<h1 className="font-headline text-4xl md:text-5xl text-on-surface tracking-tight font-bold">Your Radiance Dashboard</h1>
<p className="text-on-surface-variant max-w-xl text-lg">A curated overview of your bespoke clinical journey, harmonizing science and self-care.</p>
</header>
{/*  Bento Grid Layout for Primary Insights  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
{/*  Daily Routine (Large Bento Item)  */}
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
<div className="group flex items-center gap-6 p-5 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/5 hover:border-primary/20 transition-all">
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
<div className="group flex items-center gap-6 p-5 bg-surface-container-lowest/50 opacity-60 rounded-2xl border border-dashed border-outline-variant transition-all">
<div className="w-12 h-12 rounded-xl bg-surface-variant/50 flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="wb_sunny">wb_sunny</span>
</div>
<div className="flex-1">
<h3 className="font-semibold text-on-surface">Broad Spectrum Shield</h3>
<p className="text-sm text-on-surface-variant">SPF 50+ Mineral Base</p>
</div>
<span className="material-symbols-outlined text-outline-variant">radio_button_unchecked</span>
</div>
</div>
</div>
{/*  Abstract leaf pattern overlay  */}
<div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
</section>
{/*  Diet Suggestion (Small Bento Item)  */}
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
<p className="text-sm font-medium text-on-surface">Omega-3 Rich Walnut &amp; Chia Mix</p>
</div>
<button className="w-full py-3 rounded-xl bg-secondary text-on-secondary font-label text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">Full Meal Plan</button>
</div>
</section>
</div>
{/*  Horizontal Product Sections  */}
<div className="space-y-12">
{/*  Skincare Products  */}
<section>
<div className="flex justify-between items-end mb-8 border-b border-outline-variant/10 pb-4">
<div>
<h2 className="font-headline text-3xl text-on-surface">Skincare Atelier</h2>
<p className="text-on-surface-variant">Your prescription-grade essentials.</p>
</div>
<a className="text-primary font-medium hover:underline flex items-center gap-1 text-sm" href="#">
                        View All <span className="material-symbols-outlined text-xs">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Product Card 1  */}
<div className="group bg-surface-container-lowest p-4 rounded-[1.5rem] shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
<div className="aspect-square rounded-2xl bg-surface-container-low mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" data-alt="Minimalist glass bottle of facial serum" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdY5Ias5e56JfD8IxtrtyrStnww-f8C2TRFd9IgpNyzIdr1apsQxMm6bB9HIyfJozruk1LjK0gPxmedZ0cJgMlzYqP-v_RoUDIHH4_-4bCJ2sd_p7mCZ-uFsdJbT9yGLZJcnoSnX7twHdYXZMpTSk8z4uHlyuBYa0MiU54N2CK3-Jmm5HTMPvKz8Y7jrlcdYyXk44pLlVqw_cWGu-YzwUCQsPowMhCexs_SDyroYDfa_5mSBG8KnNW4UoHfEBdfZPNORKJ0-TLxxZH"/>
<div className="absolute top-4 right-4">
<span className="bg-tertiary-container text-on-tertiary-container font-label text-[0.6rem] px-2 py-1 rounded tracking-tighter">RETINOID</span>
</div>
</div>
<h3 className="font-headline text-xl text-on-surface px-2">Night Repair Complex</h3>
<p className="text-on-surface-variant text-sm px-2 mb-4">Cellular turnover &amp; deep hydration.</p>
<div className="flex justify-between items-center px-2 py-2">
<span className="font-semibold text-primary">$84.00</span>
<button className="material-symbols-outlined bg-primary text-on-primary p-2 rounded-full scale-90 group-hover:scale-100 transition-all">add_shopping_cart</button>
</div>
</div>
{/*  Product Card 2  */}
<div className="group bg-surface-container-lowest p-4 rounded-[1.5rem] shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
<div className="aspect-square rounded-2xl bg-surface-container-low mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" data-alt="Creamy texture of a luxury face moisturizer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyY8Uv6VVfpJCDWZ9lHue7epPrbPdV04YHPcppjMdpjPm8AljADH2IQz_Xc1U89RTCs2pRPhrXYxL1AbA_9gjW3L5GHU0q3CWZcziMzRGIiQb9-RYhXYa57S0oLOYt-jZY3L2KBrhlSipZTn1jK8Re8i6fYPh6jCB7N-8M7iF6nE62JaNqMGIojk_yizTGZQHLvgv3bb3XKRnsdZkn95XSDAaOZpZ5h1zVgT3rD5KDMw9irPauP9OO7pfOw2CgDOGQ6Ri-0c-zYOIm"/>
<div className="absolute top-4 right-4">
<span className="bg-tertiary-container text-on-tertiary-container font-label text-[0.6rem] px-2 py-1 rounded tracking-tighter">CERAMIDES</span>
</div>
</div>
<h3 className="font-headline text-xl text-on-surface px-2">Barrier Balm No. 4</h3>
<p className="text-on-surface-variant text-sm px-2 mb-4">Intense lipid restoration formula.</p>
<div className="flex justify-between items-center px-2 py-2">
<span className="font-semibold text-primary">$62.00</span>
<button className="material-symbols-outlined bg-primary text-on-primary p-2 rounded-full scale-90 group-hover:scale-100 transition-all">add_shopping_cart</button>
</div>
</div>
{/*  Product Card 3  */}
<div className="group bg-surface-container-lowest p-4 rounded-[1.5rem] shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
<div className="aspect-square rounded-2xl bg-surface-container-low mb-6 overflow-hidden relative">
<img className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-700" data-alt="Clear apothecary bottle with dropper" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZeE9ko-W09mjsgOazcdD3cFynoLoCk3PCQosIIbWPxvcs7hlVDJu646xdy8_ThtGF5RnHtNESxGXeVJWGC9NmRIVa3YOQGqc6tlhXV0gOARhm6p2Shsti86M-H0vFBhXrWCV73DxwTOJynlUENT25h02nwhngbmYOfj2JfX-VUETw7r9RKVyOSuQoTlP0MVSWnwyhM_NYuaoCIbiV5sWmfei9FLLcvHs51mdSluKgwGrkyANIJlPG734S7lx1Nveijgd4mfEFDO5"/>
<div className="absolute top-4 right-4">
<span className="bg-tertiary-container text-on-tertiary-container font-label text-[0.6rem] px-2 py-1 rounded tracking-tighter">HYALURONIC</span>
</div>
</div>
<h3 className="font-headline text-xl text-on-surface px-2">Aqua-Drench Mist</h3>
<p className="text-on-surface-variant text-sm px-2 mb-4">Multi-molecular weight hydration.</p>
<div className="flex justify-between items-center px-2 py-2">
<span className="font-semibold text-primary">$45.00</span>
<button className="material-symbols-outlined bg-primary text-on-primary p-2 rounded-full scale-90 group-hover:scale-100 transition-all">add_shopping_cart</button>
</div>
</div>
</div>
</section>
{/*  Haircare Products (Asymmetric Layout)  */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-surface-container-high/30 rounded-[3rem] p-10 md:p-16">
<div className="space-y-8 order-2 lg:order-1">
<div>
<h2 className="font-headline text-3xl text-on-surface">Follicle Therapy</h2>
<p className="text-on-surface-variant mt-2">Nurturing the roots of your confidence.</p>
</div>
<div className="space-y-6">
<div className="flex gap-6 items-center">
<div className="w-20 h-20 rounded-2xl bg-surface-container-lowest overflow-hidden flex-shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Amber glass hair oil bottle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAspmQrLrB16DtVr8tO9ntu8XeHIzG7Ffz3cf2VcsPTsccJlHuShGrBNS2332jR43jfBvZwR8qX8cmTAiCuj8_hsvMqO0QCUIs9929-S4uKlXwTEYiS4IKLm59HdA1EaveKWkXk5bBkb1mAtqTNP7PxtrjY2u-gBnbV5T2NSnIchqFF2OKogG3VAdDpkZ-MSAECOyV4xyfNf96RsCBQpDdA84sRWS7eTSXd4h1OPcFv89yf35f5_coDen96QBsIyftY4aHX6dRSvDkl"/>
</div>
<div>
<h4 className="font-semibold text-on-surface">Scalp Revitalizing Oil</h4>
<p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Weekly Treatment</p>
</div>
</div>
<div className="flex gap-6 items-center">
<div className="w-20 h-20 rounded-2xl bg-surface-container-lowest overflow-hidden flex-shrink-0 shadow-sm">
<img className="w-full h-full object-cover" data-alt="Professional shampoo bottle design" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDApWIlX_yzCOq8WvUkrJyGkam0L8cufAou1irMj2DmUrzWfM3iR12N67goKY8fBKB49_1lcO7rqUWV5RRJqdFxdSfb2_T0aUU29d_jsliBfXoLWWJs550BhvzINa4cA0vL1MUIOKzAOHzrSxUv_L0vT-Eu-WQbfwMvmAzdAKrS4SjNc2v7zORF989rLn-Bi6h9U8JkCbzA97oIo-psAoJ32OgyCV5pWJv5Du3GzY44VeBSmC5V_UeFm7V6hl_B5SYnJncmjZMPHTAu"/>
</div>
<div>
<h4 className="font-semibold text-on-surface">Protein Strength Wash</h4>
<p className="text-xs text-on-surface-variant uppercase tracking-widest mt-1">Daily Maintenance</p>
</div>
</div>
</div>
<button className="bg-primary text-on-primary px-8 py-4 rounded-full font-label text-xs uppercase tracking-widest hover:bg-primary-container transition-colors shadow-lg shadow-primary/10">Explore Haircare Collection</button>
</div>
<div className="relative order-1 lg:order-2">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="Close up of healthy flowing hair in natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU-u2p5_KPRJ_L3vCxlvatdCXk-Uab4-z_LksQZro0hYZ3PGBRE66DTywabcIpRHt76YWIpOqERlG5zoNSMR6c8h4qfJOW21HlDWklZpWYK5694untMzlcevGDhicLbRD1BlBx0HpP9wWh6zXz-iT7FlwnAoklP_v1bgKE-25k1OCCNMX8-5rzh_Uj8Rwx8pbAQ5j3g1HDJ6NFk5XhvVXHAg2y1OQr_leNziEbtv7MN0iofv05jNEl6ChWM0KC1d2ORtYlAyLrbBot"/>
</div>
{/*  Decorative floating element  */}
<div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-3xl shadow-xl max-w-[200px] hidden md:block">
<p className="font-headline italic text-primary text-lg">"Your hair is the crown you never take off."</p>
</div>
</div>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="w-full mt-16 bg-[#f4f3f1] dark:bg-[#1a1c1a]">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 gap-6 w-full max-w-7xl mx-auto">
<span className="font-noto-serif text-xl text-[#3e5219] dark:text-[#c2ceaa]">BeAura</span>
<div className="flex gap-8">
<a className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-stone-400 hover:text-[#3e5219] dark:hover:text-[#c2ceaa] transition-colors" href="#">Privacy Policy</a>
<a className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-stone-400 hover:text-[#3e5219] dark:hover:text-[#c2ceaa] transition-colors" href="#">Terms of Service</a>
<a className="font-inter text-xs tracking-widest uppercase text-[#45483c] dark:text-stone-400 hover:text-[#3e5219] dark:hover:text-[#c2ceaa] transition-colors" href="#">Contact Us</a>
</div>
<p className="font-inter text-[0.65rem] tracking-widest uppercase text-[#45483c] dark:text-[#e3e2e0]">© 2024 BeAura Clinical Atelier. All rights reserved.</p>
</div>
</footer>
{/*  Bottom Navigation for Mobile  */}
<div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-surface/80 backdrop-blur-xl border border-outline-variant/20 rounded-full h-16 flex items-center justify-around px-4 shadow-2xl z-50">
<a className="text-primary flex flex-col items-center" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>home</span>
<span className="text-[0.6rem] font-bold">Home</span>
</a>
<a className="text-on-surface-variant flex flex-col items-center" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[0.6rem]">Stats</span>
</a>
<a className="text-on-surface-variant flex flex-col items-center" href="#">
<span className="material-symbols-outlined">shopping_bag</span>
<span className="text-[0.6rem]">Shop</span>
</a>
<a className="text-on-surface-variant flex flex-col items-center" href="#">
<span className="material-symbols-outlined">person</span>
<span className="text-[0.6rem]">Profile</span>
</a>
</div>

    </div>
  );
}
