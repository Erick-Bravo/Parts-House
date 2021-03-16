import React, { useState } from 'react';
import AddLogsForm from "./AddLogForm"
import { Modal } from '../../../context/Modal';


function LogsFormModal() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button className="small-buttons" onClick={() => setShowModal(true)}>Add new log</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddLogsForm />
        </Modal>
      )}
    </>
  );
}

export default LogsFormModal;