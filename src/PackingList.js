import React, { useState } from "react";


export default function PackingList({ items, onDeleteItem, onToggle, onClearList }) {
    const [sortBy, SetSortBy] = useState("input");
  
    let sortedItems;
  
    if (sortBy === "input") sortedItems = [...items];
    if (sortBy === "description")
      sortedItems = [...items].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    if (sortBy === "packed")
      sortedItems = [...items].sort((a, b) => a.packed - b.packed);
  
    return (
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggle={onToggle}
              key={item.id}
            />
          ))}
        </ul>
  
        <div className="actions">
          <select value={sortBy} onChange={(e) => SetSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onClearList}>Clear list</button>
        </div>
      </div>
    );
  }

  
function Item({ item, onDeleteItem, onToggle }) {
    return (
      <div>
        <li>
          <input
            type="checkbox"
            value={item.packed}
            onChange={() => onToggle(item.id)}
          />
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.quantity} {item.description}
          </span>
          <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
      </div>
    );
  }