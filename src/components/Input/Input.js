import "./Input.css";
import { useEffect, useState } from "react";
const Input = ({ value, onChange }) => {
	const handleInputChange = (e) => {
		onChange(e);
	};

	return (
		<>
			{/* {dataTOUpdate.map((item, index) => ( */}
			<input
				placeholder="Enter Description"
				className="input"
				type="text"
				id="record"
				name="record"
				value={value}
				onChange={(e) => handleInputChange(e.target.value)}
			/>
			{/* ))} */}
		</>
	);
};
export default Input;
