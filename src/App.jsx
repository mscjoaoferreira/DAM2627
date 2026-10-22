
function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>Fundamentos do React - Seu nome</h1>
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

/*
for (let i = 0; i < ALUNOS.length; i++) {
  console.log("Nome: ",ALUNOS[i].nome);
  console.log("Idade: ",ALUNOS[i].idade);
}
*/
const nomes = ALUNOS.map(aluno => aluno.nome);
console.log("Nomes dos alunos: ", nomes);

const nomes2 = ALUNOS.map(aluno => aluno.nome);


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
function Botao() {
  function mostrarMensagem() {
    alert("Olá! Clicaste no botão.");
  }

  return (
    <button onClick={mostrarMensagem}>
      Clica aqui
    </button>
  );
}



function Mensagem() {
  function apresentar() {
    alert("Bem-vindo à DAM!");
  }

  return (
    <button onClick={apresentar}>
      Mostrar mensagem
    </button>
  );
}

function Saudacoes2() {
  function saudar() { alert("Olá! Funçao saudações 2!")}
  function despedir() { alert("Até Breve! Função saudações 2!")}

  return (
    <div>
      <button onClick={saudar}> Saudar</button>
      <button onClick={despedir}> Despedir</button>
    </div>
  )
}

function Saudacoes() {
  function saudar() { alert("Olá! Função Saudar"); }
  function despedir() { alert("Até breve! Função Despedir"); }

  return (
    <div>
      <button onClick={saudar}>Saudar</button>
      <button onClick={despedir}>Despedir</button>
    </div>
  );
}


const alunos2 = ['Ana', 'Bruno', 'Carla'];

function mostrarConceito(nome) {
  alert("Selecionaste: " + nome);
}

function CoreConcept4(props) {
  function mostrarDetalhes() {
    alert(props.title + ": " + props.description);
  }

  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button onClick={mostrarDetalhes}>
        Ver detalhes
      </button>

    </li>
  );
 }

function App() {
 return (
    <>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Substituir 4 chamadas por map()</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept3 
              key={concept.title} 
              title = {concept.title}
              description = {concept.description}
              image = {concept.image}
              />
            ))}
          </ul>
        </section>
        <section>
          <div>
            <h1>Exercício 1</h1>
            <button onClick={() => alert("Bem vindo a DAMMMMM!")}>
              Mostrar Mensagem!
            </button>
          </div>
        </section>
        <div>
          <h1>Exemplo de eventos em React</h1>

          <Botao />

          <button
          onClick={() => alert("Olá! Sem função externa.")}
          >
            Clica aqui 2
          </button>

        </div>
        
        <div>
          <h1>Exercício 1</h1>

          <Mensagem />
        </div>
             
        <div>
          <h1>Exercício 2 - Saudações 2</h1>

          <Saudacoes2 />
        </div>

        <section>
          <ul>
            {alunos2.map((aluno) => <li key={aluno}>{aluno}</li>)}
          </ul>
        </section>
        <section>
          <h1>Exercício 3</h1>
          <button onClick={() => mostrarConceito("Props")}> 
            Ver Props
          </button>
        </section>

        <section id="core-concepts">
          <h1>Exercício 4</h1>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept4 
              key={concept.title} 
              title={concept.title}
              description={concept.description}
              image={concept.image}
            />
          ))}
        </section>

      </main>
    </>
  );
}



export default App;
