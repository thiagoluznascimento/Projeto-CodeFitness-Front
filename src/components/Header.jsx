import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header w-100 px-3 py-2">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={""} alt="CodeFitNess" />
        </Link>
        <div className="d-flex gap-5">
          <Link to="/alunos">Alunos</Link>  
          <Link to="/treinos">Treinos</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
