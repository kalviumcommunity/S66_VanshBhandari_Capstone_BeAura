import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MOCK_PRODUCTS = [
  { id: 1, name: "Aura Glow Elixir", price: 84, description: "A multi-molecular hyaluronic complex combined with fermented botanicals applied daily. Boosts the natural skin defense and promotes high cellular hydration all year long.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHMC9rY6qjXlOFXW2qT1UhcI8dMuBcHm-puMp_ukakn2BNGQdT1MeNONYif-JnvNLL4Xloc_MODls_dw9M6Tl5-DLxQamNdkxwzzz7bXL0c9rzfEiDf3atWG0EafxpJLOx35F-QxImSOhVZbMdXSO2K4IZCoP7-iywC0FJzYbmPt_kzXiePTJPC0ldL85gCSP4iloVdd7ptAPC1w_EJcNoYRoWP6fuqMrazs-QcjsNDjxdk_Po2e_ezAALOizs0OBXIDQ5hAQ-eXMc" },
  { id: 2, name: "Resurfacing Balm", price: 62, description: "A gentle overnight treatment using cold-pressed Bakuchiol to refine texture. It perfectly matches with your nightly skin cycle to erase imperfections and even out the skin tone.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf_GnR6VqhbWW-2SCMMTMzGxaWM0ihPReKmj2CqPm0EMVHJB3JqxmaSrf-A4p8vsuaOgn9bwnVphgHICYAFHFxnnb9gMYJyYiy7lwRmVUewbJeJxTloT0YwYTUYmBExz3PvIiqRmvdm1MmV_qufNU55dxOYTqZN3wy0qaeMLX5uZoQbO5AV3VF2TL-CBi3bFYZJOfTOwcx-lGznDKCDzQ4A9ksxDN9hEabILREGEW_vQSCiZpovqCYitYqp4gCN0cYw93EkXGBQDfy" },
  { id: 3, name: "Silk Cleansing Oil", price: 48, description: "A transforming oil-to-milk cleanser infused with Squalane and Vitamin E.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg3ccU_k7wgERfF29r2d69NNtTq2PMiz6EBUfZDikicmw9Onw2chKS_NQMaYiok3Jb5HUYWJ-3ohvQrF51vs778M5XprprTVPMR06N1EgAFNp4IJ1p0FT4U-MPkfTLjAsts_jfTcCKel57XAYe5iw4neCxxgy5D_iSR8PAQubR5zPSw_npmg8J5e_RTxz1jIdNPJwnnA7NODNPCSp1N7IInEVltGywawq2a8dlDrPHEc2Dgo3RGNpFI8wphiDVH0AtyYaunQK8ZHd6" }
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = MOCK_PRODUCTS.find(p => p.id === parseInt(id)) || MOCK_PRODUCTS[0];

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 backdrop-blur-xl border-b border-surface-container">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="font-headline text-2xl font-bold text-primary tracking-tighter">BeAura</Link>
          <div className="hidden md:flex gap-10 items-center">
            <Link to="/products" className="font-headline text-lg tracking-tight text-primary font-semibold border-b-2 border-primary pb-1">Shop</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl bg-surface-container-low">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <span className="text-secondary font-label uppercase tracking-widest text-xs">Exclusively Formulated</span>
          <h1 className="font-headline text-5xl text-primary font-bold">{product.name}</h1>
          <p className="text-2xl font-body text-on-surface-variant">${product.price}</p>
          <p className="text-lg text-on-surface-variant leading-relaxed border-t border-outline-variant/20 pt-6">
            {product.description}
          </p>
          <div className="pt-6">
            <button className="px-10 py-4 w-full bg-primary text-on-primary rounded-full hover:bg-primary-container hover:text-on-primary-container font-semibold tracking-widest uppercase transition-all shadow-xl shadow-primary/20 flex justify-center items-center gap-3">
              <span className="material-symbols-outlined">shopping_bag</span> Add to Regimen
            </button>
          </div>
          <Link to="/products" className="inline-block mt-4 text-primary hover:underline font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">arrow_back</span> Back to Collection
          </Link>
        </div>
      </main>
    </div>
  );
}
