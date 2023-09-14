import "./Button.css";
const Button = ({text, icon , onClick}) => {
	return (
		<button className="default-btn"  onClick={onClick}>
			{text || <img src={icon} className="Icon" alt="button"/>}
		</button>
	);
};
export default Button;
