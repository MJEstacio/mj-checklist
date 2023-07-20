const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="container mx-auto border-t-2 flex justify-center items-center mt-20 pb-5 flex-col gap-5 ">
      <h3>
        {isOpen ? "Welcome!" : "Sorry"} we're currently{" "}
        {isOpen ? "open" : "close"} right now
      </h3>
      <button className="bg-slate-100 text-slate-800 rounded px-5 py-2 font-semibold">
        Order
      </button>
    </footer>
  );
};

export default Footer;
