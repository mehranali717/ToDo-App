import { useState, useEffect } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import plusIcon from "../../../Assets/Images/plus-solid.svg";
import "./AddItem.css";
const AddItem = ({ labelName, value="", recordHandler }) => {
	const [updatedData, setupdatedData] = useState("");
	let [userId, setUserId] = useState("");
	const recordChangeHandler = (newItem) => {
		setupdatedData(newItem);
	};
	const userIdHandler =(userId)=>{
		setUserId(userId)
	}
	useEffect(() => {
		setupdatedData(value);
	}, [value]);
	return (
		<>
			<div className="form">
				<label  className="formLabel">
					{labelName}
				</label>
				<Input placholder="Enter Description" onChange={recordChangeHandler} value={updatedData} type="text"/>
				<Input placholder="Enter UserId" onChange={userIdHandler} value={userId} type="text"/>
				<Button
					icon={plusIcon}
					onClick={() => {
						recordHandler(updatedData , userId);
						setupdatedData("");
					}}
				/>
				<div className="hrLine"></div>
			</div>
		</>
	);
};
export default AddItem;
