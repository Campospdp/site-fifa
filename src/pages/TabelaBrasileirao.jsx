import React from 'react';

export default function TabelaBrasileirao({ onBack }) {
  const times = [
    { pos: 1, nome: "Botafogo", j: 38, v: 22, e: 10, d: 6, gp: 75, gs: 30, sg: 45, pts: 76, logo: "⭐" },
    { pos: 2, nome: "Palmeiras", j: 38, v: 21, e: 10, d: 7, gp: 70, gs: 39, sg: 31, pts: 73, logo: "🐷" },
    { pos: 3, nome: "Flamengo", j: 38, v: 20, e: 12, d: 6, gp: 72, gs: 44, sg: 28, pts: 72, logo: "🔴" },
    { pos: 4, nome: "Grêmio", j: 38, v: 20, e: 10, d: 8, gp: 60, gs: 41, sg: 19, pts: 70, logo: "🔵" },
    { pos: 5, nome: "Fluminense", j: 38, v: 18, e: 11, d: 9, gp: 51, gs: 38, sg: 13, pts: 65, logo: "🇭🇺" },
    { pos: 6, nome: "São Paulo", j: 38, v: 18, e: 10, d: 10, gp: 61, gs: 45, sg: 16, pts: 64, logo: "🇾🇪" },
    { pos: 7, nome: "Atlético-MG", j: 38, v: 16, e: 13, d: 9, gp: 59, gs: 49, sg: 10, pts: 61, logo: "🐔" },
    { pos: 8, nome: "Athletico-PR", j: 38, v: 16, e: 8, d: 14, gp: 55, gs: 53, sg: 2, pts: 56, logo: "🌪️" },
    { pos: 9, nome: "Internacional", j: 38, v: 15, e: 11, d: 12, gp: 58, gs: 51, sg: 7, pts: 56, logo: "🇦🇹" },
    { pos: 10, nome: "Fortaleza", j: 38, v: 14, e: 12, d: 12, gp: 45, gs: 44, sg: 1, pts: 54, logo: "🦁" },
    { pos: 11, nome: "Cruzeiro", j: 38, v: 12, e: 11, d: 15, gp: 35, gs: 38, sg: -3, pts: 47, logo: "🦊" },
    { pos: 12, nome: "Cuiabá", j: 38, v: 12, e: 9, d: 17, gp: 40, gs: 50, sg: -10, pts: 45, logo: "🔰" },
    { pos: 13, nome: "Corinthians", j: 38, v: 11, e: 11, d: 16, gp: 42, gs: 48, sg: -6, pts: 44, logo: "🦅" },
    { pos: 14, nome: "Vasco", j: 38, v: 11, e: 10, d: 17, gp: 39, gs: 52, sg: -13, pts: 43, logo: "💢" },
    { pos: 15, nome: "Bahia", j: 38, v: 11, e: 9, d: 18, gp: 45, gs: 55, sg: -10, pts: 42, logo: "🇳🇱" },
    { pos: 16, nome: "Vitória", j: 38, v: 10, e: 10, d: 18, gp: 38, gs: 50, sg: -12, pts: 40, logo: "🦁" },
    { pos: 17, nome: "Santos", j: 38, v: 9, e: 11, d: 18, gp: 35, gs: 55, sg: -20, pts: 38, logo: "🐳" },
    { pos: 18, nome: "Goiás", j: 38, v: 8, e: 12, d: 18, gp: 30, gs: 55, sg: -25, pts: 36, logo: "🦜" },
    { pos: 19, nome: "Coritiba", j: 38, v: 7, e: 9, d: 22, gp: 35, gs: 65, sg: -30, pts: 30, logo: "🏁" },
    { pos: 20, nome: "América-MG", j: 38, v: 5, e: 9, d: 24, gp: 30, gs: 75, sg: -45, pts: 24, logo: "🐰" },
  ];

  return (
    <main className="flex-grow bg-[#111111] text-zinc-400 italic font-bold uppercase flex flex-col h-full overflow-hidden">
      
      {/* HEADER FIXO - Adicionado Padding lateral direto aqui */}
      <div className="flex items-center justify-between p-4 pb-2">
        <button onClick={onBack} className="text-white hover:opacity-60 flex items-center gap-2 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[10px] tracking-widest">VOLTAR</span>
        </button>
        <h1 className="text-white text-base sm:text-lg tracking-tighter">BRASILEIRÃO SÉRIE A</h1>
        <div className="w-10"></div>
      </div>

      {/* ÁREA DE SCROLL ÚNICA (Vertical e Horizontal combinados) */}
      <div className="flex-grow overflow-auto custom-scroll px-2 pb-6">
        
        {/* LARGURA MÍNIMA PARA NÃO ESMAGAR NO CELULAR */}
        <div className="min-w-[450px]">
          
          {/* CABEÇALHO DA TABELA - Fica dentro do scroll horizontal */}
          <div className="grid grid-cols-[30px_1fr_35px_30px_30px_30px_30px_30px_30px_45px] gap-1 px-2 pb-2 border-b border-zinc-800 text-[9px] text-center items-end sticky top-0 bg-[#111111] z-10">
            <span></span>
            <span className="text-left">TIME</span>
            <span>J</span>
            <span>V</span>
            <span>E</span>
            <span>D</span>
            <span className="opacity-40">GP</span>
            <span className="opacity-40">GS</span>
            <span>SG</span>
            <span className="text-white">PTS</span>
          </div>

          {/* LISTA DE TIMES */}
          {times.map((time, index) => (
            <React.Fragment key={time.pos}>
              
              {/* DIVISORES */}
              {index === 0 && <div className="text-[7px] text-center bg-zinc-900/60 py-1 text-zinc-500 tracking-[0.3em] font-black">CONMEBOL LIBERTADORES</div>}
              {index === 4 && <div className="text-[7px] text-center bg-zinc-900/60 py-1 text-zinc-500 tracking-[0.3em] font-black">CLASSIF. LIBERTADORES</div>}
              {index === 6 && <div className="text-[7px] text-center bg-zinc-900/60 py-1 text-zinc-500 tracking-[0.3em] font-black">CONMEBOL SUL-AMERICANA</div>}
              {index === 16 && <div className="text-[7px] text-center bg-red-900/20 py-1 text-red-500 tracking-[0.3em] font-black">REBAIXAMENTO</div>}

              <div className={`grid grid-cols-[30px_1fr_35px_30px_30px_30px_30px_30px_30px_45px] gap-1 px-2 py-3 border-b border-zinc-900/30 text-[10px] sm:text-[11px] text-center items-center hover:bg-white/5 transition-colors`}>
                <span className="text-zinc-500 text-[9px]">{time.pos}</span>
                <div className="flex items-center gap-2 text-left min-w-0">
                  <span className="text-sm shrink-0">{time.logo}</span>
                  <span className="text-white truncate text-[10px] sm:text-[11px]">{time.nome}</span>
                </div>
                <span className="text-zinc-300">{time.j}</span>
                <span className="text-zinc-300">{time.v}</span>
                <span className="text-zinc-300">{time.e}</span>
                <span className="text-zinc-300">{time.d}</span>
                <span className="opacity-30 text-[9px]">{time.gp}</span>
                <span className="opacity-30 text-[9px]">{time.gs}</span>
                <span className={time.sg >= 0 ? 'text-blue-400' : 'text-red-400'}>{time.sg}</span>
                <span className="text-[#c9a752] text-xs sm:text-sm font-black">{time.pts}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </main>
  );
}