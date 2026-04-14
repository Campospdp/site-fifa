import React, { useState } from 'react';

export default function Estatisticas({ onBack }) {
  const [abaAtiva, setAbaAtiva] = useState('GERAL');
  const [jogadorSelecionado, setJogadorSelecionado] = useState(null);

  const elenco = [
    { 
      pos: "ATA", nome: "Yuri Alberto", idade: 25, ovr: 83, evolucao: "+5",
      altura: "183 cm", peso: "77 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Brazil.png", 
      foto: "/players/Yuri.png", 
      valor: "€ 157,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog: 1,g: 1,a: 0,ca: 0,cv: 0,med: 8.10 },
        { nome: "Paulistão",jog: 14,g: 15,a: 2,ca: 0,cv: 0,med: 8.11 },
        { nome: "Copa do Brasil",jog: 0,g: 0,a: 0,ca: 0,cv: 0,med: 0 },
        { nome: "Brasileirão",jog: 30,g: 50,a: 10,ca: 0,cv: 0,med: 8.67 },
        { nome: "Libertadores",jog: 11,g: 23,a: 1,ca: 0,cv: 0,med: 8.90 },
      ]
    },
    { 
      pos: "PD", nome: "Memphis Depay", idade: 32, ovr: 81, evolucao: "0",
      altura: "178 cm", peso: "78 kg", perna: "Direita",
      bandeira: "/Nacionalidade/Holanda.png", 
      foto: "/players/Memphis.png", 
      valor: "€ 87M",
      competicoes: [
        { nome: "Supercopa do Br",jog: 1,g: 0,a: 0,ca: 0,cv: 0,med: 6.00 },
        { nome: "Paulistão",jog: 13,g: 6,a: 12,ca: 1,cv: 1,med: 8.12 },
        { nome: "Copa do Brasil",jog: 0,g: 0,a: 0,ca: 0,cv: 0,med: 0 },
        { nome: "Brasileirão",jog: 24,g: 8,a: 5,ca: 1,cv: 1,med: 7.20 },
        { nome: "Libertadores",jog: 9,g: 4,a: 2,ca: 0,cv: 0,med: 7.61 },
      ]
    },
    { 
      pos: "MEI", nome: "Garro", idade: 28, ovr: 80, evolucao: "+2",
      altura: "174 cm", peso: "70 kg", perna: "Esquerda",
      bandeira: "/Nacionalidade/Argentina.png", 
      foto: "/players/Garro.png", 
      valor: "€ 82M",
      competicoes: [
        { nome: "Supercopa do Br",jog: 1,g: 0,a: 0,ca: 0,cv: 0,med: 7.40 },
        { nome: "Paulistão",jog: 14,g: 5,a: 7,ca: 1,cv: 0,med: 7.87 },
        { nome: "Copa do Brasil",jog: 1,g: 0,a: 0,ca: 0,cv: 0,med: 7.10 },
        { nome: "Brasileirão",jog: 29,g: 11,a: 30,ca: 4,cv: 1,med: 8.23 },
        { nome: "Libertadores",jog: 11,g: 3,a: 9,ca: 0,cv: 0,med: 8.09 },
      ]
    },
  ];

  if (jogadorSelecionado) {
    const j = jogadorSelecionado;
    const totais = j.competicoes.reduce((acc, c) => ({
        jog: acc.jog + c.jog,
        g: acc.g + c.g, 
        a: acc.a + c.a, 
        ca: acc.ca + c.ca,
        cv: acc.cv + c.cv,
        med: acc.med + c.med
    }), {jog: 0, g: 0, a: 0, ca: 0, cv: 0, med: 0});

    const competicoesJogadas = j.competicoes.filter(c => c.jog > 0).length;
    const mediaFinal = competicoesJogadas > 0 ? (totais.med / competicoesJogadas) : 0;
  
    return (
      <main className="flex-grow bg-[#1a2024] text-white p-4 sm:p-6 relative h-full overflow-y-auto italic font-sans uppercase">
        <button 
          onClick={() => setJogadorSelecionado(null)}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all mb-6 text-[10px] font-black tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          VOLTAR PARA O ELENCO
        </button>

        <div className="flex flex-col gap-1 mb-6">
          <div className="flex items-center gap-2">
            <span className={`font-bold text-lg sm:text-xl ${j.evolucao.startsWith('-') ? 'text-red-500' : (j.evolucao === '0' || j.evolucao === '+0') ? 'text-white' : 'text-green-500'}`}>{j.evolucao}</span>
            <span className="text-3xl sm:text-4xl font-black">{j.ovr}</span>
            <span className="text-zinc-500 font-black text-lg sm:text-xl ml-2">| {j.pos}</span>
          </div>
          
          <div className="flex items-center gap-3">
             <img src={j.bandeira} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-white/20" alt="" />
             <h1 className="text-2xl sm:text-4xl font-black tracking-tighter truncate">{j.nome}</h1>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-8 mt-6 border-t border-white/10 pt-4 text-[9px] sm:text-[11px] font-bold text-zinc-400">
            <div><p>IDADE</p><p className="text-white text-sm sm:text-lg">{j.idade}</p></div>
            <div><p>ALTURA/PESO</p><p className="text-white text-sm sm:text-lg whitespace-nowrap">{j.altura}/{j.peso}</p></div>
            <div><p>PERNA BOA</p><p className="text-white text-sm sm:text-lg">{j.perna}</p></div>
          </div>
        </div>

        {/* Tabela com scroll horizontal no mobile */}
        <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
          <table className="w-full text-left text-[9px] sm:text-[10px] font-bold text-zinc-500 min-w-[400px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-2 w-1/3">COMPETIÇÕES</th>
                <th className="text-center">JOG</th>
                <th className="text-center">G</th>
                <th className="text-center">A</th>
                <th className="text-center">CA</th>
                <th className="text-center">CV</th>
                <th className="text-right">MÉD</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {j.competicoes.map((c, i) => (
                <tr key={i} className="border-b border-white/5">
                  <td className="py-3 sm:py-4 text-zinc-300">{c.nome}</td>
                  <td className="text-center">{c.jog}</td>
                  <td className="text-center">{c.g}</td>
                  <td className="text-center">{c.a}</td>
                  <td className="text-center">{c.ca || 0}</td>
                  <td className="text-center">{c.cv || 0}</td>
                  <td className={`text-right ${c.med >= 8 ? 'text-green-400' : 'text-white'}`}>
                    {c.med.toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr className="text-zinc-400 bg-white/5 font-black">
                <td className="py-3 sm:py-4 pl-2">TOTAIS</td>
                <td className="text-center">{totais.jog}</td>
                <td className="text-center">{totais.g}</td>
                <td className="text-center">{totais.a}</td>
                <td className="text-center">{totais.ca || 0}</td>
                <td className="text-center">{totais.cv || 0}</td>
                <td className="text-right text-green-400">{mediaFinal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow bg-[#959595] flex flex-col p-4 sm:p-6 relative h-full overflow-hidden">
      <button onClick={onBack} className="flex items-center gap-2 text-zinc-900 hover:opacity-60 transition-all mb-6 shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        <span className="text-[11px] font-black tracking-[0.2em] uppercase">VOLTAR</span>
      </button>

      {/* Abas com scroll horizontal no mobile se necessário */}
      <div className="flex gap-4 mb-6 overflow-x-auto no-scrollbar pb-1 shrink-0">
        {["GERAL", "NUMEROS", "VALOR"].map((aba) => (
          <button key={aba} onClick={() => setAbaAtiva(aba)} className={`text-[10px] sm:text-[11px] font-black tracking-widest pb-1 border-b-2 transition-all whitespace-nowrap ${abaAtiva === aba ? "border-zinc-900 text-zinc-900" : "border-transparent text-zinc-600"}`}>
            {aba}
          </button>
        ))}
      </div>

      <div className="flex-grow overflow-y-auto space-y-2 pr-1 custom-scroll">
        {elenco.map((jogador, index) => (
          <div 
            key={index} 
            onClick={() => setJogadorSelecionado(jogador)}
            className="bg-[#d9d9d9] p-2 flex justify-between items-center shadow-md rounded-sm cursor-pointer hover:bg-white transition-all gap-2"
          >
            <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
              <span className="text-[7px] sm:text-[9px] font-black text-zinc-500 w-4 sm:w-5 uppercase pl-0.5 flex-shrink-0">{jogador.pos}</span>
              <div className="w-7 h-7 sm:w-10 sm:h-10 bg-zinc-400/30 rounded-full overflow-hidden border border-zinc-900/10 flex-shrink-0">
                <img src={jogador.foto} alt="" className="w-full h-full object-cover" onError={(e) => e.target.style.opacity = '0'} />
              </div>
              <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full overflow-hidden border border-black/20 shadow-sm flex-shrink-0 bg-zinc-300">
                <img src={jogador.bandeira} alt="" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
              </div>
              <span className="font-black text-zinc-900 uppercase italic tracking-tighter text-[11px] sm:text-sm truncate">{jogador.nome}</span>
            </div>

            <div className="flex gap-2 sm:gap-6 font-black text-zinc-900 italic flex-shrink-0">
              {abaAtiva === "GERAL" && (
                <div className="flex gap-2 sm:gap-4 items-center">
                  <span className="text-[9px] sm:text-[10px] text-zinc-600">{jogador.idade}A</span>
                  <span className="text-xs sm:text-sm text-green-700 font-black">{jogador.ovr}</span>
                </div>
              )}
              {abaAtiva === "NUMEROS" && (
                <div className="flex gap-1.5 sm:gap-4 text-[9px] sm:text-xs uppercase tracking-tighter">
                   <span>{jogador.competicoes.reduce((a, b) => a + b.jog, 0)}J</span>
                   <span className="text-green-700">{jogador.competicoes.reduce((a, b) => a + b.g, 0)}G</span>
                   <span className="text-blue-700">{jogador.competicoes.reduce((a, b) => a + b.a, 0)}A</span>
                </div>
              )}
              {abaAtiva === "VALOR" && (
                <span className="text-[9px] sm:text-sm bg-black/5 px-1 sm:px-2 py-0.5 rounded-sm whitespace-nowrap">{jogador.valor}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}