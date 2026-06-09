import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfileModal({ isOpen, onClose, user, onLogout }) {
  const navigate = useNavigate();
  if (!isOpen || !user) return null;

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate('/');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-[2rem] p-8 max-w-md w-full mx-4 shadow-2xl relative text-on-surface bg-[#faf9f6] dark:bg-[#1a1c1a]">
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>
        <div className="flex flex-col items-center mb-6">
          <div className="h-20 w-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-5xl text-on-surface">person</span>
          </div>
          <h2 className="font-headline text-3xl font-bold text-primary dark:text-[#c2ceaa]">{user.name}</h2>
          <p className="text-sm text-on-surface-variant mt-1">{user.email}</p>
        </div>
        <div className="space-y-4 pt-4 border-t border-outline-variant/10">
          <div className="flex justify-between items-center bg-surface-container-low/50 px-4 py-3 rounded-xl">
            <span className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">Skin Type</span>
            <span className="text-sm font-semibold text-primary capitalize">{user.skinType || "Not Analyzed"}</span>
          </div>
          <div className="flex justify-between items-center bg-surface-container-low/50 px-4 py-3 rounded-xl">
            <span className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">Hair Type</span>
            <span className="text-sm font-semibold text-primary capitalize">{user.hairType || "Not Analyzed"}</span>
          </div>
          <div className="flex justify-between items-center bg-surface-container-low/50 px-4 py-3 rounded-xl">
            <span className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">Face Shape</span>
            <span className="text-sm font-semibold text-primary capitalize">{user.faceType || "Not Analyzed"}</span>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <button 
            onClick={() => { onClose(); navigate('/booking'); }} 
            className="flex-1 py-3 bg-primary text-on-primary rounded-full text-xs uppercase tracking-widest font-semibold hover:shadow-lg transition-all text-center"
          >
            Book Consult
          </button>
          <button 
            onClick={() => { onClose(); navigate('/products'); }} 
            className="flex-1 py-3 border border-outline-variant text-primary rounded-full text-xs uppercase tracking-widest font-semibold hover:bg-surface-container-low transition-all text-center"
          >
            Shop Routine
          </button>
        </div>
      </div>
    </div>
  );
}
