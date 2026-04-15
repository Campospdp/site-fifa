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
        { pos: 1, nome: "Internacional", p: 6, w: 3, d: 2, l: 1, diff: 3, gls: "6:3", pts: 11, logo: "/times/internacional.webp" },
        { pos: 2, nome: "Delfín", p: 6, w: 2, d: 2, l: 2, diff: 1, gls: "9:8", pts: 8, logo: "/times/delfin.png" },
        { pos: 3, nome: "Belgrano", p: 6, w: 2, d: 3, l: 1, diff: 4, gls: "7:3", pts: 9, logo: "/times/belgrano.png" },
        { pos: 4, nome: "Real Tomayapo", p: 6, w: 0, d: 1, l: 5, diff: -8, gls: "3:11", pts: 1, logo: "/times/tomayapo.png" },
      ]
    },
    {
      nome: "GRUPO D",
      times: [
        { pos: 1, nome: "Fortaleza", p: 6, w: 4, d: 1, l: 1, diff: 7, gls: "15:8", pts: 13, logo: "/times/fortaleza.png" },
        { pos: 2, nome: "Boca Juniors", p: 6, w: 3, d: 2, l: 1, diff: 4, gls: "10:6", pts: 11, logo: "/times/boca.png" },
        { pos: 3, nome: "Nacional Potosí", p: 6, w: 2, d: 1, l: 3, diff: -3, gls: "6:9", pts: 7, logo: "/times/potosi.png" },
        { pos: 4, nome: "Trinidense", p: 6, w: 1, d: 0, l: 5, diff: -8, gls: "5:13", pts: 3, logo: "/times/trinidense.png" },
      ]
    },
    {
      nome: "GRUPO E",
      times: [
        { pos: 1, nome: "Internacional", p: 6, w: 3, d: 2, l: 1, diff: 3, gls: "6:3", pts: 11, logo: "/times/internacional.webp" },
        { pos: 2, nome: "Delfín", p: 6, w: 2, d: 2, l: 2, diff: 1, gls: "9:8", pts: 8, logo: "/times/delfin.png" },
        { pos: 3, nome: "Belgrano", p: 6, w: 2, d: 3, l: 1, diff: 4, gls: "7:3", pts: 9, logo: "/times/belgrano.png" },
        { pos: 4, nome: "Real Tomayapo", p: 6, w: 0, d: 1, l: 5, diff: -8, gls: "3:11", pts: 1, logo: "/times/tomayapo.png" },
      ]
    },
    {
      nome: "GRUPO F",
      times: [
        { pos: 1, nome: "Internacional", p: 6, w: 3, d: 2, l: 1, diff: 3, gls: "6:3", pts: 11, logo: "/times/internacional.webp" },
        { pos: 2, nome: "Delfín", p: 6, w: 2, d: 2, l: 2, diff: 1, gls: "9:8", pts: 8, logo: "/times/delfin.png" },
        { pos: 3, nome: "Belgrano", p: 6, w: 2, d: 3, l: 1, diff: 4, gls: "7:3", pts: 9, logo: "/times/belgrano.png" },
        { pos: 4, nome: "Real Tomayapo", p: 6, w: 0, d: 1, l: 5, diff: -8, gls: "3:11", pts: 1, logo: "/times/tomayapo.png" },
      ]
    },
    {
      nome: "GRUPO G",
      times: [
        { pos: 1, nome: "Internacional", p: 6, w: 3, d: 2, l: 1, diff: 3, gls: "6:3", pts: 11, logo: "/times/internacional.webp" },
        { pos: 2, nome: "Delfín", p: 6, w: 2, d: 2, l: 2, diff: 1, gls: "9:8", pts: 8, logo: "/times/delfin.png" },
        { pos: 3, nome: "Belgrano", p: 6, w: 2, d: 3, l: 1, diff: 4, gls: "7:3", pts: 9, logo: "/times/belgrano.png" },
        { pos: 4, nome: "Real Tomayapo", p: 6, w: 0, d: 1, l: 5, diff: -8, gls: "3:11", pts: 1, logo: "/times/tomayapo.png" },
      ]
    },
    {
      nome: "GRUPO H",
      times: [
        { pos: 1, nome: "Internacional", p: 6, w: 3, d: 2, l: 1, diff: 3, gls: "6:3", pts: 11, logo: "/times/internacional.webp" },
        { pos: 2, nome: "Delfín", p: 6, w: 2, d: 2, l: 2, diff: 1, gls: "9:8", pts: 8, logo: "/times/delfin.png" },
        { pos: 3, nome: "Belgrano", p: 6, w: 2, d: 3, l: 1, diff: 4, gls: "7:3", pts: 9, logo: "/times/belgrano.png" },
        { pos: 4, nome: "Real Tomayapo", p: 6, w: 0, d: 1, l: 5, diff: -8, gls: "3:11", pts: 1, logo: "/times/tomayapo.png" },
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

  const gridLayout = "grid-cols-[25px_1fr_20px_0px_0px_0px_22px_35px_25px] md:grid-cols-[45px_1fr_35px_35px_35px_35px_45px_60px_45px]";

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER SUDAMERICANA */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#041e42] border-b border-orange-500/50 shrink-0">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <img src="/images/sudamericana.png" alt="" className="w-6 h-6 md:w-9 md:h-9 object-contain" />
          <span className="text-[9px] md:text-xs text-orange-400 tracking-widest whitespace-nowrap">CONMEBOL SUDAMERICANA</span>
        </div>
        <div className="w-8 md:w-10"></div>
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-4">
        <div className="max-w-[950px] mx-auto space-y-10">
          
          {/* FASE DE GRUPOS */}
          <section className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {grupos.map((grupo) => (
                <div key={grupo.nome} className="flex flex-col shadow-xl rounded-sm overflow-hidden border border-black/10">
                  <div className="bg-[#041e42] text-orange-400 px-3 py-1.5 text-[10px] md:text-[12px] border-b border-orange-500/30 flex justify-between items-center">
                    <span>{grupo.nome}</span>
                    <span className="text-[7px] text-zinc-400 italic">SUDAMERICANA</span>
                  </div>

                  <div className={`grid ${gridLayout} gap-0.5 md:gap-2 px-1 md:px-2 py-2 text-[7px] md:text-[10px] bg-zinc-800/95 text-zinc-400`}>
                    <span className="text-center">#</span>
                    <span>TIME</span>
                    <span className="text-center">P</span>
                    <span className="text-center hidden md:block">W</span>
                    <span className="text-center hidden md:block">D</span>
                    <span className="text-center hidden md:block">L</span>
                    <span className="text-center">DF</span>
                    <span className="text-center">GLS</span>
                    <span className="text-center text-orange-400 font-black">PTS</span>
                  </div>

                  {grupo.times.map((t, i) => (
                    <div key={t.nome} className={`grid ${gridLayout} gap-0.5 md:gap-2 px-1 md:px-2 py-3 md:py-4 items-center bg-[#d9d9d9]/70 mt-[1px] border-l-4 ${i === 0 ? 'border-orange-500' : i === 1 ? 'border-blue-400' : 'border-transparent'}`}>
                      <span className={`w-4 h-4 md:w-7 md:h-7 flex items-center justify-center rounded-full text-[9px] md:text-[12px] text-white ${i === 0 ? 'bg-[#041e42] border border-orange-500/50' : 'bg-zinc-500'}`}>
                        {t.pos}
                      </span>
                      <div className="flex items-center gap-2 md:gap-4 min-w-0">
                        <img src={t.logo} alt="" className="w-5 h-5 md:w-7 md:h-7 object-contain shrink-0" />
                        <span className="truncate text-[10px] md:text-[13px] font-black text-zinc-900 leading-none">{t.nome}</span>
                      </div>
                      <span className="text-center text-[9px] md:text-[12px] text-zinc-600">{t.p}</span>
                      <span className="text-center text-[9px] md:text-[12px] text-zinc-600 hidden md:block">{t.w}</span>
                      <span className="text-center text-[9px] md:text-[12px] text-zinc-600 hidden md:block">{t.d}</span>
                      <span className="text-center text-[9px] md:text-[12px] text-zinc-600 hidden md:block">{t.l}</span>
                      <span className={`text-center text-[9px] md:text-[12px] ${t.diff > 0 ? 'text-green-700' : t.diff < 0 ? 'text-red-700' : 'text-zinc-500'}`}>
                        {t.diff > 0 ? `+${t.diff}` : t.diff}
                      </span>
                      <span className="text-center text-[8px] md:text-[11px] text-zinc-500 tracking-tighter">{t.gls}</span>
                      <span className="text-center text-[11px] md:text-[15px] font-black text-zinc-900">{t.pts}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* MATA-MATA */}
          <section className="space-y-6 pb-20">
            {mataMata.map((f) => (
              <div key={f.fase} className="space-y-2 mb-6">
                <div className="bg-[#041e42] text-orange-400 px-3 py-1.5 text-[9px] md:text-[10px] border-l-4 border-orange-500 tracking-widest uppercase flex items-center gap-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full animate-pulse"></div>
                  {f.fase}
                </div>
                {f.jogos.map((j, idx) => (
                  <div key={idx} className="bg-[#d9d9d9]/90 rounded-sm shadow-md overflow-hidden border border-black/5">
                    <div className="flex justify-between items-center p-2 md:p-3 gap-1 md:gap-2">
                      <div className="flex items-center justify-end gap-1.5 md:gap-3 flex-1 min-w-0">
                        <span className="text-[10px] md:text-sm text-right truncate text-zinc-900">{j.t1}</span>
                        <img src={j.l1} alt="" className="w-6 h-6 md:w-9 md:h-9 object-contain shrink-0" />
                      </div>
                      <div className="bg-[#041e42] text-orange-400 px-2 py-1 rounded-sm skew-x-[-12deg] min-w-[55px] md:min-w-[90px] text-center border border-orange-500/30">
                        <span className="skew-x-[12deg] inline-block font-black text-[12px] md:text-xl">{j.p}</span>
                      </div>
                      <div className="flex items-center justify-start gap-1.5 md:gap-3 flex-1 min-w-0">
                        <img src={j.l2} alt="" className="w-6 h-6 md:w-9 md:h-9 object-contain shrink-0" />
                        <span className="text-[10px] md:text-sm text-left truncate text-zinc-900">{j.t2}</span>
                      </div>
                    </div>
                    {j.pen && <div className="text-center text-[8px] md:text-[9px] text-red-600 pb-2 font-black italic">PÊNALTIS: {j.pen}</div>}
                    {j.info && <div className="text-center text-[7px] md:text-[10px] text-zinc-500 py-1 bg-black/5 border-t border-black/5 uppercase tracking-tighter">{j.info}</div>}
                    {j.campeao && (
                      <div className="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 text-white text-center py-2 text-[11px] md:text-sm font-black tracking-[3px] md:tracking-[5px] border-t border-orange-700">
                        CAMPEÃO: {j.campeao}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </section>

        </div>
      </div>
    </main>
  );
}