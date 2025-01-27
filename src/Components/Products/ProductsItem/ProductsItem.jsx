import './ProductsItem.scss';
import {useEffect, useState} from "react";
import { initializeApp } from "firebase/app";
//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

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
    const dbRef = ref(database, '/products/');

    const [data, setProducts] = useState([]);
    const massLenght = data.length;

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


    return (
            <div className="products-list-item">
                <div className="products-list-pic">
                    <img src={
                data.map((product) => (product.pic))
            } alt=""/>
                </div>
                <div className="products-list-name">{
                    data.map((product) => (product.name))
                }</div>
                <div className="products-list-price">{
                    data.map((product) => (product.price))
                }</div>
            </div>
    )

}

export default ProductsItem;