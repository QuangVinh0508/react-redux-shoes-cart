import { useSelector } from "react-redux";

// components
import CartItem from "./CartItem";

function CartList() {
  const carts = useSelector(state => state.app.carts);

  console.log('cart list: ',carts)
  return (
    <div className="card">
      <div className="cardTop">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        <div>
          Total: {carts.length}
        </div>
      </div>

      <div className="cardTitle">
        <span>Your cart</span>
        <span className="card_amount">$89.97</span>
      </div>

      <div className="cardBody">
        {carts.map(cart => (
          <CartItem key={cart.id} cart={cart} />
        ))}
      </div>
    </div>
  )
}

export default CartList