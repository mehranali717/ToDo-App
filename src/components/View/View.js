import {useLocation} from 'react-router-dom';

const View =()=>{
    const location= useLocation();
    console.log({location})
    return <h1>{location.state.title} </h1>
}
export default View