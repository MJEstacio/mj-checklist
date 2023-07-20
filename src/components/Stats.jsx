export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className=" py-10 text-center bg-slate-600">
      {!items.length ? (
        <em>Get Ready to pack your things</em>
      ) : (
        <em className="">
          {percentage === 100
            ? "You're ready to go! ✈"
            : `You have ${numItems} items on your list, and you have already packed
        ${numPacked} items (${percentage}%)`}
        </em>
      )}
    </footer>
  );
}
