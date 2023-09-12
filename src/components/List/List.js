import trashIcon from "../../Assets/Images/trash-can-solid.svg";
import penIcon from "../../Assets/Images/pen-solid.svg";
import Button from "../Button/Button.js";
import { useNavigate } from "react-router-dom"
import "./List.css";
const List = ({ data, handleDelete, handleUpdate }) => {
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
								<Button icon={trashIcon} onClick={() => handleDelete(item.userId)} />
								<Button icon={penIcon} onClick={() => handleUpdate(item.title, item.userId)} />
								<Button text="View" onClick={()=>gotoDetail(item.title)} />
							</div>
			))}
		</>
	);
};
export default List;
