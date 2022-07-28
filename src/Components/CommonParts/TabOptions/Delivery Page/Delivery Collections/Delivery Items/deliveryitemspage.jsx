import React from 'react';
import './deliveryitemspage.css';

const DeliveryItemsPage = ({item}) => {
  return (
    <div>
      <div className='delivery-item-cover'>
        <img src={item.cover} alt={item.name} className='delivery-item-image'></img>
      </div>
      <div className='delivery-item-name'>
        <span>{item.name}</span>
      </div>
    </div> 
  )
}

export default DeliveryItemsPage;