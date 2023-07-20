import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function AddItems(item) {
    setItems((items) => [...items, item]);
  }
  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function packedItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function clearList() {
    if (!items.length) return;
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?",
    );
    if (confirmed) setItems([]);
  }
  return (
    <>
      <main className=" text-slate-100">
        <Logo />
        <Form setItems={setItems} onAdd={AddItems} />
        <PackingList
          items={items}
          onDelete={deleteItem}
          onPacked={packedItem}
          clear={clearList}
        />
        <Stats items={items} />
      </main>
    </>
  );
}
