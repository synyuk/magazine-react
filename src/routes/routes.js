import {createBrowserRouter} from "react-router-dom";
import Products from "../Components/Products/Products";
import About from "../Pages/About";
import Company from "../Pages/Company";
import Blog from "../Pages/Blog";
import Hero from "../Components/Hero/Hero";
import ProductsInfo from "../Components/Products/ProductsInfo/ProductPage";
import ProductPage from "../Components/Products/ProductsInfo/ProductPage";

const router = createBrowserRouter([
        {
            path: "/magazine-react/",
            element: (
                <>
                    <Hero />
                    <Products />
                </>
            )
        },
        {
            path: "/product",
            children: [
                {
                    path: "/product/:id",
                    element: <ProductPage />,
                },
            ]
        },
        {
            path: "magazine-react/about",
            element: <About />
        },
        {
            path: "magazine-react/company",
            element: <Company />
        },
        {
            path: "magazine-react/blog",
            element: <Blog />
        }
    ]
)

export default router;