import "./Button.css";
const Button = (props) => {
	return (
		<button className="default-btn"  onClick={props.onClick}>
			{props.text?props.text:<img src={props.icon} className="Icon" alt="button"/>}
		</button>
	);
};
export default Button;
