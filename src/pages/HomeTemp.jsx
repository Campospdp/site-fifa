import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <main className="flex-grow flex items-center justify-center p-6 bg-[#959595]">
      <div 
        onClick={onNavigate}
        className="group relative bg-[#d9d9d9] w-full max-w-[340px] py-12 px-8 flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-t-4 border-b-4 border-zinc-800 cursor-pointer active:scale-95 transition-all duration-300 gap-6 overflow-hidden"
      >
        {/* Efeito de brilho ao passar o mouse */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />

        {/* LOGO com animação suave */}
        <div className="relative">
          <div className="absolute inset-0 bg-black/10 blur-xl rounded-full scale-125 animate-pulse" />
          <img 
            src="/times/corinthians.webp" 
            alt="Corinthians" 
            className="w-28 h-28 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500" 
          />
        </div>
        
        <div className="flex flex-col text-zinc-800 text-center relative z-10">
          <span className="text-[13px] font-black uppercase tracking-[0.5em] opacity-60 mb-1">
            Temporada
          </span>
          <div className="flex flex-col">
            <span className="text-6xl font-black italic tracking-tighter leading-none text-zinc-900 group-hover:italic">
              2026
            </span>
            {/* Linha decorativa que expande no hover */}
            <div className="h-1.5 bg-zinc-800 mt-2 w-12 mx-auto group-hover:w-full transition-all duration-500" />
          </div>
        </div>
      </div>
    </main>
  );
}