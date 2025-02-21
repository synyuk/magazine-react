import './ProductPage.css'
import {useParams} from "react-router-dom";
import { ref, get } from "firebase/database";
import { database } from "../../../../services/firebase";
import { useState, useEffect } from "react";
import {addToCard} from "../../../Basket/store/basketReducer";
import {useDispatch} from "react-redux";
import {useMyContext} from "../../../../App";
import Preloader from "../../../../Common/Preloader/Preloader";

function ProductPage() {
    const dbRef = ref(database, '/');
    const {id} = useParams();
    const [product, setProducts] = useState([]);
    const dispatch = useDispatch();
    const { setCounter } = useMyContext();
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                //setProducts(snapshot.val());
                //console.log(snapshot.val());
                const products = snapshot.val();
                setProducts(products[`${id}`]);
                setIsFetching(false);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    function addToCardHandler(e){
        const productId = e.target.closest('.product-wrapper').getAttribute('data-id');
        dispatch(addToCard(productId));
        setCounter(prev => Number(prev) + 1);
    }

    return (
        <section className="product-page">
            {
                isFetching ? <Preloader /> :
                <>
                    <h1>{product.name}</h1>
                    <div className="product-wrapper" data-id={product.id}>
                        <div className="product-item-pic">
                            <img src={`${process.env.PUBLIC_URL}/${product.pic}`} alt={product.name} />
                            <button onClick={addToCardHandler} className="main-btn">Add +</button>
                        </div>
                        <div className="product-description">
                            <p>{product.description}</p>
                            <p><b>Price</b>: {product.price}</p>
                            <p><b>Company</b>: {product.company}</p>
                            <p><b>Description</b>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloribus esse ex iure magni molestiae natus nemo omnis reprehenderit voluptatum! Commodi deleniti dignissimos iusto, necessitatibus neque quisquam ratione rerum sapiente. Ad, adipisci architecto aspernatur assumenda consequatur consequuntur cum deserunt eligendi, enim iure minima officia, perspiciatis ratione soluta vel vero vitae? Atque commodi dolores expedita quam quod quos ratione recusandae sit soluta ullam. A ad alias consequuntur, eos et ex facilis id magnam minus, modi nisi odio perspiciatis quas quod reprehenderit tempore ut. Animi dignissimos dolore doloribus, facilis fugiat id incidunt, ipsam minima nam nisi officiis praesentium quas quidem sapiente voluptates.</p>
                        </div>
                    </div>
                </>
            }
        </section>
    )
}

export default ProductPage;
