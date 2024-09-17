import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// import { TbMeat } from "react-icons/tb";
// import { GiSlicedBread } from "react-icons/gi";
// import { CiHome } from "react-icons/ci";


const Navigation = () => {
    return(

        <nav>
        <div className="container">
            <div className="row ">
                <div className="col-sm-2 navPart1">
                    <Button className="allCatTab align-items-center">
                        <span className="icon1 mr-2"><IoIosMenu/></span>
                        <span className="text">All CATEGORIES</span>
                        <span className="icon2 ml-2"><FaAngleDown /></span>
                    </Button>
                </div>
                <div className="col-sm-10 navPart2 d-flex align-items-center">
                    <ul className="list list-inline ml-auto">
                        <li className="list-inline-item"><Link to="/"> <button>HOME</button></Link></li>
                        <li className="list-inline-item">
                            <Link to="/"><button>SHOP</button></Link>
                        {/* <span className="icon2 ml-2"><FaAngleDown /></span> */}
                        </li>
                        <li className="list-inline-item">
                        {/* <span className="icon2 ml-2"><TbMeat /></span> */}
                            <Link to="/"><button>MEATS&SEAFOOD</button></Link>
                        </li>
                        <li className="list-inline-item">
                        {/* <span className="icon2 ml-2"><GiSlicedBread  /></span> */}
                            <Link to="/"><button>BAKERY</button></Link></li>
                        <li className="list-inline-item"><Link to="/"><button>BEVERAGE</button></Link></li>
                        <li className="list-inline-item"><Link to="/"><button>BLOG</button></Link></li>
                        <li className="list-inline-item"><Link to="/"><button>CONTACT</button></Link></li>

                    </ul>
                    
                </div>
            </div>
        </div>
    </nav>

    )
}


export default Navigation;