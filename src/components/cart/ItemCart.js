import { useContext, useEffect, useState } from "react"
import AddToCart from "../button/AddToCart"
import style from "./ItemCart.module.css"
import { CartPro } from "../../App"


export default function ItemCart({ item }) {

    const [productCart, setProductCart] = useContext(CartPro)

    function findById(ob) {
        const ob1 = productCart.find(val => val.id === ob.id)
        return ob1.price * ob.count
    }

    return <li className={style.li} >
        <div className={style.up}>
            <img src={item.image} alt={item.title} style={{ width: "75px", height: "75px" }} />
            <span className={style.title}>{item.title}</span>
        </div>
        <AddToCart item={item} />
        <h6 className={style.priceAll}> {findById(item)}$</h6>
        <h6 className={style.price}>Price per unit {item.price}$</h6>
    </li>
}