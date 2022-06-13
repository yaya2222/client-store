import { Link } from "react-router-dom";
import style from "./BoxItem.module.css"
import AddToCart from "./button/AddToCart";


export default function BoxItem({ item }) {

    //     function clickItem(e){
    // console.log(e.t);
    //     }

    return <div className={style.pro}>
        <Link to={`/item`} state={{ item }} >
            <img src={item.image} alt={item.title} style={{ width: "100px", height: "100px" }} />
        </Link>
        <span className={style.price}>{item.price}$</span>
        <AddToCart item={item} />
        <span className={style.title}>{item.title}</span>
    </div>
}