import style from "./Cart.module.css"
import { CartPro } from "../../App"
import { useContext, useEffect, useState } from "react";
import ItemCart from "./ItemCart";


export default function Cart() {
    const [pro, setPro] = useContext(CartPro)
    
    return <div className={style.cart} >
        <h2 className={style.title}>Cart</h2>
        <span className={style.sum} >Total payment:{pro.length>0?
        pro.reduce((sum,{price,count})=>sum+price*count,0).toFixed(2):0}$</span>
        <ul className={style.itemOfCart} >
            {pro.map(val => <ItemCart key={val.id} item={val}></ItemCart>)}
        </ul>
    </div>
}