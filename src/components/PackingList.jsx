import Item from "./Item";

function PackingList({ items, onDeleteItem }) {
  return (
    <ul className="pack-list">
      {items.map((item, key) => {
        return <Item key={key} item={item} onDeleteItem={onDeleteItem} />;
      })}
    </ul>
  );
}

export default PackingList;
