import React from 'react';

export default function TabelaPaulistao({ onBack }) {
  const ligaGeral = [
    { pos: 1, nome: "Palmeiras", p: 12, w: 8, d: 4, l: 0, diff: 15, gls: "26:11", pts: 28, logo: "/times/palmeiras.png" },
    { pos: 2, nome: "Santos", p: 12, w: 8, d: 1, l: 3, diff: 10, gls: "18:8", pts: 25, logo: "/times/santos.webp" },
    { pos: 3, nome: "São Paulo", p: 12, w: 6, d: 4, l: 2, diff: 8, gls: "20:12", pts: 22, logo: "/times/sao paulo.png" },
    { pos: 4, nome: "Novorizontino", p: 12, w: 6, d: 4, l: 2, diff: 6, gls: "16:10", pts: 22, logo: "/times/novorizontino.png" },
    { pos: 5, nome: "RB Bragantino", p: 12, w: 6, d: 3, l: 3, diff: 4, gls: "13:9", pts: 21, logo: "/times/bragantino.png" },
    { pos: 6, nome: "São Bernardo", p: 12, w: 6, d: 3, l: 3, diff: 5, gls: "14:9", pts: 21, logo: "/times/sao-bernardo.png" },
    { pos: 7, nome: "Inter de Limeira", p: 12, w: 5, d: 2, l: 5, diff: 2, gls: "17:15", pts: 17, logo: "/times/inter-limeira.png" },
    { pos: 8, nome: "Ponte Preta", p: 12, w: 4, d: 5, l: 3, diff: 2, gls: "15:13", pts: 17, logo: "/times/ponte-preta.png" },
    { pos: 9, nome: "Água Santa", p: 12, w: 4, d: 3, l: 5, diff: -1, gls: "11:12", pts: 15, logo: "/times/agua-santa.png" },
    { pos: 10, nome: "Corinthians", p: 12, w: 4, d: 2, l: 6, diff: 1, gls: "15:14", pts: 14, logo: "/times/corinthians.webp" },
    { pos: 11, nome: "Mirassol", p: 12, w: 3, d: 5, l: 4, diff: 1, gls: "17:16", pts: 14, logo: "/times/mirassol.png" },
    { pos: 12, nome: "Botafogo-SP", p: 12, w: 3, d: 3, l: 6, diff: -8, gls: "8:16", pts: 12, logo: "/times/botafogo-sp.png" },
    { pos: 13, nome: "Guarani", p: 12, w: 2, d: 4, l: 6, diff: -5, gls: "10:15", pts: 10, logo: "/times/guarani.png" },
    { pos: 14, nome: "Portuguesa", p: 12, w: 2, d: 4, l: 6, diff: -2, gls: "10:12", pts: 10, logo: "/times/portuguesa.png" },
    { pos: 15, nome: "Santo André", p: 12, w: 1, d: 5, l: 6, diff: -9, gls: "8:17", pts: 8, logo: "/times/santo-andre.png" },
    { pos: 16, nome: "Ituano", p: 12, w: 1, d: 3, l: 8, diff: -13, gls: "5:18", pts: 6, logo: "/times/ituano.png" },
  ];

  const mataMata = [
    {
      fase: "Quartas de Final",
      jogos: [
        { t1: "Santos", l1: "/times/santos.webp", p: "2 x 1", t2: "Portuguesa", l2: "/times/portuguesa.png" },
        { t1: "Palmeiras", l1: "/times/palmeiras.png", p: "5 x 1", t2: "Ponte Preta", l2: "/times/ponte-preta.png" },
        { t1: "Bragantino", l1: "/times/bragantino.png", p: "3 x 0", t2: "Inter de Limeira", l2: "/times/inter-limeira.png" },
        { t1: "São Paulo", l1: "/times/sao paulo.png", p: "1 x 1", t2: "Novorizontino", l2: "/times/novorizontino.png", pen: "(4-5)" },
      ]
    },
    {
      fase: "Semifinais",
      jogos: [
        { t1: "Palmeiras", l1: "/times/palmeiras.png", p: "1 x 0", t2: "Novorizontino", l2: "/times/novorizontino.png" },
        { t1: "Santos", l1: "/times/santos.webp", p: "3 x 1", t2: "Bragantino", l2: "/times/bragantino.png" },
      ]
    },
    {
      fase: "Final",
      jogos: [
        { t1: "Santos", l1: "/times/santos.webp", p: "1 x 2", t2: "Palmeiras", l2: "/times/palmeiras.png", info: "IDA: 1x0 | VOLTA: 0x2", campeao: "PALMEIRAS" },
      ]
    }
  ];

  // Grid Blindada: Colunas secundárias somem no mobile (0px)
  const gridLayoutLiga = "grid-cols-[30px_1fr_25px_0px_0px_0px_22px_40px_35px] md:grid-cols-[40px_1fr_35px_35px_35px_35px_45px_60px_45px]";

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 overflow-hidden">
          <img src="/images/paulista.png" alt="" className="w-6 h-6 md:w-9 md:h-9 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter md:tracking-widest whitespace-nowrap">PAULISTÃO 2026</span>
        </div>
        <div className="w-8 md:w-10"></div>
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-4">
        <div className="max-w-[900px] mx-auto space-y-8 md:space-y-12">
          
          {/* LIGA ÚNICA */}
          <section className="space-y-4">
            <div className="flex flex-col shadow-lg overflow-hidden rounded-sm bg-[#d9d9d9]/40">
              {/* Cabeçalho */}
              <div className={`grid ${gridLayoutLiga} gap-1 md:gap-2 px-1 md:px-3 py-2 text-[8px] md:text-[10px] bg-black/10 text-zinc-500 border-b border-black/5`}>
                <span className="text-center">#</span>
                <span>TIME</span>
                <span className="text-center">P</span>
                <span className="text-center hidden md:block">W</span>
                <span className="text-center hidden md:block">D</span>
                <span className="text-center hidden md:block">L</span>
                <span className="text-center">DF</span>
                <span className="text-center">GLS</span>
                <span className="text-center text-zinc-900 font-black">PTS</span>
              </div>

              {/* Lista de Times */}
              {ligaGeral.map((t, i) => (
                <div key={t.nome} className={`grid ${gridLayoutLiga} gap-1 md:gap-2 px-1 md:px-3 py-2.5 items-center bg-[#d9d9d9]/70 mt-[1px] border-l-4 ${i < 8 ? 'border-[#12a856]' : i >= 14 ? 'border-red-600' : 'border-transparent'}`}>
                  <span className={`w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full text-[10px] md:text-[11px] text-white ${i < 8 ? 'bg-[#12a856]' : i >= 14 ? 'bg-red-600' : 'bg-zinc-500'} shrink-0 mx-auto shadow-sm`}>
                    {t.pos}
                  </span>
                  
                  <div className="flex items-center gap-2 min-w-0">
                    <img src={t.logo} alt="" className="w-5 h-5 md:w-6 md:h-6 object-contain shrink-0" />
                    <span className="truncate text-[11px] md:text-[14px] font-black leading-none">{t.nome}</span>
                  </div>

                  <span className="text-center text-[10px] md:text-[12px] text-zinc-600">{t.p}</span>
                  <span className="text-center hidden md:block text-zinc-600">{t.w}</span>
                  <span className="text-center hidden md:block text-zinc-600">{t.d}</span>
                  <span className="text-center hidden md:block text-zinc-600">{t.l}</span>
                  
                  <span className={`text-center text-[10px] md:text-[12px] ${t.diff > 0 ? 'text-green-700' : t.diff < 0 ? 'text-red-700' : 'text-zinc-500'}`}>
                    {t.diff > 0 ? `+${t.diff}` : t.diff}
                  </span>
                  
                  <span className="text-center text-[8px] md:text-[10px] text-zinc-500 tracking-tighter">{t.gls}</span>
                  
                  <span className="text-center text-[12px] md:text-[15px] font-black text-zinc-900 bg-black/5 rounded-sm py-0.5">
                    {t.pts}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* MATA-MATA */}
          <section className="space-y-6 pb-20">
            {mataMata.map((f) => (
              <div key={f.fase} className="space-y-2 mb-6">
                <div className="bg-zinc-800 text-white px-3 py-1.5 text-[10px] md:text-[11px] border-l-4 border-yellow-500 tracking-widest uppercase flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse shrink-0"></div>
                  {f.fase}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {f.jogos.map((j, idx) => (
                    <div key={idx} className="bg-[#d9d9d9]/80 rounded-sm shadow-md overflow-hidden border border-black/5">
                      <div className="flex justify-between items-center p-3 md:p-4 gap-2">
                        <div className="flex items-center justify-end gap-2 md:gap-3 flex-1 min-w-0">
                          <span className="text-[11px] md:text-[13px] font-black text-right truncate leading-tight">{j.t1}</span>
                          <img src={j.l1} alt="" className="w-6 h-6 md:w-8 md:h-8 object-contain shrink-0" />
                        </div>
                        
                        <div className="bg-[#1a2024] text-white px-2 py-1.5 rounded-sm skew-x-[-12deg] min-w-[65px] md:min-w-[85px] text-center shrink-0 border border-white/10 shadow-md">
                          <span className="skew-x-[12deg] inline-block font-black text-[14px] md:text-lg tracking-tighter leading-none">{j.p}</span>
                        </div>
                        
                        <div className="flex items-center justify-start gap-2 md:gap-3 flex-1 min-w-0">
                          <img src={j.l2} alt="" className="w-6 h-6 md:w-8 md:h-8 object-contain shrink-0" />
                          <span className="text-[11px] md:text-[13px] font-black text-left truncate leading-tight">{j.t2}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center bg-black/5 py-1.5">
                        {j.pen && <span className="text-[9px] md:text-[10px] text-red-600 font-black italic mb-0.5">PÊNALTIS: {j.pen}</span>}
                        {j.info && <span className="text-[8px] md:text-[9px] text-zinc-500 tracking-widest uppercase opacity-70 px-4 text-center">{j.info}</span>}
                      </div>

                      {j.campeao && (
                        <div className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 text-black text-center py-2.5 text-[11px] md:text-sm font-black tracking-[3px] border-t border-yellow-700">
                          CAMPEÃO: {j.campeao}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

        </div>
      </div>
    </main>
  );
}