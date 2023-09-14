import {useLocation} from 'react-router-dom';
const View =()=>{
    const location= useLocation();
    return <div className='listForm'>
        <p className='input'>{location.state.title} </p>
    </div>
}
export default View