import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [isFilterList, selectedCategory] = useState("")

  const handleFilter = (e) => {
    selectedCategory(e.target.value);
  }

  const filteredList = !isFilterList || isFilterList == "All" ? items : items.filter((item) => item.category.includes(isFilterList))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
