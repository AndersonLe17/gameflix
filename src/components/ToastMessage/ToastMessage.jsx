import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastMessage = ({ticket, show, handleClose}) => {
  return (
      <>
        <ToastContainer position='bottom-end'>
            <Toast onClose={() => handleClose()} show={show} bg='warning'>
            <Toast.Header>
                <strong className="me-auto">Orden Generada</strong>
            </Toast.Header>
            <Toast.Body>Su orden fue generada con el ticket: {ticket}</Toast.Body>
            </Toast>
        </ToastContainer>
      </>
  );  
};

export default ToastMessage;