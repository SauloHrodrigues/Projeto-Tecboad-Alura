
import './App.css'

// no react componentes são funçoes qu começam com letra maiusculas

function FormularioDeEventos() {
  return (
    <form className="form-evento">
      <h2>Preencha para criar um evento?</h2>
      <fieldset>
        <label htmlFor="nome">Qual o nome do evento?</label>
        <input type="text" id="nome" name="nome" placeholder="Digite o nome do evento" />
      </fieldset>

      <fieldset>
        <label htmlFor="data">Data do evento?</label>
        <input type="text" id="data" name="data" placeholder="Digite a data do evento" />
      </fieldset>

      <fieldset>
        <label htmlFor="tipo">Qual o tipo do evento?</label>
        <input type="text" id="tipo" name="tipo" placeholder="Digite o tipo do evento" />
      </fieldset>
      
    </form>
  )
}

function App() {
  
  return (
   <main>
      <header>
        <img src="/logo.png" alt="Logo" />
      </header>
       <section>
          <img src="/banner.png" alt="banner" />
        </section>
        <FormularioDeEventos />
   </main>
  )
}

export default App
