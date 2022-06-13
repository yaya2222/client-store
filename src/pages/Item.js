import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AddToCart from "../components/button/AddToCart";
import ButtonBack from "../components/button/ButtonBack";
// import Product from "../components/Product"
import style from "./Item.module.css"

export default function Item() {
    const [pro, setPro] = useState({})

    const location = useLocation();
    useEffect(function () {
        setPro(location.state.item)
    }, [])
    return <>
        <ButtonBack />
        {/* <Product item={pro} /> */}
        <div className={style.pro}>
            <img className={style.image} src={pro.image} alt={pro.title} />
            <h2>{pro.title}</h2>
            <AddToCart item={pro}/>
            <h3>{pro.price}$</h3>
            <p className={style.description}>{pro.description}</p>
        </div>

    </>



}