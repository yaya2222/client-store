import { useNavigate } from 'react-router-dom';
import style from "./ButtonBack.module.css"

export default function ButtonBack() {
  const navigate = useNavigate();
  return  <button className={style.but} onClick={() => navigate(-1)}>go back</button>
}