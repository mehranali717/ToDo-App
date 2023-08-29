import List from "../../components/List/List.js";
import AddItem from "../../components/Sections/AddItem/AddItem";
import {
	useState,
	useMemo,
	useCallback,
	useEffect,
	useLayoutEffect,
} from "react";
import "./Home.css";
const Home = () => {
	const [listData, setListData] = useState([]);
	const [dataTOUpdate, setdataTOUpdate] = useState("");
	const [text, setText] = useState("some text");
	const [text1, setText1] = useState("loading");
	useMemo(() => {
		// console.log("Computing sum...");
	}, [text]);
	// useEffect(() => {
	// 	setText1("done");
	// });
	useLayoutEffect(() => {
		setText1("done");
	});
	const updatedData = (message) => {
		setListData([message, ...listData]);
	};
	const deleteRecord = useCallback((index) => {
		// console.log("Regular function is called");
		setListData(listData.filter((ele, key) => key !== index));
	}, []);
	const updateRecordHandler = (item) => {
		setdataTOUpdate("");
		const index = dataTOUpdate.index;
		let updatedList = [...listData];
		updatedList[index] = item;
		setListData(updatedList);
	};
	const getIndexAndValue = useCallback(
		(item, index) => {
			setdataTOUpdate({ item, index });
		},
		[text]
	);
	console.log("home");
	return (
		<>
			<div>
				<p>Text: {text}</p>
				<button onClick={() => setText("New Text!")}>Set Text</button>
			</div>
			{!dataTOUpdate ? (
				<AddItem recordHandler={updatedData} labelName={"Discription"} />
			) : (
				<AddItem
					recordHandler={updateRecordHandler}
					value={dataTOUpdate.item}
					labelName={"Update"}
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
