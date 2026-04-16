import React from 'react';

export default function TabelaSudamericana({ onBack }) {
  const grupos = [
    {
      nome: "GRUPO A",
      times: [
        { pos: 1, nome: "Corinthians", p: 6, w: 4, d: 1, l: 1, diff: 7, gls: "8:1", pts: 13, logo: "/times/corinthians.webp" },
        { pos: 2, nome: "Racing-URU", p: 6, w: 3, d: 2, l: 1, diff: 3, gls: "10:7", pts: 11, logo: "/times/racing-uru.png" },
        { pos: 3, nome: "Argentinos Jrs", p: 6, w: 3, d: 0, l: 3, diff: -5, gls: "7:12", pts: 9, logo: "/times/argentinos.png" },
        { pos: 4, nome: "Nacional-PAR", p: 6, w: 0, d: 1, l: 5, diff: -5, gls: "6:11", pts: 1, logo: "/times/nacional-par.png" },
      ]
    },
    {
      nome: "GRUPO B",
      times: [
        { pos: 1, nome: "Cruzeiro", p: 6, w: 3, d: 3, l: 0, diff: 5, gls: "8:3", pts: 12, logo: "/times/cruzeiro.png" },
        { pos: 2, nome: "U. La Calera", p: 6, w: 2, d: 2, l: 2, diff: -2, gls: "3:5", pts: 8, logo: "/times/la-calera.png" },
        { pos: 3, nome: "Alianza Petrol.", p: 6, w: 1, d: 2, l: 3, diff: -3, gls: "5:8", pts: 5, logo: "/times/alianza.png" },
        { pos: 4, nome: "U. Católica-EQU", p: 6, w: 1, d: 1, l: 4, diff: 0, gls: "8:8", pts: 4, logo: "/times/catolica-equ.png" },
      ]
    },
    {
      nome: "GRUPO C",
      times: [
        { pos: 1, nome: "Cruzeiro", p: 6, w: 3, d: 3, l: 0, diff: 5, gls: "8:3", pts: 12, logo: "/times/cruzeiro.png" },
        { pos: 2, nome: "U. La Calera", p: 6, w: 2, d: 2, l: 2, diff: -2, gls: "3:5", pts: 8, logo: "/times/la-calera.png" },
        { pos: 3, nome: "Alianza Petrol.", p: 6, w: 1, d: 2, l: 3, diff: -3, gls: "5:8", pts: 5, logo: "/times/alianza.png" },
        { pos: 4, nome: "U. Católica-EQU", p: 6, w: 1, d: 1, l: 4, diff: 0, gls: "8:8", pts: 4, logo: "/times/catolica-equ.png" },
      ]
    },
    {
      nome: "GRUPO D",
      times: [
        { pos: 1, nome: "Cruzeiro", p: 6, w: 3, d: 3, l: 0, diff: 5, gls: "8:3", pts: 12, logo: "/times/cruzeiro.png" },
        { pos: 2, nome: "U. La Calera", p: 6, w: 2, d: 2, l: 2, diff: -2, gls: "3:5", pts: 8, logo: "/times/la-calera.png" },
        { pos: 3, nome: "Alianza Petrol.", p: 6, w: 1, d: 2, l: 3, diff: -3, gls: "5:8", pts: 5, logo: "/times/alianza.png" },
        { pos: 4, nome: "U. Católica-EQU", p: 6, w: 1, d: 1, l: 4, diff: 0, gls: "8:8", pts: 4, logo: "/times/catolica-equ.png" },
      ]
    },
    {
      nome: "GRUPO E",
      times: [
        { pos: 1, nome: "Cruzeiro", p: 6, w: 3, d: 3, l: 0, diff: 5, gls: "8:3", pts: 12, logo: "/times/cruzeiro.png" },
        { pos: 2, nome: "U. La Calera", p: 6, w: 2, d: 2, l: 2, diff: -2, gls: "3:5", pts: 8, logo: "/times/la-calera.png" },
        { pos: 3, nome: "Alianza Petrol.", p: 6, w: 1, d: 2, l: 3, diff: -3, gls: "5:8", pts: 5, logo: "/times/alianza.png" },
        { pos: 4, nome: "U. Católica-EQU", p: 6, w: 1, d: 1, l: 4, diff: 0, gls: "8:8", pts: 4, logo: "/times/catolica-equ.png" },
      ]
    },
    {
      nome: "GRUPO F",
      times: [
        { pos: 1, nome: "Cruzeiro", p: 6, w: 3, d: 3, l: 0, diff: 5, gls: "8:3", pts: 12, logo: "/times/cruzeiro.png" },
        { pos: 2, nome: "U. La Calera", p: 6, w: 2, d: 2, l: 2, diff: -2, gls: "3:5", pts: 8, logo: "/times/la-calera.png" },
        { pos: 3, nome: "Alianza Petrol.", p: 6, w: 1, d: 2, l: 3, diff: -3, gls: "5:8", pts: 5, logo: "/times/alianza.png" },
        { pos: 4, nome: "U. Católica-EQU", p: 6, w: 1, d: 1, l: 4, diff: 0, gls: "8:8", pts: 4, logo: "/times/catolica-equ.png" },
      ]
    },
    {
      nome: "GRUPO G",
      times: [
        { pos: 1, nome: "Cruzeiro", p: 6, w: 3, d: 3, l: 0, diff: 5, gls: "8:3", pts: 12, logo: "/times/cruzeiro.png" },
        { pos: 2, nome: "U. La Calera", p: 6, w: 2, d: 2, l: 2, diff: -2, gls: "3:5", pts: 8, logo: "/times/la-calera.png" },
        { pos: 3, nome: "Alianza Petrol.", p: 6, w: 1, d: 2, l: 3, diff: -3, gls: "5:8", pts: 5, logo: "/times/alianza.png" },
        { pos: 4, nome: "U. Católica-EQU", p: 6, w: 1, d: 1, l: 4, diff: 0, gls: "8:8", pts: 4, logo: "/times/catolica-equ.png" },
      ]
    },
    {
      nome: "GRUPO H",
      times: [
        { pos: 1, nome: "Cruzeiro", p: 6, w: 3, d: 3, l: 0, diff: 5, gls: "8:3", pts: 12, logo: "/times/cruzeiro.png" },
        { pos: 2, nome: "U. La Calera", p: 6, w: 2, d: 2, l: 2, diff: -2, gls: "3:5", pts: 8, logo: "/times/la-calera.png" },
        { pos: 3, nome: "Alianza Petrol.", p: 6, w: 1, d: 2, l: 3, diff: -3, gls: "5:8", pts: 5, logo: "/times/alianza.png" },
        { pos: 4, nome: "U. Católica-EQU", p: 6, w: 1, d: 1, l: 4, diff: 0, gls: "8:8", pts: 4, logo: "/times/catolica-equ.png" },
      ]
    },
  ];

  const mataMata = [
    {
      fase: "OITAVAS DE FINAL",
      jogos: [
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "2 x 1", t2: "River Plate", l2: "/times/river.png", info: "AGREGADO" },
        { t1: "Flamengo", l1: "/times/flamengo.png", p: "3 x 0", t2: "Bolivar", l2: "/times/bolivar.png", info: "AGREGADO" },
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "2 x 1", t2: "River Plate", l2: "/times/river.png", info: "AGREGADO" },
        { t1: "Flamengo", l1: "/times/flamengo.png", p: "3 x 0", t2: "Bolivar", l2: "/times/bolivar.png", info: "AGREGADO" },
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "2 x 1", t2: "River Plate", l2: "/times/river.png", info: "AGREGADO" },
        { t1: "Flamengo", l1: "/times/flamengo.png", p: "3 x 0", t2: "Bolivar", l2: "/times/bolivar.png", info: "AGREGADO" },
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "2 x 1", t2: "River Plate", l2: "/times/river.png", info: "AGREGADO" },
        { t1: "Flamengo", l1: "/times/flamengo.png", p: "3 x 0", t2: "Bolivar", l2: "/times/bolivar.png", info: "AGREGADO" },
      ]
    },
    {
      fase: "QUARTAS DE FINAL",
      jogos: [
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "1 x 1", t2: "Flamengo", l2: "/times/flamengo.png", pen: "(5-4)", info: "AGREGADO" },
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "1 x 1", t2: "Flamengo", l2: "/times/flamengo.png", pen: "(5-4)", info: "AGREGADO" },
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "1 x 1", t2: "Flamengo", l2: "/times/flamengo.png", pen: "(5-4)", info: "AGREGADO" },
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "1 x 1", t2: "Flamengo", l2: "/times/flamengo.png", pen: "(5-4)", info: "AGREGADO" },
      ]
    },
    {
      fase: "SEMI FINAL",
      jogos: [
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "1 x 1", t2: "Flamengo", l2: "/times/flamengo.png", pen: "(5-4)", info: "AGREGADO" },
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "1 x 1", t2: "Flamengo", l2: "/times/flamengo.png", pen: "(5-4)", info: "AGREGADO" },
      ]
    },
    {
      fase: "FINAL",
      jogos: [
        { t1: "Corinthians", l1: "/times/corinthians.webp", p: "1 x 0", t2: "Atlético-MG", l2: "/times/atletico.png", info: "ESTÁDIO MONUMENTAL", campeao: "CORINTHIANS" },
      ]
    }
  ];

  // Grid blindada para mobile: esconde colunas secundárias para focar em Time e PTS
  const gridLayout = "grid-cols-[25px_1fr_25px_0px_0px_0px_25px_35px_30px] md:grid-cols-[45px_1fr_35px_35px_35px_35px_45px_60px_45px]";

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <img src="/images/sudamericana.png" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-widest whitespace-nowrap">CONMEBOL SUDAMERICANA 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-4">
        <div className="max-w-[1000px] mx-auto space-y-10">
          
          {/* FASE DE GRUPOS - Layout responsivo de 1 ou 2 colunas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {grupos.map((grupo) => (
              <section key={grupo.nome} className="flex flex-col rounded-sm overflow-hidden border border-black/10 shadow-lg bg-[#d9d9d9]/60">
                <div className="bg-[#1a2024] text-white px-3 py-1.5 text-[10px] md:text-[12px] flex items-center gap-2">
                  <div className="w-1 h-3 bg-white/30"></div>
                  {grupo.nome}
                </div>

                {/* Cabeçalho da Tabela */}
                <div className={`grid ${gridLayout} gap-1 px-1 md:px-3 py-2 text-[7px] md:text-[10px] bg-black/5 text-zinc-500 border-b border-black/5`}>
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

                {/* Times */}
                {grupo.times.map((t, i) => (
                  <div key={t.nome} className={`grid ${gridLayout} gap-1 px-1 md:px-3 py-2.5 items-center mt-[1px] bg-white/20 ${i < 2 ? 'border-l-4 border-yellow-500' : 'border-l-4 border-transparent'}`}>
                    <span className="w-4 h-4 md:w-6 md:h-6 flex items-center justify-center rounded-sm text-[9px] md:text-[11px] text-white bg-[#1a2024]/80">
                      {t.pos}
                    </span>
                    <div className="flex items-center gap-1.5 md:gap-3 min-w-0">
                      <img src={t.logo} alt="" className="w-4 h-4 md:w-5 md:h-5 object-contain shrink-0" />
                      <span className="truncate text-[10px] md:text-[13px] font-black leading-none">{t.nome}</span>
                    </div>
                    <span className="text-center text-zinc-600 text-[9px] md:text-sm">{t.p}</span>
                    <span className="text-center text-zinc-600 hidden md:block">{t.w}</span>
                    <span className="text-center text-zinc-600 hidden md:block">{t.d}</span>
                    <span className="text-center text-zinc-600 hidden md:block">{t.l}</span>
                    <span className={`text-center text-[9px] md:text-sm ${t.diff > 0 ? 'text-green-700' : t.diff < 0 ? 'text-red-700' : 'text-zinc-500'}`}>{t.diff}</span>
                    <span className="text-center text-zinc-500 text-[7px] md:text-[10px] tracking-tighter">{t.gls}</span>
                    <span className="text-center text-[12px] md:text-[15px] font-black bg-black/5 rounded-sm">{t.pts}</span>
                  </div>
                ))}
              </section>
            ))}
          </div>

          {/* MATA-MATA */}
          <div className="space-y-10 pb-24">
            {mataMata.map((f, idx) => (
              <section key={idx} className="space-y-3">
                <div className="flex items-center gap-2 px-1">
                  <div className="w-2 h-5 bg-[#1a2024]"></div>
                  <h2 className="text-[12px] md:text-sm text-[#1a2024] tracking-widest font-black uppercase">{f.fase}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  {f.jogos.map((j, jIdx) => (
                    <div key={jIdx} className="bg-[#d9d9d9]/80 rounded-sm overflow-hidden border border-black/5 shadow-md">
                      <div className="bg-black/10 px-4 py-1 flex justify-center items-center">
                        <span className="text-[7px] md:text-[9px] text-zinc-500 tracking-widest uppercase">{j.info}</span>
                      </div>

                      <div className="flex justify-between items-center p-3 md:p-5 gap-2">
                        <div className="flex items-center justify-end gap-2 md:gap-4 flex-1 min-w-0">
                          <span className="text-[11px] md:text-[14px] font-black text-right truncate leading-tight">{j.t1}</span>
                          <img src={j.l1} alt="" className="w-6 h-6 md:w-10 md:h-10 object-contain shrink-0" />
                        </div>

                        <div className="bg-[#1a2024] text-white px-2 py-1 md:py-2 rounded-sm skew-x-[-12deg] min-w-[65px] md:min-w-[95px] text-center border border-white/10 shadow-lg">
                          <span className="skew-x-[12deg] inline-block font-black text-[15px] md:text-2xl tracking-tighter">
                            {j.p}
                          </span>
                        </div>

                        <div className="flex items-center justify-start gap-2 md:gap-4 flex-1 min-w-0">
                          <img src={j.l2} alt="" className="w-6 h-6 md:w-10 md:h-10 object-contain shrink-0" />
                          <span className="text-[11px] md:text-[14px] font-black text-left truncate leading-tight">{j.t2}</span>
                        </div>
                      </div>

                      {j.pen && (
                        <div className="text-center text-[9px] md:text-[11px] text-red-600 pb-3 font-black tracking-widest">
                          PÊNALTIS: {j.pen}
                        </div>
                      )}

                      {j.campeao && (
                        <div className="bg-gradient-to-r from-[#1a2024] via-[#3a444d] to-[#1a2024] text-white text-center py-3 text-[12px] md:text-sm font-black tracking-[4px] border-t-2 border-yellow-500 shadow-inner">
                           {j.campeao} 
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}