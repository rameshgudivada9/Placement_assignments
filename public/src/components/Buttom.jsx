import './Buttom.css'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

export const Buttom = ({ props }) => {
const dispatch=useDispatch()
  return (
    <Link className="nav-btn"  to={props.link}>
      {props.btn}
      
    </Link>
  );
};
// 