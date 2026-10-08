import { CORE_CONCEPTS } from './data.js';

function Header() {
  return (
    
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>Fundamentos do React - João Ferreira</h1>
      <p>Conceitos fundamentais do React de que você precisará...</p>
    </header>
  );
}

function CoreConcept({ image, title, description }) {
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
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
