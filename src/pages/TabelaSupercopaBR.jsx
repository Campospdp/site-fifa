import React from 'react';

export default function TabelaSupercopaBR({ onBack }) {
  const jogo = {
    t1: "Palmeiras", 
    l1: "/times/palmeiras.png", 
    p: "2 x 1", 
    t2: "Flamengo", 
    l2: "/times/flamengo.png", 
    campeao: "PALMEIRAS"
  };

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER SUPERCOPA BR */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#0a0a0a] border-b-2 border-[#d4af37] shrink-0 shadow-2xl">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-2 md:gap-4 px-2">
          {/* Taça à esquerda */}
          <img src="/images/supercopa.png" alt="" className="w-8 h-8 md:w-12 md:h-12 object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
          
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] sm:text-[12px] md:text-lg text-[#d4af37] tracking-[2px] md:tracking-[4px] whitespace-nowrap">SUPERCOPA REI</span>
          </div>
        </div>
        <div className="w-8 md:w-10"></div>
      </div>

      <div className="flex-grow flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-y-auto custom-scroll">
        <div className="w-full max-w-[850px]">
          
          {/* CARD DO JOGO */}
          <section className="relative group">
            {/* Brilho Dourado de Fundo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37] via-[#f9e29c] to-[#d4af37] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
            
            <div className="relative bg-[#d9d9d9] rounded-sm shadow-2xl overflow-hidden border border-white/20">
              
              {/* Local e Data */}
              <div className="bg-[#1a1a1a] text-center py-2 md:py-2.5 border-b border-[#d4af37]/40 flex flex-col">
                <span className="text-[7px] md:text-[10px] text-[#d4af37] tracking-[2px] md:tracking-[4px] px-2">{jogo.estadio}</span>
                <span className="text-[6px] md:text-[8px] text-zinc-500 mt-0.5 tracking-[1px] md:tracking-[2px]">{jogo.data}</span>
              </div>

              {/* Área do Placar */}
              <div className="flex flex-col md:flex-row items-center justify-around p-6 sm:p-8 md:p-14 gap-6 md:gap-10">
                
                {/* Time da Esquerda */}
                <div className="flex flex-col items-center gap-2 md:gap-4 flex-1 order-2 md:order-1 w-full">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 bg-white/40 rounded-full p-3 md:p-4 shadow-inner flex items-center justify-center border border-black/5 hover:scale-105 transition-transform">
                    <img src={jogo.l1} alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm sm:text-lg md:text-2xl text-zinc-900 tracking-tighter text-center leading-none">{jogo.t1}</span>
                </div>

                {/* Placar Central */}
                <div className="flex flex-col items-center justify-center z-10 order-1 md:order-2">
                  <div className="relative">
                    <div className="bg-[#0a0a0a] text-[#d4af37] px-4 py-2 sm:px-5 sm:py-4 rounded-sm skew-x-[-12deg] border-2 border-[#d4af37] shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                      <span className="skew-x-[12deg] inline-block font-black text-4xl sm:text-5xl md:text-7xl tracking-tighter leading-none italic">
                        {jogo.p}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-6 flex flex-col items-center">
                    <div className="h-px w-16 md:w-20 bg-gradient-to-r from-transparent via-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Time da Direita */}
                <div className="flex flex-col items-center gap-2 md:gap-4 flex-1 order-3 w-full">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 bg-white/40 rounded-full p-3 md:p-4 shadow-inner flex items-center justify-center border border-black/5 hover:scale-105 transition-transform">
                    <img src={jogo.l2} alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm sm:text-lg md:text-2xl text-zinc-900 tracking-tighter text-center leading-none">{jogo.t2}</span>
                </div>

              </div>

              {/* Banner do Campeão */}
              <div className="bg-gradient-to-r from-[#0a0a0a] via-[#222] to-[#0a0a0a] text-white py-4 md:py-6 text-center relative border-t border-[#d4af37]/30">
                {/* Luzes decorativas laterais */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-[#d4af37]/20 to-transparent"></div>
                <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-[#d4af37]/20 to-transparent"></div>
                
                <div className="relative z-10 flex flex-col items-center px-4">
                  <span className="text-[8px] md:text-[11px] text-[#d4af37] font-black tracking-[3px] md:tracking-[10px] mb-1">CAMPEÃO DA SUPERCOPA REI</span>
                  <div className="flex items-center gap-4">
                     <span className="text-xl sm:text-2xl md:text-5xl text-white font-black italic tracking-[1px] md:tracking-[2px]">
                       {jogo.campeao}
                     </span>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </main>
  );
}