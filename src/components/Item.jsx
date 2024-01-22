function Item({ item }) {
  return (
    <li className="item">
      <span>
        {item.quantitiy} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
