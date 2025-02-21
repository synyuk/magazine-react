import {createBrowserRouter} from "react-router-dom";
import Products from "../Features/Products/Products";
import About from "../Pages/About";
import Company from "../Pages/Company";
import Blog from "../Pages/Blog";
import Hero from "../Components/Hero/Hero";
import ProductPage from "../Features/Products/componenst/ProductsInfo/ProductPage";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Basket from "../Features/Basket/Basket";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const router = createBrowserRouter([
        {
            path: "/magazine-react",
            element: (
                <>
                    <Header />
                    <Hero />
                    <Products />
                    <Footer />
                </>
            ),
            children: [
                {
                    path: "/magazine-react/:category",
                    element:
                        <>
                            <Header />
                            <Hero />
                            <Products />
                            <Footer />
                        </>
                },
            ]
        },
        {
            path: "/magazine-react/product",
            children: [
                {
                    path: "/magazine-react/product/:id",
                    element:
                        <>
                            <Header />
                            <ProductPage />
                            <Footer />
                            <ScrollToTop />
                        </>
                },
            ]
        },
        {
            path: "/magazine-react/about",
            element:
                <>
                    <Header />
                    <About />
                    <Footer />
                    <ScrollToTop />
                </>
        },
        {
            path: "/magazine-react/company",
            element:
                <>
                    <Header />
                    <Company />
                    <Footer />
                    <ScrollToTop />
                </>

        },
        {
            path: "/magazine-react/blog",
            element:
                <>
                    <Header />
                    <Blog />
                    <Footer />
                    <ScrollToTop />
                </>
        },
        {
            path: "/magazine-react/basket",
            element:
                <>
                    <Header />
                    <Basket />
                    <Footer />
                    <ScrollToTop />
                </>
        }
    ]
)

export default router;