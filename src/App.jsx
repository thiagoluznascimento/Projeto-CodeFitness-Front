import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Alunos from "./pages/Alunos";
import NovoAluno from "./pages/NovoAluno";
import EditarAluno from "./pages/EditarAluno";
import EditarTreino from "./pages/EditarTreino";
import Treinos from "./pages/Treinos";
import NovoTreino from "./pages/NovoTreino";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/alunos" element={<Alunos/>} />
          <Route path="/alunos/novo" element={<NovoAluno/>} />
          <Route path="/alunos/editar/:id" element={<EditarAluno/>} />
          <Route path="/treinos" element={<Treinos/>} />
          <Route path="/treinos/novo" element={<NovoTreino/>} />
          <Route path="/treinos/editar/:id" element={<EditarTreino/>} />
        </Routes>
    </BrowserRouter>
    <Toaster position="bottom-right" />
    </>
  );
}

export default App;
