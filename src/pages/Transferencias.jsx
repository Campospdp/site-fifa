import React from 'react';

export default function Transferencias({ onBack }) {
  const dados = {
    entradas: [
      { nome: "Bono", vindo: "Al-Hilal", valor: "€ 35M", foto: "/players/Bono.jpg" },
      { nome: "Koulibay", vindo: "Al-Hilal", valor: "€ 35M", foto: "/players/Koulibaly.png" },
    ],
    saidas: [
      { nome: "Hugo Souza", indo: "Zenit", valor: "€ 35M", foto: "/players/Hugo Souza.webp" },
      { nome: "Hugo", indo: "Al-Hilal", valor: "€ 35M", foto: "/players/Hugo.webp" },
    ]
  };

  return (
    <main className="flex-grow bg-[#959595] text-zinc-900 flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER PADRÃO SITE */}
      <div className="flex items-center justify-between p-2 md:p-4 bg-[#1a2024] border-b border-white/10 shrink-0 shadow-lg">
        <button onClick={onBack} className="text-white active:opacity-50 flex items-center gap-1 md:gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          <span className="text-[9px] md:text-[10px]">VOLTAR</span>
        </button>
        
        <div className="flex items-center gap-1.5 md:gap-2 px-2 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2.5">
            <path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>
          </svg>
          <span className="text-[9px] md:text-xs text-zinc-400 tracking-tighter md:tracking-widest whitespace-nowrap uppercase">TRANSFERÊNCIAS 2026</span>
        </div>
        <div className="w-8 md:w-16"></div>
      </div>

      <div className="flex-grow overflow-y-auto custom-scroll px-2 md:px-6 py-4">
        <div className="max-w-[800px] mx-auto space-y-8">
          
          {/* SEÇÃO ENTRADAS */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1.5 h-4 bg-green-600"></div>
              <h2 className="text-[10px] md:text-xs text-zinc-700 tracking-widest font-black">ENTRADAS / REFORÇOS</h2>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {dados.entradas.map((t, i) => (
                <div key={i} className="bg-[#d9d9d9]/70 rounded-sm overflow-hidden border border-black/5 flex items-center justify-between p-2 md:p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-zinc-400/50 rounded-full border border-black/10 shrink-0 overflow-hidden">
                       <img src={t.foto} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] md:text-[15px] font-black leading-none truncate">{t.nome}</span>
                      <span className="text-[8px] md:text-[10px] text-zinc-500 mt-1 uppercase font-medium">Vindo de: {t.vindo}</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#1a2024] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-sm skew-x-[-12deg] border border-white/10 shrink-0 ml-2">
                    <span className="skew-x-[12deg] block text-[10px] md:text-xs font-black tracking-tighter text-center">
                      {t.valor}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SEÇÃO SAÍDAS */}
          <section className="space-y-3">
            <div className="flex items-center gap-2 px-1">
              <div className="w-1.5 h-4 bg-red-600"></div>
              <h2 className="text-[10px] md:text-xs text-zinc-700 tracking-widest font-black">SAÍDAS / VENDAS</h2>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {dados.saidas.map((t, i) => (
                <div key={i} className="bg-[#d9d9d9]/70 rounded-sm overflow-hidden border border-black/5 flex items-center justify-between p-2 md:p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    {/* REMOVIDO: grayscale e opacity-80 */}
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-zinc-400/50 rounded-full border border-black/10 shrink-0 overflow-hidden">
                       <img src={t.foto} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] md:text-[15px] font-black leading-none truncate">{t.nome}</span>
                      <span className="text-[8px] md:text-[10px] text-zinc-500 mt-1 uppercase font-medium">Destino: {t.indo}</span>
                    </div>
                  </div>
                  
                  <div className="bg-[#1a2024] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-sm skew-x-[-12deg] border border-white/10 shrink-0 ml-2">
                    <span className="skew-x-[12deg] block text-[10px] md:text-xs font-black tracking-tighter text-center">
                      {t.valor}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="pb-24"></div>
        </div>
      </div>
    </main>
  );
}