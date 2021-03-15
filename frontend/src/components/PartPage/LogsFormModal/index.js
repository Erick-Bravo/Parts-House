import React, { useState } from 'react';
// import AddLogsForm from "./AddLogForm"
import { Modal } from '../../../context/Modal';


function LogsFormModal() {
  const [showModal, setShowModal] = useState(false);
  // <AddLogsForm />

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          
        </Modal>
      )}
    </>
  );
}

export default LogsFormModal;