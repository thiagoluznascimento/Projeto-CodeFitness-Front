import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addTreino } from "../api/treinos";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { getAlunos } from "../api/alunos.js";


const NovoTreino = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  const [alunos, setAlunos] = useState([]);
  
  function carregarAlunos() {
    getAlunos().then((dados) => {
      setAlunos(dados);
    })
  }

  function salvarTreino(data) {
    addTreino(data).then((res) => {
      toast.success(res.message);
      navigate("/treinos");
    })
  }

  useEffect(() => {
    carregarAlunos();
  }, [])

  return (
    <main className='mt-4 container'>
      <h1>Adicionar Treino</h1>
      <hr />
      <form onSubmit={handleSubmit(salvarTreino)}>
      <div>
          <label htmlFor="tipo">Tipo do Treino</label>
          <select className="form-select">
            <option value="cardio">Cardio</option>
            <option value="musculacao">Musculação</option>
            <option value="hiit">HIIT</option>
            <option value="yoga">Yoga</option>
            <option value="pilates">Pilates</option>
          </select>
          {errors.tipo && (<small className="text-danger">Esse campo é obrigatório!</small>)}
        </div>
        <div>
          <label htmlFor="exercicios">Exercicios</label>
          <input type="text" className="form-control" id="exercicios" {...register("exercicios", { required: true, maxLength: 200 })} />
          {errors.exercicios && (<small className="text-danger">Esse campo é obrigatório!</small>)}
        </div>
        <div>
          <label htmlFor="alunoId">Aluno</label>
          <select className="form-select" {...register("alunoId", { required: true, valueAsNumber: true })}>
            <option value="">Selecione um aluno</option>
            {
              alunos.map((aluno) => {
                return (
                  <option key={aluno.id} value={aluno.id}>
                    {aluno.nome}
                  </option>
                );
              })
            }
          </select>

        </div>
        <Button className="mt-3" type="submit">
          Adicionar
        </Button>
      </form>
    </main>
  );
}

export default NovoTreino;