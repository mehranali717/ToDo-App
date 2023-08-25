import List from "../../components/List/List.js";
import AddItem from "../../components/Sections/AddItem/AddItem";
import { useState } from "react";
import "./Home.css";
const Home = () => {
	const [listData, setListData] = useState([]);
	const [dataTOUpdate, setdataTOUpdate] = useState("");
	const [valueIndex, setvalueIndex] = useState({});
	const labelName = { discription: "Discription", update: "Update" };
	const updatedData = (message) => {
		setListData([message, ...listData]);
	};
	const deleteRecord = (index) => {
		setListData(listData.filter((ele, key) => key !== index));
	};
	const updateRecordHandler = (item) => {
		const index = valueIndex.index;
		let updatedList = [...listData];
		updatedList[index] = item;
		setListData(updatedList);
	};
	const getIndexAndValue = (item, index) => {
		setdataTOUpdate(item);
		setvalueIndex({ item, index });
	};
	return (
		<>
			{!dataTOUpdate ? (
				<AddItem recordHandler={updatedData} labelName={labelName} />
			) : (
				<AddItem
					recordHandler={updateRecordHandler}
					value={dataTOUpdate}
					labelName={labelName}
				/>
			)}
			<List
				data={listData}
				handleDelete={deleteRecord}
				handleUpdate={getIndexAndValue}
			/>
		</>
	);
};
export default Home;
