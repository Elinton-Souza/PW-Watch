import './App.css'

function App() {

  return (
    <>
    <header>
      <img src="./logo.png" alt="Logo do Cinema" />
      <div>
        <h1>Cine Zanattinha: Sua diversão em família</h1>
        <p>Venda online de ingressos dos filmes em cartaz</p>
      </div>
    </header>
    <main>
      <div>
      <h1>Escolha o filme, nº ingressos e pipoca</h1>
      <img src="./filme1.png" alt="" />
      <label htmlFor="filme-seletor">Título do Filme:</label>
      <select name="filmes" id="filme-seletor">
        <option value="">--Escolha o Filme</option>
        <option value="filme1">Harry Potter</option>
        <option value="filme2">Debi & Loid 2</option>
        <option value="filme3">A Primeira Profecia</option>
      </select>
      <label htmlFor="ingressos">Nº de ingressos: </label>
      <select name="nDeIngressos" id="ingressos">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <div>
      <input type="checkbox" name="" id="" />
      </div>

      </div>
    </main>
     
    </>
  )
}

export default App
