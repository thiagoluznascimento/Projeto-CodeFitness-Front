import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteTreino, getTreinos } from "../api/treinos";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Treinos() {
  const [treinos, setTreinos] = useState([]);

  function carregarTreinos() {
    getTreinos().then((dados) => {
      setTreinos(dados);
    });
  }

  function deletarTreino(id) {
    const deletar = confirm("Tem certeza que deseja excluir?");
    if(deletar) {
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
        <Table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Exercícios</th>
            </tr>
          </thead>
          <tbody>
            {treinos.map((treino) => {
              return (
                <tr key={treino.id}>
                  <td>{treino.tipo}</td>
                  <td>{treino.exercicios}</td>
                  <td>
                    <Button className="m-1" variant="danger" size="sm" onClick={() => deletarTreino(treino.id)}>
                      Excluir
                    </Button>
                    <Button size="sm" as={Link} to={`/treinos/editar/${treino.id}`}>
                      Editar
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