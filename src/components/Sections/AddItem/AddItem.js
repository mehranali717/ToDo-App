import { useState, useEffect } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import plusIcon from "../../../Assets/Images/plus-solid.svg";
import "./AddItem.css";
const AddItem = ({ labelName, value="", recordHandler }) => {
	const [updatedData, setupdatedData] = useState("");
	const recordChangeHandler = (e) => {
		setupdatedData(e.target.value);
	};
	useEffect(() => {
		setupdatedData(value);
	},[value]);
	return (
		<>
			<div className="form">
				<label  className="formLabel">
					{labelName}
				</label>
				<Input placeholder="Enter Description" onChange={recordChangeHandler} value={updatedData} type="text"/>
				<Button
					icon={plusIcon}
					onClick={() => {
						recordHandler(updatedData);
						setupdatedData("");
					}}
				/>
				<div className="hrLine"></div>
			</div>
		</>
	);
};
export default AddItem;
