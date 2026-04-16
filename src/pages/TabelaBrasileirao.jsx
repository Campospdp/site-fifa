import React from 'react';

export default function TabelaBrasileirao({ onBack }) {
  const times = [
    { pos: 1, nome: "Palmeiras", p: 11, w: 8, d: 2, l: 1, diff: 14, gls: "22:8", pts: 26, logo: "/times/palmeiras.png" },
    { pos: 2, nome: "Flamengo", p: 10, w: 6, d: 2, l: 2, diff: 10, gls: "19:9", pts: 20, logo: "/times/flamengo.png" },
    { pos: 3, nome: "São Paulo", p: 11, w: 6, d: 2, l: 3, diff: 8, gls: "18:10", pts: 20, logo: "/times/sao paulo.png" },
    { pos: 4, nome: "Fluminense", p: 11, w: 6, d: 2, l: 3, diff: 4, gls: "15:11", pts: 20, logo: "/times/fluminense.webp" },
    { pos: 5, nome: "Bahia", p: 10, w: 6, d: 2, l: 2, diff: 4, gls: "16:12", pts: 20, logo: "/times/bahia.png" },
    { pos: 6, nome: "Athletico", p: 10, w: 5, d: 2, l: 3, diff: 4, gls: "14:10", pts: 17, logo: "/times/athletico.png" },
    { pos: 7, nome: "Coritiba", p: 11, w: 5, d: 2, l: 4, diff: 3, gls: "17:14", pts: 17, logo: "/times/coritiba.png" },
    { pos: 8, nome: "Atlético-MG", p: 11, w: 4, d: 4, l: 3, diff: 2, gls: "13:11", pts: 16, logo: "/times/atletico.png" },
    { pos: 9, nome: "RB Bragantino", p: 11, w: 4, d: 3, l: 4, diff: 1, gls: "14:13", pts: 15, logo: "/times/bragantino.png" },
    { pos: 10, nome: "Vitória", p: 9, w: 4, d: 2, l: 3, diff: 1, gls: "10:9", pts: 14, logo: "/times/vitoria.png" },
    { pos: 11, nome: "Botafogo", p: 10, w: 4, d: 2, l: 4, diff: -2, gls: "9:11", pts: 14, logo: "/times/botafogo.png" },
    { pos: 12, nome: "Grêmio", p: 11, w: 4, d: 1, l: 6, diff: -3, gls: "12:15", pts: 13, logo: "/times/gremio.png" },
    { pos: 13, nome: "Vasco", p: 9, w: 3, d: 3, l: 3, diff: -4, gls: "12:16", pts: 12, logo: "/times/vasco.webp" },
    { pos: 14, nome: "Internacional", p: 11, w: 3, d: 2, l: 6, diff: -5, gls: "11:16", pts: 11, logo: "/times/internacional.webp" },
    { pos: 15, nome: "Santos", p: 11, w: 3, d: 1, l: 7, diff: -10, gls: "11:21", pts: 10, logo: "/times/santos.webp" },
    { pos: 16, nome: "Corinthians", p: 11, w: 2, d: 2, l: 7, diff: -4, gls: "9:13", pts: 8, logo: "/times/corinthians.webp" },
    { pos: 17, nome: "Cruzeiro", p: 11, w: 2, d: 2, l: 7, diff: -7, gls: "8:15", pts: 8, logo: "/times/cruzeiro.png" },
    { pos: 18, nome: "Remo", p: 11, w: 2, d: 2, l: 7, diff: -7, gls: "7:14", pts: 8, logo: "/times/remo.webp" },
    { pos: 19, nome: "Chapecoense", p: 11, w: 2, d: 2, l: 7, diff: -8, gls: "9:17", pts: 8, logo: "/times/chapecoense.png" },
    { pos: 20, nome: "Mirassol", p: 11, w: 1, d: 3, l: 7, diff: -11, gls: "9:20", pts: 6, logo: "/times/mirassol.png" },
  ];

  const getPosColor = (index) => {
    if (index < 4) return 'bg-[#12a856]'; 
    if (index < 6) return 'bg-[#21b46a]'; 
    if (index < 12) return 'bg-[#3e82f7]'; 
    if (index >= 16) return 'bg-red-600'; 
    return 'bg-zinc-500'; 
  };

  // AJUSTE: Grid única que funciona em ambos, garantindo largura mínima no mobile
  const gridLayout = "grid-cols-[35px_160px_35px_30px_30px_30px_35px_60px_40px] md:grid-cols-[40px_1fr_40px_40px_40px_40px_50px_70px_50px]";

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 overflow-hidden">
          <img src="/images/brasileiro.png" alt="" className="w-5 h-5 md:w-8 md:h-8 object-contain shrink-0" />
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter md:tracking-widest whitespace-nowrap uppercase">BRASILEIRÃO SÉRIE A 2026</span>
        </div>
        <div className="w-8 md:w-16"></div> 
      </div>

      {/* ÁREA DE SCROLL DA TABELA */}
      <div className="flex-grow overflow-x-auto overflow-y-auto custom-scroll px-1 md:px-6 py-4">
        {/* Definimos uma largura mínima para a tabela não esmagar no mobile */}
        <div className="max-w-[900px] min-w-[480px] mx-auto">
          <div className="flex flex-col shadow-lg rounded-sm overflow-hidden bg-[#d9d9d9]/40">
            
            {/* Cabeçalho - REMOVIDO 'hidden' das colunas */}
            <div className={`grid ${gridLayout} gap-1 px-1 md:px-3 py-2 text-[9px] md:text-[10px] bg-black/10 text-zinc-500 border-b border-black/10 items-center`}>
              <span className="text-center">#</span>
              <span>TIME</span>
              <span className="text-center">P</span>
              <span className="text-center">W</span>
              <span className="text-center">D</span>
              <span className="text-center">L</span>
              <span className="text-center">DF</span>
              <span className="text-center">GLS</span>
              <span className="text-center text-zinc-900 font-black">PTS</span>
            </div>

            {/* Linhas - REMOVIDO 'hidden' das colunas */}
            {times.map((t, i) => (
              <div key={t.nome} className={`grid ${gridLayout} gap-1 px-1 md:px-3 py-2.5 items-center bg-[#d9d9d9]/70 mt-[1px] border-l-4 ${i >= 16 ? 'border-red-600' : 'border-transparent'}`}>
                
                <span className={`w-5 h-5 md:w-7 md:h-7 flex items-center justify-center rounded-full text-[10px] md:text-[12px] text-white ${getPosColor(i)} shadow-sm shrink-0 mx-auto`}>
                  {t.pos}
                </span>
                
                <div className="flex items-center gap-2 min-w-0">
                  <img src={t.logo} alt="" className="w-4 h-4 md:w-6 md:h-6 object-contain shrink-0" />
                  <span className="truncate text-[10px] md:text-[14px] font-black leading-none">{t.nome}</span>
                </div>

                <span className="text-center text-[10px] md:text-[12px] text-zinc-600">{t.p}</span>
                <span className="text-center text-[10px] md:text-[12px] text-zinc-600">{t.w}</span>
                <span className="text-center text-[10px] md:text-[12px] text-zinc-600">{t.d}</span>
                <span className="text-center text-[10px] md:text-[12px] text-zinc-600">{t.l}</span>
                
                <span className={`text-center text-[10px] md:text-[12px] ${t.diff > 0 ? 'text-green-700' : t.diff < 0 ? 'text-red-700' : 'text-zinc-500'}`}>
                  {t.diff > 0 ? `+${t.diff}` : t.diff}
                </span>

                <span className="text-center text-[9px] md:text-[10px] text-zinc-500">{t.gls}</span>
                
                <span className="text-center text-[11px] md:text-[16px] font-black text-zinc-900 bg-black/5 rounded-sm py-0.5">
                  {t.pts}
                </span>
              </div>
            ))}
          </div>
          <div className="pb-10"></div>
        </div>
      </div>
    </main>
  );
}