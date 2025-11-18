export default function App() {
  return(
    <div>
      <h1>Main Title</h1>
      <Aluno nome="Amanda" idade={15} />
      <Aluno nome="Julia" idade={16} />
      <Aluno nome="João" idade={14} />
    </div>
  )
}

interface AlunoProps{
  nome: string;
  idade: number;
}

function Aluno({ nome, idade }: AlunoProps) {
  return(
    <p>Aluno: {nome} | Idade: {idade}.</p>
  )
}
