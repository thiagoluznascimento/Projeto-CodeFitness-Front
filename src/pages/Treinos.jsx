import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteTreino, getTreinos } from "../api/treinos";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import "./styles/Treinos.css";

function Treinos() {
  const [treinos, setTreinos] = useState([]);

  function carregarTreinos() {
    getTreinos().then((dados) => {
      setTreinos(dados);
    });
  }

  function deletarTreino(id) {
    const deletar = confirm("Tem certeza que deseja excluir?");
    if (deletar) {
      deleteTreino(id).then((resposta) => {
        toast.success(resposta.message);
        carregarTreinos();
      })
    }
  }

  useEffect(() => {
    carregarTreinos();
  }, []);

  return (
    <main className="mt-4 container">
      <h1>Treinos</h1>
      <Button as={Link} to="/treinos/novo">
        Adicionar Treino
      </Button>
      <hr />
      {treinos ? (
        <Table className="table-custom">
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Treino</th>
              <th>Exercícios</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {treinos.map((treino) => {
              return (
                <tr key={treino.id}>
                  <td>{treino.aluno.nome}</td>
                  <td>{treino.tipo}</td>
                  <td>{treino.exercicios}</td>
                  <td>
                    <Button className="m-1" variant="outline-danger" size="sm" onClick={() => deletarTreino(treino.id)}>
                      <span class="material-symbols-outlined">
                        delete
                      </span>
                    </Button>
                    <Button size="sm" variant="outline-primary" as={Link} to={`/treinos/editar/${treino.id}`}>
                      <span class="material-symbols-outlined">
                        edit
                      </span>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default Treinos;