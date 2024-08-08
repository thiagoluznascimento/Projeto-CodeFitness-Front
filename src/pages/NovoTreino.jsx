import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addTreino } from "../api/treinos";
import toast from "react-hot-toast";


const NovoTreino = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();

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
    <form onSubmit={handleSubmit(salvarTreino)}>
      <div>
        <label htmlFor=""></label>
        <select name="" id="">
          <option value="">Cardio</option>
          <option value="">Musculação</option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
      </div>
      <div>
        <label htmlFor=""></label>
      </div>
    </form>
  );
}

export default NovoTreino;