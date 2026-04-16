import React from 'react';

export default function TabelaLibertadores({ onBack }) {
  const grupos = [
    {
      nome: "GRUPO A",
      times: [
        { pos: 1, nome: "Palmeiras", p: 6, w: 4, d: 1, l: 1, diff: 8, gls: "12:4", pts: 13, logo: "/times/palmeiras.png" },
        { pos: 2, nome: "Ind. del Valle", p: 6, w: 3, d: 2, l: 1, diff: 3, gls: "9:6", pts: 11, logo: "/times/idv.png" },
        { pos: 3, nome: "San Lorenzo", p: 6, w: 2, d: 2, l: 2, diff: 0, gls: "6:6", pts: 8, logo: "/times/san-lorenzo.png" },
        { pos: 4, nome: "Liverpool-URU", p: 6, w: 0, d: 1, l: 5, diff: -11, gls: "3:14", pts: 1, logo: "/times/liverpool.png" },
      ]
    },
    {
      nome: "GRUPO B",
      times: [
        { pos: 1, nome: "São Paulo", p: 6, w: 4, d: 1, l: 1, diff: 7, gls: "10:3", pts: 13, logo: "/times/sao paulo.png" },
        { pos: 2, nome: "Talleres", p: 6, w: 4, d: 1, l: 1, diff: 4, gls: "10:6", pts: 13, logo: "/times/talleres.png" },
        { pos: 3, nome: "Barcelona-EQU", p: 6, w: 1, d: 3, l: 2, diff: -3, gls: "6:9", pts: 6, logo: "/times/barcelona-equ.png" },
        { pos: 4, nome: "Cobresal", p: 6, w: 0, d: 1, l: 5, diff: -8, gls: "4:12", pts: 1, logo: "/times/cobresal.png" },
      ]
    },
    {
      nome: "GRUPO C",
      times: [
        { pos: 1, nome: "São Paulo", p: 6, w: 4, d: 1, l: 1, diff: 7, gls: "10:3", pts: 13, logo: "/times/sao paulo.png" },
        { pos: 2, nome: "Talleres", p: 6, w: 4, d: 1, l: 1, diff: 4, gls: "10:6", pts: 13, logo: "/times/talleres.png" },
        { pos: 3, nome: "Barcelona-EQU", p: 6, w: 1, d: 3, l: 2, diff: -3, gls: "6:9", pts: 6, logo: "/times/barcelona-equ.png" },
        { pos: 4, nome: "Cobresal", p: 6, w: 0, d: 1, l: 5, diff: -8, gls: "4:12", pts: 1, logo: "/times/cobresal.png" },
      ]
    },
    {
      nome: "GRUPO D",
      times: [
        { pos: 1, nome: "São Paulo", p: 6, w: 4, d: 1, l: 1, diff: 7, gls: "10:3", pts: 13, logo: "/times/sao paulo.png" },
        { pos: 2, nome: "Talleres", p: 6, w: 4, d: 1, l: 1, diff: 4, gls: "10:6", pts: 13, logo: "/times/talleres.png" },
        { pos: 3, nome: "Barcelona-EQU", p: 6, w: 1, d: 3, l: 2, diff: -3, gls: "6:9", pts: 6, logo: "/times/barcelona-equ.png" },
        { pos: 4, nome: "Cobresal", p: 6, w: 0, d: 1, l: 5, diff: -8, gls: "4:12", pts: 1, logo: "/times/cobresal.png" },
      ]
    },
    {
      nome: "GRUPO E",
      times: [
        { pos: 1, nome: "São Paulo", p: 6, w: 4, d: 1, l: 1, diff: 7, gls: "10:3", pts: 13, logo: "/times/sao paulo.png" },
        { pos: 2, nome: "Talleres", p: 6, w: 4, d: 1, l: 1, diff: 4, gls: "10:6", pts: 13, logo: "/times/talleres.png" },
        { pos: 3, nome: "Barcelona-EQU", p: 6, w: 1, d: 3, l: 2, diff: -3, gls: "6:9", pts: 6, logo: "/times/barcelona-equ.png" },
        { pos: 4, nome: "Cobresal", p: 6, w: 0, d: 1, l: 5, diff: -8, gls: "4:12", pts: 1, logo: "/times/cobresal.png" },
      ]
    },
    {
      nome: "GRUPO F",
      times: [
        { pos: 1, nome: "São Paulo", p: 6, w: 4, d: 1, l: 1, diff: 7, gls: "10:3", pts: 13, logo: "/times/sao paulo.png" },
        { pos: 2, nome: "Talleres", p: 6, w: 4, d: 1, l: 1, diff: 4, gls: "10:6", pts: 13, logo: "/times/talleres.png" },
        { pos: 3, nome: "Barcelona-EQU", p: 6, w: 1, d: 3, l: 2, diff: -3, gls: "6:9", pts: 6, logo: "/times/barcelona-equ.png" },
        { pos: 4, nome: "Cobresal", p: 6, w: 0, d: 1, l: 5, diff: -8, gls: "4:12", pts: 1, logo: "/times/cobresal.png" },
      ]
    },
    {
      nome: "GRUPO G",
      times: [
        { pos: 1, nome: "São Paulo", p: 6, w: 4, d: 1, l: 1, diff: 7, gls: "10:3", pts: 13, logo: "/times/sao paulo.png" },
        { pos: 2, nome: "Talleres", p: 6, w: 4, d: 1, l: 1, diff: 4, gls: "10:6", pts: 13, logo: "/times/talleres.png" },
        { pos: 3, nome: "Barcelona-EQU", p: 6, w: 1, d: 3, l: 2, diff: -3, gls: "6:9", pts: 6, logo: "/times/barcelona-equ.png" },
        { pos: 4, nome: "Cobresal", p: 6, w: 0, d: 1, l: 5, diff: -8, gls: "4:12", pts: 1, logo: "/times/cobresal.png" },
      ]
    },
    {
      nome: "GRUPO H",
      times: [
        { pos: 1, nome: "São Paulo", p: 6, w: 4, d: 1, l: 1, diff: 7, gls: "10:3", pts: 13, logo: "/times/sao paulo.png" },
        { pos: 2, nome: "Talleres", p: 6, w: 4, d: 1, l: 1, diff: 4, gls: "10:6", pts: 13, logo: "/times/talleres.png" },
        { pos: 3, nome: "Barcelona-EQU", p: 6, w: 1, d: 3, l: 2, diff: -3, gls: "6:9", pts: 6, logo: "/times/barcelona-equ.png" },
        { pos: 4, nome: "Cobresal", p: 6, w: 0, d: 1, l: 5, diff: -8, gls: "4:12", pts: 1, logo: "/times/cobresal.png" },
      ]
    },
  ];

  const mataMata = [
    {
      fase: "Oitavas de Final",
      jogos: [
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "2 x 1", t2: "River Plate", l2: "/times/river.png", info: "AGREGADO" },
        { t1: "Flamengo", l1: "/times/flamengo.png", p: "3 x 0", t2: "Bolivar", l2: "/times/bolivar.png", info: "AGREGADO" },
        { t1: "Palmeiras", l1: "/times/palmeiras.png", p: "4 x 2", t2: "Nacional", l2: "/times/nacional.png", info: "AGREGADO" },
        { t1: "São Paulo", l1: "/times/sao paulo.png", p: "2 x 0", t2: "Talleres", l2: "/times/talleres.png", info: "AGREGADO" },
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "2 x 1", t2: "River Plate", l2: "/times/river.png", info: "AGREGADO" },
        { t1: "Flamengo", l1: "/times/flamengo.png", p: "3 x 0", t2: "Bolivar", l2: "/times/bolivar.png", info: "AGREGADO" },
        { t1: "Palmeiras", l1: "/times/palmeiras.png", p: "4 x 2", t2: "Nacional", l2: "/times/nacional.png", info: "AGREGADO" },
        { t1: "São Paulo", l1: "/times/sao paulo.png", p: "2 x 0", t2: "Talleres", l2: "/times/talleres.png", info: "AGREGADO" },
      ]
    },
    {
      fase: "Quartas de Final",
      jogos: [
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "1 x 1", t2: "Flamengo", l2: "/times/flamengo.png", pen: "(5-4)", info: "AGREGADO" },
        { t1: "Palmeiras", l1: "/times/palmeiras.png", p: "3 x 2", t2: "São Paulo", l2: "/times/sao paulo.png", info: "AGREGADO" },
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "1 x 1", t2: "Flamengo", l2: "/times/flamengo.png", pen: "(5-4)", info: "AGREGADO" },
        { t1: "Palmeiras", l1: "/times/palmeiras.png", p: "3 x 2", t2: "São Paulo", l2: "/times/sao paulo.png", info: "AGREGADO" },
      ]
    },
    {
      fase: "Semifinal",
      jogos: [
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "2 x 0", t2: "Grêmio", l2: "/times/gremio.png", info: "AGREGADO" },
        { t1: "Palmeiras", l1: "/times/palmeiras.png", p: "1 x 2", t2: "Atlético-MG", l2: "/times/atletico.png", info: "AGREGADO" },
      ]
    },
    {
      fase: "Final",
      jogos: [
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "1 x 0", t2: "Atlético-MG", l2: "/times/atletico.png", info: "ESTÁDIO MONUMENTAL", campeao: "CORINTHIANS" },
      ]
    }
  ];

  // Grid para manter o padrão sem encavalar
  const gridLayout = "grid-cols-[30px_1fr_25px_0px_0px_0px_22px_40px_35px] md:grid-cols-[40px_1fr_35px_35px_35px_35px_45px_60px_45px]";

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 overflow-hidden">
          <img src="/images/liberta.png" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter md:tracking-widest whitespace-nowrap uppercase">CONMEBOL LIBERTADORES 2026</span>
        </div>
        <div className="w-8 md:w-16"></div> 
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-4">
        <div className="max-w-[950px] mx-auto space-y-10">
          
          {/* FASE DE GRUPOS */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {grupos.map((grupo) => (
              <div key={grupo.nome} className="flex flex-col shadow-lg rounded-sm overflow-hidden bg-[#d9d9d9]/40">
                <div className="bg-[#1a2024] text-zinc-400 px-3 py-2 text-[10px] md:text-[11px] border-b border-white/5 flex justify-between">
                  <span className="text-white">{grupo.nome}</span>
                  <span className="opacity-50 tracking-widest">FASE DE GRUPOS</span>
                </div>

                <div className={`grid ${gridLayout} gap-1 md:gap-2 px-1 md:px-3 py-2 text-[8px] md:text-[10px] bg-black/10 text-zinc-500 uppercase border-b border-black/5`}>
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

                {grupo.times.map((t, i) => (
                  <div key={t.nome} className={`grid ${gridLayout} gap-1 md:gap-2 px-1 md:px-3 py-2.5 items-center bg-[#d9d9d9]/70 mt-[1px] border-l-4 ${i < 2 ? 'border-[#1a2024]' : 'border-transparent'}`}>
                    <span className={`w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full text-[10px] md:text-[11px] text-white ${i < 2 ? 'bg-[#1a2024]' : 'bg-zinc-500'} shrink-0 mx-auto`}>
                      {t.pos}
                    </span>
                    <div className="flex items-center gap-2 min-w-0">
                      <img src={t.logo} alt="" className="w-5 h-5 md:w-6 md:h-6 object-contain shrink-0" />
                      <span className="truncate text-[11px] md:text-[13px] font-black leading-tight uppercase">{t.nome}</span>
                    </div>
                    <span className="text-center text-[10px] md:text-[11px] text-zinc-600">{t.p}</span>
                    <span className="text-center hidden md:block text-zinc-600">{t.w}</span>
                    <span className="text-center hidden md:block text-zinc-600">{t.d}</span>
                    <span className="text-center hidden md:block text-zinc-600">{t.l}</span>
                    <span className={`text-center text-[10px] ${t.diff > 0 ? 'text-green-700' : t.diff < 0 ? 'text-red-700' : 'text-zinc-500'}`}>
                      {t.diff > 0 ? `+${t.diff}` : t.diff}
                    </span>
                    <span className="text-center text-[8px] md:text-[10px] text-zinc-500 tracking-tighter">{t.gls}</span>
                    <span className="text-center text-[12px] md:text-[15px] font-black text-zinc-900">{t.pts}</span>
                  </div>
                ))}
              </div>
            ))}
          </section>

          {/* MATA-MATA */}
          <section className="space-y-8">
            {mataMata.map((f) => (
              <div key={f.fase} className="space-y-3">
                <div className="flex items-center gap-2 px-1 border-l-4 border-[#1a2024]">
                  <h2 className="text-[10px] md:text-xs text-zinc-600 tracking-widest uppercase ml-2">{f.fase}</h2>
                </div>

                <div className={`grid grid-cols-1 ${f.jogos.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-3`}>
                  {f.jogos.map((j, idx) => (
                    <div key={idx} className="bg-[#d9d9d9]/70 rounded-sm shadow-sm overflow-hidden border border-black/5">
                      <div className="flex justify-between items-center p-3 md:p-5 gap-2">
                        <div className="flex items-center justify-end gap-2 md:gap-3 flex-1 min-w-0">
                          <span className="text-[11px] md:text-[13px] font-black text-right truncate leading-tight uppercase">{j.t1}</span>
                          <img src={j.l1} alt="" className="w-6 h-6 md:w-8 md:h-8 object-contain shrink-0" />
                        </div>

                        <div className="bg-[#1a2024] text-white px-2 py-1.5 rounded-sm skew-x-[-12deg] min-w-[65px] md:min-w-[85px] text-center border border-white/10 shadow-md shrink-0">
                          <span className="skew-x-[12deg] inline-block font-black text-[14px] md:text-xl tracking-tighter leading-none">{j.p}</span>
                        </div>

                        <div className="flex items-center justify-start gap-2 md:gap-3 flex-1 min-w-0">
                          <img src={j.l2} alt="" className="w-6 h-6 md:w-8 md:h-8 object-contain shrink-0" />
                          <span className="text-[11px] md:text-[13px] font-black text-left truncate leading-tight uppercase">{j.t2}</span>
                        </div>
                      </div>

                      <div className="flex flex-col items-center bg-black/5 py-1.5">
                        {j.pen && <span className="text-[9px] md:text-[10px] text-red-600 font-black italic mb-0.5">PÊNALTIS: {j.pen}</span>}
                        {j.info && <span className="text-[8px] md:text-[9px] text-zinc-500 tracking-widest uppercase opacity-70">{j.info}</span>}
                      </div>

                      {j.campeao && (
                        <div className="bg-[#1a2024] text-white text-center py-3 text-xs md:text-base font-black tracking-[4px] border-t-2 border-yellow-500">
                           {j.campeao} 
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <div className="pb-24"></div>
        </div>
      </div>
    </main>
  );
}