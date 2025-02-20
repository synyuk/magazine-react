import "./ProductsItem.scss";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import { addToCard } from "../../../Basket/store/basketReducer";

function ProductsItem() {
    const products = useSelector(state => state.product.products);
    const navigate = useNavigate();
    const { setCounter } = useMyContext();
    const dispatch = useDispatch();
    const basket = useSelector(state => state.basket.products);

    function addToCardHandler(e) {
        const productId = e.target.closest(".product").getAttribute("data-id");
        setCounter(prev => Number(prev) + 1);
        dispatch(addToCard(productId));
    }

    function getProductCount(id) {
        const product = basket.find(products => products.id === id);
        return product ? product.count : 0;
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
                        {getProductCount(product.id) > 0 && (
                            <span className="product-count">{getProductCount(product.id)}</span>
                        )}
                    </div>
                </div>
            </div>
        ))
    );
}

export default ProductsItem;
