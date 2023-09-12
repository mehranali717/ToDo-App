import "./Input.css";
const Input = ({ value, onChange , id , placholder, type}) => {
	const handleInputChange = (e) => {
		onChange(e);
	};
	return (
			<input
				placeholder={placholder?placholder:"Enter Description"}
				className="input"
				type={type?type:"text"}
				id={id?id:"record"}
				name="record"
				value={value}
				onChange={(e) => handleInputChange(e.target.value)}
			/>
	);
};
export default Input;
