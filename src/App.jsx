import { useState } from 'react';
import Home from './pages/HomeTemp';
import Menu from './pages/Menu';
import Calendario from './pages/Calendario';
import Estatisticas from './pages/Estatisticas';
import Competicoes from './pages/Competicoes'; 
import TabelaBrasileirao from './pages/TabelaBrasileirao'; // 1. Importação da nova tela
import eaLogo from './assets/images/ea_logo.png';
import fmnLogo from './assets/images/fc_mania.png';

function App() {
  const [telaAtiva, setTelaAtiva] = useState('home');

  return (
    <div className="h-screen flex flex-col bg-[#16171d] font-sans overflow-hidden">
      
      {/* HEADER FIXO */}
      <header className="p-4 bg-[#1c1d26] border-b border-[#2e303a] flex justify-between items-center z-50">
        <img src={eaLogo} alt="EA SPORTS FC" className="h-6 w-auto object-contain" />
        <img src={fmnLogo} alt="FC MANIA" className="h-6 w-auto object-contain" />
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

        {/* Lógica de Competitções atualizada para abrir a tabela */}
        {telaAtiva === 'selecao' && (
          <Competicoes 
            onBack={() => setTelaAtiva('menu')} 
            onSelect={(comp) => {
              if (comp.id === 'brasileirao') {
                setTelaAtiva('tabela'); // 2. Vai para a tabela se for brasileirão
              }
            }} 
          />
        )}

        {/* 3. Nova tela da Tabela Brasileirão */}
        {telaAtiva === 'tabela' && (
          <TabelaBrasileirao onBack={() => setTelaAtiva('selecao')} />
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