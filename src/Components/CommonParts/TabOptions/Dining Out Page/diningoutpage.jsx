import React from 'react';
import './diningoutpage.css';
import Filters from '../../Filters/filters';
import { diningoutkolkata } from '../../../Data/diningoutkolkata';
import ExploreSection from '../../Explore Section/exploresection';

// Array of filters 
const DiningOutFilters = [
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
    icon: <i class="fi fi-rr-terrace absolute-centre"></i>,
    title: "Outdoor Seating"
  },
  {
    id:4,
    icon: <i class="fi fi-rr-glass-cheers absolute-centre"></i> ,
    title: "Serves Alcohol"
  },
  {
    id:5,
    icon: "",
    title: "Open Now"
  }
]

const RestaurantList=diningoutkolkata;
const DiningOutPage = () => {
  return (
    <div>
      {/* Filter tags portion on the dining out page  */}
      <div className='max-width'>
      <Filters filterList={DiningOutFilters} />
      <ExploreSection list={RestaurantList} collectionName='Dining Out Locations in Kolkata'/>
      </div> 
    </div>
  )
}

export default DiningOutPage;