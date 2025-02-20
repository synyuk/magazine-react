import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ref, get } from "firebase/database";
import { database } from "../../services/firebase";
import { setProducts, sortProducts } from "./store/productsReducer";
import ProductsItem from "./componenst/ProductsItem/ProductsItem";
import Category from "./componenst/Category/Category";
import s from "./Products.module.scss";

function Products() {
    const dispatch = useDispatch();

    useEffect(() => {
        const dbRef = ref(database, "/products/");
        get(dbRef).then(snapshot => {
            //console.log(snapshot.val());
            dispatch(setProducts(snapshot.val()));
        }).catch(error => {
            console.error(error);
        });
    }, [dispatch]);

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
