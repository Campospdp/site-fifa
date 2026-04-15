import { useState } from 'react';
import Home from './pages/HomeTemp';
import Menu from './pages/Menu';
import Calendario from './pages/Calendario';
import Estatisticas from './pages/Estatisticas';
import Competicoes from './pages/Competicoes'; 
import TabelaBrasileirao from './pages/TabelaBrasileirao';
import TabelaPaulistao from './pages/TabelaPaulistao';
import TabelaLibertadores from './pages/TabelaLibertadores';
import TabelaSudamericana from './pages/TabelaSudamericana';
import TabelaCopaDoBrasil from "./pages/TabelaCopaDoBrasil";
import TabelaSupercopaBR from './pages/TabelaSupercopaBR';
import TabelaRecopa from './pages/TabelaRecopa';
import TabelaMundial from './pages/TabelaMundial';

function App() {
  const [telaAtiva, setTelaAtiva] = useState('home');

  const eaLogoPath = "/images/ea_logo.png";
  const fmnLogoPath = "/images/fc_mania.png";

  return (
    <div className="h-screen flex flex-col bg-[#16171d] font-sans overflow-hidden">
      
      {/* HEADER FIXO */}
      <header className="p-4 bg-[#1c1d26] border-b border-[#2e303a] flex justify-between items-center z-50">
        <img src={eaLogoPath} alt="EA SPORTS FC" className="h-6 w-auto object-contain" />
        <img src={fmnLogoPath} alt="FC MANIA" className="h-6 w-auto object-contain" />
      </header>

      {/* CONTEÚDO DINÂMICO */}
      <main className="flex-grow overflow-hidden flex flex-col">
        {telaAtiva === 'home' && (
          <Home onNavigate={() => setTelaAtiva('menu')} />
        )}

        {telaAtiva === 'menu' && (
          <Menu 
            onBack={() => setTelaAtiva('home')} 
            onGoCalendario={() => setTelaAtiva('calendario')} 
            onGoEstatisticas={() => setTelaAtiva('estatisticas')}
            onGoCompeticoes={() => setTelaAtiva('selecao')} 
          />
        )}

        {telaAtiva === 'selecao' && (
          <Competicoes 
            onBack={() => setTelaAtiva('menu')} 
            onSelect={(comp) => {
              if (comp.id === 'brasileirao') {
                setTelaAtiva('tabela_brasileirao');
              } else if (comp.id === 'paulistao') {
                setTelaAtiva('tabela_paulistao');
              } else if (comp.id === 'libertadores') {
                setTelaAtiva('tabela_libertadores');
              } else if (comp.id === 'sudamericana') {
                setTelaAtiva('tabela_sudamericana');
              } else if (comp.id === 'copa_brasil') {
                setTelaAtiva('tabela_copadobrasil');
              } else if (comp.id === 'supercopa') {
                setTelaAtiva('tabela_supercopabr');
              } else if (comp.id === 'recopa') {
                setTelaAtiva('tabela_recopa')
              } else if (comp.id === 'mundial') {
                setTelaAtiva('tabela_mundial')
              }
            }} 
          />
        )}

        {/* Renderização Condicional das Tabelas */}
        {telaAtiva === 'tabela_brasileirao' && (
          <TabelaBrasileirao onBack={() => setTelaAtiva('selecao')} />
        )}

        {telaAtiva === 'tabela_paulistao' && (
          <TabelaPaulistao onBack={() => setTelaAtiva('selecao')} />
        )}

        {telaAtiva === 'tabela_libertadores' && (
          <TabelaLibertadores onBack={() => setTelaAtiva('selecao')} />
        )}

        {telaAtiva === 'tabela_sudamericana' && (
          <TabelaSudamericana onBack={() => setTelaAtiva('selecao')} />
        )}

         {telaAtiva === 'tabela_copadobrasil' && (
          <TabelaCopaDoBrasil onBack={() => setTelaAtiva('selecao')} />
        )}

        {telaAtiva === 'tabela_supercopabr' && (
        <TabelaSupercopaBR onBack={() => setTelaAtiva('selecao')} />
        )}

        {telaAtiva === 'tabela_recopa' && (
        <TabelaRecopa onBack={() => setTelaAtiva('selecao')} />
        )}

        {telaAtiva === 'tabela_mundial' && (
        <TabelaMundial onBack={() => setTelaAtiva('selecao')} />
        )}

        {telaAtiva === 'calendario' && (
          <Calendario onBack={() => setTelaAtiva('menu')} />
        )}

        {telaAtiva === 'estatisticas' && (
          <Estatisticas onBack={() => setTelaAtiva('menu')} />
        )}
      </main>

      {/* FOOTER FIXO */}
      <footer className="bg-[#1c1d26] p-4 flex justify-between items-center border-t border-[#2e303a] z-50">
        <p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
          Pedro Campos © 2026
        </p>
        
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/pedro-campos-leitao" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-[#0077b5] rounded-sm flex items-center justify-center hover:scale-110 transition-transform shadow-md">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-4 h-4" style={{ filter: 'brightness(0) invert(1)' }} />
          </a>
          <a href="https://github.com/Campospdp" target="_blank" rel="noopener noreferrer" className="w-7 h-7 bg-[#24292e] rounded-sm flex items-center justify-center hover:scale-110 transition-transform shadow-md border border-zinc-700">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-4 h-4" style={{ filter: 'brightness(0) invert(1)' }} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;