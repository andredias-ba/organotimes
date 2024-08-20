

import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      nome:'Flamengo',
      corPrimaria:'#f0400a',
      corSecundaria:'#f79b7fe0'
    },
    {
      nome:'Vitória',
      corPrimaria:'#fc0202',
      corSecundaria:'#f08f8f'
    },{
      nome:'Jahia',
      corPrimaria:'#0b5ef7',
      corSecundaria:'#91b3f3'
    },{
      nome:'Foguinho',
      corPrimaria:'#bc0bf1',
      corSecundaria:'#d97df5'
    },{
      nome:'Parmeira',
      corPrimaria:'#07f351',
      corSecundaria:'#8ff8b0'
    },
    
]

  const [colaboradores, setColaboradores] = useState([]) // passando um array de states

  const aoNovoColaboradorAdicionado = (colaborador) =>{
   // console.log(colaborador)
   //debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario nomeDosTimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {times.map(time => <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
              
      <Rodape />
    </div>
  );
}

export default App;
