import React from 'react';
// import { NavLink } from 'react-router-dom';
import './footer.css';

const Footer = () =>{
    return(
      <div className='footer'>
        <div className='footer-top absolute-centre'>
          <div className='footer-top-component'>
            <span className='component-header absolute-centre'>About Us</span>
            <hr className='header-body-seperator'></hr>
            <div className='component-body'>
              <span className='about-us-detail'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </span>
            </div>
          </div>

          <div className='footer-top-component'>
            <span className='component-header absolute-centre'>Quick Links</span>
            <hr className='header-body-seperator'></hr>
            <div className='component-body'>
              <div className='component-body-content'>
                <i className="fi fi-ss-home component-body-icon"></i>
                <span className='component-body-icon-name'>Home</span>
              </div>
              <div className='component-body-content'>
                <i class="fi fi-sr-info component-body-icon"></i>
                <span className='component-body-icon-name'>About Us</span>
              </div>
              <div className='component-body-content'>
                <i class="fi fi-br-layout-fluid component-body-icon"></i>
                <span className='component-body-icon-name'>Gallery</span>
              </div>
              <div className='component-body-content'>
                <i class="fi fi-sr-phone-call component-body-icon"></i>
                <span className='component-body-icon-name'>Contact Us</span>
              </div>
            </div>
          </div>

          <div className='footer-top-component'>
            <span className='component-header absolute-centre'>Follow Us</span>
            <hr className='header-body-seperator'></hr>
            <div className='component-body'>
              <div className='component-body-content'>
                <i class="fi fi-brands-facebook component-body-icon"></i>
                <span className='component-body-icon-name'>Facebook</span>
              </div>
              <div className='component-body-content'>
                <i class="fi fi-brands-instagram component-body-icon"></i>
                <span className='component-body-icon-name'>Instagram</span>
              </div>
              <div className='component-body-content'>
                <i class="fi fi-brands-twitter component-body-icon"></i>
                <span className='component-body-icon-name'>Twitter</span>
              </div>
              <div className='component-body-content'>
                <i class="fi fi-brands-youtube component-body-icon"></i>
                <span className='component-body-icon-name'>YouTube</span>
              </div>
            </div>
          </div>

          <div className='footer-top-component'>
            <span className='component-header absolute-centre'>Contact Us</span>
            <hr className='header-body-seperator'></hr>
            <div className='component-body'>
              <div className='component-body-content'>
                <i class="fi fi-sr-address-book component-body-icon"></i>
                <span className='component-body-icon-name'>Address : Behala, Kolkata</span>
              </div>
              <div className='component-body-content'>
                <i class="fi fi-ss-call-outgoing component-body-icon"></i>
                <span className='component-body-icon-name'>8777739510</span>
              </div>
              <div className='component-body-content'>
                <i class="fi fi-sr-envelope-plus component-body-icon"></i>
                <span className='component-body-icon-name'>foodgrid.india@gmail.com</span>
              </div>
              <div className='component-body-content'>
                <iframe 
                title='Foodgric-location'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.053436921285!2d88.3052656143025!3d22.50217818521908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027a170d1f274b%3A0x54f804afbd86bbc3!2s27%2C%208%2C%20Mahendra%20Banerjee%20Rd%2C%20Surya%20Sen%20Pally%2C%20Behala%2C%20Kolkata%2C%20West%20Bengal%20700060!5e0!3m2!1sen!2sin!4v1658843064735!5m2!1sen!2sin" 
                className='component-map'                 
                allowfullscreen="" 
                referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
                    
        <div className='footer-bottom'>
          <hr className='header-body-seperator'></hr>
          <div className='absolute-centre'>
            <span>
              &copy; 2022 Design & Developed By Achinta Mukherjee using MERN Stack
            </span>
          </div>     
        </div>
      </div>   
    )
}

export default Footer;