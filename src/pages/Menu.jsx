// Adicionamos 'onGoEstatisticas' aqui nas chaves { }
export default function Menu({ onBack, onGoCalendario, onGoEstatisticas , onGoCompeticoes }) {
  // Lista de itens dos cards
  const itens = ["CALENDÁRIO", "COMPETIÇÕES", "ESTATÍSTICAS", ""];

  return (
    /* FUNDO ALTERADO PARA #959595 */
    <main className="flex-grow bg-[#959595] flex flex-col items-center justify-center p-6 relative">
      
      {/* BOTÃO VOLTAR */}
      <button 
        onClick={onBack}
        className="absolute top-6 left-6 flex items-center gap-2 text-zinc-900 hover:opacity-60 transition-all group"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="22" 
          height="22" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover:-translate-x-1 transition-transform"
        >
          <path d="m15 18-6-6 6-6"/>
        </svg>
        <span className="text-[11px] font-black tracking-[0.2em] uppercase text-zinc-900">
          Voltar
        </span>
      </button>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-[360px]">
        {itens.map((titulo, index) => (
          <div 
            key={index} 
            onClick={() => {
              if (titulo === "CALENDÁRIO") {
                onGoCalendario();
              }
              // ADICIONADO: Lógica para o botão de Estatísticas
              if (titulo === "ESTATÍSTICAS") {
                onGoEstatisticas();
              }

              if (titulo === "COMPETIÇÕES") {
                onGoCompeticoes();
              }
            }}
            className={`
              bg-[#d9d9d9]/60 aspect-square flex flex-col items-center justify-end p-5 shadow-md 
              transition-all cursor-pointer group rounded-sm
              ${titulo !== "" ? "hover:bg-zinc-100 hover:scale-[1.02]" : "cursor-default opacity-40"}
            `}
          >
            <span className="text-[10px] font-black text-zinc-900 tracking-[0.2em] text-center leading-tight uppercase group-hover:scale-105 transition-transform">
              {titulo}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}