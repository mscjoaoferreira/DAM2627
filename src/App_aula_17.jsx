
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

function Contador() {
  let contador = 0;

  function aumentar() {
    contador = contador + 1;
    console.log(contador);
  }
  return <button onClick={aumentar}>
    Cliques: {contador}
  </button>;
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

import { useState } from 'react';

function FormularioConteudo() {
  return (
    <section>
      <h2>Novo conteúdo</h2>
      <input type="text" placeholder="Título" />
    </section>
  );
}


function FormularioSimples() {
  function guardar(event) {
    event.preventDefault();
    alert("Formulário submetido!");
  }

  return (
    <form onSubmit={guardar}>
      <input placeholder="Título" />
      <button type="submit">Guardar</button>
    </form>
  );
}


function CatalogoMultimedia() {

  // ==========================================
  // AULA 14 — ESTADOS DO FORMULÁRIO
  // ==========================================
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("Filme");
  const [descricao, setDescricao] = useState("");
  // ==========================================
  // ETAPA 1 — INSERÇÃO DE CONTEÚDOS
  // ==========================================
  // Estado que guarda todos os conteúdos
  const [conteudos, setConteudos] = useState([]);


  // Função que adiciona um novo conteúdo
  function adicionarConteudo(event) {
    // Impede o recarregamento da página
    event.preventDefault();
    // Verifica se o título foi preenchido
    if (titulo.trim() === "") {
      alert("Introduza um título.");
      return;
    }
    // Cria um objeto com os dados do formulário
    const novoConteudo = {
      id: crypto.randomUUID(),
      titulo: titulo.trim(),
      tipo: tipo,
      descricao: descricao
    };

    // Adiciona o objeto à lista existente
    setConteudos((anteriores) => [
      ...anteriores,
      novoConteudo
    ]);
    // Limpa os campos após a submissão
    setTitulo("");
    setTipo("Filme");
    setDescricao("");
  }
  // ==========================================
  // ETAPA 2 — EXCLUSÃO DE CONTEÚDOS
  // ==========================================
  // NOVO: função para remover um conteúdo
  function removerConteudo(id) {
    setConteudos((anteriores) =>
      anteriores.filter((item) => item.id !== id)
    );
  }
  // ==========================================
  // ETAPA 3 — PESQUISA DE CONTEÚDOS
  // ==========================================
  // NOVO: estado para guardar o texto pesquisado
  const [pesquisa, setPesquisa] = useState("");

  // NOVO: lista filtrada pelo título
  const resultados = conteudos.filter((item) =>
    item.titulo
      .toLowerCase()
      .includes(pesquisa.toLowerCase())
  );


  // ==========================================
  // INTERFACE DA APLICAÇÃO
  // ==========================================

  return (
    <section>
      <h2>Catálogo multimédia</h2>
      {/* =====================================
          ETAPA 1 — FORMULÁRIO DE INSERÇÃO
          ===================================== */}
      <form onSubmit={adicionarConteudo}>

        <label htmlFor="titulo">Título:</label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(event) =>
            setTitulo(event.target.value)
          }
        />

        <br />

        <label htmlFor="tipo">Tipo:</label>

        <select
          id="tipo"
          value={tipo}
          onChange={(event) =>
            setTipo(event.target.value)
          }
        >
          <option value="Filme">Filme</option>
          <option value="Série">Série</option>
          <option value="Jogo">Jogo</option>
          <option value="Livro">Livro</option>
        </select>

        <br />

        <label htmlFor="descricao">
          Descrição:
        </label>

        <textarea
          id="descricao"
          value={descricao}
          onChange={(event) =>
            setDescricao(event.target.value)
          }
        />
          {/* =====================================
          ETAPA 1 — Botão de submissão do formulário
          ===================================== */}
        <br />

        <button type="submit">
          Adicionar conteúdo
        </button>

      </form>


      {/* =====================================
          AULA 14 — PRÉ-VISUALIZAÇÃO
          ===================================== */}

      <h3>Pré-visualização</h3>

      <p>Título: {titulo}</p>
      <p>Tipo: {tipo}</p>
      <p>Descrição: {descricao}</p>

      {/* =====================================
          ETAPA 3 — CAMPO DE PESQUISA
          ===================================== */}
      <h3>Pesquisar conteúdos</h3>
      <input
        type="text"
        value={pesquisa}
        onChange={(event) =>
          setPesquisa(event.target.value)
        }
        placeholder="Pesquisar pelo título"
      />


      {/* =====================================
          ETAPA 1 — LISTA DE CONTEÚDOS
          ===================================== */}

      <h3>Conteúdos adicionados</h3>
      {/* Mensagem quando não existem conteúdos */}
      {conteudos.length === 0 && (
        <p>Ainda não existem conteúdos.</p>
      )}


      {/* ETAPA 3: mensagem sem resultados */}
      {conteudos.length > 0 &&
        resultados.length === 0 && (
          <p>Nenhum conteúdo encontrado.</p>
        )
      }
      <ul>
        {/* ETAPA 3: usar resultados.map()
            em vez de conteudos.map() 
        {resultados.map((conteudo) => (
          <li key={conteudo.id}>
            <hr />
            <h4>{conteudo.titulo}</h4>
            <p>Tipo: {conteudo.tipo}</p>
            <p>{conteudo.descricao}</p>

            {/* ETAPA 2 — BOTÃO REMOVER 
            <button
              type="button"
              onClick={() =>
                removerConteudo(conteudo.id)
              }
            >
              Remover
            </button>

          </li>
        ))}
*/}
        

        {/* =====================================
      ETAPA 4 — NOVO COMPONENTE
      Substitui o código anterior
      ===================================== */}

        {resultados.map((conteudo) => (
          <ItemConteudo
            key={conteudo.id}
            conteudo={conteudo}
            onRemover={removerConteudo}
          />
        ))}

          {/*=====================================
                ETAPA 4 — FIM
          ===================================== */}

      </ul>
    </section>
  );
}



