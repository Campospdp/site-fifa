import logoCorinthians from '../assets/images/corinthians.webp';

export default function Home({ onNavigate }) {
  return (
    <main className="flex-grow flex items-center justify-center p-6">
      <div 
        onClick={onNavigate}
        className="bg-[#d9d9d9] w-full max-w-[320px] p-8 flex flex-col items-center justify-center shadow-2xl border border-zinc-300 cursor-pointer active:scale-95 active:bg-zinc-200 transition-all gap-4"
      >
        {/* LOGO - Tamanho otimizado para mobile */}
        <img 
          src={logoCorinthians} 
          alt="Corinthians" 
          className="w-24 h-24 object-contain" 
        />
        
        {/* TEXTO CENTRALIZADO */}
        <div className="flex flex-col text-zinc-800 text-center">
          <span className="text-[12px] font-bold uppercase tracking-[0.4em] opacity-70">
            Temporada
          </span>
          <span className="text-5xl font-black italic tracking-tighter leading-none">
            2025
          </span>
        </div>
      </div>
    </main>
  );
}