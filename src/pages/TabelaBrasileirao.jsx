import React from 'react';
import Brasileirao from '../assets/images/brasileiro.png';

export default function TabelaBrasileirao({ onBack }) {
  const times = [
    { pos: 1, nome: "Palmeiras", j: 11, gp: 22, gs: 8, sg: 14, pts: 26, logo: "/src/assets/times/palmeiras.png" },
    { pos: 2, nome: "Flamengo", j: 10, gp: 19, gs: 9, sg: 10, pts: 20, logo: "/src/assets/times/flamengo.png" },
    { pos: 3, nome: "São Paulo", j: 11, gp: 18, gs: 10, sg: 8, pts: 20, logo: "/src/assets/times/sao paulo.png" },
    { pos: 4, nome: "Fluminense", j: 11, gp: 15, gs: 11, sg: 4, pts: 20, logo: "/src/assets/times/fluminense.webp" },
    { pos: 5, nome: "Bahia", j: 10, gp: 16, gs: 12, sg: 4, pts: 20, logo: "/src/assets/times/bahia.png" },
    { pos: 6, nome: "Athletico", j: 10, gp: 14, gs: 10, sg: 4, pts: 17, logo: "/src/assets/times/athletico.png" },
    { pos: 7, nome: "Coritiba", j: 11, gp: 17, gs: 14, sg: 3, pts: 17, logo: "/src/assets/times/coritiba.png" },
    { pos: 8, nome: "Atlético-MG", j: 11, gp: 13, gs: 11, sg: 2, pts: 16, logo: "/src/assets/times/atletico.png" },
    { pos: 9, nome: "RB Bragantino", j: 11, gp: 14, gs: 13, sg: 1, pts: 15, logo: "/src/assets/times/bragantino.png" },
    { pos: 10, nome: "Vitória", j: 9, gp: 10, gs: 9, sg: 1, pts: 14, logo: "/src/assets/times/vitoria.png" },
    { pos: 11, nome: "Botafogo", j: 10, gp: 9, gs: 11, sg: -2, pts: 14, logo: "/src/assets/times/botafogo.png" },
    { pos: 12, nome: "Grêmio", j: 11, gp: 12, gs: 15, sg: -3, pts: 13, logo: "/src/assets/times/gremio.png" },
    { pos: 13, nome: "Vasco", j: 9, gp: 12, gs: 16, sg: -4, pts: 12, logo: "/src/assets/times/vasco.webp" },
    { pos: 14, nome: "Internacional", j: 11, gp: 11, gs: 16, sg: -5, pts: 11, logo: "/src/assets/times/internacional.webp" },
    { pos: 15, nome: "Santos", j: 11, gp: 11, gs: 21, sg: -10, pts: 10, logo: "/src/assets/times/santos.webp" },
    { pos: 16, nome: "Corinthians", j: 11, gp: 9, gs: 13, sg: -4, pts: 8, logo: "/src/assets/images/corinthians.webp" },
    { pos: 17, nome: "Cruzeiro", j: 11, gp: 8, gs: 15, sg: -7, pts: 8, logo: "/src/assets/times/cruzeiro.png" },
    { pos: 18, nome: "Remo", j: 11, gp: 7, gs: 14, sg: -7, pts: 8, logo: "/src/assets/times/remo.webp" },
    { pos: 19, nome: "Chapecoense", j: 11, gp: 9, gs: 17, sg: -8, pts: 8, logo: "/src/assets/times/chapecoense.png" },
    { pos: 20, nome: "Mirassol", j: 11, gp: 9, gs: 20, sg: -11, pts: 6, logo: "/src/assets/times/mirassol.png" },
  ];

  const getPosColor = (index) => {
    if (index < 4) return 'bg-[#12a856]'; 
    if (index < 6) return 'bg-[#21b46a]'; 
    if (index < 12) return 'bg-[#3e82f7]'; 
    if (index >= 16) return 'bg-red-600'; 
    return 'bg-zinc-500'; 
  };

  const gridLayout = "grid-cols-[40px_1fr_35px_40px_45px] md:grid-cols-[50px_1fr_45px_45px_45px_45px_55px]";

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER */}
      <div className="flex items-center justify-between p-3 md:p-4 bg-[#1a2024] border-b border-white/10 relative shrink-0">
        <button onClick={onBack} className="text-white hover:opacity-70 transition-all flex items-center gap-1 md:gap-2 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-bold">VOLTAR</span>
        </button>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-1 md:gap-2 px-10">
            <img src={Brasileirao} alt="Brasileirão" className="w-4 h-4 md:w-5 md:h-5 object-contain" />
            <span className="text-[9px] md:text-[10px] font-black text-zinc-400 italic whitespace-nowrap">
              BRASILEIRÃO SÉRIE A
            </span>
          </div>
        </div>
        <div className="w-12 md:w-16"></div>
      </div>

      {/* ÁREA DE SCROLL */}
      <div className="flex-grow overflow-auto custom-scroll px-2 md:px-6 py-4">
        <div className="min-w-full max-w-[900px] mx-auto">
          
          <div className={`grid ${gridLayout} gap-1 md:gap-2 px-2 md:px-4 py-2 text-[10px] font-black text-zinc-700 border-b-2 border-zinc-800/20 sticky top-0 bg-[#959595] z-10 italic`}>
            <span className="text-center">#</span>
            <span>EQUIPE</span>
            <span className="text-center">J</span>
            <span className="text-center">SG</span>
            <span className="text-center hidden md:block">GP</span>
            <span className="text-center hidden md:block">GS</span>
            <span className="text-center text-zinc-900">PTS</span>
          </div>

          <div className="flex flex-col gap-1 mt-2">
            {times.map((time, index) => (
              <div 
                key={time.pos} 
                className={`grid ${gridLayout} gap-1 md:gap-2 px-2 md:px-4 py-2 items-center bg-[#d9d9d9]/60 hover:bg-white/40 transition-all rounded-sm shadow-sm border-l-4 ${index >= 16 ? 'border-red-600' : 'border-transparent'}`}
              >
                <div className="flex justify-center">
                  <span className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] md:text-[11px] font-black text-white shadow-md ${getPosColor(index)}`}>
                    {time.pos}
                  </span>
                </div>

                <div className="flex items-center gap-2 md:gap-3 min-w-0">
                  {/* LOGO DO TIME - Verifica se é imagem ou texto/emoji */}
                  <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center shrink-0 overflow-hidden">
                    {time.logo.startsWith('/') ? (
                      <img src={time.logo} alt={time.nome} className="w-full h-full object-contain filter drop-shadow-sm" />
                    ) : (
                      <span className="text-lg md:text-xl">{time.logo}</span>
                    )}
                  </div>
                  <span className="text-[11px] md:text-[13px] font-black text-zinc-900 truncate">{time.nome}</span>
                </div>

                <span className="text-center text-[10px] md:text-[11px] font-bold text-zinc-600">{time.j}</span>
                <span className={`text-center text-[10px] md:text-[11px] font-black ${time.sg > 0 ? 'text-green-700' : 'text-zinc-500'}`}>
                  {time.sg > 0 ? `+${time.sg}` : time.sg}
                </span>
                
                <span className="text-center text-[10px] text-zinc-500 font-bold hidden md:block">{time.gp}</span>
                <span className="text-center text-[10px] text-zinc-500 font-bold hidden md:block">{time.gs}</span>

                <span className="text-center text-[13px] md:text-[15px] font-black text-zinc-900">{time.pts}</span>
              </div>
            ))}
          </div>
          <div className="pb-10"></div>
        </div>
      </div>
    </main>
  );
}