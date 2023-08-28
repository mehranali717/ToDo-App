import { useState, useEffect, useContext } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import plusIcon from "../../../Assets/Images/plus-solid.svg";
import "./AddItem.css";
import LabelName from "../../LabelName/labelName";
const AddItem = ({ labelName, value, recordHandler }) => {
	const [updatedData, setupdatedData] = useState("");
	const recordChangeHandler = (newItem) => {
		setupdatedData(newItem);
	};
	useEffect(() => {
		setupdatedData(value);
	}, [value]);
	return (
		<>
			<form className="form" onSubmit={(e) => e.preventDefault()}>
				<LabelName labelName={labelName} />
				<Input onChange={recordChangeHandler} value={updatedData} />
				<Button
					icon={plusIcon}
					onClick={() => {
						recordHandler(updatedData);
						setupdatedData("");
					}}
				/>
				<div className="hrLine"></div>
			</form>
		</>
	);
};
export default AddItem;
