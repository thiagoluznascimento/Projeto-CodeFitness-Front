import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/NotFound.css"


function NotFound () {
    return (
        <main>
            <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
            >
            <Modal.Dialog>
                <Modal.Body>
                    <p><img src="../src/assets/Erro4.png" /></p>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center align-itens-center">
                    <Button variant="primary" as={Link} to={`/`}>Voltar para home</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </div>
        </main>
    )
}

export default NotFound;