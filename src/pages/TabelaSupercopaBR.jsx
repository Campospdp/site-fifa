import React from 'react';

export default function TabelaSupercopaBR({ onBack }) {
  const jogo = {
    t1: "Palmeiras", 
    l1: "/times/palmeiras.png", 
    p: "2 x 1", 
    t2: "Flamengo", 
    l2: "/times/flamengo.png", 
    campeao: "PALMEIRAS",
  };

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER PADRÃO */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <img src="/images/supercopa.png" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-widest whitespace-nowrap uppercase">SUPERCOPA REI 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      <div className="flex-grow flex items-center justify-center p-4 md:p-8 overflow-y-auto custom-scroll">
        <div className="w-full max-w-[800px] space-y-4">
          
          {/* TÍTULO DA FASE */}
          <div className="flex items-center gap-2 px-1">
            <div className="w-1 h-4 bg-[#1a2024]"></div>
            <h2 className="text-[10px] md:text-xs text-zinc-600 tracking-widest uppercase">FINAL ÚNICA</h2>
          </div>

          {/* CARD DO JOGO PADRÃO LISTA */}
          <div className="bg-[#d9d9d9]/70 rounded-sm overflow-hidden border border-black/5 shadow-sm">
            
            {/* Local do Jogo */}
            <div className="bg-black/5 px-4 py-1.5 flex justify-center items-center border-b border-black/5">
              <span className="text-[8px] md:text-[10px] text-zinc-500 tracking-widest uppercase opacity-70">{jogo.info}</span>
            </div>

            {/* Área do Placar Ampliada para Final */}
            <div className="flex justify-between items-center p-6 md:p-12 gap-4">
              {/* Time 1 */}
              <div className="flex flex-col items-center gap-3 flex-1 min-w-0">
                <img src={jogo.l1} alt="" className="w-16 h-16 md:w-28 md:h-28 object-contain shrink-0 drop-shadow-md" />
                <span className="text-[12px] md:text-[18px] font-black text-center leading-tight truncate w-full">{jogo.t1}</span>
              </div>

              {/* Placar */}
              <div className="bg-[#1a2024] text-white px-4 py-2 md:px-6 md:py-3 rounded-sm skew-x-[-12deg] min-w-[100px] md:min-w-[150px] text-center border border-white/10 shadow-md">
                <span className="skew-x-[12deg] inline-block font-black text-3xl md:text-6xl tracking-tighter">
                  {jogo.p}
                </span>
              </div>

              {/* Time 2 */}
              <div className="flex flex-col items-center gap-3 flex-1 min-w-0">
                <img src={jogo.l2} alt="" className="w-16 h-16 md:w-28 md:h-28 object-contain shrink-0 drop-shadow-md" />
                <span className="text-[12px] md:text-[18px] font-black text-center leading-tight truncate w-full">{jogo.t2}</span>
              </div>
            </div>

            {/* Faixa de Campeão Padronizada */}
            <div className="bg-[#1a2024] text-white text-center py-4 md:py-6 border-t-2 border-white/10">
              <span className="block text-[8px] md:text-[10px] text-zinc-400 tracking-[3px] md:tracking-[6px] mb-1 font-black">CAMPEÃO</span>
              <span className="text-xl md:text-4xl font-black tracking-widest italic uppercase">
                {jogo.campeao}
              </span>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}