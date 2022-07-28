import React from 'react';
import { useState } from 'react';
import Header from '../../CommonParts/Header/header';
import Taboptions from '../../CommonParts/TabOptions/taboptions';
import DeliveryPage from '../../CommonParts/TabOptions/Delivery Page/deliverypage';
import NightLifeTabPage from '../../CommonParts/TabOptions/Night Life Page/nightlifepage';
import DiningOutPage from '../../CommonParts/TabOptions/Dining Out Page/diningoutpage';
import DailyServicePage from '../../CommonParts/TabOptions/Daily Service Page/dailyservicepage';
import Footer from '../../CommonParts/Footer/footer';
import './home.css';

export const Home = () => {
    
// setActiveTab function gets its value from the tab chosen by the user in real time.
// setActiveTab function sets the activeTab value which then passes to getCorrectSceen Switch Case
const [activeTab, setActiveTab] = useState("Delivery");


// To decide which tab to show based on the tab value recieved in tab 
const getCorrectScreen =(tab) =>{
    switch(tab){
        case "Delivery": 
            return  <div>
                        <DeliveryPage />
                    </div>
        case "Night Life":
            return  <div>
                        <NightLifeTabPage />
                    </div>
        case "Dining Out":
            return  <div>
                        <DiningOutPage />
                    </div>
        case "Daily Service":
            return  <div>
                        <DailyServicePage />                
                    </div>
        default:
            return  <div>
                        <DeliveryPage />
                    </div>
    }
}


return (
    <div className='home-page'>
        <Header />
        <Taboptions activeTab={activeTab} setActiveTab={setActiveTab}/>

        {/* To show different Screen based on taboptions
            activeTab recieves the activeTab value set by setActiveTab and then sends its value to switch case of getCorrectScreen component to show desired output  */}
        {getCorrectScreen(activeTab)}

        <Footer />
    </div>
)
}

export default Home;