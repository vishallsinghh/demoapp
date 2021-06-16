import React from 'react';
import Academic from './Academic';
import './Logo.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Navbar from './Navbar';
import TextLoop from "react-text-loop";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);


const Logo = () =>{
    return(
            <div className='Logo'>
                <div className='carousel'>
                <AutoplaySlider
                    className='carousel-slider aws-btn'
                    play={false}
                    cancelOnInteraction={true} // should stop playing on user interaction
                    interval={6000}
                    
                    >
                    <div data-src="https://www.edudictionary.com/wp-content/uploads/2021/01/COER-CAMPUSSTUDENT-1024x400.jpg" />
                    <div data-src="/Assets/1.jpg" />
                    <div data-src="/Assets/2.jpg" />
                    <div data-src="/Assets/3.jpg" />
                </AutoplaySlider>
                </div>
                
                <div className='Logo-wrapper'>
                    <div className='college-name'>
                        <img alt='' src='https://coer.ac.in/wp-content/uploads/2021/05/UETR-Logo.png' height='100px' width='auto'/>
                        <img alt='' src='https://coer.ac.in/wp-content/uploads/2020/03/logo.png' height="100px" width='auto'/>
                        <h2 className='text'> 
                        <TextLoop interval={5000}children={["College of Engineering Roorkee","COER","कॉलेज ऑफ इंजीनियरिंग रुड़की"]}/>
                        <TextLoop className='second-loop'interval={5000}children={["Best Institute of Uttarakhand","",""]}/>
                        </h2>
                    </div>
                    <div className='location'>
                        <p>College of Engineering Roorkee,</p>
                        <p>Roorkee,Uttarakhand-110004</p>
                    </div>
                    <LocationOnIcon className='location-logo' color='inherit'style={{ fontSize: 100 }}/>
                </div>
                <div className='navbar'>
                    <Navbar />
                </div>
                <div className='Academic'>
                    <Academic />
                </div>
            </div>

        
    );
}
export default Logo;