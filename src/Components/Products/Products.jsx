import ProductsItem from "./ProductsItem/ProductsItem";

function Products() {
    return (
        <section className="products">
            <h2>Featured Products<br/>For Pre-Order</h2>
            <div className="product-grid">
                <ProductsItem />
            </div>
        </section>
    )
}

export default Products;