import React from 'react';
import './dailyservicepage.css';
import Filters from '../../Filters/filters';
import Location from '../../Header/Location/location';

// Array of filters 
const DailyServiceFilters = [
  {
    id:1,
    icon: <i class="fi fi-rs-filter absolute-centre"></i>,
    title: "Filters"
  },
  {
    id:2,
    icon: <i class="fi fi-ss-star absolute-centre"></i>,
    title: "Rating: 4.0+"
  },
  {
    id:3,
    icon: <i class="fi fi-rs-shield-check absolute-centre"></i>,
    title: "Safe and Hygenic"
  },
  {
    id:4,
    icon: <span class="veg-indian-vegetarian absolute-centre"></span> ,
    title: "Pure Veg"
  },
  {
    id:5,
    icon: <i class="fi fi-rr-time-twenty-four absolute-centre"></i>,
    title: "Delivery Time"
  },
  {
    id:6,
    icon: <i class="fi fi-rr-badge-percent absolute-centre"></i>,
    title: "Great Offers"
  }
]

const DailyServicePage = () => {
  return (
    <div>
      {/* Filter tags portion on the daily service page  */}
      <div className='max-width'>
        <Filters filterList={DailyServiceFilters}/>
      </div>      
      {/* To be deleted later */}
      <span>*****Filters needs to be updated later*****</span>
      <Location />
    </div>
  )
}

export default DailyServicePage;