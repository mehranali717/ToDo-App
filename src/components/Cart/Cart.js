import { useContext} from "react";
import { CartContext } from "../../Contexts/CartContexts";
import trashIcon from "../../Assets/Images/trash-can-solid.svg";
import Button from "../Button/Button";
import emptyCart from "../../Assets/Images/empty-shopping-cart.webp"
const Cart = () =>{
    const {cartList , deleteCartItem} = useContext(CartContext)
    return (
        <div className="form">
           {cartList.length > 0 ?  (cartList.map((cartItem , index)=>{
               return <div className="listForm" key={index}>
                    <p className="input">{cartItem.title}</p>
                    <Button icon={trashIcon} onClick={() => deleteCartItem(cartItem.id)}/>
                </div>
            })):
           <div className="cartInner">
             <h4>Add Items to Cart</h4>
             <img src={emptyCart}/>
           </div>
            }
        </div>
    )
}
export default Cart