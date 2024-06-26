import { useDispatch } from "react-redux";
import { addToCart } from "../Features/cartSlice";

function Item({id,title, image, price}) {
    const dispatch = useDispatch()


return (
    <div className="item">
        <div className="item__info">
            <p className="item__title">{title}</p>
            <p className="item__price">
                <small>R</small>
                <strong>{price}</strong>
            </p>
        </div>
        <img src={image} alt="item" />
        <button onClick={() => dispatch(addToCart({
            id,title,image,price
        }))
        }> Add to Cart</button>
    </div>
)

}