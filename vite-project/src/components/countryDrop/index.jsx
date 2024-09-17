import React, { useEffect } from 'react';
import Button from '@mui/material/Button'
// import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';


const CountryDrop = () => {


    const [isOpenModal, setisOpenModal] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(null); // Store selected country

    useEffect()

    const handleCountrySelect = (country) => {
        setSelectedCountry(country); // Set the selected country
        setisOpenModal(false); // Close modal after selecting the country
      };

    return(
        <>
        <Button className="countryDrop" onClick={()=> setisOpenModal(true)}>
        <div className="info d-flex flex-column">
         <span className='label'>Your Location</span>
         <span className="name">
            {selectedCountry ? selectedCountry : 'Select live location'}
          </span>
         {/* <span className='ml-auto'><FaAngleDown/></span> */}

        </div>
        </Button>
        
        <Dialog open={isOpenModal} onClick={()=> setisOpenModal(false)} className='locationModal'>
            <button className='close_' onClick={()=> setisOpenModal(false)} ><IoMdClose/></button>
            <h5 className='mb-0'>Choose your Delivery Location</h5>
            <p>Enter your address and we will specify the offer for your area.</p>
            <div className="headerSearch w-100">
            <input type="text" placeholder="Search Your Area"/>
                <Button><IoIosSearch/></Button>
            </div>

            <ul className='countryList mt-2'>
            <li>
            <button onClick={() => handleCountrySelect('India')}>India</button>
            </li>
            <li>
            <button onClick={() => handleCountrySelect('USA')}>USA</button>
            </li>
            <li>
            <button onClick={() => handleCountrySelect('Canada')}>Canada</button>
            </li>
               
            </ul>

        </Dialog>
        
        
        </>

        

)

}


export default CountryDrop;