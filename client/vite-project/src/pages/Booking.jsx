import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MOCK_DOCTORS = [
  { id: 1, name: "Dr. Julian Vance", spec: "Surgical Dermatology", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbWaLjCN0quOIA_SzcfKpHSp_PpWe5akotSUr1G6bZKeeQjj7HNlESbI3hG9_Z8tApjydlzakdReC_4Lcx2fEa0D-f9TtgVUEOTkwCwWeEEf5iAT0y0iFfuvhIOV2eaT2-VGP8UrgJ2KbmvdKH9lj2JwT7Ua6Vm0X9Axu1PaG6em8XlHIMvMMS6rX-9ui3UyW-dlv3ZbDSqhMM4Y4xXC8nlV5xD_xIo5BxxJXHoBnQYqZeBljuBG8TYp0BKXkqm3NUR0otedYogfIo" },
  { id: 2, name: "Dr. Elena Rossi", spec: "Cosmetic Dermatology", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBt5iKjLOljR7jIWN3ELb9GNwomF4aHaHkZDrtZxQJNTAOSEDmmBKS_0ttaQqywIsoDNSMWw7O_TeBKGE2RDX-rnFqbjL3I4ZecnB4zpbjlss9WmI4DgOl-DDiYp2OmC2sdyXPbPgZx12Y1SuQfWpC9lluiiySp-4gxNcmIL3pbyi_5ytZBLJHBYGLWO9Lcpbdqd1lBYdJ5hiGhHSENnRdBGbXUEEt27YuGZ_U-FAbDX_xP4FV66pEfEK8fW5-kyjXJhk-KGBFIeSwt" }
];

export default function Booking() {
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [date, setDate] = useState('');
  const [reason, setReason] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const userRaw = localStorage.getItem('user');
      let userId = null;
      if (userRaw) userId = JSON.parse(userRaw)._id;

      const res = await fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          doctorId: selectedDoc, 
          date, 
          reason,
          user: userId || 'anonymous' // Fallback if schema requires it
        })
      });
      if (res.ok) {
        setStatusMsg('Appointment booked successfully!');
        setSelectedDoc(null);
        setDate('');
        setReason('');
      } else {
        setStatusMsg('Failed to book appointment.');
      }
    } catch (err) {
      setStatusMsg(err.message);
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 backdrop-blur-xl border-b border-surface-container">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link to="/" className="font-headline text-2xl font-bold text-primary tracking-tighter">BeAura</Link>
          <div className="hidden md:flex gap-10 items-center">
            <Link to="/user-dashboard" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Dashboard</Link>
            <Link to="/products" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Shop</Link>
            <Link to="/booking" className="font-headline text-lg tracking-tight text-primary font-semibold border-b-2 border-primary pb-1">Bookings</Link>
            <Link to="/clinic" className="font-headline text-lg tracking-tight text-on-surface-variant hover:text-primary transition-colors">Clinic Finder</Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="font-label text-xs tracking-widest uppercase text-on-surface-variant mb-4 block">Clinical Atelier</span>
          <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-6">Expert Dermatologists</h1>
          <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed">Connect with our world-class medical professionals for personalized skin health consultations.</p>
        </header>

        {statusMsg && <p className="mb-8 p-4 bg-tertiary-container text-on-tertiary-container rounded">{statusMsg}</p>}

        {selectedDoc ? (
          <form onSubmit={handleBooking} className="bg-surface-container-low p-8 rounded-2xl max-w-md border border-outline-variant/20 mb-12">
            <h2 className="font-headline text-2xl mb-4 text-primary">Book Consultation</h2>
            <div className="mb-4">
               <label className="block text-sm mb-2 text-on-surface-variant">Selected Doctor</label>
               <input type="text" value={MOCK_DOCTORS.find(d => d.id === selectedDoc)?.name} disabled className="w-full p-3 bg-surface rounded" />
            </div>
            <div className="mb-4">
               <label className="block text-sm mb-2 text-on-surface-variant">Date</label>
               <input type="date" value={date} onChange={e => setDate(e.target.value)} required className="w-full p-3 bg-surface rounded focus:ring-1 focus:ring-primary" />
            </div>
            <div className="mb-6">
               <label className="block text-sm mb-2 text-on-surface-variant">Reason for Visit</label>
               <textarea value={reason} onChange={e => setReason(e.target.value)} required className="w-full p-3 bg-surface rounded focus:ring-1 focus:ring-primary" rows="3"></textarea>
            </div>
            <div className="flex gap-4">
              <button type="button" onClick={() => setSelectedDoc(null)} className="flex-1 py-3 text-primary border border-primary rounded hover:bg-primary/5">Cancel</button>
              <button type="submit" className="flex-1 py-3 bg-primary text-on-primary rounded hover:opacity-90">Confirm</button>
            </div>
          </form>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {MOCK_DOCTORS.map(doc => (
              <div key={doc.id} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow border border-outline-variant/15 flex">
                <div className="w-1/3 overflow-hidden bg-surface-container-low relative">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="font-headline text-xl text-on-surface font-bold">{doc.name}</h3>
                  <p className="text-on-surface-variant text-sm mb-6">{doc.spec}</p>
                  <button onClick={() => setSelectedDoc(doc.id)} className="mt-auto py-2 px-4 bg-primary text-on-primary rounded font-medium hover:opacity-90 transition-colors">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
