import { useState, useEffect, useMemo } from "react";
import Input from "../../Input/Input";
import Button from "../../Button/Button";
import plusIcon from "../../../Assets/Images/plus-solid.svg";
import "./AddItem.css";
import LabelName from "../../LabelName/labelName";
import labelName from "../../LabelName/labelName";
const AddItem = ({ value, recordHandler, labelName }) => {
	console.log("add Item");
	const [updatedData, setUpdatedData] = useState("");
	const [count, setCount] = useState(0);

	const recordChangeHandler = (newItem) => {
		setUpdatedData(newItem);
	};
	useEffect(() => {
		setUpdatedData(value);
	}, [value]);
	// const labelNameMemo = useMemo(() => {
	// 	console.log("17");
	// 	return label;
	// }, [label]);
	const memoizedLabelName = useMemo(() => {
		console.log("Memoized ChildComponent");
		return <LabelName labelName={labelName} />;
	}, [labelName]);
	return (
		<>
			<form className="form" onSubmit={(e) => e.preventDefault()}>
				{memoizedLabelName}
				{/* <labelName labelName={memoizedChild}/> */}
				<Input onChange={recordChangeHandler} value={updatedData} />
				<Button
					icon={plusIcon}
					onClick={() => {
						recordHandler(updatedData);
						setUpdatedData("");
					}}
				/>
				<div className="hrLine"></div>
			</form>
		</>
	);
};
export default AddItem;
