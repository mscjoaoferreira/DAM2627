
function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>Fundamentos do React - João Ferreira</h1>
      <p>
        Conceitos fundamentais do React de que você precisará para praticamente qualquer aplicativo que for criar!
      </p>
    </header>
  );
}

function Aluno(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>Curso: {props.curso}</p>
      <p>Nacionalidade: {props.nacionalidade}</p>
    </div>
  );
}

function CoreConcept() {
  return (
    <li>
      <h3>Componentes</h3>
      <p>Blocos fundamentais de uma interface.</p>
    </li>
  );
}
      
function CoreConcept2(props) {
  return (
    <li>
      <h1>Título: {props.title}</h1>
      <h2>Descrição: {props.description}</h2>
      <img src={props.image} />
    </li>
  );
}


const ALUNOS = [
  { nome: "Joao", idade: 11},
  { nome: "Maria", idade: 12},
  { nome: "Pedro", idade: 13},
  { nome: "Ana", idade: 14},
];

for (let i = 0; i < ALUNOS.length; i++) {
  console.log("Nome: ",ALUNOS[i].nome);
  console.log("Idade: ",ALUNOS[i].idade);
}

//console.log(ALUNOS[0].nome);
//console.log(ALUNOS[0].idade);
//console.log(ALUNOS[1].nome);
//console.log(ALUNOS[1].idade);


import componentImg from './assets/components.png'
import configImg from './assets/config.png'
import {CORE_CONCEPTS} from './data.js'

function CoreConcept3({title, description, image}) {
    return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}


function App() {
 return (
    <>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Conceitos fundamentais</h2>
          <ul>
            <CoreConcept3 {...CORE_CONCEPTS[0]} />
            <CoreConcept3 {...CORE_CONCEPTS[1]} />
            <CoreConcept3 {...CORE_CONCEPTS[2]} />
            <CoreConcept3 {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </>
  );
}


export default App;
