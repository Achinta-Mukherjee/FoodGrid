import React from 'react';
import './filters.css';

const Filters = ({filterList}) => {
  return (
    <div className='filter-bar'>
      {/* Checks if filterList have an object in it ot not. If yes, then filterList.map function is called and the filter items of the respective page as recieved from the function is called */}
      {filterList && filterList.map((filter)=>{
        return  <div className='filter-item'>
                  {/* Checking whether icon is present with the corresponding filter title. It only prints icon if it is present, else it doesn't print anything  */}
                  {filter.icon !== ""  ? 
                                          <div className='filter-icon'>{filter.icon}</div> 
                                        : ""}
                  <div className='filter-title'>{filter.title}</div>
                </div>
        })}
    </div>
  )
}

export default Filters;