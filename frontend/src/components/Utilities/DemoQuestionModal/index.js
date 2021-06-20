import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import DemoQuestion from "./DemoQuestion";


const DemoQuestionModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Demo</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DemoQuestion />
        </Modal>
      )}
    </>
  );
}

export default DemoQuestionModal;