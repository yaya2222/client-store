import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import style from "./Home.module.css"
export default function Categories() {

    const [arrCategory, setArrCategory] = useState([])

    // 
    useEffect(function () {
        axios.get("https://fakestoreapi.com/products/categories").then(res => setArrCategory(res.data))
    }, [])

    if (!arrCategory) return <div>loading...</div>

    return <div className={style.bodyMain}>
        <h2 className={style.h2} >Categories</h2>
        <div className={style.cat}>
            {arrCategory.map(cat =>
                <NavLink className={style.navLink} to={`/categories/${cat}`} key={cat}>
                    <span >{cat}</span>
                </NavLink>)}
        </div>

    </div>
}