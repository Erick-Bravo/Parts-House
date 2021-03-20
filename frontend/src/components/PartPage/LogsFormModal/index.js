import React, { useState } from 'react';
import AddLogsForm from "./AddLogForm"
import { Modal } from '../../../context/Modal';


function LogsFormModal() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
      <button className="small-buttons mb" onClick={() => setShowModal(true)}>Add new log</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddLogsForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default LogsFormModal;