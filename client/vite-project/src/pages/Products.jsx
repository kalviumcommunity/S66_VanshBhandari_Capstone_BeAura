import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MOCK_PRODUCTS = [
  { id: 1, name: "Aura Glow Elixir", price: 84, description: "A multi-molecular hyaluronic complex combined with fermented botanicals.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHMC9rY6qjXlOFXW2qT1UhcI8dMuBcHm-puMp_ukakn2BNGQdT1MeNONYif-JnvNLL4Xloc_MODls_dw9M6Tl5-DLxQamNdkxwzzz7bXL0c9rzfEiDf3atWG0EafxpJLOx35F-QxImSOhVZbMdXSO2K4IZCoP7-iywC0FJzYbmPt_kzXiePTJPC0ldL85gCSP4iloVdd7ptAPC1w_EJcNoYRoWP6fuqMrazs-QcjsNDjxdk_Po2e_ezAALOizs0OBXIDQ5hAQ-eXMc" },
  { id: 2, name: "Resurfacing Balm", price: 62, description: "A gentle overnight treatment using cold-pressed Bakuchiol to refine texture.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf_GnR6VqhbWW-2SCMMTMzGxaWM0ihPReKmj2CqPm0EMVHJB3JqxmaSrf-A4p8vsuaOgn9bwnVphgHICYAFHFxnnb9gMYJyYiy7lwRmVUewbJeJxTloT0YwYTUYmBExz3PvIiqRmvdm1MmV_qufNU55dxOYTqZN3wy0qaeMLX5uZoQbO5AV3VF2TL-CBi3bFYZJOfTOwcx-lGznDKCDzQ4A9ksxDN9hEabILREGEW_vQSCiZpovqCYitYqp4gCN0cYw93EkXGBQDfy" },
  { id: 3, name: "Silk Cleansing Oil", price: 48, description: "A transforming oil-to-milk cleanser infused with Squalane and Vitamin E.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg3ccU_k7wgERfF29r2d69NNtTq2PMiz6EBUfZDikicmw9Onw2chKS_NQMaYiok3Jb5HUYWJ-3ohvQrF51vs778M5XprprTVPMR06N1EgAFNp4IJ1p0FT4U-MPkfTLjAsts_jfTcCKel57XAYe5iw4neCxxgy5D_iSR8PAQubR5zPSw_npmg8J5e_RTxz1jIdNPJwnnA7NODNPCSp1N7IInEVltGywawq2a8dlDrPHEc2Dgo3RGNpFI8wphiDVH0AtyYaunQK8ZHd6" },
  { id: 4, name: "Detoxify Mineral Mask", price: 55, description: "Rare volcanic clays blended with activated charcoal and organic matcha.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuFRSnkxaK3JhNhzD1z8cv6HiCdOKDcP6FWddmQE7cJtlFg-sMSwWS6cih0Wjm2irdtZe7E2oG8bc2d2AVkb39kcgOTX-a0GjVtw9Dav41uEC5d0UpyPXF8g6zpJPNNZtW8dTetuPu5NinSq-YKic1BIpqojj2fkUrkmqNaR41DBLdagj9dU074zN8vKp9Uox16l54cu-QWzY1Sv9BFJL2rKwD3fC9Swsxye94jT6cCT16hgcg6l7nvoTCIlOYRQk3rRR3N0VufYNd"},
  { id: 5, name: "Sculpting Eye Treatment", price: 95, description: "A peptide-rich concentrate designed to lift, firm, and brighten.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCJBqJQ8ayBjINlX5jqTIyChKwVXhFWKwZo6x12-rmTV1Exsv6gBynnDhZFLaPP9etJsTDilN1J2TfonsWwlLkTChcnQEx7mYcALpGUIxHpCr8SG1sdLpuwg0Qz1ba47C6N2fHQOL-rP8aIZRI9_2T64GbqpXC1m4-GEuOWfIYmFNn9OHuUVCJbOWKs50_1tu7ArREsmyWNUP9f8vAKWHxZB530XP8maoBoQk2f1lZBwE13tiSFvr8-Su2kkH-nj8gh7-6CgE4ief9" },
  { id: 6, name: "Rose Water Essence", price: 36, description: "Pure Damask rose distillate paired with aloe and witch hazel.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5w-dpBEKLzPbMjk1kr5uQuQJQb96QWSUEiDcHt-y_oEOL5gWXqMbScksJlA5tGtfynWkRsprIaI171WOwP3LvQjmLQNDC7fnaCA4xFXSoWlo7RDMsU_EmcYyir8m3x3WIvtJqSYbTojXCGI3fb03oXQbyIKFsbVZcNM3GQPPD8g3Gph6EHa6OlcyxJF1EQQ1TL0uefayR6J5zwxfpljLsjdG_cz8m-eVrWWjg0mSpje6QufbH_Q7zxVD_eRhWE_k5_WkHXPYM_GZP"}
];

