import React from 'react';
import './taboptions.css';

export const Taboptions = ({activeTab, setActiveTab}) => {

  // Tabs is an array of objects containing the different tab options such as delivery, dining out, noght life and home delivery scheme
  const tabs = [
    {
      id: 1,
      name: "Delivery",
      icon: <i class="fi fi-bs-truck-side absolute-centre"></i>,
      activeColor: "orangered"
    },
    {
      id: 2,
      name: "Dining Out",
      icon: <i class="fi fi-rr-terrace absolute-centre"></i>,
      activeColor: "orangered"
    },
    {
      id: 3,
      name: "Night Life",
      icon: <i class="fi fi-ss-glass-cheers absolute-centre"></i>,
      activeColor: "orangered"
    },
    {
      id: 4,
      name: "Daily Service",
      icon: <i class="fi fi-sr-map-marker-home absolute-centre"></i>,
      activeColor: "orangered"
    }
  ]
  return (
    <div className='tab-options'>
      <hr className='horizontal-line'></hr>
      <div className='max-width absolute-centre option-wrapper'>
      {/* Tab element traverses through all the objects of the Tabs array and can extract any specific value of an object uing the '.' operator. For eg- tab.name will give us the following :- Delivery, Dining out, Night Life, Home Delivery Scheme */}
        {tabs.map((tab)=>{

          <>{/* the value of the tab chosen by the user in real time is updated in 'setActiveTab' */}</>
          return  <div onClick={()=> setActiveTab(tab.name)} className={`tab-item absolute-centre cursor-pointer ${activeTab===tab.name && "active-tab"}`} style={{color: `${activeTab===tab.name ? tab.activeColor : ""}`}}>
                    {/*  */}
                    {/* <div className={`tab-icon-container absolute-centre > */}
                      <div className='tab-icon absolute-centre'>{tab.icon}</div>
                      <div className='tab-name absolute-centre'>{tab.name}</div>
                    {/* </div>                     */}
                  </div>
        })}
      </div>
      <hr className='horizontal-line'></hr>
    </div>
  )
}

export default Taboptions;