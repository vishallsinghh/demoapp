import React from 'react';
import './Academic.css'
import SearchIcon from '@material-ui/icons/Search';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SchoolIcon from '@material-ui/icons/School';

const Academic = () =>{
    return(
        <div className='Academic'>
            <div className='inventory-box'>
                <div className='inventory first'>
                    <div>
                        <h1>Research</h1>
                        <SearchIcon style={{ fontSize: 100 }}/>
                        <p>Mapping the innovations and Collaborations</p>
                    </div>
                </div>
                <div className='inventory second'>
                    <div>
                        <h1>Startups</h1>
                        <FlightTakeoffIcon style={{ fontSize: 100 }}/>
                        <p>Success stories of entrepreneurs</p>
                    </div>
                </div>
                <div className='inventory third'>
                    <div>
                        <h1>News</h1>
                        <ReceiptIcon style={{ fontSize: 100 }}/>
                        <p>Panaroma of Events and News</p>
                    </div>
                </div>
                <div className='inventory fourth'>
                    <div>
                        <h1>Campus </h1>
                        <SchoolIcon style={{ fontSize: 100 }}/>
                        <p>Explore Beyond the Classrooms</p>
                    </div>
                </div>
            </div>
            <div className='news'>
                
            </div>
        </div>
    );
}
export default Academic;