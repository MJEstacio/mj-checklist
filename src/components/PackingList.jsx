import Item from "./Item";
import { useState } from "react";
export default function PackingList({ items, onDelete, onPacked, clear }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="container mx-auto min-h-[50vh] flex flex-col justify-around py-5">
      <ul className=" grid grid-cols-1 lg:grid-cols-3 py-5 px-2">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDelete={onDelete}
            onPacked={onPacked}
          />
        ))}
      </ul>
      <div className="flex justify-center gap-5">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-slate-800 px-2 py-2 rounded-full"
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={clear} className=" px-2 py-2 rounded-full border">
          Clear List
        </button>
      </div>
    </div>
  );
}
