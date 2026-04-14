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
        { pos: 1, nome: "The Strongest", p: 6, w: 3, d: 1, l: 2, diff: 2, gls: "8:6", pts: 10, logo: "/times/the-strongest.png" },
        { pos: 2, nome: "Grêmio", p: 6, w: 3, d: 1, l: 2, diff: 1, gls: "6:5", pts: 10, logo: "/times/gremio.png" },
        { pos: 3, nome: "Huachipato", p: 6, w: 2, d: 2, l: 2, diff: -2, gls: "7:9", pts: 8, logo: "/times/huachipato.png" },
        { pos: 4, nome: "Estudiantes", p: 6, w: 1, d: 2, l: 3, diff: -1, gls: "6:7", pts: 5, logo: "/times/estudiantes.png" },
      ]
    },
    {
      nome: "GRUPO D",
      times: [
        { pos: 1, nome: "Junior Barran.", p: 6, w: 2, d: 4, l: 0, diff: 3, gls: "7:4", pts: 10, logo: "/times/junior.png" },
        { pos: 2, nome: "Botafogo", p: 6, w: 3, d: 1, l: 2, diff: 1, gls: "7:6", pts: 10, logo: "/times/botafogo.png" },
        { pos: 3, nome: "LDU Quito", p: 6, w: 2, d: 1, l: 3, diff: 0, gls: "6:6", pts: 7, logo: "/times/ldu.png" },
        { pos: 4, nome: "Univ. Deportes", p: 6, w: 1, d: 2, l: 3, diff: -4, gls: "5:9", pts: 5, logo: "/times/universitario.png" },
      ]
    },
    {
      nome: "GRUPO E",
      times: [
        { pos: 1, nome: "Bolívar", p: 6, w: 4, d: 1, l: 1, diff: 4, gls: "13:9", pts: 13, logo: "/times/bolivar.png" },
        { pos: 2, nome: "Flamengo", p: 6, w: 3, d: 1, l: 2, diff: 7, gls: "11:4", pts: 10, logo: "/times/flamengo.png" },
        { pos: 3, nome: "Palestino", p: 6, w: 2, d: 1, l: 3, diff: -5, gls: "6:11", pts: 7, logo: "/times/palestino.png" },
        { pos: 4, nome: "Millonarios", p: 6, w: 0, d: 3, l: 3, diff: -6, gls: "6:12", pts: 3, logo: "/times/millonarios.png" },
      ]
    },
    {
      nome: "GRUPO F",
      times: [
        { pos: 1, nome: "Palmeiras", p: 6, w: 4, d: 2, l: 0, diff: 9, gls: "14:5", pts: 14, logo: "/times/palmeiras.png" },
        { pos: 2, nome: "San Lorenzo", p: 6, w: 2, d: 2, l: 2, diff: 0, gls: "6:6", pts: 8, logo: "/times/san-lorenzo.png" },
        { pos: 3, nome: "Ind. del Valle", p: 6, w: 2, d: 1, l: 3, diff: -1, gls: "8:9", pts: 7, logo: "/times/idv.png" },
        { pos: 4, nome: "Liverpool-URU", p: 6, w: 1, d: 1, l: 4, diff: -8, gls: "6:14", pts: 4, logo: "/times/liverpool.png" },
      ]
    },
    {
      nome: "GRUPO G",
      times: [
        { pos: 1, nome: "Atlético-MG", p: 6, w: 5, d: 0, l: 1, diff: 8, gls: "14:6", pts: 15, logo: "/times/atletico.png" },
        { pos: 2, nome: "Peñarol", p: 6, w: 4, d: 0, l: 2, diff: 7, gls: "12:5", pts: 12, logo: "/times/penarol.png" },
        { pos: 3, nome: "Rosario Central", p: 6, w: 2, d: 1, l: 3, diff: 1, gls: "8:7", pts: 7, logo: "/times/rosario.png" },
        { pos: 4, nome: "Caracas", p: 6, w: 0, d: 1, l: 5, diff: -16, gls: "3:19", pts: 1, logo: "/times/caracas.png" },
      ]
    },
    {
      nome: "GRUPO H",
      times: [
        { pos: 1, nome: "River Plate", p: 6, w: 5, d: 1, l: 0, diff: 9, gls: "12:3", pts: 16, logo: "/times/river.png" },
        { pos: 2, nome: "Nacional-URU", p: 6, w: 3, d: 1, l: 2, diff: 1, gls: "8:7", pts: 10, logo: "/times/nacional.png" },
        { pos: 3, nome: "Libertad", p: 6, w: 2, d: 1, l: 3, diff: -1, gls: "7:8", pts: 7, logo: "/times/libertad.png" },
        { pos: 4, nome: "Dep. Táchira", p: 6, w: 0, d: 1, l: 5, diff: -9, gls: "2:11", pts: 1, logo: "/times/tachira.png" },
      ]
    }
  ];

  const mataMata = [
    {
      fase: "Oitavas de Final",
      jogos: [
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

  // Grid responsivo: no mobile removemos colunas menos vitais (W, D, L) para não esmagar os logos
  const gridLayout = "grid-cols-[25px_1fr_20px_0px_0px_0px_22px_35px_25px] md:grid-cols-[45px_1fr_35px_35px_35px_35px_45px_60px_45px]";

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER LIBERTADORES */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#0a0a0a] border-b border-yellow-600/50 shrink-0">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <img src="/images/liberta.png" alt="" className="w-6 h-6 md:w-9 md:h-9 object-contain" />
          <span className="text-[9px] md:text-xs text-yellow-500 tracking-widest whitespace-nowrap">CONMEBOL LIBERTADORES</span>
        </div>
        <div className="w-8 md:w-10"></div>
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-1 md:px-6 py-4">
        <div className="max-w-[950px] mx-auto space-y-10">
          
          {/* FASE DE GRUPOS */}
          <section className="space-y-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {grupos.map((grupo) => (
                <div key={grupo.nome} className="flex flex-col shadow-xl rounded-sm overflow-hidden">
                  <div className="bg-zinc-900 text-yellow-500 px-3 py-1.5 text-[10px] md:text-[12px] border-b border-yellow-600/30 flex justify-between items-center">
                    <span>{grupo.nome}</span>
                    <span className="text-[7px] text-zinc-500 italic">CONMEBOL</span>
                  </div>

                  <div className={`grid ${gridLayout} gap-0.5 md:gap-2 px-1 md:px-2 py-2 text-[7px] md:text-[10px] bg-zinc-800/90 text-zinc-400 overflow-hidden`}>
                    <span className="text-center">#</span>
                    <span>TIME</span>
                    <span className="text-center">P</span>
                    <span className="text-center hidden md:block">W</span>
                    <span className="text-center hidden md:block">D</span>
                    <span className="text-center hidden md:block">L</span>
                    <span className="text-center">DF</span>
                    <span className="text-center">GLS</span>
                    <span className="text-center text-yellow-500 font-black">PTS</span>
                  </div>

                  {grupo.times.map((t, i) => (
                    <div key={t.nome} className={`grid ${gridLayout} gap-0.5 md:gap-2 px-1 md:px-2 py-3 md:py-4 items-center bg-[#d9d9d9]/70 mt-[1px] border-l-4 ${i < 2 ? 'border-yellow-500' : 'border-transparent'}`}>
                      <span className={`w-4 h-4 md:w-7 md:h-7 flex items-center justify-center rounded-full text-[9px] md:text-[12px] text-white ${i < 2 ? 'bg-zinc-900 border border-yellow-600/50 shadow-sm' : 'bg-zinc-500'}`}>
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
                      <span className="text-center text-[8px] md:text-[11px] text-zinc-500 tracking-tighter leading-none">{t.gls}</span>
                      <span className="text-center text-[11px] md:text-[15px] font-black text-zinc-900 leading-none">{t.pts}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

          {/* MATA-MATA */}
          <section className="space-y-6 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-8">
              {mataMata.map((f) => (
                <div key={f.fase} className="space-y-2 mb-6">
                  <div className="bg-zinc-900 text-yellow-500 px-3 py-1.5 text-[9px] md:text-[10px] border-l-4 border-yellow-600 tracking-widest uppercase flex items-center gap-2">
                    <div className="w-1 h-1 bg-yellow-500 rounded-full animate-pulse"></div>
                    {f.fase}
                  </div>
                  {f.jogos.map((j, idx) => (
                    <div key={idx} className="bg-[#d9d9d9]/90 rounded-sm shadow-md overflow-hidden border border-black/5">
                      <div className="flex justify-between items-center p-2 md:p-3 gap-1 md:gap-2">
                        <div className="flex items-center justify-end gap-1.5 md:gap-3 flex-1 min-w-0">
                          <span className="text-[9px] md:text-sm text-right truncate text-zinc-900 leading-tight">{j.t1}</span>
                          <img src={j.l1} alt="" className="w-6 h-6 md:w-9 md:h-9 object-contain shrink-0" />
                        </div>
                        <div className="bg-[#1a2024] text-yellow-500 px-2 py-1 rounded-sm skew-x-[-12deg] min-w-[55px] md:min-w-[90px] text-center border border-yellow-600/30">
                          <span className="skew-x-[12deg] inline-block font-black text-[11px] md:text-xl">{j.p}</span>
                        </div>
                        <div className="flex items-center justify-start gap-1.5 md:gap-3 flex-1 min-w-0">
                          <img src={j.l2} alt="" className="w-6 h-6 md:w-9 md:h-9 object-contain shrink-0" />
                          <span className="text-[9px] md:text-sm text-left truncate text-zinc-900 leading-tight">{j.t2}</span>
                        </div>
                      </div>
                      {j.pen && <div className="text-center text-[8px] md:text-[9px] text-red-600 pb-2 font-black italic">PÊNALTIS: {j.pen}</div>}
                      {j.info && <div className="text-center text-[7px] md:text-[10px] text-zinc-500 py-1 bg-black/5 border-t border-black/5 uppercase tracking-tighter font-medium">{j.info}</div>}
                      {j.campeao && (
                        <div className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 text-black text-center py-2 text-[10px] md:text-sm font-black tracking-[2px] md:tracking-[4px] border-t border-yellow-700">
                          CAMPEÃO: {j.campeao}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}