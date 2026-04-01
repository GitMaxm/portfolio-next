'use client';

import './style.css'
import { useState } from 'react';
import Form from '../../Form';

const ModalForm = () => {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="btnForm">
      <button
        className="btn btn-modal"
        onClick={() => setModalActive(true)}
      >
        Связаться со мной
      </button>

      <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
        <div
          className={modalActive ? "modal__content active" : "modal__content"}
          onClick={(e) => e.stopPropagation()}>
          <Form />
        </div>
      </div>
    </div >
  );
};

export default ModalForm;