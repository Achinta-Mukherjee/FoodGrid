import React from 'react';
import './brandspage.css';

const BrandsPage = ({item}) => {
  return (
    <div>
      <div className='brand-cover'>
        <img src={item.cover} alt={item.name} className='brand-image'></img>
      </div>
      <div className='brand-name-and-time'>
        <span className='brand-name'>{item.name}</span>
        <span className='brand-time'>{item.time}</span>
      </div>
    </div> 
  )
}

export default BrandsPage;