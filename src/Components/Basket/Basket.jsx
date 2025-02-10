import './Basket.scss'
import { useSelector, useDispatch } from 'react-redux'
import {removeItem} from './basketReducer'
import {useMyContext} from "../../App";
import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import {database} from "../../firebase";

function Basket() {
    const dbRef = ref(database, '/products/');
    //const product = useSelector((state) => state.basket)
    //console.log(product);
    const id = useSelector((state) => state.basket)
    //console.log(id);
    const dispatch = useDispatch();
    const { setCounter} = useMyContext();
    const [products, setProducts] = useState(id);

    useEffect(() => {
        get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                //setProducts(snapshot.val());
                //console.log(snapshot.val());
                const products = snapshot.val();
                //console.log(products);
                const selectedProducts = id.map((productId) => products[productId]);
                //console.log(selectedProducts);
                setProducts(selectedProducts);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    const deleteItemHandler = (e) => {
        setCounter(prev => Number(prev) - 1);
        console.log(e.target.closest(".product-basket").getAttribute("data-id"));
        dispatch(removeItem(e.target.closest(".product-basket").getAttribute("data-id")));
    }

    return (
        <section>
            {products.map((product) => (product.id !== undefined && (
                        <div className="product-basket" data-id={`${product.id}`} key={`${product.id}`}>
                            <div className="product-basket-image">
                                <img src={`${process.env.PUBLIC_URL}/${product.pic}`} alt=""/>
                            </div>
                            <div className="product-basket-body">
                                <div className="product-basket-company">{product.company}</div>
                                <div className="product-basket-name">{product.name}</div>
                                <div className="product-basket-price">{product.price}</div>
                                <div className="product-basket-delete" onClick={deleteItemHandler}>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/></svg>
                                </div>
                            </div>
                        </div>
                    )
                )
            )}
        </section>
    )

}

export default Basket;