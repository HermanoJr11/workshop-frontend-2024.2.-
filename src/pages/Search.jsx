import React, { useState } from 'react';
import styles from './home.module.css';
import SeachNav from '../components/SeachNav';

const Search = () => {
  const [query, setQuery] = useState('');
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null); // Estado para o agente selecionado

  const handleSearch = () => {
    fetch('https://valorant-api.com/v1/agents')
      .then(response => response.json())
      .then(data => {
        const filteredAgents = data.data.filter(agent =>
          agent.displayName.toLowerCase().includes(query.toLowerCase())
        );
        setAgents(filteredAgents);
        console.log('Agentes encontrados:', filteredAgents.map(agent => agent.displayName));
      })
      .catch(error => {
        console.error('Erro ao buscar dados dos agentes:', error);
      });
  };

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent); // Atualiza o estado com o agente selecionado
  };

  return (
    <div>
      <SeachNav />
      <div className={styles.SeachFundo}>
        <div className={styles.CardAgentes}>
          <h1>Buscar Agente</h1>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Digite o nome do agente"
          />
          <button onClick={handleSearch} >
            <h4>Search</h4></button>
          <div>
            <h2>Agentes Encontrados:</h2>
            <ul>
              {agents.map(agent => (
                <li key={agent.uuid} onClick={() => handleAgentClick(agent)} >
                  {agent.displayName}
                  
                </li>
              ))}
            </ul>
          </div>
        </div>

        {selectedAgent && (
            <div className={styles.habilitesAll}>

              <h2>{selectedAgent.displayName}</h2>
              <img src={selectedAgent.displayIcon} alt={selectedAgent.displayName} />
              <h3>Habilidades:</h3>
              <ul>
                {selectedAgent.abilities.map((ability, index) => (
                  <li key={index}>
                    <p><strong>{ability.displayName}:</strong> {ability.description}</p>
                    <img src={ability.displayIcon} alt={ability.displayName} />
                  </li>
                ))}
              </ul>
            </div>
          )}


      </div>
    </div>
  );
};

export default Search;
