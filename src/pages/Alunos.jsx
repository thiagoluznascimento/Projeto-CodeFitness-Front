import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteAluno, getAlunos } from "../api/alunos";
import React, { useEffect, useState } from 'react';
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import "./styles/Alunos.css"

function Alunos() {
  const [alunos, setAlunos] = useState([]);

  function carregarAlunos() {
    getAlunos().then((dados) => {
      setAlunos(dados);
    });
  }

  function deletarAluno(id) {
    const deletar = confirm("Tem certeza que deseja excluir?");
    if (deletar) {
      deleteAluno(id).then((resposta) => {
        toast.success(resposta.message);
        carregarAlunos();
      })
    }
  }

  useEffect(() => {
    carregarAlunos();
  }, []);

  return (
    <>

      <main className="mt-4 container">
        <h1>Alunos</h1>
        <Button className="botao" as={Link} to="/alunos/novo">
          Adicionar Aluno
        </Button>
        <hr />
        {alunos ? (
          <Table className="table-custom">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map((aluno) => {
                return (
                  <tr key={aluno.id}>
                    <td>{aluno.nome}</td>
                    <td>{aluno.email}</td>
                    <td>{aluno.telefone}</td>
                    <td>
                      <Button variant="outline-danger" className="m-1"  size="sm" onClick={() => deletarAluno(aluno.id)}>
                        <span class="material-symbols-outlined">
                          delete
                        </span>
                      </Button>
                      <Button variant="outline-primary" size="sm" as={Link} to={`/alunos/editar/${aluno.id}`}>
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


    </>

  );
}

export default Alunos;
