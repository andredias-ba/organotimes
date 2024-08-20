import { useState } from 'react'
import './CampoTexto.css'




const CampoTexto = (props) =>{

 // const [valor, setValor] = useState('')

  const aoDigitar = (evento) => {
    props.aoAlterado(evento.target.value)
 //   setValor(evento.target.value)
 //   console.log(valor)
  }
  


  return(
        <div className="campo-texto">
          <label>{props.label}</label>
          <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder} />
           
        </div>
    )
}

export default CampoTexto