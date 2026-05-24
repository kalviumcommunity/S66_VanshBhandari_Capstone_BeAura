import React from 'react';
import { Link } from 'react-router-dom';

export default function ClinicFinder() {
  return (
    <div className="bg-surface text-on-surface antialiased overflow-hidden h-screen bg-[#faf9f6]">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 backdrop-blur-xl no-border bg-[#f4f3f1]">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="font-noto-serif text-2xl font-bold text-[#3e5219] tracking-tighter">BeAura</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link className="font-noto-serif text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors" to="/user-dashboard">Home</Link>
            <Link className="font-noto-serif text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors" to="/about">About</Link>
            <Link className="font-noto-serif text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors" to="/services">Services</Link>
            <Link className="font-noto-serif text-lg tracking-tight text-[#45483c] hover:text-[#3e5219] transition-colors" to="/booking">Booking</Link>
            <Link className="font-noto-serif text-lg tracking-tight text-[#3e5219] font-semibold border-b-2 border-[#3e5219] pb-1" to="/clinic">Clinic</Link>
          </div>
          <Link to="/login" className="bg-primary text-on-primary px-6 py-2 rounded-full font-medium scale-95 duration-200 ease-out hover:bg-primary-container transition-all">Login</Link>
        </div>
      </nav>

      {/* Main Content Container (Split Screen) */}
      <main className="pt-20 h-screen flex flex-col md:flex-row">
        {/* Sidebar: Clinic List & Filters */}
        <aside className="w-full md:w-[420px] lg:w-[480px] bg-surface flex flex-col border-r border-outline-variant/15 z-10 transition-all">
          {/* Search & Filter Section */}
          <div className="p-6 space-y-6">
            <header>
              <h1 className="font-headline text-3xl text-on-surface font-bold tracking-tight">Clinic Finder</h1>
              <p className="text-on-surface-variant text-sm mt-1">Discover expert dermatologists in the BeAura network.</p>
            </header>
            <div className="space-y-4">
              {/* Search Input */}
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input className="w-full bg-surface-container-highest border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Search by city or zip code..." type="text" />
              </div>

              {/* Filters Row */}
              <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-full text-sm font-medium whitespace-nowrap">
                  <span className="material-symbols-outlined text-sm">distance</span>
                  Within 10 miles
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap border border-outline-variant/30 hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-sm">verified</span>
                  Top Rated
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low text-on-surface-variant rounded-full text-sm font-medium whitespace-nowrap border border-outline-variant/30 hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined text-sm">event_available</span>
                  Open Now
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Clinic List */}
          <div className="flex-1 overflow-y-auto px-6 pb-24 space-y-4">
            <div className="text-label text-[10px] uppercase tracking-[0.15em] text-outline font-bold mb-2">3 Clinics found near you</div>

            {/* Clinic Card 1 */}
            <div className="group relative bg-surface-container-lowest p-5 rounded-2xl border border-transparent hover:border-primary/10 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <div className="space-y-1">
                  <h3 className="font-headline text-xl text-on-surface font-semibold group-hover:text-primary transition-colors">The Atelier Central</h3>
                  <div className="flex items-center gap-1 text-secondary font-medium text-xs">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    4.9 (124 reviews)
                  </div>
                </div>
                <span className="text-xs font-bold text-on-tertiary-container bg-tertiary-container px-2 py-1 rounded-sm">0.8 MI</span>
              </div>
              <p className="text-on-surface-variant text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-base">location_on</span>
                142 High Street, Kensington
              </p>
              <div className="mt-4 flex gap-2">
                <span className="text-[10px] uppercase tracking-wider bg-surface-container-low px-2 py-1 rounded text-outline-variant font-bold border border-outline-variant/10">Botox</span>
                <span className="text-[10px] uppercase tracking-wider bg-surface-container-low px-2 py-1 rounded text-outline-variant font-bold border border-outline-variant/10">Laser</span>
                <span className="text-[10px] uppercase tracking-wider bg-surface-container-low px-2 py-1 rounded text-outline-variant font-bold border border-outline-variant/10">Facials</span>
              </div>
            </div>

            {/* Clinic Card 2 */}
            <div className="group relative bg-surface-container-lowest p-5 rounded-2xl border border-transparent hover:border-primary/10 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <div className="space-y-1">
                  <h3 className="font-headline text-xl text-on-surface font-semibold group-hover:text-primary transition-colors">Dermacure Studio</h3>
                  <div className="flex items-center gap-1 text-secondary font-medium text-xs">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    4.7 (89 reviews)
                  </div>
                </div>
                <span className="text-xs font-bold text-on-tertiary-container bg-tertiary-container px-2 py-1 rounded-sm">2.4 MI</span>
              </div>
              <p className="text-on-surface-variant text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-base">location_on</span>
                89 Savile Row, Mayfair
              </p>
              <div className="mt-4 flex gap-2">
                <span className="text-[10px] uppercase tracking-wider bg-surface-container-low px-2 py-1 rounded text-outline-variant font-bold border border-outline-variant/10">Medical</span>
                <span className="text-[10px] uppercase tracking-wider bg-surface-container-low px-2 py-1 rounded text-outline-variant font-bold border border-outline-variant/10">Peels</span>
              </div>
            </div>

            {/* Clinic Card 3 */}
            <div className="group relative bg-surface-container-lowest p-5 rounded-2xl border border-transparent hover:border-primary/10 transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-3">
                <div className="space-y-1">
                  <h3 className="font-headline text-xl text-on-surface font-semibold group-hover:text-primary transition-colors">BeAura Eastside</h3>
                  <div className="flex items-center gap-1 text-secondary font-medium text-xs">
                    <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    4.8 (56 reviews)
                  </div>
                </div>
                <span className="text-xs font-bold text-on-tertiary-container bg-tertiary-container px-2 py-1 rounded-sm">4.1 MI</span>
              </div>
              <p className="text-on-surface-variant text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-base">location_on</span>
                22 Brick Lane, Shoreditch
              </p>
              <div className="mt-4 flex gap-2">
                <span className="text-[10px] uppercase tracking-wider bg-surface-container-low px-2 py-1 rounded text-outline-variant font-bold border border-outline-variant/10">Injectables</span>
                <span className="text-[10px] uppercase tracking-wider bg-surface-container-low px-2 py-1 rounded text-outline-variant font-bold border border-outline-variant/10">SPA</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Map Section */}
        <section className="flex-1 relative bg-surface-container-low overflow-hidden">
          {/* Map Placeholder Styling */}
          <div className="absolute inset-0 grayscale opacity-40 mix-blend-multiply" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAh_OOqVPb5mGmMze_nosKEHtff5joosngt7wVuf4FfmQi68IznvTx5ia-LzfHVgGh89ElQV7l-yggRAELDyLB3VYCkxOY3-Rt-tC1s35Rgik0U6j9YhiW-Kqgrk2Z0OckuK4K-Iz4Hunrio1DJ6ru-OfXsGmMzUnBOm8xX4A6dH9NUbWIrZlmJApvvU2D6ii4lqufNbfQFnXyntGT-2LDuIyFjDRw_7zvABgBRsA5DzlHKdEPzvjzSP-usG-u0N5Vl82h8zvN3dg63')", backgroundSize: "cover", backgroundPosition: "center" }}>
          </div>

          {/* Interactive Map Elements */}
          <div className="absolute inset-0">
            {/* Map Pin 1 (Active) */}
            <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/40 ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
                </div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                  <span className="text-xs font-bold text-primary tracking-tight">The Atelier Central</span>
                </div>
              </div>
            </div>

            {/* Map Pin 2 */}
            <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-on-surface-variant rounded-full flex items-center justify-center text-white shadow-xl ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <span className="material-symbols-outlined text-sm">medical_services</span>
                </div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-on-surface">Dermacure Studio</span>
                </div>
              </div>
            </div>

            {/* Map Pin 3 */}
            <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-on-surface-variant rounded-full flex items-center justify-center text-white shadow-xl ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <span className="material-symbols-outlined text-sm">medical_services</span>
                </div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-on-surface">BeAura Eastside</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Controls */}
          <div className="absolute bottom-10 right-10 flex flex-col gap-2">
            <button className="w-12 h-12 bg-surface rounded-full shadow-xl flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="w-12 h-12 bg-surface rounded-full shadow-xl flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined">remove</span>
            </button>
            <button className="w-12 h-12 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center mt-2 hover:bg-primary-container transition-all">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
            </button>
          </div>
        </section>
      </main>

      {/* Mobile Footer */}
      <footer className="fixed bottom-0 w-full z-40 bg-[#f4f3f1] md:hidden">
        <div className="flex justify-around items-center px-4 py-3">
          <Link to="/clinic" className="flex flex-col items-center gap-1 text-[#3e5219]">
            <span className="material-symbols-outlined">map</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Explore</span>
          </Link>
          <Link to="/booking" className="flex flex-col items-center gap-1 text-outline">
            <span className="material-symbols-outlined">calendar_today</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Book</span>
          </Link>
          <Link to="/user-dashboard" className="flex flex-col items-center gap-1 text-outline">
            <span className="material-symbols-outlined">person</span>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Profile</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
