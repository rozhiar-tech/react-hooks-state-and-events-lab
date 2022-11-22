import React from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = React.useState(false);
  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
    
  }
  const colors=isInCart ? "purple" : "yellow";
  
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" style={{backgroundColor: colors}} onClick={handleAddToCartClick}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
