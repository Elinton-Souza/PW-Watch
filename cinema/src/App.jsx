import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, watch } = useForm({
    defaultValues: {
      filme: "filme1",
      ingresso: "1",
      pipocaPequena: false,
      pipocaFamilia: false,
    },
  });

  const filme = watch("filme");
  const ingresso = watch("ingresso");
  const pipocaPequena = watch("pipocaPequena");
  const pipocaFamilia = watch("pipocaFamilia");

  function calcularValor() {
    const valorIngresso = 10;
    let valorTotal = 0;

    valorTotal = valorIngresso * Number(ingresso);

    if (filme === "filme3") {
      valorTotal += 5 * Number(ingresso);
    }

    if (pipocaPequena) {
      valorTotal += 5;
    }
    if (pipocaFamilia) {
      valorTotal += 10;
    }
    return valorTotal;
  }

  const imagemFilme = `/${filme}.png`;
  const valorFinal = calcularValor();
  return (
    <>
      <header>
        <img src="./logo.png" alt="Logo do Cinema" />
        <div>
          <h1>Cine Zanattinha</h1>
          <h2>Sua diversão em família</h2>
          <p>Venda online de ingressos dos filmes em cartaz</p>
        </div>
      </header>
      <hr />
      <main>
        <h1>Escolha o filme, o nº de ingressos e o tamanho da sua pipoca</h1>
        <div>
          <img src={imagemFilme} alt="Filme em cartaz" />
        </div>
        <div className="informacoes">
          <label htmlFor="filme-seletor">Título do Filme: </label>
          <select name="filmes" id="filme-seletor" {...register("filme")}>
            <option value="">--Escolha o Filme</option>
            <option value="filme1">Harry Potter</option>
            <option value="filme2">Debi & Loid 2</option>
            <option value="filme3">A Primeira Profecia - 3D</option>
          </select>
          <label htmlFor="ingressos">Nº de ingressos: </label>
          <select name="nDeIngressos" id="ingressos" {...register("ingresso")}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div>
            <label htmlFor="seletor-pipoca">Escolha sua Pipoca: </label>
            <input
              type="checkbox"
              id="pipoca-pequena"
              value="pequena"
              {...register("pipocaPequena")}
            />{" "}
            Grande
            <input
              type="checkbox"
              id="pipoca-familia"
              value="familia"
              {...register("pipocaFamilia")}
            />{" "}
            Família
          </div>
        </div>
      </main>
      <hr />
      <footer>
        <h1>Valor Total R$:&nbsp; {valorFinal.toFixed(2)} </h1>
      </footer>
    </>
  );
}

export default App;
