import { Header } from './components/header'
import { Aluno } from './components/aluno'
import { Footer } from './components/footer.tsx'
import { useState } from 'react'

import './app.css'

export default function App() {

  const [input, setInput] = useState("");
  const [aluno, setAluno] = useState("");

  function mostrarAluno() {
    setAluno(input);
  }

  return(
    <div>
      <Header title="Título principal"/>

      <Aluno nome="Amanda" idade={15} />
      <Aluno nome="Julia" idade={16} />
      <Aluno nome="João" idade={14} />

      <br />
      <br />
      <input
        type="text"
        placeholder="Digite seu nome"
        value={input}
        onChange={ (e) => setInput(e.target.value)}
      />

      <br />
      <button onClick={mostrarAluno}>Mostrar Nome</button>

      <hr />
      <h3>Bem-vindo: {aluno}</h3>

      <Footer/>
    </div>
  )
}
