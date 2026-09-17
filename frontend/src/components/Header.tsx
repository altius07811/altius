import React from 'react';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { ScreenType } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => onNavigate('welcome')}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-altius-700 to-altius-500 flex items-center justify-center text-white shadow-sm shadow-altius-500/20 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xl tracking-tight text-slate-900">ALTIUS</span>
              <span className="text-[10px] uppercase font-semibold bg-altius-100 text-altius-800 px-2 py-0.5 rounded-full">Bolivia</span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Orientación Pedagógica Escolar</p>
          </div>
        </button>

        {/* Status / Quick Links */}
        <div className="flex items-center gap-2">
          {currentScreen !== 'welcome' && (
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Espacio confidencial y seguro</span>
            </div>
          )}
          {currentScreen === 'results' && (
            <button
              onClick={() => onNavigate('referral')}
              className="text-xs font-medium text-altius-700 hover:text-altius-900 bg-altius-50 hover:bg-altius-100 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Directorio de apoyo
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
