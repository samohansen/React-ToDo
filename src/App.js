import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import InputArea from "./InputArea";
import ToDos from "./ToDos";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

  // Helper Functions

  // Adds a new item to the list array
  function addItem() {
    // ! Check for empty item
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000 * Math.random() * 1000),
      value: newItem,
    };

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setNewItem("");
  }

  // Deletes an item based on the `item.id` key
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  // Edit an item text after creating it.
  function editItem(id, newText) {
    // Get the current item
    const currentItem = items.filter((item) => item.id === id);

    // Create a new item with same id
    const newItem = {
      id: currentItem.id,
      value: newText,
    };

    deleteItem(id);

    // Replace item in the item list
    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setShowEdit(-1);
  }

  // Main part of app
  return (
    <div className="app">
      <Header/>
      
      <InputArea newItem={newItem} setNewItem={setNewItem} addItem={addItem} />

      <ToDos
        items={items}
        deleteItem={deleteItem}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        updatedText={updatedText}
        setUpdatedText={setUpdatedText}
        editItem={editItem}
      />
    </div> 
  );
}

export default App;
