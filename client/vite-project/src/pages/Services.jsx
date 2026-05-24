import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="bg-[#faf9f6] text-[#1a1c1a] font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen pb-10">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 backdrop-blur-xl no-border selection:bg-primary-fixed selection:text-on-primary-fixed">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="font-noto-serif text-2xl font-bold text-[#3e5219] tracking-tighter">BeAura</Link>
          <div className="hidden md:flex gap-10 items-center">
            <Link className="font-noto-serif text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors" to="/user-dashboard">Home</Link>
            <Link className="font-noto-serif text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors" to="/about">About</Link>
            <Link className="font-noto-serif text-lg tracking-tight text-[#3e5219] font-semibold border-b-2 border-[#3e5219] pb-1" to="/services">Services</Link>
          </div>
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-on-surface-variant scale-95 duration-200 ease-out hover:text-primary">search</button>
            <Link to="/login" className="bg-primary text-on-primary px-6 py-2 rounded-full font-label text-xs tracking-widest uppercase hover:opacity-90 transition-all">Login</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 md:mb-24">
          <span className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary mb-4 block">Personalized Selection</span>
          <h1 className="font-noto-serif text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight max-w-2xl">
            Curation for your <br/><span className="italic font-normal">unique radiance.</span>
          </h1>
        </header>

        {/* Filters Section */}
        <section className="mb-12 flex flex-col md:flex-row gap-8 md:items-end justify-between">
          <div className="flex flex-col gap-6">
            <div>
              <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-3 block">Skin Type</label>
              <div className="flex flex-wrap gap-2">
                <button className="px-5 py-2 rounded-full bg-primary text-on-primary text-sm font-medium transition-all">All Types</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-all">Oily</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-all">Dry</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-all">Combination</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-all">Sensitive</button>
              </div>
            </div>
            <div>
              <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-3 block">Concern</label>
              <div className="flex flex-wrap gap-2">
                <button className="px-5 py-2 rounded-full bg-secondary-container/20 text-secondary text-sm font-medium border border-secondary/10">Anti-Aging</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-all">Hydration</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-all">Brightening</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-all">Texture</button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="text-sm font-medium">12 Products Found</span>
            <span className="material-symbols-outlined text-lg">tune</span>
          </div>
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {/* Product Card 1 */}
          <div className="group flex flex-col">
            <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden relative mb-6">
              <img alt="Botanical Serum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Minimalist frosted glass serum bottle on beige background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHMC9rY6qjXlOFXW2qT1UhcI8dMuBcHm-puMp_ukakn2BNGQdT1MeNONYif-JnvNLL4Xloc_MODls_dw9M6Tl5-DLxQamNdkxwzzz7bXL0c9rzfEiDf3atWG0EafxpJLOx35F-QxImSOhVZbMdXSO2K4IZCoP7-iywC0FJzYbmPt_kzXiePTJPC0ldL85gCSP4iloVdd7ptAPC1w_EJcNoYRoWP6fuqMrazs-QcjsNDjxdk_Po2e_ezAALOizs0OBXIDQ5hAQ-eXMc" />
              <div className="absolute top-4 left-4">
                <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-2 py-1 rounded tracking-tighter uppercase">Clinical Grade</span>
              </div>
            </div>
            <div className="flex flex-col flex-grow px-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-noto-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors">Aura Glow Elixir</h3>
                <span className="font-inter text-sm font-semibold text-on-surface-variant">$84</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">A multi-molecular hyaluronic complex combined with fermented botanicals for deep cellular hydration.</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                </div>
                <button className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary/20 pb-1 hover:border-primary transition-all">View Details</button>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="group flex flex-col">
            <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden relative mb-6">
              <img alt="Niacinamide Treatment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="White cream texture swatch on a smooth stone surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf_GnR6VqhbWW-2SCMMTMzGxaWM0ihPReKmj2CqPm0EMVHJB3JqxmaSrf-A4p8vsuaOgn9bwnVphgHICYAFHFxnnb9gMYJyYiy7lwRmVUewbJeJxTloT0YwYTUYmBExz3PvIiqRmvdm1MmV_qufNU55dxOYTqZN3wy0qaeMLX5uZoQbO5AV3VF2TL-CBi3bFYZJOfTOwcx-lGznDKCDzQ4A9ksxDN9hEabILREGEW_vQSCiZpovqCYitYqp4gCN0cYw93EkXGBQDfy" />
              <div className="absolute top-4 left-4">
                <span className="bg-tertiary-container text-on-tertiary-container text-[10px] font-bold px-2 py-1 rounded tracking-tighter uppercase">Bestseller</span>
              </div>
            </div>
            <div className="flex flex-col flex-grow px-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-noto-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors">Resurfacing Balm</h3>
                <span className="font-inter text-sm font-semibold text-on-surface-variant">$62</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">A gentle overnight treatment using cold-pressed Bakuchiol to refine texture and stimulate collagen.</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                </div>
                <button className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary/20 pb-1 hover:border-primary transition-all">View Details</button>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="group flex flex-col">
            <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden relative mb-6">
              <img alt="Cleansing Oil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Modern amber glass bottle with pump in soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg3ccU_k7wgERfF29r2d69NNtTq2PMiz6EBUfZDikicmw9Onw2chKS_NQMaYiok3Jb5HUYWJ-3ohvQrF51vs778M5XprprTVPMR06N1EgAFNp4IJ1p0FT4U-MPkfTLjAsts_jfTcCKel57XAYe5iw4neCxxgy5D_iSR8PAQubR5zPSw_npmg8J5e_RTxz1jIdNPJwnnA7NODNPCSp1N7IInEVltGywawq2a8dlDrPHEc2Dgo3RGNpFI8wphiDVH0AtyYaunQK8ZHd6" />
            </div>
            <div className="flex flex-col flex-grow px-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-noto-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors">Silk Cleansing Oil</h3>
                <span className="font-inter text-sm font-semibold text-on-surface-variant">$48</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">A transforming oil-to-milk cleanser infused with Squalane and Vitamin E to remove impurities without stripping.</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                </div>
                <button className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary/20 pb-1 hover:border-primary transition-all">View Details</button>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="group flex flex-col">
            <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden relative mb-6">
              <img alt="Clay Mask" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Ceramic bowl with green clay mask mixture and wooden spoon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuFRSnkxaK3JhNhzD1z8cv6HiCdOKDcP6FWddmQE7cJtlFg-sMSwWS6cih0Wjm2irdtZe7E2oG8bc2d2AVkb39kcgOTX-a0GjVtw9Dav41uEC5d0UpyPXF8g6zpJPNNZtW8dTetuPu5NinSq-YKic1BIpqojj2fkUrkmqNaR41DBLdagj9dU074zN8vKp9Uox16l54cu-QWzY1Sv9BFJL2rKwD3fC9Swsxye94jT6cCT16hgcg6l7nvoTCIlOYRQk3rRR3N0VufYNd" />
            </div>
            <div className="flex flex-col flex-grow px-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-noto-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors">Detoxify Mineral Mask</h3>
                <span className="font-inter text-sm font-semibold text-on-surface-variant">$55</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">Rare volcanic clays blended with activated charcoal and organic matcha to clarify and decongest.</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                </div>
                <button className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary/20 pb-1 hover:border-primary transition-all">View Details</button>
              </div>
            </div>
          </div>

          {/* Product Card 5 */}
          <div className="group flex flex-col">
            <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden relative mb-6">
              <img alt="Eye Cream" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Small luxury jar sitting on a stack of linen napkins" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCJBqJQ8ayBjINlX5jqTIyChKwVXhFWKwZo6x12-rmTV1Exsv6gBynnDhZFLaPP9etJsTDilN1J2TfonsWwlLkTChcnQEx7mYcALpGUIxHpCr8SG1sdLpuwg0Qz1ba47C6N2fHQOL-rP8aIZRI9_2T64GbqpXC1m4-GEuOWfIYmFNn9OHuUVCJbOWKs50_1tu7ArREsmyWNUP9f8vAKWHxZB530XP8maoBoQk2f1lZBwE13tiSFvr8-Su2kkH-nj8gh7-6CgE4ief9" />
              <div className="absolute top-4 left-4">
                <span className="bg-secondary-container/90 text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded tracking-tighter uppercase">Limited Release</span>
              </div>
            </div>
            <div className="flex flex-col flex-grow px-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-noto-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors">Sculpting Eye Treatment</h3>
                <span className="font-inter text-sm font-semibold text-on-surface-variant">$95</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">A peptide-rich concentrate designed to lift, firm, and brighten the delicate periorbital area.</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                </div>
                <button className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary/20 pb-1 hover:border-primary transition-all">View Details</button>
              </div>
            </div>
          </div>

          {/* Product Card 6 */}
          <div className="group flex flex-col">
            <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden relative mb-6">
              <img alt="Mist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Droplets of water on a clear glass surface with a botanical reflection" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5w-dpBEKLzPbMjk1kr5uQuQJQb96QWSUEiDcHt-y_oEOL5gWXqMbScksJlA5tGtfynWkRsprIaI171WOwP3LvQjmLQNDC7fnaCA4xFXSoWlo7RDMsU_EmcYyir8m3x3WIvtJqSYbTojXCGI3fb03oXQbyIKFsbVZcNM3GQPPD8g3Gph6EHa6OlcyxJF1EQQ1TL0uefayR6J5zwxfpljLsjdG_cz8m-eVrWWjg0mSpje6QufbH_Q7zxVD_eRhWE_k5_WkHXPYM_GZP" />
            </div>
            <div className="flex flex-col flex-grow px-2">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-noto-serif text-xl font-bold text-primary group-hover:text-secondary transition-colors">Rose Water Essence</h3>
                <span className="font-inter text-sm font-semibold text-on-surface-variant">$36</span>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">Pure Damask rose distillate paired with aloe and witch hazel to balance pH and soothe on contact.</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-primary-container"></span>
                  <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
                </div>
                <button className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary/20 pb-1 hover:border-primary transition-all">View Details</button>
              </div>
            </div>
          </div>
        </div>

        {/* Load More / Pagination */}
        <div className="mt-24 flex flex-col items-center">
          <button className="group flex items-center gap-3 bg-surface-container text-primary px-10 py-4 rounded-full font-label text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-on-primary transition-all duration-300">
            Load More Discoveries
            <span className="material-symbols-outlined text-sm group-hover:translate-y-1 transition-transform">expand_more</span>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-16 bg-[#f4f3f1] dark:bg-[#1a1c1a]">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-10 gap-6 w-full max-w-7xl mx-auto">
          <div className="font-noto-serif text-xl text-primary font-bold">BeAura</div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="font-inter text-xs tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="font-inter text-xs tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="font-inter text-xs tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Us</a>
            <a className="font-inter text-xs tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors" href="#">Shipping</a>
          </div>
          <div className="font-inter text-[10px] tracking-widest uppercase text-on-surface-variant/60">
            © 2024 BeAura Clinical Atelier. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Ingredient Chip Concept */}
      <div className="fixed bottom-8 right-8 hidden lg:block">
        <div className="bg-surface-container-lowest shadow-2xl rounded-2xl p-6 max-w-[240px] border border-outline-variant/10 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
            <span className="font-label text-[10px] tracking-widest uppercase text-primary font-bold">Featured Ingredient</span>
          </div>
          <h4 className="font-noto-serif text-lg text-primary mb-2">Bakuchiol</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed mb-4">A plant-based alternative to retinol that offers age-defying benefits without irritation.</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-tertiary-container/30 text-on-tertiary-container text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-tighter">Vegan</span>
            <span className="bg-tertiary-container/30 text-on-tertiary-container text-[9px] px-2 py-0.5 rounded uppercase font-bold tracking-tighter">Cold-Pressed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
