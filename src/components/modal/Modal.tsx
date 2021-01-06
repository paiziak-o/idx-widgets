import React, { FC, useEffect, ReactNode } from 'react';

import './modal.scss';

interface Props {
  children: ReactNode;
  isOpen: boolean;
}

const Header: FC<Props> = ({ isOpen, children }) => {
  const htmlElement = document.getElementsByTagName('html');
  const modalElement: any = document.getElementsByClassName('modal');

  useEffect(() => {
    if (isOpen) {
      htmlElement[0].classList.add('modal-open-html');
      modalElement[0].style.display = 'block';
    } else {
      document.body.classList.remove('modal-open');
      htmlElement[0].classList.remove('modal-open-html');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="modal fade show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};

export default Header;
