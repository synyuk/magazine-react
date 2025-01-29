import './ProductPage.css'
import {useParams} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { useState, useEffect } from "react";


function ProductPage() {

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAabRCnuw4NaFoDlzGoN1QssPaLLkosWKM",
        authDomain: "magazine-cbs.firebaseapp.com",
        databaseURL: "https://magazine-cbs-default-rtdb.firebaseio.com/",
        projectId: "magazine-cbs",
        storageBucket: "magazine-cbs.firebasestorage.app",
        messagingSenderId: "727621848913",
        appId: "1:727621848913:web:6e6873b7c47a0687518d70",
        measurementId: "G-7YB5N7636T"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const dbRef = ref(database, '/products/');
    const {id} = useParams();
    const [product, setProducts] = useState({});

    useEffect(() => {
        get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                //setProducts(snapshot.val());
                //console.log(snapshot.val());
                const products = snapshot.val();
                setProducts(products[`${id}`]);
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    return (
        <section>
            <h1>{product.name}</h1>
            <div className="product-wrapper">
                <div className="product-item-pic">
                    <img src={`${process.env.PUBLIC_URL}/${product.pic}`} alt={product.name} />
                </div>
                <div className="product-description">
                    <p>{product.description}</p>
                    <p><b>Price</b>: {product.price}</p>
                    <p><b>Company</b>: {product.company}</p>
                    <p><b>Description</b>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloribus esse ex iure magni molestiae natus nemo omnis reprehenderit voluptatum! Commodi deleniti dignissimos iusto, necessitatibus neque quisquam ratione rerum sapiente. Ad, adipisci architecto aspernatur assumenda consequatur consequuntur cum deserunt eligendi, enim iure minima officia, perspiciatis ratione soluta vel vero vitae? Atque commodi dolores expedita quam quod quos ratione recusandae sit soluta ullam. A ad alias consequuntur, eos et ex facilis id magnam minus, modi nisi odio perspiciatis quas quod reprehenderit tempore ut. Animi dignissimos dolore doloribus, facilis fugiat id incidunt, ipsam minima nam nisi officiis praesentium quas quidem sapiente voluptates.</p>
                </div>

            </div>

        </section>
    )
}

export default ProductPage;
