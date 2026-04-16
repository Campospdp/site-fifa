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
      
      {/* HEADER PADRÃO DO SITE */}
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
        <div className="w-full max-w-[800px] space-y-6">
          
          {/* TÍTULO DA FASE */}
          <div className="flex items-center gap-2 px-1">
            <div className="w-2 h-5 bg-zinc-800"></div>
            <h2 className="text-[11px] md:text-sm text-zinc-800 tracking-[0.2em] uppercase">FINAL ÚNICA</h2>
          </div>

          {/* CARD DA FINAL */}
          <div className="bg-[#d9d9d9]/80 rounded-sm overflow-hidden border border-black/5 shadow-2xl">
            
            {/* Local do Jogo */}
            <div className="bg-black/10 px-4 py-2 flex justify-center items-center border-b border-black/5">
              <span className="text-[8px] md:text-[11px] text-zinc-600 tracking-widest uppercase opacity-80 text-center font-black">
                {jogo.info}
              </span>
            </div>

            {/* Área do Placar Ampliada */}
            <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-14 gap-8 md:gap-4">
              
              {/* Time 1 */}
              <div className="flex flex-col items-center gap-4 flex-1 w-full">
                <div className="relative">
                   <div className="absolute inset-0 bg-black/5 blur-2xl rounded-full scale-150" />
                   <img src={jogo.l1} alt="" className="w-24 h-24 md:w-40 md:h-40 object-contain shrink-0 drop-shadow-xl relative z-10" />
                </div>
                <span className="text-lg md:text-2xl font-black text-center leading-tight">{jogo.t1}</span>
              </div>

              {/* Placar Central */}
              <div className="flex flex-col items-center justify-center shrink-0">
                <div className="bg-[#1a2024] text-white px-6 py-2 md:px-10 md:py-4 rounded-sm skew-x-[-12deg] border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                  <span className="skew-x-[12deg] inline-block font-black text-4xl md:text-7xl tracking-tighter leading-none">
                    {jogo.p}
                  </span>
                </div>
                <div className="text-[10px] md:text-xs text-zinc-400 mt-4 tracking-[4px] opacity-50">VS</div>
              </div>

              {/* Time 2 */}
              <div className="flex flex-col items-center gap-4 flex-1 w-full">
                <div className="relative">
                   <div className="absolute inset-0 bg-black/5 blur-2xl rounded-full scale-150" />
                   <img src={jogo.l2} alt="" className="w-24 h-24 md:w-40 md:h-40 object-contain shrink-0 drop-shadow-xl relative z-10" />
                </div>
                <span className="text-lg md:text-2xl font-black text-center leading-tight">{jogo.t2}</span>
              </div>
            </div>

            {/* Faixa de Campeão Estilo Paulistão */}
            <div className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 p-[2px] mt-2">
                <div className="bg-[#1a2024] text-white text-center py-6 md:py-10">
                    <span className="block text-[10px] md:text-xs text-yellow-500 tracking-[8px] mb-2 font-black">CAMPEÃO</span>
                    <span className="text-2xl md:text-5xl font-black tracking-widest italic uppercase bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
                        {jogo.campeao}
                    </span>
                </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}