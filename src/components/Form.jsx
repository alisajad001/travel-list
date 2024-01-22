import { useState } from "react";

function Form() {
  const [quantity, setQuantity] = useState(2);
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const item = {
      description: form.elements.item.value,
      quantity: form.elements.quantity.value,
      packed: false,
    };
    console.log(item);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
