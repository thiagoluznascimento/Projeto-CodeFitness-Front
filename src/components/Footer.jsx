import { Link } from "react-router-dom";
import "./styles/Footer.css"

const Footer = (props) => {
  return (
    <footer className="footer" style={{marginTop:"200px"}}>
      ©2024 CodeFitness | Todos os direitos reservados.
      <small> Desenvolvido por: {props.nomeAutor}</small>
      <Link className="politicas" to="/politicasprivacidade"> Políticas de privacidade </Link>
    </footer>
  )
}

export default Footer;
