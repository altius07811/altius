import React from 'react';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';
import { ScreenType } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate }) => {
  return (
    <header className="bg-[#FFFDF9]/90 backdrop-blur-md border-b border-[#D4DFEB] sticky top-0 z-40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => onNavigate('welcome')}
          className="flex items-center gap-3.5 text-left focus:outline-none group cursor-pointer"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#3E83A8] flex items-center justify-center text-[#F5FBFF] shadow-soft-sm group-hover:scale-105 group-hover:bg-[#326E8F] transition-all">
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-2xl tracking-tight text-[#253444]">ALTIUS</span>
              <span className="text-[11px] font-bold bg-[#BCEBD1] text-[#0D4233] px-2.5 py-0.5 rounded-full">
                Bolivia
              </span>
            </div>
            <p className="text-xs text-[#576574] font-semibold -mt-0.5">Orientación Pedagógica Escolar</p>
          </div>
        </button>

        {/* Status / Quick Links */}
        <div className="flex items-center gap-2.5">
          {currentScreen !== 'welcome' && (
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#1C463C] bg-[#CAEFDD] px-3.5 py-1.5 rounded-full font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#0D4233]" />
              <span>Espacio confidencial</span>
            </div>
          )}
          {currentScreen === 'results' && (
            <button
              onClick={() => onNavigate('referral')}
              className="text-xs font-bold text-[#12415E] bg-[#C2E4F8] hover:bg-[#a6d8f6] px-3.5 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-soft-sm"
            >
              <Sparkles className="w-4 h-4 text-[#12415E]" />
              <span>Directorio de apoyo</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
