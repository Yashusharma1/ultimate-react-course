import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
Object Syntax: The curly braces {} denote the creation of a JavaScript object. In this case, an object is being created with the following key-value pairs:
description: description — The value of the description variable is assigned to the description property of the object.
quantity: quantity — The value of the quantity variable is assigned to the quantity property of the object.
packed: false — The property packed is set to false directly.
id: Date.now() — The id property is set to the result of Date.now(), which returns the current timestamp in milliseconds.
2. Shorthand Property Assignment: In JavaScript, when the key and the variable name are the same, you can use shorthand property assignment. This means that description and quantity are being assigned to the object directly by their respective variable names:
{ description, quantity } is equivalent to { description: description, quantity: quantity }.
So, the resulting newItem object will look something like this when populated:
{
  description: "Item name",  // value from `description` state
  quantity: 3,               // value from `quantity` state
  packed: false,             // static value
  id: 1638623498232         // the current timestamp in milliseconds (example)
}
    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
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
      <button>Add</button>
    </form>
  );
}
