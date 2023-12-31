import { useSelector } from "react-redux";

function Total() {
    const cart = useSelector((state) => state.cart)

    const getTotal = () => {
        let totalQuantity = 0
        let totalPrice = 0
        cart.forEach(item =>{
            totalQuantity += item.totalQuantity
            totalPrice += item.price * item.quantity
        })
        return {totalPrice,totalQuantity}
    }

    return (
        <div className="container">
            <h2>ORDER SUMMARY</h2>
            <div>
                <p className="total__p">
                    total ({getTotal().totalQuantity} items)
                    :<strong>R {getTotal().totalPrice}</strong>
                </p>
            </div>
        </div>
    )
}

export default Total;