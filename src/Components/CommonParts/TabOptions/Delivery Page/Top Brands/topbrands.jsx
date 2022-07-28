import React from 'react';
import './topbrands.css';
import Slider from 'react-slick';
import NextArrow from '../../../Carousel/nextarrow';
import PrevArrow from '../../../Carousel/prevarraw';
import BrandsPage from './Brands Page/brandspage';

// Collection of top brands in an array 
const BrandList =[
  {
    id:1,
    name:"McDonald's",
    time: "50mins",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/220px-McDonald%27s_logo.svg.png"
  },  
  {
    id:2,
    name:"Domino's",
    time: "32 mins",
    cover: "https://freekaamaal.com/blog/wp-content/uploads/2020/11/image2.png"
  },
  {
    id:3,
    name:"StarBucks Coffee",
    time: "1 hour",
    cover: "https://www.reviewsxp.com/blog/wp-content/uploads/2019/02/Starbucks.jpg"
  },
  {
    id:4,
    name:"Wow Momo",
    time: "25 mins",
    cover: "https://www.reviewsxp.com/blog/wp-content/uploads/2019/02/Wow-Momo-1.jpg"
  },
  {
    id:5,
    name:"Burger King",
    time: "30 mins",
    cover: "https://freekaamaal.com/blog/wp-content/uploads/2020/11/bur.png"
  },
  {
    id:6,
    name:"Barbeque Nation",
    time: "40 mins",
    cover: "https://img4.nbstatic.in/tr:w-500/5f2bb545c9e77c000b0e11ea.jpg"
  },
  {
    id:7,
    name:"KFC",
    time: "47 mins",
    cover: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png"
  },
  {
    id:8,
    name: "Subway",
    time: "1 hour 15 mins",
    cover: "https://timesnext.com/wp-content/uploads/2020/05/food-chains-in-india-2.jpg"
  },
  {
    id:9,
    name: "Barista Lavazza",
    time: "30 mins",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Barista_Lavazza_logo.svg/1280px-Barista_Lavazza_logo.svg.png"
  },
  {
    id:10,
    name: "Haldiram’s",
    time: "45 mins",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Haldiram%27s_Logo_SVG.svg/1200px-Haldiram%27s_Logo_SVG.svg.png"
  },
  {
    id:11,
    name: "Pizza hut",
    time: "27 mins",
    cover: "https://www.pizzahut.co.uk/order/images/icons/logo-300x300.ed09f0955306cb0be42c35092733b5c2.png"
  },
  {
    id:12,
    name: "Cafe Coffee Day",
    time: "57 mins",
    cover: "https://static.toiimg.com/thumb/msid-71176947,imgsize-656616,width-400,resizemode-4/71176947.jpg"
  },
  {
    id:13,
    name: "Bikanervala",
    time: "33 mins",
    cover: "https://bikanervala.com/img/logo_footer.png"
  },
  {
    id:14,
    name: "Baskin Robbins",
    time: "15 mins",
    cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Baskin-Robbins_logo.svg/1200px-Baskin-Robbins_logo.svg.png"
  }
]

const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const TopBrands = () => {
  return (
    <div className='top-brands'>
      <div className='max-width'>
        <div className='collection-title'>
          Top Brands
        </div>
        <div>
          <Slider {...settings}>
            {BrandList.map((item)=>{
            return <BrandsPage item={item} />

            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default TopBrands;


  
//   
  
//   const DeliveryCollections = () => {
//     return (
//       <div className='delivery-collection'>  
//         <div className='max-width-delivery'>
//           <div className='collection-title'>
//             Eat what makes you happy
//           </div>
//           <div>
//               {/* Slider to represent the menu  */}
//               <Slider {...settings}>
//               {DeliveryItems.map(item=>{
//                 return  <DeliveryItemsPage item={item} />
//               })}
//             </Slider> 
//           </div>
//         </div>
//       </div>
//     )
//   }