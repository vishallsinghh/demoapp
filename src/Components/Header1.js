import React from 'react';
import './Header1.css';
import PaymentIcon from '@material-ui/icons/Payment';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import WorkIcon from '@material-ui/icons/Work';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MailIcon from '@material-ui/icons/Mail'; 
// import {PaymentIcon,CalendarTodayIcon,WorkIcon,GroupAddIcon }

const Header1 = () =>{
    return(
        <div className='Header1'>
            <ul className='list'>
               <WorkIcon/> <li>Jobs@COER</li>
               <CalendarTodayIcon/> <li>Academic Calendar</li>
                <PaymentIcon className='paymentIcon'/><li>Payment Gateways</li>
                <GroupAddIcon/><li>Recruiter/Career Services</li>
            </ul>
            <p><MailIcon className='mailicon' />COER@email</p>
        </div>
    )
}

export default Header1;