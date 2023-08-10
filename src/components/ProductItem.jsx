/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";

// actions
import { addCart } from "../redux/app.actions";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  function _handleAddCart() {
    dispatch(addCart(product))
  }
  
  return (
    <div className="shopItem">
      <div
        className="shopItem_image"
        style={{ backgroundColor: product.color }}
      >
        <img
          alt=""
          src={product.image}
        />
      </div>
      <div className="shopItem_name">{product.name}</div>
      <div className="shopItem_description">
        {product.description}
      </div>
      <div className="shopItem_bottom">
        <div className="shopItem_price">${product.price}</div>
        <div className="shopItem_button" onClick={_handleAddCart}>
          <p>ADD TO CART</p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem