import { useState } from "react";
import Modal from "./Components/Modal/Modal.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "./Components/Alert/Alert.tsx";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const CloseModal = () => {
    setShowModal(false);
  };

  const OpenModal = () => {
    setShowModal(true);
  };

  const CloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <div>
        <button onClick={OpenModal} className="mb-3">
          Open Modal
        </button>

        <Modal show={showModal} onClose={CloseModal}></Modal>

        <Alert type="warning" onDismiss={CloseAlert}>
          This is a warning type alert!
        </Alert>
      </div>
    </>
  );
};

export default App;
