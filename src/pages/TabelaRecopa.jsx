import React from 'react';

export default function TabelaRecopa({ onBack }) {
  const dados = {
    t1: "Palmeiras", 
    l1: "/times/palmeiras.png", 
    t2: "LDU", 
    l2: "/times/ldu.png", 
    campeao: "PALMEIRAS",
    ida: { 
      placar: "1 x 1",  
    },
    volta: { 
      placar: "2 x 0", 
    }
  };

  const jogos = [
    { fase: "JOGO DE IDA", placar: dados.ida.placar, local: dados.ida.local, mandante: dados.t2, logoM: dados.l2, visitante: dados.t1, logoV: dados.l1 },
    { fase: "JOGO DE VOLTA", placar: dados.volta.placar, local: dados.volta.local, mandante: dados.t1, logoM: dados.l1, visitante: dados.t2, logoV: dados.l2, campeao: dados.campeao }
  ];

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER PADRÃO SITE */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <img src="/images/recopa.png" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter md:tracking-widest whitespace-nowrap uppercase">RECOPA SUDAMERICANA 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-6">
        <div className="max-w-[700px] mx-auto space-y-8">
          
          <div className="space-y-10">
            {jogos.map((j, idx) => (
              <section key={idx} className="space-y-3">
                {/* Indicador de Fase */}
                <div className="flex items-center gap-2 px-1">
                  <div className={`w-2 h-5 ${j.campeao ? 'bg-blue-600' : 'bg-[#1a2024]'}`}></div>
                  <h2 className="text-[11px] md:text-sm text-zinc-800 tracking-widest font-black uppercase">{j.fase}</h2>
                </div>

                {/* Card do Jogo */}
                <div className={`bg-[#d9d9d9]/80 rounded-sm overflow-hidden border border-black/5 shadow-xl ${j.campeao ? 'ring-2 ring-black/5' : ''}`}>
                  <div className="bg-black/10 px-4 py-2 flex justify-center items-center border-b border-black/5">
                    <span className="text-[8px] md:text-[10px] text-zinc-600 tracking-[0.2em] font-black opacity-80 uppercase">{j.local}</span>
                  </div>

                  <div className="flex justify-between items-center p-4 md:p-8 gap-2">
                    {/* Mandante */}
                    <div className="flex items-center justify-end gap-3 md:gap-5 flex-1 min-w-0">
                      <span className="text-[11px] md:text-[16px] font-black text-right truncate leading-tight uppercase">{j.mandante}</span>
                      <img src={j.logoM} alt="" className="w-7 h-7 md:w-12 md:h-12 object-contain shrink-0 drop-shadow-md" />
                    </div>

                    {/* Placar (Skew) */}
                    <div className="bg-[#1a2024] text-white px-3 py-1.5 md:px-6 md:py-3 rounded-sm skew-x-[-12deg] min-w-[75px] md:min-w-[110px] text-center border border-white/10 shadow-2xl">
                      <span className="skew-x-[12deg] inline-block font-black text-[18px] md:text-3xl tracking-tighter leading-none">
                        {j.placar}
                      </span>
                    </div>

                    {/* Visitante */}
                    <div className="flex items-center justify-start gap-3 md:gap-5 flex-1 min-w-0">
                      <img src={j.logoV} alt="" className="w-7 h-7 md:w-12 md:h-12 object-contain shrink-0 drop-shadow-md" />
                      <span className="text-[11px] md:text-[16px] font-black text-left truncate leading-tight uppercase">{j.visitante}</span>
                    </div>
                  </div>

                  {/* Banner de Campeão - Estilo Faixa de Título */}
                  {j.campeao && (
                    <div className="bg-gradient-to-r from-[#1a2024] via-[#2a343d] to-[#1a2024] text-white text-center py-4 border-t-2 border-white/10">
                        <span className="text-xl md:text-4xl font-black tracking-[0.1em] italic uppercase">
                           {j.campeao} 
                        </span>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </div>

          <div className="pb-24"></div>
        </div>
      </div>
    </main>
  );
}