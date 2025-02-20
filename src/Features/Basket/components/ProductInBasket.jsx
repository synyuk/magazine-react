import {decrementProduct, incrementProducts, removeToCard} from "../store/basketReducer";
import {useDispatch} from "react-redux";
import { useMyContext } from "../../../App";


const ProductInBasket = (product) =>  {
    const dispatch = useDispatch();
    const { setCounter } = useMyContext();

    const decrementHendler = (e) => {
        const productId = e.target.closest(".product-basket").getAttribute("data-id");
        console.log(productId);
        dispatch(decrementProduct(productId));
        setCounter(prev => Number(prev) - 1 );
    }

    const incrementHendler = (e) => {
        const productId = e.target.closest(".product-basket").getAttribute("data-id");
        dispatch(incrementProducts(productId));
        setCounter(prev => Number(prev) + 1 );
    }

    const deleteItemHandler = (e) => {
        const productId = e.target.closest(".product-basket").getAttribute("data-id");
        const productCounter = e.target.closest(".product-basket").querySelector(".counter").innerText;
        //console.log(productCounter);
        setCounter(prev => Number(prev) - productCounter);
        dispatch(removeToCard(productId));
    };

    return (
        <div className="product-basket" data-id={`${product.product.id}`} key={`${product.product.id}`}>
            <div className="product-basket-image">
                <img src={`${process.env.PUBLIC_URL}/${product.product.pic}`} alt=""/>
            </div>
            <div className="product-basket-body">
                <div className="product-basket-company">{product.product.company}</div>
                <div className="product-basket-name">{product.product.name}</div>
                <div className="product-basket-delete" onClick={deleteItemHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
                    </svg>
                </div>
            </div>
            <div className="product-basket-footer">
                <div className="counter-wrapper">
                    <button onClick={decrementHendler} className="count-decrement">-</button>
                    <div className="counter">{product.product.count}</div>
                    <button onClick={incrementHendler} className="count-increment">+</button>
                </div>
                <div className="product-basket-price">${product.product.price}</div>
            </div>
        </div>
    )
}

export default ProductInBasket;