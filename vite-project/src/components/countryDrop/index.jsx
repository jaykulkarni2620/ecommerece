import React, { useEffect, useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MyContext } from '../../App';

const CountryDrop = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null); // Store selected country
  const [countryList, setCountryList] = useState([]); // For displaying filtered countries

  const context = useContext(MyContext);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country); // Set the selected country name
    setisOpenModal(false); // Close modal after selecting the country
  };

  useEffect(() => {
    // Initialize countryList with the full list from context
    setCountryList(context.countryList);
  }, [context.countryList]);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      // Filter the country list based on the keyword
      const filteredList = context.countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      // Update the displayed country list with the filtered results
      setCountryList(filteredList);
    } else {
      // Reset to the original country list if the search is cleared
      setCountryList(context.countryList);
    }
  };

  return (
    <>
      <Button className="countryDrop" onClick={() => setisOpenModal(true)}>
        <div className="info d-flex flex-column">
          <span className="label">Your Location</span>
          <span className="name">
            {selectedCountry ? selectedCountry : 'Select live location'}
          </span>
        </div>
      </Button>

      <Dialog open={isOpenModal} className="locationModal">
        <button className="close_" onClick={() => setisOpenModal(false)}><IoMdClose /></button>
        <h5 className="mb-0">Choose your Delivery Location</h5>
        <p>Enter your address and we will specify the offer for your area.</p>
        <div className="headerSearch w-100">
          <input type="text" placeholder="Search Your Area" onChange={filterList} />
          <Button><IoIosSearch /></Button>
        </div>

        <ul className="countryList mt-2">
          {countryList?.length !== 0 && countryList.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleCountrySelect(item.country)} // Set the selected country name
                className={`${selectedCountry === item.country ? 'active' : ''}`} // Highlight selected country
              >
                {item.country}
              </button>
            </li>
          ))}
        </ul>
      </Dialog>
    </>
  );
};

export default CountryDrop;
