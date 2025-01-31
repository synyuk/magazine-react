import './Basket.scss'
import {useMyContext} from "../../App";
import products from "../Products/Products";

function Basket() {

    const { counter, card } = useMyContext();

    return (
        <>
            <p>Basket {counter}</p>
            <p>{card}</p>
        </>
    )
}

export default Basket;