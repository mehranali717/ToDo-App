import { memo } from "react";
const labelName = memo(function LabelName({ labelName }) {
	// console.log("LaabelName");
	return (
		<>
			<label className="formLabel">{labelName}</label>
		</>
	);
});
export default labelName;
