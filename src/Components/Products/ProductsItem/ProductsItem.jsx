import './ProductsItem.scss';
import {useEffect, useState} from "react";
import { initializeApp } from "firebase/app";
//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";
import {NavLink} from "react-router";
import { useNavigate } from "react-router-dom";

function ProductsItem(props) {
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
    const dbRef = ref(database, 'magazine-react/products/');

    const [products, setProducts] = useState([]);

    useEffect(() => {
        get(dbRef).then((snapshot) => {
            if (snapshot.exists()) {
                setProducts(snapshot.val());
                //console.log(snapshot.val());
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    const navigate = useNavigate();

    return (
        products.map((product) =>
            <div className="product" key={`${product.id}`}>
                <div className="product-image">
                    <img src={`${process.env.PUBLIC_URL}/${product.pic}`} alt=""/>
                </div>
                <div className="product-company">{product.company}</div>
                <div className="product-name">{product.name}</div>
                <div className="product-bottom">
                    <div className="product-price">{product.price}</div>
                    <div onClick={() => navigate(`magazine-react/product/${product.id}`)} className="product-show">Show more</div>
                    <div className="product-add">Add +</div>
                </div>
            </div>
        )
    )
}

export default ProductsItem;
