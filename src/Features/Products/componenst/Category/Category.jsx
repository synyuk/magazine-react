import "./Category.scss";
import {NavLink} from "react-router-dom";

const Category = () => {
    return (
        <>
            <div className="category-wrapper">
                <NavLink to="">Headphones</NavLink>
                <NavLink to="">Watch</NavLink>
            </div>
        </>
    )
}

export default Category;