function ItemConteudo({ conteudo, onRemover }) {
  return (
    <li>
      <hr />

      <h4>{conteudo.titulo}</h4>
      <p>Tipo: {conteudo.tipo}</p>
      <p>{conteudo.descricao}</p>

      {/* Botão Remover da Etapa 2 */}
      <button
        type="button"
        onClick={() => onRemover(conteudo.id)}
      >
        Remover
      </button>
    </li>
  );
}

function App() {

const [titulo, setTitulo] = useState("");
const [tipo, setTipo] = useState("Filme");
const [descricao, setDescricao] = useState("");

// NOVO: coleção de conteúdos
const [conteudos, setConteudos] = useState([]);

const novoConteudo = {
  id: crypto.randomUUID(),
  titulo: titulo.trim(),
  tipo: tipo,
  descricao: descricao
};

function adicionarConteudo(event) {
  event.preventDefault();

  if (titulo.trim() === "") {
    alert("Introduza um título.");
    return;
  }

  const novoConteudo = {
    id: crypto.randomUUID(),
    titulo: titulo.trim(), tipo, descricao
  };

  setConteudos((anteriores) => [...anteriores, novoConteudo]);
  setTitulo(""); setTipo("Filme"); setDescricao("");
}





  function FormularioConteudo0() {
  return (
    <section>
      <h2>Formulário Exemplo1</h2>
      <input type="text" placeholder="Título" />
    
    <input
      type="text"
      onChange={(event) => {
        console.log(event.target.value);
      }}
  />

    </section>

  );
}

function FormularioConteudo() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <section>
      <h2>Novo conteúdo multimédia - Formulários</h2>
      <label htmlFor="titulo">Título</label>
      <input id="titulo" value={titulo}
        onChange={(e) => setTitulo(e.target.value)} />
      <label htmlFor="descricao">Descrição</label>
      <textarea id="descricao" value={descricao}
        onChange={(e) => setDescricao(e.target.value)} />
      <h3>Pré-visualização</h3>
      <p>{titulo}</p>
      <p>{descricao}</p>
    </section>
  );
}

function FormularioMultimedia() {
  const [nome, setNome] = useState('');
  const [categoria, setCategoria] = useState('');

  return (
    <section>
      <h2>Exercício 2: Formulários</h2>
      <label htmlFor="nome">Nome</label>
      <input id="nome" value={nome}
        onChange={(e) => setNome(e.target.value)} />
      <label htmlFor="categoria">Categoria</label>
      <textarea id="categoria" value={categoria}
        onChange={(e) => setCategoria(e.target.value)} />
      <h3>Pré-visualização</h3>
      <p>{nome}</p>
      <p>{categoria}</p>
    </section>
  );
}



//Para uso do useState
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
      setContador(contador - 1);
  }

function Detalhes() {
  const [visivel, setVisivel] = useState(false);

  return (
    <section>
      <button onClick={() => setVisivel(!visivel)}>
        Alternar detalhes
      </button>
      {visivel && <p>Informação adicional!</p>}
    </section>
  );
}

function Categorias() {
  const [categoria, setCategoria] = useState('Todas');
  return (
    <section>
      <button onClick={() => setCategoria('Filmes')}>
        Filmes
      </button>
      <button onClick={() => setCategoria('Jogos')}>
        Jogos
      </button>
           <button onClick={() => setCategoria('Aventuras')}>
        Aventuras
      </button>
           <button onClick={() => setCategoria('Europa')}>
      Europa
      </button>
      <p>Categoria selecionada: {categoria}</p>
    </section>
  );
}

const [selecionado, setSelecionado] = useState(null);

function CartaoFavorito({ titulo }) {
  const [favorito, setFavorito] = useState(false);

  return (
    <article>
      <h2>{titulo}</h2>
      <button onClick={() => setFavorito(valor => !valor)}>
        {favorito ? 'Remover dos favoritos' : 'Favorito'}
      </button>
    </article>
  );
}


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
          <section>
            <Contador />
          </section>

          <section>
             <div>
                <h1>Exemplo de useState</h1>

                <p>Contador: {contador}</p>

                <button onClick={aumentar}>
                  Aumentar
                </button>

                <button onClick={diminuir}>
                  Diminuir
                </button>
              </div>
          </section>
          <section>
            <Detalhes />
          </section>
          <section>
            <Categorias />
          </section>
          <section>
          {CORE_CONCEPTS.map((concept) => (
              <button className="botao-aula13" key={concept.title}
              onClick={() => setSelecionado(concept)}>
              {concept.title}
          </button>
      ))}
      {selecionado && <p>{selecionado.description}</p>}

          </section>
          <section> 
            <CartaoFavorito titulo="Museu da Cidade" />
          </section>

        <section>
          <FormularioConteudo0 />
        </section>



          <section>
            <FormularioConteudo />
          </section>

          <section>
            <FormularioMultimedia />
          </section>
          <section>
            <CatalogoMultimedia />
          </section>

          <section>
            <h1>Formulário Simples - Aula 15</h1>
            <FormularioSimples />
          </section>

      </main>
    </>
  );
}



export default App;
