import { useContext} from "react";
import { CartPro } from "../../App"
import style from "./AddToCart.module.css"


export default function AddToCart({ item }) {

    const [pro, setPro] = useContext(CartPro)
    const findItem = id => pro.findIndex(p => p.id === id)
    function addStockItem(ob) {
        const index = findItem(ob.id)
        if (index !== -1) { setPro(pro.map((p, i) => (i === index) ? { ...p, count: p.count + 1 } : p)) }
        else setPro([...pro, { ...ob, count: 1 }])
    }

    function decreaseItem(ob) {
        const index = findItem(ob.id)
        if (pro[index].count > 1) setPro(pro.map((p, i) => (i === index) ? { ...p, count: p.count - 1 } : p))
        else setPro(pro.filter((val, i) => i !== index ? val : null))
    }

    return (findItem(item.id) === -1) ? <button className={style.addToCart} onClick={() => addStockItem(item)}>Add to cart</button>
        : <div>
            <button className={style.addAndDec} onClick={() => addStockItem(item)}>+</button>
            <span className={style.unit} >{pro[findItem(item.id)].count}</span>
            <button className={style.addAndDec} onClick={() => decreaseItem(item)}>-</button>
        </div>

}