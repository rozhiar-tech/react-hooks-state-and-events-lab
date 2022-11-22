import React from "react";
import Item from "./Item";


function ShoppingList({ items }) {
  
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    const newItemArray=items.filter((item) => selectedCategory === item.category);
    console.log(newItemArray);
    

  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onClick={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
