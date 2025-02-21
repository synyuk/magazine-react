import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { ref, get } from "firebase/database";
import { database } from "../../services/firebase";
import { setProducts, sortProducts, showCategory } from "./store/productsReducer";
import ProductsItem from "./componenst/ProductsItem/ProductsItem";
import Category from "./componenst/Category/Category";
import s from "./Products.module.scss";
import { useParams } from "react-router-dom";

function Products() {
    const dispatch = useDispatch();
    const category = useParams().category;
    //console.log(category);

    useEffect(() => {
        const dbRef = ref(database, "/");
        get(dbRef).then(snapshot => {
            dispatch(setProducts(snapshot.val()));
            if (category) {
                dispatch(showCategory(category));
            }
        }).catch(error => {
            console.error(error);
        });
    }, [category]);

    function changeProductListHandler(e) {
        dispatch(sortProducts(e.target.value));
    }

    return (
        <section className="products">
            <h2>Featured Products<br />For Pre-Order</h2>
            <div className={s.productFilters}>
                <select className={s.filter} onChange={changeProductListHandler} defaultValue="0">
                    <option value="0">Sort By</option>
                    <option value="1">Lowest price</option>
                    <option value="2">Highest price</option>
                </select>
            </div>
            <div className={s.productWrapper}>
                <Category />
                <div className="product-grid">
                    <ProductsItem />
                </div>
            </div>
        </section>
    );
}

export default Products;
