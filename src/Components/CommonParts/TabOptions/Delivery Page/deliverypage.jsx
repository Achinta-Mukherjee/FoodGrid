import React from 'react';
import './deliverypage.css';
import Filters from '../../Filters/filters';
import DeliveryCollections from './Delivery Collections/deliverycollections';
import TopBrands from './Top Brands/topbrands';
import ExploreSection from '../../Explore Section/exploresection';
import '../../../Data/restaurants';
import { deliverykolkata } from '../../../Data/deliverykolkata';

// Array of filters 
const DeliveryFilters = [
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

const RestaurantList = deliverykolkata;

const DeliveryPage = () => {
  return (
    <div>
      {/* Filter tags portion on the delivery page  */}
      <div className='max-width'>
        <Filters filterList={DeliveryFilters}/>
      </div>
      
      {/* Calling of delivery collections page  */}
      <DeliveryCollections />

      {/* Calling of top brands  */}
      <TopBrands />

      {/* Calling of explore sections  */}
      <ExploreSection list={RestaurantList} collectionName='Delivery Restaurants in Kolkata'/>
    </div>
  )
}

export default DeliveryPage;