import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileModal from '../components/ProfileModal';

const CLINICS_DATA = [
  {
    id: 1,
    name: "The Atelier Central",
    rating: 4.9,
    reviews: 124,
    distance: 0.8,
    address: "142 High Street, Kensington, London W8 7RL",
    phone: "+44 20 7937 5432",
    hours: "9:00 AM - 7:00 PM",
    website: "www.beaura.com/atelier-central",
    tags: ["Botox", "Laser", "Facials"],
    top: '25%',
    left: '33%'
  },
  {
    id: 2,
    name: "Dermacure Studio",
    rating: 4.7,
    reviews: 89,
    distance: 2.4,
    address: "89 Savile Row, Mayfair, London W1S 3PJ",
    phone: "+44 20 7493 1122",
    hours: "10:00 AM - 8:00 PM",
    website: "www.dermacure-studio.co.uk",
    tags: ["Medical", "Peels", "Laser"],
    top: '50%',
    left: '66%'
  },
  {
    id: 3,
    name: "BeAura Eastside",
    rating: 4.8,
    reviews: 56,
    distance: 4.1,
    address: "22 Brick Lane, Shoreditch, London E1 6SA",
    phone: "+44 20 8123 4567",
    hours: "9:00 AM - 6:00 PM",
    website: "www.beaura.com/eastside",
    tags: ["Injectables", "SPA", "Facials"],
    top: '66%',
    left: '50%'
  },
  {
    id: 4,
    name: "Kensington Skin Clinic",
    rating: 4.9,
    reviews: 112,
    distance: 1.2,
    address: "34 Kensington Church St, London W8 4HA",
    phone: "+44 20 7938 9988",
    hours: "9:30 AM - 6:30 PM",
    website: "www.kensingtonskinclinic.com",
    tags: ["Injectables", "Peels", "Botox"],
    top: '18%',
    left: '42%'
  },
  {
    id: 5,
    name: "Chelsea Dermatology",
    rating: 4.5,
    reviews: 64,
    distance: 2.9,
    address: "102 King's Rd, Chelsea, London SW3 4TR",
    phone: "+44 20 7352 7766",
    hours: "8:00 AM - 5:00 PM",
    website: "www.chelseaderm.co.uk",
    tags: ["Medical", "Laser", "Acne"],
    top: '78%',
    left: '25%'
  }
];

