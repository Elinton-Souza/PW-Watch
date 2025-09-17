import { useForm } from 'react-hook-form'
import './App.css'

function App() {
  const {register, watch} = useForm({
    defaultValues: { 
      modelo: "polo.png",
      camera: false,
      tela: false
    }
  })
  const modelo = watch("modelo")
  const camera = watch("camera")
  const tela = watch("tela")

  function calculaPreco() {
    let preco
    if (modelo == "polo.png"){
      preco = 89000
    } else if (modelo == "t-cross.png"){
      preco = 105000
    } else {
      preco = 120000
    }
    if (camera) {
      preco = preco + 1200
    }
    if (tela) {
      preco = preco + 900
    }
    return preco
  }
    

  return (
    <>
    <header>
    <img src="./logo.png" alt="Logo da Marca" />
    <div>
      <h1>Revenda Zanattinha - 25 anos</h1>
      <h2><i>Promoções de aniversário: Veículos com Desconto</i></h2>
    </div>
    </header>
    <main>
      <div>
        <h3>Modelos em Promoção</h3>
        <p>
          <input type="radio" name="" id="polo"
          {...register("modelo")} value="polo.png" />
          <label htmlFor="polo"> VW Polo</label>
        </p>
        <p>
          <input type="radio" name="" id="t-cross" 
          {...register("modelo")} value = "t-cross.png" />
          <label htmlFor="t-cross"> VW T-Cross</label>
        </p>
        <p>
          <input type="radio" name="" id="virtus"
          {...register("modelo")} value = "virtus.png" />
          <label htmlFor="virtus"> VW Virtus</label>
        </p>
      </div>
      <div>
        <img src={modelo} alt="Veículo em Promoção" />
      </div>
      <div>
        <h3>Acessórios Opcionais</h3>
        <p>
          <input type="checkbox" name="" id="camera"
          {...register("camera")} />
          <label htmlFor="camera">Câmera de Ré</label>
        </p>
        <p>
          <input type="checkbox" name="" id="multimidia"
          {...register("tela")} />
          <label htmlFor="multimidia">Tela Multimídia</label>
        </p>
      </div>
    </main>
    <footer>
      <h2> Preço Promocional R$:&nbsp;
        {calculaPreco().toLocaleString("pt-BR", {minimumFractionDigits: 2})}</h2>
      <h2><i>*Consulte opções de Financiamento</i></h2>
    </footer>
    </>
  )
  }

export default App
