import "./styles/Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <section className="container-banner">
                <div className="fundo-img">
                    <div className="card-banner">
                        <h2 className="h2-banner">A vida precisa de movimento!</h2>
                        <p>Faça do movimento uma parte da sua vida diária com variações de exercícios que atendem todos os tipos de necessidades.</p>
                        <Link className="nav-link" to="/saibamais">
                            <button type="button" className="bttn">SAIBA MAIS</button>
                        </Link>
                        
                    </div>
                </div>

            </section>

        </>
    )
}

export default Banner;