export default function ClinicFinder() {
  const [user, setUser] = useState(null);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedClinicId, setSelectedClinicId] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'top-rated', 'within-3'
  
  const clinicRefs = useRef({});
  const navigate = useNavigate();

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

  const handleSelectClinic = (id) => {
    setSelectedClinicId(id);
    if (clinicRefs.current[id]) {
      clinicRefs.current[id].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  };

  // Filter logic
  const filteredClinics = CLINICS_DATA.filter((clinic) => {
    // 1. Search Query filter
    const matchesSearch = 
      clinic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      clinic.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      clinic.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    // 2. Active filter button filter
    if (activeFilter === 'top-rated') {
      return clinic.rating >= 4.8;
    }
    if (activeFilter === 'within-3') {
      return clinic.distance <= 3.0;
    }

    return true;
  });

  return (
    <div className="bg-[#faf9f6] text-on-surface antialiased overflow-hidden h-screen flex flex-col font-body">
      {/* TopNavBar */}
      <nav className="w-full z-50 bg-[#faf9f6]/70 backdrop-blur-xl border-b border-surface-container">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
          <Link to="/" className="font-headline text-2xl font-bold text-primary tracking-tighter">BeAura</Link>
          {user ? (
            /* Logged In Navbar */
            <>
              <div className="hidden md:flex gap-10 items-center">
                <Link to="/user-dashboard" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Men's Dashboard</Link>
                <Link to="/women-dashboard" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Women's Hub</Link>
                <Link to="/products" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Shop</Link>
                <Link to="/booking" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Appointments</Link>
                <Link to="/clinic" className="font-headline text-lg tracking-tight text-primary font-semibold border-b-2 border-primary pb-1">Clinic Finder</Link>
              </div>
              <div className="flex items-center gap-6">
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
                <Link className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link>
                <Link className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors" to="/about">About</Link>
              </div>
              <div className="flex items-center gap-6">
                <button onClick={() => navigate('/login')} className="bg-primary text-on-primary px-6 py-2 rounded-full font-label text-xs tracking-widest uppercase hover:opacity-90 transition-all">Login</button>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Main Content Container (Split Screen) */}
      <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar: Clinic List & Filters */}
        <aside className="w-full md:w-[420px] lg:w-[480px] bg-white flex flex-col border-r border-outline-variant/15 z-10 shadow-lg">
          {/* Search & Filter Section */}
          <div className="p-6 border-b border-outline-variant/10 space-y-6">
            <header>
              <h1 className="font-headline text-3xl text-primary font-bold tracking-tight">Clinic Finder</h1>
              <p className="text-on-surface-variant text-sm mt-1">Discover expert dermatologists in the BeAura network.</p>
            </header>
            <div className="space-y-4">
              {/* Search Input */}
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
                <input 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl py-3.5 pl-12 pr-4 text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm" 
                  placeholder="Search by area, clinic name, or services..." 
                  type="text" 
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-md">close</span>
                  </button>
                )}
              </div>

              {/* Filters Row */}
              <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
                <button 
                  onClick={() => setActiveFilter('all')}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all whitespace-nowrap ${activeFilter === 'all' ? 'bg-primary text-white shadow-md' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high'}`}
                >
                  All Clinics
                </button>
                <button 
                  onClick={() => setActiveFilter('within-3')}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all whitespace-nowrap ${activeFilter === 'within-3' ? 'bg-primary text-white shadow-md' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high'}`}
                >
                  <span className="material-symbols-outlined text-xs">distance</span>
                  Within 3 miles
                </button>
                <button 
                  onClick={() => setActiveFilter('top-rated')}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all whitespace-nowrap ${activeFilter === 'top-rated' ? 'bg-primary text-white shadow-md' : 'bg-surface-container-low text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-high'}`}
                >
                  <span className="material-symbols-outlined text-xs">verified</span>
                  Top Rated
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Clinic List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-surface-container-lowest">
            <div className="font-label text-[10px] uppercase tracking-[0.15em] text-outline-variant font-bold mb-2">
              {filteredClinics.length} {filteredClinics.length === 1 ? 'Clinic' : 'Clinics'} found
            </div>

            {filteredClinics.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <span className="material-symbols-outlined text-5xl text-outline-variant">error_outline</span>
                <p className="text-on-surface-variant text-sm font-medium">No clinics match your query.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
                  className="text-primary text-xs font-bold uppercase tracking-wider underline"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredClinics.map((clinic) => {
                const isSelected = selectedClinicId === clinic.id;
                return (
                  <div 
                    key={clinic.id}
                    ref={el => clinicRefs.current[clinic.id] = el}
                    onClick={() => handleSelectClinic(clinic.id)}
                    className={`group relative p-5 rounded-2xl border transition-all cursor-pointer ${isSelected ? 'bg-white border-primary shadow-lg ring-1 ring-primary/20' : 'bg-white/60 border-outline-variant/10 hover:border-primary/20 hover:bg-white hover:shadow-md'}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="space-y-1">
                        <h3 className={`font-headline text-lg font-bold transition-colors ${isSelected ? 'text-primary' : 'text-on-surface group-hover:text-primary'}`}>{clinic.name}</h3>
                        <div className="flex items-center gap-1 text-secondary font-semibold text-xs">
                          <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          {clinic.rating} ({clinic.reviews} reviews)
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-on-tertiary-container bg-tertiary-container px-2 py-1 rounded">
                        {clinic.distance} MI
                      </span>
                    </div>
                    
                    <p className="text-on-surface-variant text-xs flex items-center gap-2 mt-2 leading-relaxed">
                      <span className="material-symbols-outlined text-sm text-outline-variant">location_on</span>
                      {clinic.address}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {clinic.tags.map((tag, idx) => (
                        <span key={idx} className="text-[9px] uppercase tracking-wider bg-surface-container-low px-2 py-1 rounded text-outline-variant font-bold border border-outline-variant/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Detailed expandable section on selection */}
                    {isSelected && (
                      <div className="mt-5 pt-4 border-t border-outline-variant/20 space-y-3.5 text-xs animate-fadeIn">
                        <div className="flex justify-between text-on-surface-variant">
                          <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">call</span>
                            {clinic.phone}
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            {clinic.hours}
                          </span>
                        </div>
                        <div className="text-on-surface-variant flex items-center gap-2">
                          <span className="material-symbols-outlined text-sm">language</span>
                          <a href={`https://${clinic.website}`} target="_blank" rel="noreferrer" className="hover:underline hover:text-primary transition-colors">{clinic.website}</a>
                        </div>
                        
                        <div className="pt-2">
                          <Link 
                            to="/booking" 
                            className="block w-full text-center bg-primary text-on-primary py-3 rounded-full font-bold uppercase tracking-wider text-[10px] hover:opacity-90 transition-all shadow-md"
                          >
                            Book Appointment Here
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </aside>

        {/* Map Section */}
        <section className="flex-1 relative bg-surface-container-low overflow-hidden">
          {/* Map Image Background */}
          <div 
            className="absolute inset-0 grayscale opacity-40 mix-blend-multiply" 
            style={{ 
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAh_OOqVPb5mGmMze_nosKEHtff5joosngt7wVuf4FfmQi68IznvTx5ia-LzfHVgGh89ElQV7l-yggRAELDyLB3VYCkxOY3-Rt-tC1s35Rgik0U6j9YhiW-Kqgrk2Z0OckuK4K-Iz4Hunrio1DJ6ru-OfXsGmMzUnBOm8xX4A6dH9NUbWIrZlmJApvvU2D6ii4lqufNbfQFnXyntGT-2LDuIyFjDRw_7zvABgBRsA5DzlHKdEPzvjzSP-usG-u0N5Vl82h8zvN3dg63')", 
              backgroundSize: "cover", 
              backgroundPosition: "center" 
            }}
          />

          {/* Interactive Map Pins */}
          <div className="absolute inset-0">
            {filteredClinics.map((clinic) => {
              const isSelected = selectedClinicId === clinic.id;
              return (
                <div 
                  key={clinic.id}
                  onClick={() => handleSelectClinic(clinic.id)}
                  style={{ top: clinic.top, left: clinic.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                >
                  <div className="relative flex flex-col items-center">
                    {/* Pulsing selection background ring */}
                    {isSelected && (
                      <div className="absolute -inset-2 rounded-full bg-primary/20 animate-ping" />
                    )}
                    
                    {/* Pin element */}
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white shadow-2xl ring-4 ring-white transition-all duration-300 ${isSelected ? 'bg-primary scale-110' : 'bg-[#45483c] hover:bg-primary group-hover:scale-105'}`}>
                      <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: isSelected ? "'FILL' 1" : "'FILL' 0" }}>
                        medical_services
                      </span>
                    </div>

                    {/* Floating Info Title */}
                    <div className={`mt-2 bg-white px-3 py-1.5 rounded-lg shadow-lg border border-outline-variant/10 whitespace-nowrap transition-all duration-300 ${isSelected ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 pointer-events-none'}`}>
                      <span className={`text-[11px] font-extrabold tracking-tight ${isSelected ? 'text-primary' : 'text-on-surface'}`}>
                        {clinic.name}
                      </span>
                      <span className="block text-[9px] text-[#45483c] font-medium mt-0.5">
                        ★ {clinic.rating} ({clinic.reviews} reviews) • {clinic.distance} mi
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Controls */}
          <div className="absolute bottom-10 right-10 flex flex-col gap-2">
            <button className="w-12 h-12 bg-white border border-outline-variant/20 rounded-full shadow-xl flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined">add</span>
            </button>
            <button className="w-12 h-12 bg-white border border-outline-variant/20 rounded-full shadow-xl flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-all">
              <span className="material-symbols-outlined">remove</span>
            </button>
            <button 
              onClick={() => handleSelectClinic(1)} 
              className="w-12 h-12 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center mt-2 hover:opacity-90 transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
            </button>
          </div>
        </section>
      </main>

      {/* Mobile Footer */}
      <footer className="fixed bottom-0 w-full z-40 bg-[#f4f3f1] md:hidden border-t border-outline-variant/10">
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
      
      <ProfileModal isOpen={showProfileModal} onClose={() => setShowProfileModal(false)} user={user} />
    </div>
  );
}
