
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from "react-icons/io";


const NewProduct = () => {
    return(
        <div className="container">
        <div className="row">
        <div className="col-md-3">
            <div className="banner">
            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/bacola-banner-04.jpg" alt="err" className="cursor" />
            </div>
        </div>

        <div className="col-md-9 productRow">
            <div className="d-flex align-items-center">
            <div className="info">
                <h3 className="mb-0 hd">BEST SELLERS</h3>
                <p className="text-color text-sml mb-0">Do not miss the current offers until the end of March.</p>
            </div>  
            <Button className="viewAllBtn ml-auto">
                View All<IoIosArrowRoundForward />
            </Button>
            </div>

        </div>
        </div>
        </div>
    )
}

export default NewProduct;


