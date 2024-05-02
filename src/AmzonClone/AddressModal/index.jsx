import React from 'react';
import './index.css'

const AddressModal = ({ addresses, onClose, onSelect }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Select Address</h2>
        <ul>
          {addresses.map((address, index) => (
            <li key={index} onClick={() => onSelect(address)}>
              {address}
            </li>
          ))}
        </ul>
        <button className='close_button' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddressModal;
