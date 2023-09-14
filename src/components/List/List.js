import trashIcon from "../../Assets/Images/trash-can-solid.svg";
import penIcon from "../../Assets/Images/pen-solid.svg";
import plusIcon from "../../Assets/Images/plus-solid.svg"
import Button from "../Button/Button.js";
import { useNavigate } from "react-router-dom"
import { CartContext } from "../../Contexts/CartContexts";
import { useContext } from "react";
import "./List.css";
const List = ({ data, handleDelete, handleUpdate }) => {
	// debugger
	const {cartList ,listHandler} = useContext(CartContext)
	const navigate = useNavigate();
	const gotoDetail = (title)=>{
        navigate("/view",{
			state:{
				title:title
			}
		})
	}
	return (
		<>
			{data.map((item,index) => (
				<div className=" listForm" key={index}>
					<p className="input">{item.title}</p>
					{cartList.some((x)=>x.title ===item.title)?<Button icon={trashIcon} onClick={() => handleDelete(item.id)} />:
					<Button icon={plusIcon} onClick={() => listHandler(item)} />}
					<Button icon={penIcon} onClick={() => handleUpdate(item.title , index)} />
					<Button text="View" onClick={()=>gotoDetail(item.title)} />
				</div>
			))}
		</>
	);
};
export default List;
