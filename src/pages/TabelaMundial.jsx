import React from 'react';

export default function TabelaMundial({ onBack }) {
  const dados = {
    t1: "Palmeiras", 
    l1: "/times/palmeiras.png", 
    t2: "Real Madrid", 
    l2: "/images/real-madrid.png", 
    t3: "Al-Ahly",
    l3: "/images/al-ahly.png",
    campeao: "PALMEIRAS",
    semi: { placar: "2 x 0", adversario: "Al-Ahly", local: "STADIUM 974, DOHA" },
    final: { placar: "1 x 0", local: "LUSAIL STADIUM, LUSAIL" }
  };

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER MUNDIAL */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#111111] border-b-2 border-[#d4af37] shrink-0 shadow-2xl">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-2 md:gap-4 px-2">
          <img src="/images/mundial.png" alt="" className="w-8 h-8 md:w-12 md:h-12 object-contain filter drop-shadow-[0_0_5px_rgba(212,175,55,0.5)]" />
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] sm:text-[12px] md:text-lg text-[#d4af37] tracking-[2px] md:tracking-[4px] whitespace-nowrap">FIFA CLUB WORLD CUP</span>
          </div>
        </div>
        <div className="w-8 md:w-10"></div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-start p-2 sm:p-4 md:p-8 overflow-y-auto custom-scroll gap-4 md:gap-6">
        
        {/* ESCUDOS E TIMES (FINALISTAS) */}
        <div className="w-full max-w-[850px] flex items-center justify-around bg-zinc-800/20 py-4 md:py-6 rounded-lg border border-white/30 shadow-lg shrink-0">
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="bg-white/40 p-2 md:p-4 rounded-full shadow-inner border border-black/5">
                <img src={dados.l1} alt="" className="w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-32 object-contain" />
            </div>
            <span className="text-[10px] md:text-xl text-center leading-none mt-1">{dados.t1}</span>
          </div>
          <div className="text-xl md:text-4xl text-zinc-800 font-black px-2">VS</div>
          <div className="flex flex-col items-center gap-2 flex-1">
            <div className="bg-white/40 p-2 md:p-4 rounded-full shadow-inner border border-black/5">
                <img src={dados.l2} alt="" className="w-14 h-14 sm:w-20 sm:h-20 md:w-32 md:h-32 object-contain" />
            </div>
            <span className="text-[10px] md:text-xl text-center leading-none mt-1">{dados.t2}</span>
          </div>
        </div>

        {/* SEMIFINAL */}
        <div className="w-full max-w-[850px] bg-[#d9d9d9] rounded-sm overflow-hidden border border-black/10 shadow-xl shrink-0">
          <div className="bg-[#222] text-[#d4af37] text-[7px] md:text-[10px] py-1.5 px-4 flex justify-between tracking-widest">
            <span>SEMIFINAL</span>
            <span className="opacity-70">{dados.semi.local}</span>
          </div>
          <div className="flex items-center justify-center py-4 md:py-8 gap-4 md:gap-8">
            <span className="text-sm md:text-3xl text-zinc-400 hidden sm:block">{dados.t1}</span>
            <div className="bg-zinc-800 text-white px-4 py-1.5 md:px-8 md:py-3 rounded-sm text-2xl md:text-5xl font-black tabular-nums">
              {dados.semi.placar}
            </div>
            <span className="text-sm md:text-3xl text-zinc-400 hidden sm:block">{dados.semi.adversario}</span>
          </div>
        </div>

        {/* FINAL */}
        <div className="w-full max-w-[850px] bg-[#d9d9d9] rounded-sm overflow-hidden border-2 border-[#d4af37] shadow-xl relative shrink-0">
          <div className="bg-[#d4af37] text-black text-[7px] md:text-[10px] py-1.5 px-4 flex justify-between font-black tracking-widest">
            <span>GRAND FINAL</span>
            <span className="opacity-80">{dados.final.local}</span>
          </div>
          <div className="flex items-center justify-center py-4 md:py-8 gap-4 md:gap-8">
            <span className="text-sm md:text-3xl hidden sm:block">{dados.t1}</span>
            <div className="bg-[#111] text-[#d4af37] px-4 py-1.5 md:px-8 md:py-3 rounded-sm text-2xl md:text-5xl font-black tabular-nums shadow-lg border border-[#d4af37]/50">
              {dados.final.placar}
            </div>
            <span className="text-sm md:text-3xl hidden sm:block">{dados.t2}</span>
          </div>
        </div>

        {/* BANNER CAMPEÃO DO MUNDO */}
        <div className="w-full max-w-[850px] bg-gradient-to-r from-[#111] via-[#222] to-[#111] text-white py-5 md:py-8 text-center rounded-sm border-t-4 border-[#d4af37] shadow-2xl shrink-0 mb-4">
          <span className="text-[8px] md:text-xs text-[#d4af37] tracking-[6px] md:tracking-[12px] block mb-2">CLUB WORLD CHAMPION</span>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center gap-3">
            {dados.campeao}
          </h2>
        </div>

      </div>
    </main>
  );
}