import React from 'react';
import './header.css';
import Location from './Location/location';

export const Header = () => {
  return (
    <div className='max-width absolute-centre main-header'>
      <div className='header-left'>
        {/* Company Logo on header  */}
        <img className='header-logo' src='./company logo/foodgrid.png' alt='FoodGrid logo'></img>
      </div>

      {/* Searchbar on header */}
      <div className='header-middle'>
        <div className='header-location-search-container'>
          <div className='location-wrapper' onClick={<Location />}>            
            <div className='location-icon-name'>
              {/* Location Icon  */}
              <i className ='fi fi-rr-marker absolute-centre location-icon'></i>
              {/* Location Searchbar */}
              <div>
                <input placeholder='Your Location' className='search-input'></input>
              </div>
            </div>
            {/*Dropdown Menu*/}
            <i className="fi fi-rr-caret-down absolute-centre"></i>
          </div>
          {/* To seperate the location bar and resturant search bar  */}
          <div className='location-search-seperator'>|</div>
          <div className='searchbar-wrapper'>
            {/* Search Icon  */}
            <i class="fi fi-rs-search absolute-centre search-icon"></i>
            {/* Searchbar to search resturant, cuisine or a dish  */}
            <input placeholder='Search for Resturant, Cuisine or a Dish' className='search-input'></input>
          </div>
        </div>
      </div>

      {/* Login section  */}
      <div className='header-right'>
        {/* Login Icon  */}
        <i className="fi fi-rs-user absolute-centre login-icon "></i>
        {/* Login Details of person logging in the page  */}
        <span className='header-username'>Achinta</span>
        {/* Dropdown option  */}
        <i className="fi fi-rr-angle-down absolute-centre profile-options-icon"></i>
      </div>
    </div>
  )
}

export default Header;