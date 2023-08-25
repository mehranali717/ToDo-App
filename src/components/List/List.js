import trashIcon from "../../Assets/Images/trash-can-solid.svg";
import penIcon from "../../Assets/Images/pen-solid.svg";
import Button from "../Button/Button.js";
import "./List.css";
const List = ({ data, handleDelete, handleUpdate }) => {
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
};
export default List;
