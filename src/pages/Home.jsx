import React, { useState, useEffect } from 'react';
import styles from './home.module.css'
import Navbar from '../components/Navbar';


const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents')
          .then(response => response.json())
          .then(data => {
            console.log('Dados recebidos:', data); // Verifique os dados aqui
            setData(data.data); // Acessando diretamente o array de agentes
          })
          .catch(error => console.error('Erro:', error));
      }, []);


      
    
  return (
    <div className={styles.Fundo}>
        <div>
            <Navbar />
        </div>
        
        <div >
        {data ? (
            <div className={styles.container_01}>
            {data.map(agent => (
                <div key={agent.uuid} >
                    <div className={styles.CardAgentes}>
                        <img src={agent.displayIcon} alt={agent.displayName} className={styles.CardAgentes}/>
                        <h3 >{agent.displayName}</h3>
                        <h6>{agent.description}</h6>
                    </div>
                {/* <h5>{agent.role.displayName}</h5> */}
                </div>
            ))}
            </div>
        ) : (
            <p>Carregando...</p>
        )}
            
        </div>

    </div>
  );
}

/*
display: 'flex', flexWrap: 'wrap', gap: '20px'
textAlign: 'center'
width: '100px', height: '100px'
*/

export default Home;
