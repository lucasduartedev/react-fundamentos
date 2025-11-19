import { Header } from './components/header'
import { Aluno } from './components/aluno'
import { Footer } from './components/footer.tsx'

import './app.css'

export default function App() {
  return(
    <div>
      <Header title="Título principal"/>

      <Aluno nome="Amanda" idade={15} />
      <Aluno nome="Julia" idade={16} />
      <Aluno nome="João" idade={14} />

      <Footer/>
    </div>
  )
}
