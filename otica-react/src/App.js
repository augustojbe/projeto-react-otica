import React from 'react';
import './App.css';
import Topo from './componentes/topo';
import Conteudo from './componentes/secaoConteudo';
import Rodape from './componentes/secaoRodape';


function App() {
  return (
    <div className='container'>
      <Topo />
      <Conteudo />
      <Rodape />

 
      
    </div>
  );
}

export default App;
