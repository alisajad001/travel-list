function Item({ item }) {
  return (
    <li className="item">
      <span className={item.packed ? "packed" : ""}>
        {item.quantitiy} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
