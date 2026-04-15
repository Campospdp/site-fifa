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

  const fases = [
    {
      fase: "SEMIFINAL",
      jogos: [
        { t1: dados.t1, l1: dados.l1, p: dados.semi.placar, t2: dados.semi.adversario, l2: dados.l3, info: dados.semi.local }
      ]
    },
    {
      fase: "FINAL",
      jogos: [
        { t1: dados.t1, l1: dados.l1, p: dados.final.placar, t2: dados.t2, l2: dados.l2, info: dados.final.local, campeao: dados.campeao }
      ]
    }
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
          <img src="/images/mundial.png" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter md:tracking-widest whitespace-nowrap uppercase">FIFA CLUB WORLD CUP 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-4">
        <div className="max-w-[800px] mx-auto space-y-8">
          
          {fases.map((f, fIdx) => (
            <section key={fIdx} className="space-y-3">
              {/* Título da Fase */}
              <div className="flex items-center gap-2 px-1">
                <div className="w-1 h-4 bg-[#1a2024]"></div>
                <h2 className="text-[10px] md:text-xs text-zinc-600 tracking-widest uppercase">
                  {f.fase}
                </h2>
              </div>

              {/* Jogos da Fase */}
              <div className="grid grid-cols-1 gap-3">
                {f.jogos.map((j, jIdx) => (
                  <div key={jIdx} className="bg-[#d9d9d9]/70 rounded-sm shadow-sm overflow-hidden border border-black/5 relative">
                    <div className="flex justify-between items-center p-3 md:p-4 gap-2">
                      {/* Time 1 */}
                      <div className="flex items-center justify-end gap-2 md:gap-3 flex-1 min-w-0">
                        <span className="text-[10px] md:text-[13px] font-black text-right truncate leading-tight uppercase">{j.t1}</span>
                        <img src={j.l1} alt="" className="w-6 h-6 md:w-9 md:h-9 object-contain shrink-0" />
                      </div>

                      {/* Placar */}
                      <div className="bg-[#1a2024] text-white px-2 py-1 rounded-sm skew-x-[-12deg] min-w-[60px] md:min-w-[85px] text-center border border-white/10 shadow-md">
                        <span className="skew-x-[12deg] inline-block font-black text-[14px] md:text-xl tracking-tighter leading-none">{j.p}</span>
                      </div>

                      {/* Time 2 */}
                      <div className="flex items-center justify-start gap-2 md:gap-3 flex-1 min-w-0">
                        <img src={j.l2} alt="" className="w-6 h-6 md:w-9 md:h-9 object-contain shrink-0" />
                        <span className="text-[10px] md:text-[13px] font-black text-left truncate leading-tight uppercase">{j.t2}</span>
                      </div>
                    </div>

                    {/* Detalhes do Jogo */}
                    <div className="flex flex-col items-center bg-black/5 py-1 border-t border-black/5">
                      <span className="text-[7px] md:text-[9px] text-zinc-500 tracking-widest uppercase opacity-70">{j.info}</span>
                    </div>

                    {/* Banner Campeão integrado ao Card */}
                    {j.campeao && (
                      <div className="bg-[#1a2024] text-white text-center py-2.5 text-[11px] md:text-sm font-black tracking-[4px] border-t-2 border-white/20">
                        {j.campeao} 
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="pb-24"></div>
        </div>
      </div>
    </main>
  );
}