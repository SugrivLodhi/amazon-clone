import React from 'react'
import AddressModal from './AddressModal'
import {useDispatch } from "react-redux";
import { setAddress } from './Redux/Action';
const Location = ({setShowModal}) => {
  const dispatch = useDispatch()
const addresses = ["House no. 15 Beltikar", "House no. 20 ahmedabad", "House no 34 Bhavnagar"];
  const handleSelectAddress = (address) => {
    dispatch(setAddress(address))
    setShowModal(false); // Close the modal
  };
  return (
     <AddressModal
    addresses={addresses}
     onClose={() => setShowModal(false)}
    onSelect={handleSelectAddress}
  />
  )
}

export default Location