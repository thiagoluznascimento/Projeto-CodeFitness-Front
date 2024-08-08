import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addTreino } from "../api/treinos";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";


const NovoTreino = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const navigate = useNavigate();

  function salvarTreino(data) {
    addTreino(data).then((res) => {
      toast.success(res.message);
      navigate("/treinos");
    }).catch((err) => {
      toast.error(err.response.data.message);
    })
  }

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
          <input type="text" className="form-control" {...register("exercicios", { required: true, maxLength: 200 })} />
          {errors.exercicios && (<small className="text-danger">Esse campo é obrigatório!</small>)}
        </div>
        <Button className="mt-3" type="submit">
          Adicionar
        </Button>
      </form>
    </main>
  );
}

export default NovoTreino;