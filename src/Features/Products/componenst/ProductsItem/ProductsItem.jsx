import "./ProductsItem.scss";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../../../Basket/store/basketReducer";

function ProductsItem() {
    const products = useSelector(state => state.product.products);
    console.log(products);
    const navigate = useNavigate();
    const { setCounter } = useMyContext();
    const dispatch = useDispatch();

    function addToCardHandler(e) {
        const productId = e.target.closest(".product").getAttribute("data-id");
        setCounter(prev => Number(prev) + 1);
        dispatch(addToCard(productId));
    }

    return (
        products.map((product) => (
            <div className="product" data-id={`${product.id}`} key={product.id}>
                <div className="product-image">
                    <img src={`${process.env.PUBLIC_URL}/${product.pic}`} alt="" />
                </div>
                <div className="product-company">{product.company}</div>
                <div className="product-name">{product.name}</div>
                <div className="product-bottom">
                    <div className="product-price">${product.price}</div>
                    <div onClick={() => navigate(`/magazine-react/product/${product.id}`)} className="product-show">
                        Show more
                    </div>
                    <div onClick={addToCardHandler} className="product-add">
                        Add +
                    </div>
                </div>
            </div>
        ))
    );
}

export default ProductsItem;
