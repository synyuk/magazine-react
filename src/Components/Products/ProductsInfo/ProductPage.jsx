import './ProductPage.css'
import {useParams} from "react-router-dom";
import { ref, get } from "firebase/database";
import { database } from "../../../firebase";
import { useState, useEffect } from "react";


function ProductPage() {
    const dbRef = ref(database, '/products/');
    const {id} = useParams();
    const [product, setProducts] = useState([]);
    console.log(product)

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
