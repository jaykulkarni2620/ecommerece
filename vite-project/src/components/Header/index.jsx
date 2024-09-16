import Logo from "../../assets/images/bacola-logo.webp";
import { Link } from 'react-router-dom';
import CountryDrop from "../countryDrop"; 
import Button from "@mui/material/Button";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";

const Header = () => {
    return (
        <div className="headerwrapper">
            <div className="top-strip bg-color">
                <div className="container">
                    <p className="text-center p-2">Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay</p>
                </div>
            </div>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                        </div>
                        <div className="col-sm-10 d-flex align-items-center part 2">
                            
                           <CountryDrop/>
                            <SearchBox/>


                            <div className="part3 d-flex align-items-center">
                            <Button className="circle"><FaRegUserCircle /></Button>
                            <div className="ml-auto-cartTab d-flex align-items-center">
                                <span className="price">$3.23</span>
                                <div className="position-relative ml-2">
                                    <Button className="circle"><HiOutlineShoppingBag /></Button>
                                    <span className="count d-flex align-items-center justify-content-center">1</span>
                                </div>
                            </div>
                        </div>




                        </div>
                    </div>
                </div>
            </header>

           
            <Navigation/>



        </div>
    );
}

export default Header;
