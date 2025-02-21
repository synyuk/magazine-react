import "./Category.scss";
import { Link } from "react-router-dom";

const Category = () => {

    return (
        <>
            <div className="category-wrapper">
                <h3>Categories:</h3>
                <Link to="/magazine-react/">Show All</Link>
                <Link to="/magazine-react/electronics">Electronics</Link>
                <Link to="/magazine-react/gadgets">Gadgets</Link>
                <Link to="/magazine-react/gaming">Gaming</Link>
                <Link to="/magazine-react/smart-devices">Smart Devices</Link>
                <Link to="/magazine-react/audio">Audio</Link>
                <Link to="/magazine-react/accessories">Accessories</Link>
            </div>
        </>
    )
}

export default Category;