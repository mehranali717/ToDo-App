import { memo } from "react";
const labelName = function LabelName({ labelName }) {
	console.log("LabelName");
	return (
		<>
			<label className="formLabel">{labelName}</label>
		</>
	);
};
export default labelName;
