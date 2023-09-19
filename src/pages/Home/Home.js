import List from "../../components/List/List.js";
import AddItem from "../../components/Sections/AddItem/AddItem";
import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import { Spinner } from "reactstrap";
import "./Home.css";
import Button from "../../components/Button/Button.js";
const Home = () => {
	const navigate = useNavigate()
	const [loading , setLoading] = useState(false)
	const [listData, setListData] = useState([]);
	const [dataTOUpdate, setdataTOUpdate] = useState({});
	const labelName = { discription: "Discription", update: "Update" };
	const updatedData = (message ) => {
		addItemToList(message )
	};
	const fetchData = async(method  , body=undefined , url='')=>{
		try {
			const response = await fetch('https://jsonplaceholder.typicode.com/posts'+`${url}`, {
				method: method,
				body: body ,
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			})
			 setLoading(false)
			return await response.json()
		} catch (error) {
			return console.log({error})
		}
	}
	async function getData(){
		const json = await fetchData('GET')
		setListData([...json])
	}
	const addItemToList = async (title) =>{
 		const json = await fetchData('POST' ,JSON.stringify({ title}))
   		setListData([json, ...listData])
	}
	const deleteRecord = async (id) => {
		await fetchData('DELETE' , undefined , `/${id}`);
		setListData([...listData.filter((ele) => ele.id !== id)]);
	};
	const updateRecordHandler = async (title , index =dataTOUpdate.index) => {
				const updatedRecord = await fetchData('PUT' , JSON.stringify({ title}) , "/"+index)
				let updatedList = [...listData];
				updatedList[index] = updatedRecord;
				setListData(updatedList);
				// setdataTOUpdate("")
			};

	const getIndexAndValue = (title , index) => {
		setdataTOUpdate({title , index});
	};
	useEffect(()=>{
		setLoading(true)
			getData()
		return () =>{
			delete getData()
		}
	},[])
	return (
		<>
		
			{Object.keys(dataTOUpdate).length===0 ? (
				<AddItem
					recordHandler={updatedData}
					labelName={labelName.discription}
				/>
			) : (
				<AddItem
					recordHandler={updateRecordHandler}
					value={dataTOUpdate.title}
					labelName={labelName.update}
				/>
			)}
				<Button text="View Cart" onClick={()=>navigate('/cart')}/>
			{loading ? <Spinner color="dark" type="border" style={{margin: " 0 auto" , display:"block"}}>
				</Spinner> : <List
				data={listData}
				handleDelete={deleteRecord}
				handleUpdate={getIndexAndValue}
			/>
}
		</>
	);
};
export default Home;
