    import Button from "@mui/material/Button";
    import { IoIosMenu } from "react-icons/io";
    import { FaAngleDown } from "react-icons/fa6";
    import { Link } from 'react-router-dom';
    import { CiApple } from "react-icons/ci";
    import { useState } from "react";
    // import { TbMeat } from "react-icons/tb";
    // import { GiSlicedBread } from "react-icons/gi";
    // import { CiHome } from "react-icons/ci";


    const Navigation = () => {

        const [isOpenSidebarVal, setisOpenSidebarVal] = useState(false);



        return(

            <nav>
            <div className="container">
                <div className="row ">
                    <div className="col-sm-2 navPart1">
                        <div className="catWrapper">
                        <Button className="allCatTab align-items-center" onClick={()=> {setisOpenSidebarVal(!isOpenSidebarVal)}}>
                            <span className="icon1 mr-2"><IoIosMenu/></span>
                            <span className="text">All CATEGORIES</span>
                            <span className="icon2 ml-2"><FaAngleDown /></span>
                        </Button>

                        <div className={`sidebarNav ${isOpenSidebarVal === true ? 'open' : ''}`}>
                                <ul>
                                    <li> <Link to="/"><button><CiApple/>Fruits & Vegetables</button></Link>
                                        <div className="submenu ">
                                            <Link to="/"><button>Clothing</button></Link>
                                            <Link to="/"><button>Footwear</button></Link>
                                            <Link to="/"><button>watches</button></Link>
                                            <Link to="/"><button>Clothing</button></Link>
                                            <Link to="/"><button>Footwear</button></Link>
                                            <Link to="/"><button>watches</button></Link>
                                        </div>
                                    </li>
                                    <li> <Link to="/"><button><CiApple/>Fruits & Vegetables</button></Link>
                                    <div className="submenu ">
                                            <Link to="/"><button>Clothing</button></Link>
                                            <Link to="/"><button>Footwear</button></Link>
                                            <Link to="/"><button>watches</button></Link>
                                            <Link to="/"><button>Clothing</button></Link>
                                            <Link to="/"><button>Footwear</button></Link>
                                            <Link to="/"><button>watches</button></Link>
                                        </div>
                                    </li>
                                    <li> <Link to="/"><button><CiApple/>Fruits & Vegetables</button></Link>
                                    <div className="submenu ">
                                            <Link to="/"><button>Clothing</button></Link>
                                            <Link to="/"><button>Footwear</button></Link>
                                            <Link to="/"><button>watches</button></Link>
                                            <Link to="/"><button>Clothing</button></Link>
                                            <Link to="/"><button>Footwear</button></Link>
                                            <Link to="/"><button>watches</button></Link>
                                        </div>
                                    </li>
                                    <li> <Link to="/"><button><CiApple/>Fruits & Vegetables</button></Link></li>
                                    <li> <Link to="/"><button><CiApple/>Fruits & Vegetables</button></Link></li>
                                    <li> <Link to="/"><button><CiApple/>Fruits & Vegetables</button></Link></li>
                                    <li> <Link to="/"><button><CiApple/>Fruits & Vegetables</button></Link></li>
                                    <li> <Link to="/"><button><CiApple/>Fruits & Vegetables</button></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 navPart2 d-flex align-items-center">
                        <ul className="list list-inline ml-auto">
                            <li className="list-inline-item">
                                <Link to="/">
                                <button>HOME</button>
                                </Link>
                                <div className="submenu shadow">
                                    <Link to="/"><button>Clothing</button></Link>
                                    <Link to="/"><button>Footwear</button></Link>
                                    <Link to="/"><button>watches</button></Link>
                                    <Link to="/"><button>Clothing</button></Link>
                                    <Link to="/"><button>Footwear</button></Link>
                                    <Link to="/"><button>watches</button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/"><button>SHOP</button></Link>
                                {/* SUBMENU*/}
                                <div className="submenu shadow">
                                    <Link to="/"><button>Clothing</button></Link>
                                    <Link to="/"><button>Footwear</button></Link>
                                    <Link to="/"><button>watches</button></Link>
                                    <Link to="/"><button>Clothing</button></Link>
                                    <Link to="/"><button>Footwear</button></Link>
                                    <Link to="/"><button>watches</button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/"><button>MEATS&SEAFOOD</button></Link>
                                <div className="submenu shadow">
                                    <Link to="/"><button>Clothing</button></Link>
                                    <Link to="/"><button>Footwear</button></Link>
                                    <Link to="/"><button>watches</button></Link>
                                    <Link to="/"><button>Clothing</button></Link>
                                    <Link to="/"><button>Footwear</button></Link>
                                    <Link to="/"><button>watches</button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/"><button>BAKERY</button></Link>
                                <div className="submenu shadow">
                                    <Link to="/"><button>Clothing</button></Link>
                                    <Link to="/"><button>Footwear</button></Link>
                                    <Link to="/"><button>watches</button></Link>
                                    <Link to="/"><button>Clothing</button></Link>
                                    <Link to="/"><button>Footwear</button></Link>
                                    <Link to="/"><button>watches</button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/"><button>BEVERAGE</button></Link>
                                <div className="submenu shadow">
                                    <Link to="/"><button>Clothing</button></Link>
                                    <Link to="/"><button>Footwear</button></Link>
                                    <Link to="/"><button>watches</button></Link>
                                    <Link to="/"><button>Clothing</button></Link>
                                    <Link to="/"><button>Footwear</button></Link>
                                    <Link to="/"><button>watches</button></Link>
                                </div>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/"><button>BLOG</button>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/contact">
                                <button>CONTACT</button>
                                </Link>
                            </li>

                        </ul>
                        
                    </div>
                </div>
            </div>
        </nav>

        )
    }


    export default Navigation;