export default function Item({ item, onDelete, onPacked }) {
  return (
    <li key={item.id} className="flex gap-5 py-5  text-xl">
      <input
        type="checkbox"
        className="peer"
        value={item.packed}
        onChange={() => onPacked(item.id)}
      />
      <span className="peer-checked:line-through">
        {item.quantity} {item.description}
      </span>
      <button className="font-bold " onClick={() => onDelete(item.id)}>
        X
      </button>
    </li>
  );
}
