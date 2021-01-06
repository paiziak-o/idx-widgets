import React, { FC, useState } from 'react';

import Modal from '../modal/Modal';
import { manageGoogleTagManager } from '../../utils';
import { AgreeanceAction } from '../../types';
import './agreeance.scss';

interface Props {
  onChange(action: AgreeanceAction): void;
}

const Agreeance: FC<Props> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  const acceptHandler = (action: AgreeanceAction): void => {
    setIsOpen(!setIsOpen);
    onChange(action);
    manageGoogleTagManager(action === AgreeanceAction.Reject);
  };

  return (
    <>
      <Modal isOpen={isOpen}>
        <>
          Please, read and accept our
          <a href="/" target="_blank">Terms and Conditions</a>
          and
          <a href="/" target="_blank">Privacy Policy</a>.
          <div className="buttons">
            <button
              className="w3-button w3-red"
              onClick={() => acceptHandler(AgreeanceAction.Accept)}
            >
              Accept
            </button>
            <button
              className="w3-button w3-black"
              onClick={() => acceptHandler(AgreeanceAction.Reject)}
            >
              Reject
            </button>
          </div>
        </>
      </Modal>
    </>
  );
}

export default Agreeance;
