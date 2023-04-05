import React, {useState} from "react";


function Item({ name, category}) {
  const [isCart, setIsCart] = useState(false)

  function handleCart(){
    setIsCart((isCart) => !isCart)
  }
  
  return (
    <li className={isCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{isCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
