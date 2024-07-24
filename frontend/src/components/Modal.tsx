import { Fragment } from 'react';

const Modal = ({ show, onClose, children }:any) => {
  if (!show) return null;

  return (
    <Fragment>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full">
          <div className="p-4">
            <button onClick={onClose} className="text-red-500 float-right">X</button>
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;