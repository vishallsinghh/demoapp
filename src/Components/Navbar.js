import React from 'react';
import './Navbar.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Navbar = () =>{
    return(
        <div className='navbar'>
            <ul>
                <li>Academics</li><ArrowDropDownIcon className='downArrow'/>
                <li>Admission</li><ArrowDropDownIcon className='downArrow'/>
                <li>For Students</li><ArrowDropDownIcon className='downArrow'/>
                <li>For Faculty & Staff</li><ArrowDropDownIcon className='downArrow'/>
                <li>Alumni</li><ArrowDropDownIcon className='downArrow'/>
                <li>Resources</li><ArrowDropDownIcon className='downArrow'/>

            </ul>
        </div>
    )
}
export default Navbar;