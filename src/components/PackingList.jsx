import Item from "./Item";

function PackingList({ items }) {
  return (
    <ul className="pack-list">
      {items.map((item, key) => {
        return <Item key={key} item={item} />;
      })}
    </ul>
  );
}

export default PackingList;
