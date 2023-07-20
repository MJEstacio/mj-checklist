import { useState } from "react";

export default function Form({ onAdd }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAdd(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form
      className="bg-slate-600 py-10  text-center px-2"
      onSubmit={handleSubmit}
    >
      <h3 className="text-2xl my-2">What do you need for your trip?</h3>
      <div className="flex gap-5 justify-center">
        <select
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          name="quantity"
          id=""
          className="text-slate-800 px-2 py-1 rounded-full"
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          className="px-4 py-2 rounded-full text-slate-800"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="border rounded-full border-slate-100 px-4 py-2">
          Add
        </button>
      </div>
    </form>
  );
}
