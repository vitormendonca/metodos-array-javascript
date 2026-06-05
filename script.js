const alunos = [
  {
    id: 1,
    nome: "João",
    nivel: "A1",
    ativo: true,
    mensalidade: 480,
    nota: 82,
    aulasConcluidas: 12
  },
  {
    id: 2,
    nome: "Maria",
    nivel: "A2",
    ativo: true,
    mensalidade: 520,
    nota: 91,
    aulasConcluidas: 18
  },
  {
    id: 3,
    nome: "Karim",
    nivel: "B1",
    ativo: true,
    mensalidade: 600,
    nota: 96,
    aulasConcluidas: 25
  },
  {
    id: 4,
    nome: "Pedro",
    nivel: "A1",
    ativo: false,
    mensalidade: 450,
    nota: 58,
    aulasConcluidas: 7
  },
  {
    id: 5,
    nome: "Ana",
    nivel: "B2",
    ativo: true,
    mensalidade: 700,
    nota: 76,
    aulasConcluidas: 20
  }
];

// respostas

const alunosNomes = alunos.map(aluno => aluno.nome);

const alunosAtivos = alunos.filter(aluno => aluno.ativo);

const primeiroReprovado = alunos.find(aluno => aluno.nota < 70);

alunos.forEach(aluno => {
  console.log(`${aluno.nome} concluiu ${aluno.aulasConcluidas} aulas.`);
});

const totalMensalidades = alunos.reduce((total, aluno) => {
  return total + aluno.mensalidade;
}, 0);

const possuiInativo = alunos.some(aluno => aluno.ativo === false);

const todosAtivos = alunos.every(aluno => aluno.ativo);

//definindo respostas
const resposta1 = 'const alunosNomes = alunos.map(aluno => aluno.nome);'
const resposta2 = 'const alunosAtivos = alunos.filter(aluno => aluno.ativo);'
const resposta3 = 'const primeiroReprovado = alunos.find(aluno => aluno.nota < 70);'
const resposta4 = 'alunos.forEach(aluno => { console.log(`${aluno.nome} concluiu ${aluno.aulasConcluidas} aulas.`); });'
const resposta5 = 'const totalMensalidades = alunos.reduce((total, aluno) => { return total + aluno.mensalidade; }, 0);'
const resposta6 = 'const possuiInativo = alunos.some(aluno => aluno.ativo === false);'
const resposta7 = 'const todosAtivos = alunos.every(aluno => aluno.ativo);'

const respostas = [resposta1,resposta2,resposta3,resposta4,resposta5,resposta6,resposta7];

const questions = document.querySelectorAll('.questions');


questions.forEach((question, index)=> {
  //criando resposta
  const resposta = respostas[index];
  const pre = document.createElement('pre');
  const code = document.createElement('code');
  question.appendChild(pre);
  pre.appendChild(code);
  code.textContent = resposta;
  pre.classList.add('arearesposta');
  pre.style.display = 'none';
  //criando botao dropdown clicável
  const button = document.createElement('button');
  button.textContent = '▼';
  button.className = 'dropdown-arrow';
  question.appendChild(button);
    
    //atribuindo movimento no botao e trocando icone
    button.addEventListener('click', () => {
    const isOpen = pre.style.display === 'inline-block';
    pre.style.display = isOpen ? 'none' : 'inline-block';
    button.textContent = isOpen ? '▼' : '▲';
    });
  } 
)








