import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import BoxItem from "../components/BoxItem";
import ButtonBack from "../components/button/ButtonBack";
import style from "./Categories.module.css"


export default function Categories() {
    const { cat } = useParams()
    // console.log(cat);
    const [items, setItems] = useState([])

    useEffect(function () {
        axios.get(`https://fakestoreapi.com/products/category/${cat}`).then(res => setItems(res.data))
    }, [])
    return <div>
        <ButtonBack />
        <div className={style.items}>
            {items.map(product => <BoxItem key={product.id} item={product} />)}
        </div>

    </div>
}