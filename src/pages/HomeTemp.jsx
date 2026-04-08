import logoCorinthians from '../assets/images/corinthians.webp';
import tacaLibertadores from '../assets/images/libertadores.png';
import tacaBrasileirao from '../assets/images/brasileirao.png';
import tacaPaulista from '../assets/images/Paulistão.png';

export default function Home({ onNavigate }) {
  return (
    <main className="flex-grow flex items-center justify-center p-4">
      {/* Ajustes realizados:
          - flex-col: Empilha no celular
          - sm:flex-row: Fica lado a lado no PC
          - gap-6: Espaçamento para não grudar no mobile
      */}
      <div 
        onClick={onNavigate}
        className="bg-[#d9d9d9] w-full max-w-[500px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between shadow-lg border border-zinc-300 cursor-pointer hover:bg-zinc-200 transition-all group gap-6 sm:gap-0"
      >
        <div className="flex items-center gap-4">
          <img src={logoCorinthians} alt="Corinthians" className="w-14 h-14 sm:w-16 sm:h-16 object-contain group-hover:scale-110 transition-transform" />
          <div className="flex flex-col text-zinc-800 text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">TEMPORADA</span>
            <span className="text-3xl font-black italic tracking-tighter">2025</span>
          </div>
        </div>
        
        {/* Ajuste nas taças: no celular elas ficam menores para caberem lado a lado */}
        <div className="flex gap-4 items-center justify-center">
          <img src={tacaLibertadores} alt="Libertadores" className="h-10 sm:h-12 w-auto opacity-90 object-contain" />
          <img src={tacaBrasileirao} alt="Brasileirão" className="h-10 sm:h-12 w-auto opacity-90 object-contain" />
          <img src={tacaPaulista} alt="Paulistão" className="h-10 sm:h-12 w-auto opacity-90 object-contain" />
        </div>
      </div>
    </main>
  );
}