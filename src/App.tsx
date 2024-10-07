import { useState } from 'react';
import Modal from './Components/Modal/Modal.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  const [showModal, setShowModal] = useState(false);

  const CloseModal = () => {
    setShowModal(false);
  }

  const OpenModal = () => {
    setShowModal(true);
  }

  return (
    <>
      <div>
        <button onClick={OpenModal}>Open Modal</button>

        <Modal show={showModal} onClose={CloseModal}></Modal>

      </div>
    </>
  )
};

export default App
