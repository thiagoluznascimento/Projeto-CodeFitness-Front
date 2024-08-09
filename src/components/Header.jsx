import { Link } from "react-router-dom";
import  logo  from "./../assets/Logocodefitness.png"
function Header() {
  return (
    <header style={{ minWidth: '100px' }} className="header w-100 px-3 py-2 m-0">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={logo} alt="CodeFitNess" />
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
