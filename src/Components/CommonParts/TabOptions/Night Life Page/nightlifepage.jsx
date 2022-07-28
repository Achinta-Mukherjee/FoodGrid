import React from 'react';
import './nightlifepage.css';
import Filters from '../../Filters/filters';
import ExploreSection from '../../Explore Section/exploresection';
import {nightlifekolkata} from '../../../Data/nightlifekolkata';

// Array of filters 
const NightLifeFilters = [
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
    icon: "",
    title: "Distance"
  },
  {
    id:4,
    icon: <i class="fi fi-rr-glass-cheers absolute-centre"></i> ,
    title: "Pubs and Bars"
  }
]

const RestaurantList = nightlifekolkata;

const NightLifePage = () => {
  return (
    <div>
      {/* Filter tags portion on the night life page  */}
      <div className='max-width'>
        <Filters filterList={NightLifeFilters} />
        <ExploreSection list={RestaurantList} collectionName = 'Night Life in Kolkata' />
      </div> 
    </div>
  )
}

export default NightLifePage;