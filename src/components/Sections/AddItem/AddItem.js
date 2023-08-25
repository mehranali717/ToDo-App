import { useState, useEffect } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import plusIcon from "../../../Assets/Images/plus-solid.svg";
import "./AddItem.css";
const AddItem = ({ labelName, value, recordHandler }) => {
	console.log({ labelName });
	const [updatedData, setupdatedData] = useState("");
	const recordChangeHandler = (newItem) => {
		// debugger;
		setupdatedData(newItem);
	};
	useEffect(() => {
		setupdatedData(value);
	}, [recordHandler]);
	return (
		<>
			<form className="form" onSubmit={(e) => e.preventDefault()}>
				<label htmlFor="description" className="formLabel">
					{value ? labelName.update : labelName.discription}
				</label>
				<Input onChange={recordChangeHandler} value={updatedData} />
				<Button icon={plusIcon} onClick={() => recordHandler(updatedData)} />
				<div className="hrLine"></div>
			</form>
		</>
	);
};
export default AddItem;
