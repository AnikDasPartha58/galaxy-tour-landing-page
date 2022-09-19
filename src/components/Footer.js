import React from 'react'
import './FooterStyles.css'
import {FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className='left'>
                <div className='loaction'>
                    <FaSearchLocation size={20} style={{color:'#fff', marginRight: '2rem'}}/>
                    <p>123 Acme St,</p>
                    <h4>Houston, Tx</h4>
                
                {/* <div> */}
                {/* </div> */}
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/>1-800-123-1234</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/> tour@galaxy.com</h4>
                </div>
            </div>

            <div className='right'>
            <h4>About the company</h4>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <div className='social'>
                <FaFacebook size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                <FaTwitter size={30} style={{color:'#fff', marginRight:'1rem'}}/>
                <FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}}/>
            </div>
            </div>
        </div>
    </div>
 )
}

export default Footer
