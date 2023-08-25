import "./Button.css";
const Button = (props) => {
	return (
		<button className="default-btn" type="submit" onClick={props.onClick}>
			<img src={props.icon} className="Icon" />
		</button>
	);
};
export default Button;
