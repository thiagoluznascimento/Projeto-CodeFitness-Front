import Banner from "../components/Banner";
import Footer from "../components/Footer";
import alter from "../assets/alter.svg";
import gym from "../assets/gym.svg";
import heart from "../assets/heart.svg";
import Cards from "../components/Cards";
import "./styles/Home.css"


const recursos = [
  { cod: 1, img: alter, descricao: "Variedade de máquinas de peso e aparelhos de musculação para exercícios de força e resistência." },
  { cod: 2, img: gym, descricao: "Programas como spinning, yoga, pilates, e HIIT, oferecidos em horários variados para atender diferentes preferências." },
  { cod: 3, img: heart, descricao: "Bicicletas ergométricas, elípticos, e outros aparelhos para exercícios aeróbicos que melhoram a saúde cardíaca." }
];

const cardsRecursos = recursos.map((recurso) => {
  return <Cards key={recurso.cod} img={recurso.img} descricao={recurso.descricao} />
});

const Home = () => {
  return (
    <>
      <main>
        <Banner />
        <div id="corpo-home">
          <h2 className="mb-5">PRINCIPAIS RECURSOS</h2>
          <div className="card-corpo">{cardsRecursos}</div>
        </div>
      </main>
    </>
  )
}

export default Home;