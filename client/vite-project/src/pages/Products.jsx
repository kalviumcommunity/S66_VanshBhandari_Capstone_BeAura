import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileModal from '../components/ProfileModal';

const MOCK_PRODUCTS = [
  { id: 1, name: "Aura Glow Elixir", price: 84, skinType: "dry", description: "A multi-molecular hyaluronic complex combined with fermented botanicals.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHMC9rY6qjXlOFXW2qT1UhcI8dMuBcHm-puMp_ukakn2BNGQdT1MeNONYif-JnvNLL4Xloc_MODls_dw9M6Tl5-DLxQamNdkxwzzz7bXL0c9rzfEiDf3atWG0EafxpJLOx35F-QxImSOhVZbMdXSO2K4IZCoP7-iywC0FJzYbmPt_kzXiePTJPC0ldL85gCSP4iloVdd7ptAPC1w_EJcNoYRoWP6fuqMrazs-QcjsNDjxdk_Po2e_ezAALOizs0OBXIDQ5hAQ-eXMc" },
  { id: 2, name: "Resurfacing Balm", price: 62, skinType: "oily", description: "A gentle overnight treatment using cold-pressed Bakuchiol to refine texture.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf_GnR6VqhbWW-2SCMMTMzGxaWM0ihPReKmj2CqPm0EMVHJB3JqxmaSrf-A4p8vsuaOgn9bwnVphgHICYAFHFxnnb9gMYJyYiy7lwRmVUewbJeJxTloT0YwYTUYmBExz3PvIiqRmvdm1MmV_qufNU55dxOYTqZN3wy0qaeMLX5uZoQbO5AV3VF2TL-CBi3bFYZJOfTOwcx-lGznDKCDzQ4A9ksxDN9hEabILREGEW_vQSCiZpovqCYitYqp4gCN0cYw93EkXGBQDfy" },
  { id: 3, name: "Silk Cleansing Oil", price: 48, skinType: "dry", description: "A transforming oil-to-milk cleanser infused with Squalane and Vitamin E.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg3ccU_k7wgERfF29r2d69NNtTq2PMiz6EBUfZDikicmw9Onw2chKS_NQMaYiok3Jb5HUYWJ-3ohvQrF51vs778M5XprprTVPMR06N1EgAFNp4IJ1p0FT4U-MPkfTLjAsts_jfTcCKel57XAYe5iw4neCxxgy5D_iSR8PAQubR5zPSw_npmg8J5e_RTxz1jIdNPJwnnA7NODNPCSp1N7IInEVltGywawq2a8dlDrPHEc2Dgo3RGNpFI8wphiDVH0AtyYaunQK8ZHd6" },
  { id: 4, name: "Detoxify Mineral Mask", price: 55, skinType: "oily", description: "Rare volcanic clays blended with activated charcoal and organic matcha.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuFRSnkxaK3JhNhzD1z8cv6HiCdOKDcP6FWddmQE7cJtlFg-sMSwWS6cih0Wjm2irdtZe7E2oG8bc2d2AVkb39kcgOTX-a0GjVtw9Dav41uEC5d0UpyPXF8g6zpJPNNZtW8dTetuPu5NinSq-YKic1BIpqojj2fkUrkmqNaR41DBLdagj9dU074zN8vKp9Uox16l54cu-QWzY1Sv9BFJL2rKwD3fC9Swsxye94jT6cCT16hgcg6l7nvoTCIlOYRQk3rRR3N0VufYNd"},
  { id: 5, name: "Sculpting Eye Treatment", price: 95, skinType: "dry", description: "A peptide-rich concentrate designed to lift, firm, and brighten.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCJBqJQ8ayBjINlX5jqTIyChKwVXhFWKwZo6x12-rmTV1Exsv6gBynnDhZFLaPP9etJsTDilN1J2TfonsWwlLkTChcnQEx7mYcALpGUIxHpCr8SG1sdLpuwg0Qz1ba47C6N2fHQOL-rP8aIZRI9_2T64GbqpXC1m4-GEuOWfIYmFNn9OHuUVCJbOWKs50_1tu7ArREsmyWNUP9f8vAKWHxZB530XP8maoBoQk2f1lZBwE13tiSFvr8-Su2kkH-nj8gh7-6CgE4ief9" },
  { id: 6, name: "Rose Water Essence", price: 36, skinType: "oily", description: "Pure Damask rose distillate paired with aloe and witch hazel.", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5w-dpBEKLzPbMjk1kr5uQuQJQb96QWSUEiDcHt-y_oEOL5gWXqMbScksJlA5tGtfynWkRsprIaI171WOwP3LvQjmLQNDC7fnaCA4xFXSoWlo7RDMsU_EmcYyir8m3x3WIvtJqSYbTojXCGI3fb03oXQbyIKFsbVZcNM3GQPPD8g3Gph6EHa6OlcyxJF1EQQ1TL0uefayR6J5zwxfpljLsjdG_cz8m-eVrWWjg0mSpje6QufbH_Q7zxVD_eRhWE_k5_WkHXPYM_GZP"}
];

export default function Products() {
  const [user, setUser] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedSkinType, setSelectedSkinType] = useState('all');
  const navigate = useNavigate();

  // Cart State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState(() => {
    const local = localStorage.getItem('beaura_cart');
    return local ? JSON.parse(local) : [];
  });

  // Sync Cart with localStorage
  useEffect(() => {
    localStorage.setItem('beaura_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Auto-open cart for feedback
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, change) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + change;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 backdrop-blur-xl border-b border-surface-container">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="font-headline text-2xl font-bold text-primary tracking-tighter">BeAura</Link>
          {user ? (
            /* Logged In Navbar */
            <>
              <div className="hidden md:flex gap-10 items-center">
                <Link to="/user-dashboard" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Men's Dashboard</Link>
                <Link to="/women-dashboard" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Women's Hub</Link>
                <Link to="/products" className="font-headline text-lg tracking-tight text-primary font-semibold border-b-2 border-primary pb-1">Shop</Link>
                <Link to="/booking" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Appointments</Link>
                <Link to="/clinic" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Clinic Finder</Link>
              </div>
              <div className="flex items-center gap-6">
                <button onClick={() => setIsCartOpen(true)} className="relative flex items-center justify-center p-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">shopping_cart</span>
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border border-white">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  )}
                </button>
                <button onClick={handleLogout} className="text-secondary text-sm font-semibold hover:underline">Logout</button>
                <div onClick={() => setShowProfileModal(true)} className="h-10 w-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 overflow-hidden cursor-pointer hover:scale-105 hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-2xl text-on-surface">person</span>
                </div>
              </div>
            </>
          ) : (
            /* Guest Navbar */
            <>
              <div className="hidden md:flex items-center gap-10">
                <Link to="/" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Home</Link>
                <Link to="/about" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">About</Link>
              </div>
              <div className="flex items-center gap-6">
                <button onClick={() => setIsCartOpen(true)} className="relative flex items-center justify-center p-2 text-on-surface-variant hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">shopping_cart</span>
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center border border-white">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </span>
                  )}
                </button>
                <button onClick={() => navigate('/login')} className="bg-primary text-on-primary px-6 py-2 rounded-full font-label text-xs tracking-widest uppercase hover:opacity-90 transition-all">Login</button>
              </div>
            </>
          )}
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
                <button onClick={() => setSelectedSkinType('all')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedSkinType === 'all' ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}>All Types</button>
                <button onClick={() => setSelectedSkinType('oily')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedSkinType === 'oily' ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}>Oily</button>
                <button onClick={() => setSelectedSkinType('dry')} className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedSkinType === 'dry' ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}>Dry</button>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="text-sm font-medium">
              {(selectedSkinType === 'all' ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter(p => p.skinType === selectedSkinType)).length} Products Found
            </span>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {(selectedSkinType === 'all' ? MOCK_PRODUCTS : MOCK_PRODUCTS.filter(p => p.skinType === selectedSkinType)).map((prod) => (
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
                  <button onClick={() => handleAddToCart(prod)} className="text-primary text-xs font-bold tracking-widest uppercase border-b border-primary/20 pb-1 hover:border-primary transition-all flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Add To Cart
                  </button>
                  <Link to={`/products/${prod.id}`} className="text-secondary text-xs uppercase font-bold hover:underline">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Shopping Cart Drawer */}
      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div onClick={() => setIsCartOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"></div>
        <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-[#faf9f6] dark:bg-[#1a1c1a] shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-[#f4f3f1] dark:bg-[#2f312f]">
            <h2 className="font-headline text-2xl font-bold text-primary dark:text-[#c2ceaa] flex items-center gap-2">
              <span className="material-symbols-outlined">shopping_cart</span> Your Cart
            </h2>
            <button onClick={() => setIsCartOpen(false)} className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-surface-container-high transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                <span className="material-symbols-outlined text-6xl text-outline-variant">shopping_basket</span>
                <p className="text-on-surface-variant text-lg">Your cart is currently empty.</p>
                <button onClick={() => setIsCartOpen(false)} className="px-6 py-2 bg-primary text-on-primary rounded-full font-medium hover:bg-primary-container transition-all">Continue Shopping</button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-white dark:bg-[#252724] rounded-2xl border border-outline-variant/10 shadow-sm transition-all hover:shadow-md">
                  <div className="h-20 w-20 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-headline text-md font-bold text-primary dark:text-white">{item.name}</h3>
                      <p className="text-on-surface-variant text-sm font-semibold">${item.price}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-outline-variant/30 rounded-lg overflow-hidden bg-[#faf9f6] dark:bg-[#1a1c1a]">
                        <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 text-on-surface-variant hover:bg-surface-container-high">-</button>
                        <span className="px-3 py-1 text-sm font-bold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 text-on-surface-variant hover:bg-surface-container-high">+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-error text-xs hover:underline flex items-center gap-1 font-semibold">
                        <span className="material-symbols-outlined text-sm">delete</span> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t border-outline-variant/20 bg-[#f4f3f1] dark:bg-[#2f312f] space-y-4">
              <div className="flex justify-between items-center font-headline text-lg font-bold">
                <span>Subtotal</span>
                <span>${cart.reduce((total, item) => total + (item.price * item.quantity), 0)}</span>
              </div>
              <p className="text-xs text-on-surface-variant">Shipping and taxes calculated at checkout.</p>
              <div className="flex gap-4">
                <button onClick={() => { alert('Order placed successfully! Thank you for your purchase.'); clearCart(); setIsCartOpen(false); }} className="flex-1 py-4 bg-primary text-on-primary rounded-full hover:bg-primary-container hover:text-on-primary-container font-semibold tracking-wider uppercase transition-all shadow-lg text-center">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} user={user} />
    </div>
  );
}
