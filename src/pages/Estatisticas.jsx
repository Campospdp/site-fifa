import React, { useState } from 'react';

export default function Estatisticas({ onBack }) {
  const [abaAtiva, setAbaAtiva] = useState('GERAL');
  const [jogadorSelecionado, setJogadorSelecionado] = useState(null);

  const elenco = [
    { 
      pos: "ATA", nome: "Yuri Alberto", idade: 25, ovr: 83, evolucao: "+5",
      altura: "183 cm", peso: "77 kg", perna: "Direita",
      bandeira: "/src/assets/flags/Brazil.png", 
      foto: "/src/assets/players/yuri.png", 
      valor: "R$ 157,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog: 1,g: 1,a: 0,ca: 0,cv: 0,med: 8.10 },
        { nome: "Paulistão",jog: 14,g: 15,a: 2,ca: 0,cv: 0,med: 8.11 },
        { nome: "Copa do Brasil",jog: 0,g: 0,a: 0,ca: 0,cv: 0,med: 0 },
        { nome: "Brasileirão",jog: 30,g: 50,a: 10,ca: 0,cv: 0,med: 8.67 },
        { nome: "Libertadores",jog: 11,g: 23,a: 1,ca: 0,cv: 0,med: 8.90 },
      ]
    },
    { 
      pos: "GL", nome: "Neuer", idade: 40, ovr: 83, evolucao: "-1",
      altura: "193 cm", peso: "93 kg", perna: "Direita",
      bandeira: "/src/assets/flags/Alemanha.png", 
      foto: "/src/assets/players/neuer.png", 
      valor: "R$ 15,5M",
      competicoes: [
        { nome: "Supercopa do Br",jog: 0,g: 0,a: 0,ca: 0,cv: 0,med: 0 },
        { nome: "Paulistão",jog: 11,g: 0,a: 1,ca: 0,cv: 0,med: 7.52 },
        { nome: "Copa do Brasil",jog: 2,g: 0,a: 0,ca: 0,cv: 0,med: 5.05 },
        { nome: "Brasileirão",jog: 38,g: 0,a: 0,ca: 0,cv: 0,med: 6.44 },
        { nome: "Libertadores",jog: 12,g: 0,a: 0,ca: 0,cv: 0,med: 6.69 },
      ]
    },
    { 
      pos: "PD", nome: "Memphis Depay", idade: 32, ovr: 81, evolucao: "0",
      altura: "178 cm", peso: "78 kg", perna: "Direita",
      bandeira: "/src/assets/flags/Nl.png", 
      foto: "/src/assets/players/memphis.png", 
      valor: "R$ 87M",
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
      bandeira: "/src/assets/flags/Argentina.png", 
      foto: "/src/assets/players/garro.png", 
      valor: "R$ 82M",
      competicoes: [
        { nome: "Supercopa do Br",jog: 1,g: 0,a: 0,ca: 0,cv: 0,med: 7.40 },
        { nome: "Paulistão",jog: 14,g: 5,a: 7,ca: 1,cv: 0,med: 7.87 },
        { nome: "Copa do Brasil",jog: 1,g: 0,a: 0,ca: 0,cv: 0,med: 7.10 },
        { nome: "Brasileirão",jog: 29,g: 11,a: 30,ca: 4,cv: 1,med: 8.23 },
        { nome: "Libertadores",jog: 11,g: 3,a: 9,ca: 0,cv: 0,med: 8.09 },
      ]
    },
    // Adicione os outros jogadores aqui...
  ];

  // Se um jogador estiver selecionado, renderiza a tela de detalhes (Estilo a imagem enviada)
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

    // --- CÁLCULO DA MÉDIA REAL (Apenas competições com jogos) ---
    const competicoesJogadas = j.competicoes.filter(c => c.jog > 0).length;
    const mediaFinal = competicoesJogadas > 0 ? (totais.med / competicoesJogadas) : 0;
  
    return (
      <main className="flex-grow bg-[#111111] text-white p-6 relative h-full overflow-y-auto italic">
        {/* BOTÃO VOLTAR PARA LISTA */}
        <button 
          onClick={() => setJogadorSelecionado(null)}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all mb-8 uppercase text-[10px] font-black tracking-widest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="m15 18-6-6 6-6"/></svg>
          Voltar para o Elenco
        </button>

        {/* HEADER DETALHES */}
        <div className="flex flex-col gap-1 mb-8">
          <div className="flex items-center gap-2">
            <span className={`font-bold text-xl ${j.evolucao.startsWith('-') ? 'text-red-500' : (j.evolucao === '0' || j.evolucao === '+0') ? 'text-white' : 'text-green-500'}`}>{j.evolucao}</span>
            <span className="text-4xl font-black">{j.ovr}</span>
            <span className="text-zinc-500 font-black text-xl uppercase ml-2">| {j.pos}</span>
          </div>
          
          <div className="flex items-center gap-3">
             <img src={j.bandeira} className="w-8 h-8 rounded-full border border-white/20" alt="" />
             <h1 className="text-4xl font-black uppercase tracking-tighter">{j.nome}</h1>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-6 border-t border-zinc-800 pt-4 text-[11px] uppercase font-bold text-zinc-400">
            <div><p>Idade</p><p className="text-white text-lg">{j.idade}</p></div>
            <div><p>Altura e peso</p><p className="text-white text-lg">{j.altura}/{j.peso}</p></div>
            <div><p>Perna boa</p><p className="text-white text-lg">{j.perna}</p></div>
          </div>
        </div>

        <table className="w-full text-left text-[10px] uppercase font-bold text-zinc-500">
  <thead>
    <tr className="border-b border-zinc-800">
      <th className="py-2 w-1/3">Competições</th>
      <th>JOG</th>
      <th>G</th>
      <th>A</th>
      <th>CA</th>
      <th>CV</th>
      <th>MÉD</th>
    </tr>
  </thead>
  <tbody className="text-white">
    {j.competicoes.map((c, i) => (
      <tr key={i} className="border-b border-zinc-900/50">
        <td className="py-4 text-zinc-300">{c.nome}</td>
        <td>{c.jog}</td>
        <td>{c.g}</td>
        <td>{c.a}</td>
        <td>{c.ca || 0}</td>
        <td>{c.cv || 0}</td>
        <td className={c.med >= 8 ? 'text-green-400' : 'text-white'}>
          {c.med.toFixed(2)}
        </td>
      </tr>
    ))}

    {/* LINHA DE TOTAIS CORRIGIDA E ALINHADA */}
    <tr className="text-zinc-400 bg-white/5 font-black">
      <td className="py-4 pl-2">Totais</td>
      <td>{totais.jog}</td>
      <td>{totais.g}</td>
      <td>{totais.a}</td>
      <td>{totais.ca || 0}</td>
      <td>{totais.cv || 0}</td>
      <td className="text-green-400">{mediaFinal.toFixed(2)}</td>
    </tr>
  </tbody>
</table>
      </main>
    );
  }

  // LISTA DE JOGADORES (TELA PRINCIPAL)
  return (
    <main className="flex-grow bg-[#959595] flex flex-col p-6 relative h-full">
      <button onClick={onBack} className="flex items-center gap-2 text-zinc-900 hover:opacity-60 transition-all mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        <span className="text-[11px] font-black tracking-[0.2em] uppercase">Voltar</span>
      </button>

      <div className="flex gap-4 mb-6">
        {["GERAL", "NUMEROS", "VALOR"].map((aba) => (
          <button key={aba} onClick={() => setAbaAtiva(aba)} className={`text-[11px] font-black tracking-widest pb-1 border-b-2 transition-all ${abaAtiva === aba ? "border-zinc-900 text-zinc-900" : "border-transparent text-zinc-600"}`}>
            {aba}
          </button>
        ))}
      </div>

      <div className="flex-grow overflow-y-auto space-y-2 pr-2 custom-scroll">
        {elenco.map((jogador, index) => (
          <div 
            key={index} 
            onClick={() => setJogadorSelecionado(jogador)}
            className="bg-[#d9d9d9]/60 p-2 flex justify-between items-center shadow-sm rounded-sm cursor-pointer hover:bg-white/40 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-[9px] font-black text-zinc-500 w-5 uppercase pl-2">{jogador.pos}</span>
              <div className="w-10 h-10 bg-zinc-400/30 rounded-full overflow-hidden border border-zinc-900/10 flex-shrink-0">
                <img src={jogador.foto} alt="" className="w-full h-full object-cover" onError={(e) => e.target.style.opacity = '0'} />
              </div>
              <div className="w-6 h-6 rounded-full overflow-hidden border border-black/20 shadow-sm flex-shrink-0 bg-zinc-300">
                <img src={jogador.bandeira} alt="" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
              </div>
              <span className="font-black text-zinc-900 uppercase italic tracking-tighter text-sm">{jogador.nome}</span>
            </div>

            <div className="flex gap-6 font-black text-zinc-900 italic pr-4">
              {abaAtiva === "GERAL" && (
                <div className="flex gap-4 items-center">
                  <span className="text-[10px] uppercase tracking-tighter text-zinc-700">{jogador.nac}</span>
                  <span className="text-xs text-zinc-600">{jogador.idade}a</span>
                  <span className="text-sm text-green-700 font-black">{jogador.ovr}</span>
                </div>
              )}
              {abaAtiva === "NUMEROS" && (
                <div className="flex gap-6 text-xs uppercase tracking-tighter">
                   <span>{jogador.competicoes.reduce((a, b) => a + b.jog, 0)} J</span>
                   <span className="text-green-700">{jogador.competicoes.reduce((a, b) => a + b.g, 0)} G</span>
                   <span className="text-blue-700">{jogador.competicoes.reduce((a, b) => a + b.a, 0)} A</span>
                </div>
              )}
              {abaAtiva === "VALOR" && (
                <span className="text-sm bg-zinc-100/40 px-2 py-0.5 rounded-sm">{jogador.valor}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}