import List from "../../components/List/List.js";
import AddItem from "../../components/Sections/AddItem/AddItem";
import { useEffect, useState } from "react";
import "./Home.css";
const Home = () => {
	// debugger
	const [listData, setListData] = useState([]);
	const [dataTOUpdate, setdataTOUpdate] = useState("");
	const labelName = { discription: "Discription", update: "Update" };
	const updatedData = (message,userId) => {
		addItemToList(message , userId)
	};
	const addItemToList = async (title , userId) =>{
		const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: title,
				userId : userId,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
})
  const json = await response.json()
   setListData([json, ...listData])
	}
	const deleteRecord = async (userId) => {
		try {
			  await	fetch('https://jsonplaceholder.typicode.com/posts/'+userId, {
 			 method: 'DELETE',
		}
		);
		 setListData([...listData.filter((ele) => ele.userId !== userId)]);
		} catch (error) {
			console.log(error)
		}
	};
	const updateRecordHandler = async (item , userId) => {
		const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}` ,{
			method: 'PUT',
			body: JSON.stringify({
				title: item,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			});
				const updatedRecord  = await response.json()
				const updatedIndex = listData.findIndex((record) => record.userId === userId);
				let updatedList = [...listData];
				updatedList[updatedIndex] = updatedRecord;
				setListData(updatedList);
			};

	const getIndexAndValue = (item, index) => {
		setdataTOUpdate(item);
	};
	async function logTodos(){
		try {
			const response =  await fetch ("https://jsonplaceholder.typicode.com/todos");
		const json = await response.json()
		setListData([...json])
		} catch (error) {
			console.log(error.message)
		}
	}
	useEffect(()=>{
		logTodos()
	},[])
	return (
		<>
			{!dataTOUpdate ? (
				<AddItem
					recordHandler={updatedData}
					labelName={labelName.discription}
				/>
			) : (
				<AddItem
					recordHandler={updateRecordHandler}
					value={dataTOUpdate}
					labelName={labelName.update}
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
