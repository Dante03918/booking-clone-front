import Modal from "react-bootstrap/modal";


const VerticallyCenteredModal = (props) =>(

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Callback message
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {props.message}
                </p>
            </Modal.Body>

        </Modal>


)
export default VerticallyCenteredModal;
