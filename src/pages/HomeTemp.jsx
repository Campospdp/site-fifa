import logoCorinthians from '../assets/images/corinthians.webp';
import tacaLibertadores from '../assets/images/libertadores.png';
import tacaBrasileirao from '../assets/images/brasileirao.png';
import tacaPaulista from '../assets/images/Paulistão.png';

export default function Home({ onNavigate }) {
  return (
    <main className="flex-grow flex items-center justify-center p-4">
      {/* O clique aqui ativa a função que muda para a tela de Menu no App.jsx */}
      <div 
        onClick={onNavigate}
        className="bg-[#d9d9d9] w-full max-w-[500px] p-8 flex items-center justify-between shadow-lg border border-zinc-300 cursor-pointer hover:bg-zinc-200 transition-all group"
      >
        <div className="flex items-center gap-4">
          <img src={logoCorinthians} alt="Corinthians" className="w-16 h-16 object-contain group-hover:scale-110 transition-transform" />
          <div className="flex flex-col text-zinc-800">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">TEMPORADA</span>
            <span className="text-3xl font-black italic tracking-tighter">2025</span>
          </div>
        </div>
        
        <div className="flex gap-3 items-center">
          <img src={tacaLibertadores} alt="Libertadores" className="h-12 w-auto opacity-90" />
          <img src={tacaBrasileirao} alt="Brasileirão" className="h-12 w-auto opacity-90" />
          <img src={tacaPaulista} alt="Paulistão" className="h-12 w-auto opacity-90" />
        </div>
      </div>
    </main>
  );
}