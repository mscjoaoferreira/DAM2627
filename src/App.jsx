import { useState } from 'react';

// AULA 17 — Base limpa a partir dos exemplos da Aula 14.
// Mantém a estrutura do projeto original e reutiliza o CSS existente.
// Não é necessário instalar bibliotecas adicionais.

function Header() {
  return (
    <header>
      <h1>Catálogo Multimédia</h1>
      <p>Uma aplicação React para organizar filmes, séries, jogos e livros.</p>
    </header>
  );
}

// Componente reutilizável criado na Aula 16.
function ItemConteudo({ conteudo, onRemover }) {
  return (
    <li className="cartao">
      <h3>{conteudo.titulo}</h3>
      <p>Tipo: {conteudo.tipo}</p>
      <p>{conteudo.descricao || 'Sem descrição.'}</p>
      <button className="botao-remover" type="button" onClick={() => onRemover(conteudo.id)}>
        Remover
      </button>
    </li>
  );
}

function CatalogoMultimedia() {
  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState('Filme');
  const [descricao, setDescricao] = useState('');
  const [conteudos, setConteudos] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  function adicionarConteudo(event) {
    event.preventDefault();

    if (titulo.trim() === '') {
      alert('Introduza um título.');
      return;
    }

    const novoConteudo = {
      id: crypto.randomUUID(),
      titulo: titulo.trim(),
      tipo,
      descricao: descricao.trim(),
    };

    setConteudos((anteriores) => [...anteriores, novoConteudo]);
    setTitulo('');
    setTipo('Filme');
    setDescricao('');
  }

  function removerConteudo(id) {
    setConteudos((anteriores) =>
      anteriores.filter((item) => item.id !== id)
    );
  }

  // Pesquisa da Aula 16: não modifica o array original.
  const resultados = conteudos.filter((item) =>
    item.titulo.toLowerCase().includes(pesquisa.trim().toLowerCase())
  );

  return (
    <section className="catalogo">
      <h2>Gerir conteúdos</h2>

      {/* ETAPA 1 — Formulário controlado */}
      <form 
      className="formulario"
      onSubmit={adicionarConteudo}>
        <label htmlFor="titulo">Título</label>
        <input
          id="titulo"
          type="text"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />

        <label htmlFor="tipo">Tipo</label>
        <select
          id="tipo"
          value={tipo}
          onChange={(event) => setTipo(event.target.value)}
        >
          <option value="Filme">Filme</option>
          <option value="Série">Série</option>
          <option value="Jogo">Jogo</option>
          <option value="Livro">Livro</option>
        </select>

        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        />

        <button type="submit">Adicionar conteúdo</button>
      </form>

      {/* ETAPA 2 — Pesquisa dinâmica */}
      <h2>Pesquisar conteúdos</h2>
      <div className="pesquisa">
      <input
        type="search"
        aria-label="Pesquisar pelo título"
        placeholder="Pesquisar pelo título"
        value={pesquisa}
        onChange={(event) => setPesquisa(event.target.value)}
      />
      </div>
      
      {/* ETAPA 3 — Lista com componente reutilizável */}
      <h2>Conteúdos adicionados</h2>
      {conteudos.length === 0 && <p>Ainda não existem conteúdos.</p>}
      {conteudos.length > 0 && resultados.length === 0 && (
        <p>Nenhum conteúdo encontrado.</p>
      )}

      <ul className="lista-conteudos">
        {resultados.map((conteudo) => (
          <ItemConteudo
            key={conteudo.id}
            conteudo={conteudo}
            onRemover={removerConteudo}
          />
        ))}
      </ul>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <CatalogoMultimedia />
      </main>
    </>
  );
}

export default App;
