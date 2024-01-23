import Item from "./Item";

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <ul className="pack-list">
      {items.map((item, key) => {
        return (
          <Item
            key={key}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        );
      })}
    </ul>
  );
}

export default PackingList;
