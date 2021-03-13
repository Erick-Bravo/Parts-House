import React, { useState } from 'react';
import AddLogsForm from "./AddLogForm"
import { Modal } from '../../../context/Modal';


function LogsFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddLogsForm />
        </Modal>
      )}
    </>
  );
}

export default LogsFormModal;