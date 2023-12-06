import { identify } from "logrocket";
import { incrementQuantity, decrementQuantity, removeItem } from "../Features/cartSlice";
import { useDispatch } from "react-redux";

function CartItem({id,title,price,image,quantity=0}) {
    const dispatch = useDispatch();

return (
    <div className="CartItem">
        <img className="CartItem-imag" src={image} alt='item'/>
        <div className="CartItem-info">
            <p className="CartItem-title">{title}</p>
            <p className="CartItem_price">
                <small>R</small>
                <strong>{price}</strong>
            </p>
            <div className="CartItem__incDec">
                <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
                <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
            </div>
            <button className="CartItem__removeButton" onClick={() => dispatch(removeItem(id))}>removeItem</button>
        </div>
    </div>
)
}

export default CartItem;