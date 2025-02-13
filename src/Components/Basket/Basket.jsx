import './Basket.scss';
import { useSelector, useDispatch } from 'react-redux';
import {removeAllFromCards, removeToCard, incrementProducts, decrementProduct } from '../../store/reducers/basketReducer';
import { useMyContext } from "../../App";
import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { database } from "../../firebase";

function Basket() {
    const dispatch = useDispatch();
    const dbRef = ref(database, '/products/');
    const { setCounter } = useMyContext();
    const productsInBasket = useSelector((state) => state.basket.products);
    const [products, setProducts] = useState([]);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                const allProducts = snapshot.val();
                console.log(productsInBasket);
                const selectedProducts = productsInBasket.map((item) => ({
                    ...allProducts[item.id],
                    count: item.count,
                    id: item.id,
                }));
                const priceMass = selectedProducts.map(item => item.price.slice(1)*item.count);
                let summ = 0;
                for (let i = 0; i < priceMass.length; i++) {
                    summ += priceMass[i];
                }
                setProducts(selectedProducts);
                setPrice(summ.toFixed(2));
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [productsInBasket]);

    const deleteItemHandler = (e) => {
        const productId = e.target.closest(".product-basket").getAttribute("data-id");
        const productCounter = e.target.closest(".product-basket").querySelector(".counter").innerText;
        //console.log(productCounter);
        setCounter(prev => Number(prev) - productCounter);
        dispatch(removeToCard(productId));
    };

    function removeAllHandler(){
        dispatch(removeAllFromCards());
        setCounter(0);
    }

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

    return (
        <section className="container">
            {products.length > 0 ? (
                products.map((product) => (
                    <div className="product-basket" data-id={`${product.id}`} key={`${product.id}`}>
                        <div className="product-basket-image">
                            <img src={`${process.env.PUBLIC_URL}/${product.pic}`} alt=""/>
                        </div>
                        <div className="product-basket-body">
                            <div className="product-basket-company">{product.company}</div>
                            <div className="product-basket-name">{product.name}</div>
                            <div className="product-basket-delete" onClick={deleteItemHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                                    <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
                                </svg>
                            </div>
                        </div>
                        <div className="product-basket-footer">
                            <div className="counter-wrapper">
                                <button onClick={decrementHendler} className="count-decrement">-</button>
                                <div className="counter">{product.count}</div>
                                <button onClick={incrementHendler} className="count-increment">+</button>
                            </div>
                            <div className="product-basket-price">{product.price}</div>
                        </div>
                    </div>
                ))
            ) : (
                <div>Cart is empty</div>
            )}
            {products.length > 0 &&
                <div className="basket-footer-wrapper">
                    <div className="price-total">Total price: <span>${price}</span></div>
                    <button className="main-btn" onClick={removeAllHandler}>Delete All</button>
                </div>
            }
        </section>
    );
}

export default Basket;
