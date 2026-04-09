import React from 'react';

export default function Competicoes({ onBack, onSelect }) {
  const competicoes = [
    { id: 'paulistao', nome: "Campeonato Paulista", tipo: "GRUPOS_MATA", pais: "🇧🇷" },
    { id: 'supercopa', nome: "Supercopa do Brasil", tipo: "MATA_MATA", pais: "🇧🇷" },
    { id: 'recopa', nome: "CONMEBOL Recopa", tipo: "MATA_MATA", pais: "🌎" },
    { id: 'brasileirao', nome: "Brasileirão Série A", tipo: "PONTOS_CORRIDOS", pais: "🇧🇷" },
    { id: 'copa_brasil', nome: "Copa Betano do Brasil", tipo: "MATA_MATA", pais: "🇧🇷" },
    { id: 'libertadores', nome: "CONMEBOL Libertadores", tipo: "GRUPOS_MATA", pais: "🌎" },
    { id: 'sudamericana', nome: "CONMEBOL Sudamericana", tipo: "GRUPOS_MATA", pais: "🌎" },
    { id: 'mundial', nome: "FIFA Copa do Mundo de Clubes", tipo: "MATA_MATA", pais: "🌐" },
  ];

  return (
    <main className="flex-grow bg-[#959595] flex flex-col p-4 sm:p-6 italic font-bold uppercase overflow-y-auto custom-scroll relative">
      
      {/* BOTÃO VOLTAR */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-900 active:opacity-50 transition-all mb-6 w-fit py-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        <span className="text-[10px] sm:text-[11px] font-black tracking-[0.2em] uppercase">
          Voltar
        </span>
      </button>

      <h1 className="text-zinc-900 text-xs sm:text-sm tracking-[0.2em] mb-6 text-center">
        Competições
      </h1>

      {/* LISTA VERTICAL */}
      <div className="flex flex-col gap-2.5 w-full max-w-[450px] mx-auto pb-10">
        {competicoes.map((comp) => (
          <button
            key={comp.id}
            onClick={() => onSelect && onSelect(comp)}
            className="group relative flex items-center justify-between bg-[#d9d9d9]/60 p-3.5 sm:p-4 shadow-md border border-transparent rounded-sm overflow-hidden w-full transition-all active:scale-[0.98] hover:bg-[#e5e5e5]"
          >
            <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
              <div className="shrink-0 w-8 h-8 bg-zinc-900/10 rounded-sm flex items-center justify-center">
                 <span className="text-base sm:text-lg">🏆</span>
              </div>
              
              <div className="flex flex-col text-left overflow-hidden">
                <span className="text-[11px] sm:text-[12px] text-zinc-900 tracking-tighter leading-tight font-black truncate">
                  {comp.nome}
                </span>
                <span className="text-[7px] sm:text-[8px] text-zinc-600 font-black tracking-widest uppercase">
                  {comp.tipo.replace('_', ' ')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
              <span className="text-sm sm:text-base">{comp.pais}</span>
              {/* Seta decorativa agora com destaque no hover */}
              <svg 
                className="text-zinc-900/10 group-hover:text-zinc-900/40 transition-colors" 
                xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          </button>
        ))}
      </div>
    </main>
  );
}