import "./Input.css";
const Input = ({ value, onChange }) => {
	const handleInputChange = (e) => {
		onChange(e);
	};
	return (
		<>
			<input
				placeholder="Enter Description"
				className="input"
				type="text"
				id="record"
				name="record"
				value={value}
				onChange={(e) => handleInputChange(e.target.value)}
			/>
		</>
	);
};
export default Input;
