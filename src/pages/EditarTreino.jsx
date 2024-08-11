import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { getTreino, updateTreino } from "../api/treinos";
import toast from "react-hot-toast";


const EditarTreino = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  const navigate = useNavigate();

  const {id} = useParams();

  function atualizarTreino(data) {
    updateTreino(id, data).then((res) => {
      toast.success(res.message);
      navigate("/treinos");
    }).catch((err) => {
      toast.error(err.response.data.message);
    });
  }

  function carregarTreino() {
    getTreino(id).then((dados) => {
      reset(dados);
      console.log(dados);
    }).catch((err) => {
      navigate("/treinos");
    })
  }

  useEffect(() => {
    carregarTreino();
  }, []);

  return (
    <main className="mt-4 container" style={{ width: '80%', height: '500px' }}>
      <h1>Atualizar Treino</h1>
      <hr />
      <form onSubmit={handleSubmit(atualizarTreino)}>
        <div>
          <label htmlFor="tipo">Tipo do Treino</label>
          <select className="form-select" {...register("tipo", {required:true})}>
            <option value="Cardio">Cardio</option>
            <option value="Musculação">Musculação</option>
            <option value="HIIT">HIIT</option>
            <option value="Yoga">Yoga</option>
            <option value="Pilates">Pilates</option>
          </select>
          {errors.tipo && (<small className="text-danger">Esse campo é obrigatório!</small>)}
        </div>
        <div>
          <label htmlFor="exercicios">Exercicios</label>
          <input type="text" className="form-control" {...register("exercicios", { required: true, maxLength: 200 })} />
          {errors.exercicios && (<small className="text-danger">Esse campo é obrigatório!</small>)}
        </div>
        <Button className="mt-3 botao" type="submit">
          Atualizar
        </Button>
      </form>
    </main>
  )
}

export default EditarTreino;