export default function Products() {
  const navigate = useNavigate();

  const handleAddToCart = (name) => {
    alert(`Added ${name} to cart!`);
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 backdrop-blur-xl border-b border-surface-container">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="font-headline text-2xl font-bold text-primary tracking-tighter">BeAura</Link>
          <div className="hidden md:flex gap-10 items-center">
            <Link to="/user-dashboard" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Dashboard</Link>
            <Link to="/products" className="font-headline text-lg tracking-tight text-primary font-semibold border-b-2 border-primary pb-1">Shop</Link>
            <Link to="/booking" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Bookings</Link>
            <Link to="/clinic" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Clinic Finder</Link>
          </div>
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">shopping_cart</button>
            <button onClick={() => navigate('/login')} className="bg-primary text-on-primary px-6 py-2 rounded-full font-label text-xs tracking-widest uppercase hover:opacity-90 transition-all">Account</button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <header className="mb-16 md:mb-24">
          <span className="font-label text-[10px] tracking-[0.2em] uppercase text-secondary mb-4 block">Personalized Selection</span>
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-primary leading-tight max-w-2xl">
            Curation for your <br/><span className="italic font-normal">unique radiance.</span>
          </h1>
        </header>

        <section className="mb-12 flex flex-col md:flex-row gap-8 md:items-end justify-between">
          <div className="flex flex-col gap-6">
            <div>
              <label className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-3 block">Skin Type</label>
              <div className="flex flex-wrap gap-2">
                <button className="px-5 py-2 rounded-full bg-primary text-on-primary text-sm font-medium transition-all">All Types</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-all">Oily</button>
                <button className="px-5 py-2 rounded-full bg-surface-container-low text-on-surface-variant text-sm font-medium hover:bg-surface-container-high transition-all">Dry</button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="text-sm font-medium">{MOCK_PRODUCTS.length} Products Found</span>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {MOCK_PRODUCTS.map((prod) => (
            <div key={prod.id} className="group flex flex-col">
              <div className="aspect-[4/5] bg-surface-container-low rounded-xl overflow-hidden relative mb-6">
                <img alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src={prod.image} />
              </div>
              <div className="flex flex-col flex-grow px-2">
                <div className="flex justify-between items-start mb-2">
                  <Link to={`/products/${prod.id}`} className="font-headline text-xl font-bold text-primary hover:text-secondary hover:underline transition-colors">{prod.name}</Link>
                  <span className="font-body text-sm font-semibold text-on-surface-variant">${prod.price}</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-6 font-light">{prod.description}</p>
                <div className="mt-auto flex items-center justify-between">
                  <button onClick={() => handleAddToCart(prod.name)} className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary/20 pb-1 hover:border-primary transition-all flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Add To Cart
                  </button>
                  <Link to={`/products/${prod.id}`} className="text-secondary text-xs uppercase font-bold hover:underline">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
