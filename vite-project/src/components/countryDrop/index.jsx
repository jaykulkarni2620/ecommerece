import Button from '@mui/material/Button'
import { FaAngleDown } from "react-icons/fa6";

const CountryDrop = () => {
    return(
        <Button className="countryDrop ">
        <div className="info d-flex flex-column">
         <span className='label'>Your Location</span>
         <span className='name'>Select live location</span>
         {/* <span className='ml-auto'><FaAngleDown/></span> */}

        </div>
        
        </Button>
    )
}


export default CountryDrop;