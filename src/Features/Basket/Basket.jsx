import './Basket.scss';
import { useSelector, useDispatch } from 'react-redux';
import {removeAllFromCards} from './store/basketReducer';
import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { database } from "../../services/firebase";
import ProductInBasket from "./components/ProductInBasket";
import {useMyContext} from "../../App";

function Basket() {
    const dispatch = useDispatch();
    const dbRef = ref(database, '/');
    const productsInBasket = useSelector((state) => state.basket.products);
    const [products, setProducts] = useState([]);
    const [price, setPrice] = useState(0);
    const { setCounter } = useMyContext();

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
                const priceMass = selectedProducts.map(item => item.price*item.count);
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

    function removeAllHandler(){
        dispatch(removeAllFromCards());
        setCounter(0);
    }

    return (
        <section className="container">
            {products.length > 0 ? (
                products.map((product) => (
                    <ProductInBasket product={product} />
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
