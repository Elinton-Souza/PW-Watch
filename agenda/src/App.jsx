import { set, useForm } from "react-hook-form";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const { register, handleSubmit, reset, setFocus } = useForm();
  const [agenda, setAgenda] = useState([]);

  useEffect(() => {
    //se houver dados salvos em localStorage
    if (localStorage.getItem("agenda")) {
      const agenda2 = JSON.parse(localStorage.getItem("agenda"));
      setAgenda(agenda2);
    }
  }, []);

  useEffect(() => {
    setFocus("descricao");
  }, [setFocus]);

  function cadastraCompromisso(data) {
    const descricao = data.descricao;
    const dia = data.dia;
    const hora = data.hora;

    const agenda2 = [...agenda, { descricao, dia, hora }];
    setAgenda(agenda2);
    alert("Ok! Compromisso cadastrado com sucesso");

    localStorage.setItem("agenda", JSON.stringify(agenda2));
    reset();
  }

  function limparAgenda() {
    localStorage.removeItem("agenda");
    setAgenda([]);
    alert("Agenda limpa com sucesso!");
  }

  const listaAgenda = agenda.map((compromisso) => (
    <tr>
      <td>{compromisso.descricao}</td>
      <td>{compromisso.dia}</td>
      <td>{compromisso.hora}</td>
    </tr>
  ));

  return (
    <>
      <header>
        <img src="./logo.png" alt="Logo de Agenda" />
        <div>
          <h1>Agenda de Compromisso Pessoal</h1>
          <h2>Cadastro de Compromissos da Semana</h2>
        </div>
      </header>
      <form onSubmit={handleSubmit(cadastraCompromisso)}>
        <p>
          <label htmlFor="descricao">Descrição: </label>
          <input type="text" id="descricao" {...register("descricao")} />
        </p>
        <p>
          <label htmlFor="dia">Data: </label>
          <input type="date" id="dia" {...register("dia")} />
        </p>
        <p>
          <label htmlFor="hora">Hora </label>
          <input type="time" id="hora" {...register("hora")} />
        </p>
        <input type="submit" value="Cadastrar" className="btn submit" />
        <input type="reset" value="Limpar" className="btn reset" />
        <input
          type="button"
          value="Limpar Agenda"
          className="btn clean"
          onClick={limparAgenda}
        />
      </form>
      <main>
        <h2 className="centro">Lista dos Compromissos Cadastrados</h2>
        <table>
          <thead>
            <tr>
              <th>Compromisso</th>
              <th>Data</th>
              <th>Hora</th>
            </tr>
          </thead>
          <tbody>{listaAgenda}</tbody>
        </table>
      </main>
    </>
  );
}

export default App;

/*
Exercícios
........................................
1. Limpar o form a cada inclusão (reset)
    => adicionei a função RESET à desestruturação da função "useForm", agora, obtendo 3 funções importantes.
    => chamei a função RESET dentro da função "cadastraCompromisso", que, após o usuário submeter (cadastrar) a "tarefa", o formulário retorna vazio.

2. Ao iniciar posiciona o "foco" no campo descrição
    => adicionei a função SETFOCUS à desestruturação da função "useForm", agora, obtendo 4 funções importantes.
    => Criei um novo "useEffect" no campo "descricao".

3. Acrescentar um botão "Limpar Agenda" e, após confirmação
remover os dados de locaStorage
    => Criei uma nova função "limparAgenda" dentro do componente App para remover todos os dados do localStorage quando o botão LIMPAR AGENDA for clicado, retornando ao estado de array vazio da agenda.
    => Adicionei um botão dentro do "form", chamando a função limparAgenda, quando ele for clicado.

4. onReset para limpar os campos
    => Já funciona desta forma dentro do botão "LIMPAR".
*/
