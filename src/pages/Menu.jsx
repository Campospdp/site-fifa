import React from 'react';

// Adicionamos 'onGoTransferencias' nas props
export default function Menu({ onBack, onGoCalendario, onGoEstatisticas, onGoCompeticoes, onGoTransferencias }) {
  // Agora o quarto item deixa de ser vazio e vira TRANSFERÊNCIAS
  const itens = ["CALENDÁRIO", "COMPETIÇÕES", "ESTATÍSTICAS", "TRANSFERÊNCIAS"];

  return (
    <main className="flex-grow bg-[#959595] flex flex-col items-center justify-center p-6 relative font-sans italic">
      
      {/* BOTÃO VOLTAR */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 flex items-center gap-2 text-zinc-900 hover:opacity-60 transition-all group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        <span className="text-[11px] font-black tracking-[0.2em] uppercase text-black">Voltar</span>
      </button>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-[360px]">
        {itens.map((titulo, index) => (
          <div 
            key={index} 
            onClick={() => {
              if (titulo === "CALENDÁRIO") onGoCalendario();
              if (titulo === "ESTATÍSTICAS") onGoEstatisticas();
              if (titulo === "COMPETIÇÕES") onGoCompeticoes();
              if (titulo === "TRANSFERÊNCIAS") onGoTransferencias(); 
            }}
            className="bg-[#d9d9d9]/60 aspect-square flex flex-col items-center justify-center p-5 shadow-md 
                       transition-all cursor-pointer group rounded-sm gap-3 border border-black/5
                       hover:bg-zinc-100 hover:scale-[1.02] active:scale-95"
          >
            {/* WRAPPER DO ÍCONE */}
            <div className="w-12 h-12 flex items-center justify-center text-black opacity-40 group-hover:opacity-100 transition-all duration-300">
              
              {/* ÍCONE COMPETIÇÕES */}
              {titulo === "COMPETIÇÕES" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                  <path d="M4 22h16" />
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
              )}

              {/* ÍCONE CALENDÁRIO */}
              {titulo === "CALENDÁRIO" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M16 2v4"/></svg>
              )}

              {/* ÍCONE ESTATÍSTICAS */}
              {titulo === "ESTATÍSTICAS" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              )}

              {/* NOVO ÍCONE TRANSFERÊNCIAS */}
              {titulo === "TRANSFERÊNCIAS" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/>
                </svg>
              )}
            </div>

            <span className="text-[10px] font-black text-black tracking-[0.2em] text-center leading-tight uppercase">
              {titulo}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}