import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import { TbMeat } from "react-icons/tb";
// import { GiSlicedBread } from "react-icons/gi";
import { CiHome } from "react-icons/ci";


const Navigation = () => {
    return(

        <nav>
        <div className="container">
            <div className="row ">
                <div className="col-sm-3 navPart1">
                    <Button className="allCatTab align-items-center">
                        <span className="icon1 mr-2"><IoIosMenu/></span>
                        <span className="text">All CATEGORIES</span>
                        <span className="icon2 ml-2"><FaAngleDown /></span>
                    </Button>
                </div>
                <div className="col-sm-9 navPart2 d-flex align-items-center">
                    <ul className="list list-inline ml-auto">
                        <li className="list-inline-item"><Link to="/"><CiHome/>HOME</Link></li>
                        <li className="list-inline-item">
                            <Link to="/">SHOP</Link>
                        {/* <span className="icon2 ml-2"><FaAngleDown /></span> */}
                        </li>
                        <li className="list-inline-item">
                        {/* <span className="icon2 ml-2"><TbMeat /></span> */}
                            <Link to="/">MEATS&SEAFOOD</Link>
                        </li>
                        <li className="list-inline-item">
                        {/* <span className="icon2 ml-2"><GiSlicedBread  /></span> */}
                            <Link to="/">BAKERY</Link></li>
                        <li className="list-inline-item"><Link to="/">BEVERAGE</Link></li>
                        <li className="list-inline-item"><Link to="/">BLOG</Link></li>
                        <li className="list-inline-item"><Link to="/">CONTACT</Link></li>

                    </ul>
                    
                </div>
            </div>
        </div>
    </nav>

    )
}


export default Navigation;