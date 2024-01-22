const initialItems = [
  { id: 1, description: "Passport", quantitiy: 2, packed: false },
  { id: 1, description: "Socks", quantitiy: 4, packed: false },
  { id: 1, description: "Sunglasses", quantitiy: 4, packed: false },
];

import Item from "./Item";

function PackingList() {
  return (
    <ul className="pack-list">
      {initialItems.map((item, key) => {
        return <Item key={key} item={item} />;
      })}
    </ul>
  );
}

export default PackingList;
