import './aluno.css'

interface AlunoProps{
  nome: string;
  idade: number;
}

export function Aluno({ nome, idade }: AlunoProps) {
  return(
    <p>Aluno: {nome} | Idade: {idade}.</p>
  )
}
