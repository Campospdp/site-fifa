import React from 'react';

export default function Competicoes({ onBack, onSelect }) {
  const competicoes = [
    { id: 'paulistao', nome: "Campeonato Paulista", tipo: "LIGA_MATA", pais: "/Nacionalidade/Brazil.png", logo: "/images/paulista.png" },
    { id: 'supercopa', nome: "Supercopa do Brasil", tipo: "MATA_MATA", pais: "/Nacionalidade/Brazil.png", logo: "/images/supercopa.png" },
    { id: 'recopa', nome: "CONMEBOL Recopa", tipo: "MATA_MATA", pais: "/images/conmebol.png", logo: "/images/recopa.png" },
    { id: 'brasileirao', nome: "Brasileirão Série A", tipo: "PONTOS_CORRIDOS", pais: "/Nacionalidade/Brazil.png", logo: "/images/brasileiro.png" },
    { id: 'copa_brasil', nome: "Copa Betano do Brasil", tipo: "MATA_MATA", pais: "/Nacionalidade/Brazil.png", logo: "/images/CBD.png" },
    { id: 'libertadores', nome: "CONMEBOL Libertadores", tipo: "GRUPOS_MATA", pais: "/images/conmebol.png", logo: "/images/liberta.png" },
    { id: 'sudamericana', nome: "CONMEBOL Sudamericana", tipo: "GRUPOS_MATA", pais: "/images/conmebol.png", logo: "/images/sudamericana.png" },
    { id: 'mundial', nome: "FIFA Copa do Mundo de Clubes", tipo: "MATA_MATA", pais: "/images/fifa.png", logo: "/images/mundial.png" },
  ];

  return (
    <main className="flex-grow bg-[#959595] flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER: Ajustado para mobile (p-2 em telas minúsculas) */}
      <div className="flex items-center justify-between p-2.5 sm:p-4 bg-[#1a2024] border-b border-white/10 shrink-0">
        <button 
          onClick={onBack} 
          className="text-white active:opacity-50 hover:opacity-70 transition-colors flex items-center gap-1 sm:gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span className="text-[10px] sm:text-[11px] tracking-tighter sm:tracking-widest font-black">VOLTAR</span>
        </button>
        
        <span className="text-[9px] sm:text-[10px] font-black text-zinc-500 italic">COMPETIÇÕES</span>
      </div>

      {/* ÁREA DE LISTA: Ajustado o padding para mobile */}
      <div className="flex-grow overflow-y-auto overflow-x-hidden custom-scroll p-2 sm:p-6">
        <div className="flex flex-col gap-1.5 sm:gap-2 w-full max-w-[800px] mx-auto pb-10">
          
          {competicoes.map((comp) => (
            <button
              key={comp.id}
              onClick={() => onSelect && onSelect(comp)}
              className="group relative flex items-center justify-between bg-[#d9d9d9] p-2 sm:p-3 shadow-md rounded-sm cursor-pointer active:scale-[0.98] sm:active:scale-100 hover:bg-white transition-all gap-2 border-b-2 border-black/5"
            >
              <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                {/* LOGO DA COMPETIÇÃO: Menor no mobile (w-9) */}
                <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11 bg-white/40 rounded-full border border-black/10 flex items-center justify-center overflow-hidden">
                   <img 
                    src={comp.logo} 
                    alt={comp.nome} 
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    onError={(e) => { e.target.src = "/images/brasileiro.png"; }}
                   />
                </div>
                
                {/* TEXTOS: Ajustado tamanho para não quebrar layout no celular */}
                <div className="flex flex-col text-left truncate">
                  <span className="text-[11px] sm:text-sm md:text-base font-black text-[#1a2024] uppercase italic tracking-tight leading-tight truncate">
                    {comp.nome}
                  </span>
                  <span className="text-[7px] sm:text-[9px] text-zinc-500 font-bold tracking-widest uppercase mt-0.5">
                    {comp.tipo.replace('_', ' ')}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                {/* PAÍS: Escondido em telas muito pequenas se necessário, ou apenas menor */}
                <div className="w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center">
                  <img 
                    src={comp.pais} 
                    alt="País" 
                    className="w-full h-full object-contain drop-shadow-sm"
                    onError={(e) => { e.target.style.display = 'none'; }} 
                  />
                </div>
                
                <svg 
                  className="text-zinc-400 group-hover:text-black w-4 h-4 sm:w-5 sm:h-5" 
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </div>
            </button>
          ))}

        </div>
      </div>
    </main>
  );
}