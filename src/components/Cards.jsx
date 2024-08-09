import Card from 'react-bootstrap/Card';
import "./styles/Cards.css";

function Cards({ img, descricao }) {
    return (
        <>  <div className=''>
                <Card id='corpo-card' className='container d-flex justify-content-center' style={{ width: "300px", height:"260px" }} >
                    <Card.Img  className='container d-flex justify-content-center' id="card-img" src={img} style={{ maxHeight: '400px' }}></Card.Img>
                    <Card.Body style={{ maxHeight: '120px' }}>
                        <Card.Text>{descricao}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>

    )
}

export default Cards;