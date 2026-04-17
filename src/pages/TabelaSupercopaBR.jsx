import React from 'react';

export default function TabelaSupercopaBR({ onBack }) {
  const jogo = {
    t1: "Palmeiras", 
    l1: "/times/palmeiras.png", 
    p: "2 x 1", 
    t2: "Flamengo", 
    l2: "/times/flamengo.png", 
    campeao: "PALMEIRAS",
    info: "ESTÁDIO MANÉ GARRINCHA"
  };

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
     {/* HEADER PADRÃO SITE */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <img src="/images/supercopa.png" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter md:tracking-widest whitespace-nowrap uppercase">SUPERCOPA REI 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-8">
        <div className="max-w-[700px] mx-auto">
          
          <div className="space-y-4">
            {/* Indicador de Fase (Igual Recopa) */}
            <div className="flex items-center gap-2 px-1">
              <div className="w-2 h-5 bg-[#1a2024]"></div>
              <h2 className="text-[11px] md:text-sm text-zinc-800 tracking-widest font-black uppercase">FINAL </h2>
            </div>

            {/* Card do Jogo (Mesmo padrão Recopa) */}
            <div className="bg-[#d9d9d9]/80 rounded-sm overflow-hidden border border-black/5 shadow-xl">
              
              {/* Local do Jogo */}
              <div className="bg-black/10 px-4 py-2 flex justify-center items-center border-b border-black/5">
                <span className="text-[8px] md:text-[10px] text-zinc-600 tracking-[0.2em] font-black opacity-80 uppercase">
                  {jogo.info}
                </span>
              </div>

              {/* Área do Confronto Horizontal */}
              <div className="flex justify-between items-center p-4 md:p-8 gap-2">
                {/* Time 1 */}
                <div className="flex items-center justify-end gap-3 md:gap-5 flex-1 min-w-0">
                  <span className="text-[11px] md:text-[16px] font-black text-right truncate leading-tight uppercase">{jogo.t1}</span>
                  <img src={jogo.l1} alt="" className="w-7 h-7 md:w-12 md:h-12 object-contain shrink-0 drop-shadow-md" />
                </div>

                {/* Placar (Skew) */}
                <div className="bg-[#1a2024] text-white px-3 py-1.5 md:px-6 md:py-3 rounded-sm skew-x-[-12deg] min-w-[75px] md:min-w-[110px] text-center border border-white/10 shadow-2xl">
                  <span className="skew-x-[12deg] inline-block font-black text-[18px] md:text-3xl tracking-tighter leading-none">
                    {jogo.p}
                  </span>
                </div>

                {/* Time 2 */}
                <div className="flex items-center justify-start gap-3 md:gap-5 flex-1 min-w-0">
                  <img src={jogo.l2} alt="" className="w-7 h-7 md:w-12 md:h-12 object-contain shrink-0 drop-shadow-md" />
                  <span className="text-[11px] md:text-[16px] font-black text-left truncate leading-tight uppercase">{jogo.t2}</span>
                </div>
              </div>

              {/* Banner de Campeão (Igual Recopa) */}
              {jogo.campeao && (
                <div className="bg-gradient-to-r from-[#1a2024] via-[#2a343d] to-[#1a2024] text-white text-center py-4 border-t-2 border-white/10">
                    <span className="text-xl md:text-4xl font-black tracking-[0.1em] italic uppercase">
                       {jogo.campeao} 
                    </span>
                </div>
              )}
            </div>
          </div>

          <div className="pb-24"></div>
        </div>
      </div>
    </main>
  );
}