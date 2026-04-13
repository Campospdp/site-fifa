import React from 'react';

export default function Competicoes({ onBack, onSelect }) {
  const competicoes = [
    { 
      id: 'paulistao', 
      nome: "Campeonato Paulista", 
      tipo: "GRUPOS_MATA", 
      pais: "/src/assets/Nacionalidade/Brazil.png",
      logo: "/src/assets/images/paulista.png"
    },
    { 
      id: 'supercopa', 
      nome: "Supercopa do Brasil", 
      tipo: "MATA_MATA", 
      pais: "/src/assets/Nacionalidade/Brazil.png",
      logo: "/src/assets/images/supercopa.png"
    },
    { 
      id: 'recopa', 
      nome: "CONMEBOL Recopa", 
      tipo: "MATA_MATA", 
      pais: "/src/assets/images/conmebol.png",
      logo: "/src/assets/images/recopa.png"
    },
    { 
      id: 'brasileirao', 
      nome: "Brasileirão Série A", 
      tipo: "PONTOS_CORRIDOS", 
      pais: "/src/assets/Nacionalidade/Brazil.png",
      logo: "/src/assets/images/brasileiro.png"
    },
    { 
      id: 'copa_brasil', 
      nome: "Copa Betano do Brasil", 
      tipo: "MATA_MATA", 
      pais: "/src/assets/Nacionalidade/Brazil.png",
      logo: "/src/assets/images/CBD.png"
    },
    { 
      id: 'libertadores', 
      nome: "CONMEBOL Libertadores", 
      tipo: "GRUPOS_MATA", 
      pais: "/src/assets/images/conmebol.png",
      logo: "/src/assets/images/liberta.png"
    },
    { 
      id: 'sudamericana', 
      nome: "CONMEBOL Sudamericana", 
      tipo: "GRUPOS_MATA", 
      pais: "/src/assets/images/conmebol.png",
      logo: "/src/assets/images/sudamericana.png"
    },
    { 
      id: 'mundial', 
      nome: "FIFA Copa do Mundo de Clubes", 
      tipo: "MATA_MATA", 
      pais: "/src/assets/images/fifa.png",
      logo: "/src/assets/images/mundial.png"
    },
  ];

  return (
    <main className="flex-grow bg-[#959595] flex flex-col h-full overflow-hidden font-sans uppercase italic font-bold">
      
      {/* HEADER RESPONSIVO */}
      <div className="flex items-center justify-between p-3 sm:p-4 bg-[#1a2024] border-b border-white/10 shrink-0">
        <button 
          onClick={onBack} 
          className="text-white hover:opacity-70 transition-colors flex items-center gap-1.5 sm:gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-bold">VOLTAR</span>
        </button>
        
        <span className="text-[9px] sm:text-[10px] font-black text-zinc-400 italic">SELECIONAR COMPETIÇÃO</span>
      </div>

      {/* ÁREA DE SCROLL */}
      <div className="flex-grow overflow-auto custom-scroll p-3 sm:p-6">
        <div className="flex flex-col gap-2 w-full max-w-full md:max-w-[700px] lg:max-w-[800px] mx-auto pb-10">
          
          {competicoes.map((comp) => (
            <button
              key={comp.id}
              onClick={() => onSelect && onSelect(comp)}
              className="group relative flex items-center justify-between bg-[#d9d9d9]/60 p-2 sm:p-3 shadow-sm rounded-sm cursor-pointer hover:bg-white/40 transition-all gap-2"
            >
              <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                {/* LOGO DA COMPETIÇÃO */}
                <div className="shrink-0 w-8 h-8 sm:w-11 sm:h-11 bg-zinc-400/30 rounded-full border border-black/10 flex items-center justify-center overflow-hidden">
                   <img 
                    src={comp.logo} 
                    alt={comp.nome} 
                    className="w-6 h-6 sm:w-8 sm:h-8 object-contain group-hover:scale-110 transition-transform"
                   />
                </div>
                
                <div className="flex flex-col text-left truncate">
                  <span className="text-xs sm:text-sm md:text-base font-black text-zinc-900 uppercase italic tracking-tighter leading-tight truncate">
                    {comp.nome}
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-zinc-500 font-bold tracking-widest uppercase mt-0.5">
                    {comp.tipo.replace('_', ' ')}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-4 shrink-0 pr-1 sm:pr-2">
                {/* LOGO DO PAÍS (BRASIL OU OUTROS) */}
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                  {comp.pais.startsWith('/src') ? (
                    <img 
                      src={comp.pais} 
                      alt="País" 
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-lg sm:text-2xl">{comp.pais}</span>
                  )}
                </div>
                
                <svg 
                  className="text-zinc-400 group-hover:text-zinc-900 transition-colors w-4 h-4 sm:w-5 sm:h-5" 
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