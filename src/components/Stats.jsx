function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const precentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? "You are all set and ready to go! 🛫"
          : `You have ${totalItems} items on your list and you already packed
        ${packedItems} (${precentage || 0}%).`}
      </em>
    </footer>
  );
}

export default Stats;
