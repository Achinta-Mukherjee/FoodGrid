import React from 'react';
import './deliverycollections.css';
import Slider from 'react-slick';
import NextArrow from '../../../Carousel/nextarrow';
import PrevArrow from '../../../Carousel/prevarraw';
import DeliveryItemsPage from './Delivery Items/deliveryitemspage';

// Collection of delivery items in an array 
const DeliveryItems =[
  {
    id:1,
    name: "Biriyani",
    cover: "https://img.freepik.com/premium-photo/mutton-biryani-food-photography_162831-2.jpg?w=2000"
  },  
  {
    id:2,
    name: "Rolls",
    cover: "https://media.istockphoto.com/photos/chicken-wrap-picture-id888366454?b=1&k=20&m=888366454&s=170667a&w=0&h=Oei7WgN-6iamcKfHDQB6PBk6Hu5F33U7LqJOWSRkXFs="
  },
  {
    id:3,
    name: "Momos",
    cover: "https://media.istockphoto.com/photos/japanese-dumplings-gyoza-with-pork-meat-and-vegetables-picture-id1133151212?b=1&k=20&m=1133151212&s=170667a&w=0&h=-XPU-BOpOepaVLcVsMuXyZNSml80XlY_KDFKsSWW8ug="
  },
  {
    id:4,
    name: "Chicken",
    cover: "https://images6.alphacoders.com/439/439410.jpg"
  },
  
  {
    id:5,
    name: "Pizza",
    cover: "https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg"
  },
  {
    id:6,
    name: "Home Style",
    cover: "https://wallpapercave.com/wp/wp8746996.jpg"
  },
  {
    id:7,
    name: "Wraps",
    cover: "https://media.istockphoto.com/photos/mexican-chicken-fajita-picture-id175534964?b=1&k=20&m=175534964&s=170667a&w=0&h=RCDzIUagGGAecOnuEyraXD3zD9jXPpuBNYJQhYqLEek="
  },
  {
    id:8,
    name: "Burger",
    cover: "https://c4.wallpaperflare.com/wallpaper/209/721/107/food-burger-wallpaper-preview.jpg"
  },
  {
    id:9,
    name: "Chaat",
    cover: "https://media.istockphoto.com/photos/goal-gappa-or-pani-puri-picture-id1314329942?b=1&k=20&m=1314329942&s=170667a&w=0&h=Tw4sYbXpFedy2K7fJoqdVPBImtXOXhrI5R3u6cI1ZSE="
  },
  {
    id:10,
    name: "Noodles",
    cover: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm9vZGxlc3xlbnwwfHwwfHw%3D&w=1000&q=80"
  },
  {
    id:11,
    name: "Ice Cream",
    cover: "https://images7.alphacoders.com/421/421534.jpg"
  }
]

// Settings of slider
const settings = {
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const DeliveryCollections = () => {
  return (
    <div className='delivery-collection'>  
      <div className='max-width'>
        <div className='collection-title'>
          Eat what makes you happy
        </div>
        <div>
            {/* Slider to represent the menu  */}
            <Slider {...settings}>
            {DeliveryItems.map((item)=>{
              return  <DeliveryItemsPage item={item} />
            })}
          </Slider> 
        </div>
      </div>
    </div>
  )
}

export default DeliveryCollections;