import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'
import { useState } from 'react'

const Formulario = (props) => {

    /*
    const times = [
        'Flamengo',
        'Vitória',
        'Jahia',
        'Foguinho',
        'Parmeira'
    ]
        */

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setTime('')
        setImagem('')
        //console.log('Form foi submetido!', nome, cargo, imagem, time)
    }


    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu Nome" 
                />
                <CampoTexto 
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo" 
                />
                <CampoTexto 
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                />
                <ListaSuspensa  
                    label="Time" 
                    itens={props.nomeDosTimes} 
                    valor={time}
                    aoAlterado = {valor => setTime(valor)}
                /> 
                <Botao>
                    Criar Card
                </Botao>

            </form>
        </section>

    )


}

export default Formulario