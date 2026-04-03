import Footer from './components/Footer';
import logoCorinthians from './assets/images/corinthians.webp';
import tacaLibertadores from './assets/images/libertadores.png';
import tacaBrasileirao from './assets/images/brasileirao.png';
import tacaPaulista from './assets/images/Paulistão.png';
import fmnLogo from './assets/images/fc_mania.png'; 
import eaLogo from './assets/images/ea_logo.png'; 

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#16171d]">
      
      {/* HEADER RESPONSIVO */}
      <header className="p-4 md:p-6 bg-[#1c1d26] border-b border-[#2e303a] flex justify-between items-center">
        {/* Logo EA SPORTS - Menor no celular (h-7) e maior no PC (md:h-10) */}
        <img src={eaLogo} alt="EA Sports" className="h-7 md:h-10 w-auto object-contain" />
        
        {/* Logo FMN */}
        <img src={fmnLogo} alt="FMN" className="h-6 md:h-8 w-auto object-contain" />
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        {/* BANNER PRINCIPAL 
            No celular: flex-col (um embaixo do outro)
            No PC: md:flex-row (lado a lado)
        */}
        <div className="bg-[#d9d9d9] w-full max-w-[500px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 shadow-sm border border-zinc-300 rounded-sm">
          
          <div className="flex items-center gap-4">
            {/* ESCUDO */}
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              <img src={logoCorinthians} alt="Corinthians" className="w-full h-full object-contain" />
            </div>

            {/* TEXTO TEMPORADA */}
            <div className="flex flex-col">
              <span className="text-zinc-800 text-[10px] font-bold uppercase tracking-[0.2em] leading-none">
                TEMPORADA
              </span>
              <span className="text-zinc-800 text-xl md:text-2xl font-black italic tracking-tighter">
                2025
              </span>
            </div>
          </div>

          {/* TROFÉUS - Centralizados no celular */}
          <div className="flex gap-3 items-center justify-center">
            <img src={tacaLibertadores} alt="Libertadores" className="h-10 md:h-12 w-auto object-contain" />
            <img src={tacaBrasileirao} alt="Brasileirão" className="h-10 md:h-12 w-auto object-contain" />
            <img src={tacaPaulista} alt="Paulistão" className="h-10 md:h-12 w-auto object-contain" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;