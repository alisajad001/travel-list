import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  {
    /* 1. add item */
  }
  function handleAddItems(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  {
    /* 2. delete item */
  }
  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  {
    /* 3. toggle item */
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  {
    /* 4. clear items */
  }
  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
