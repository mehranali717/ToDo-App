import trashIcon from "../../Assets/Images/trash-can-solid.svg";
import penIcon from "../../Assets/Images/pen-solid.svg";
import Button from "../Button/Button.js";
import { memo } from "react";
import "./List.css";
const ListComponent = memo(function List({ data, handleDelete, handleUpdate }) {
	console.log("Lost componnent");
	return (
		<>
			{data.map((item, index) => (
				<form className=" listForm" onSubmit={(e) => e.preventDefault()}>
					<p className="input">{item}</p>
					<Button icon={trashIcon} onClick={() => handleDelete(index)} />
					<Button icon={penIcon} onClick={() => handleUpdate(item, index)} />
				</form>
			))}
		</>
	);
});
export default ListComponent;
