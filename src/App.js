import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import InputArea from "./InputArea";
import ToDos from "./ToDos";


function App() {
  const statuses = ['Not started', 'Started', 'Completed']; // 0, 1, 2
  const [newItem, setNewItem] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [items, setItems] = useState([
    {
      'id': 99993,
      'value': "Finish IS 542 Final",
      'description': "Do your best on the exam and hope you can graduate!",
      'status': statuses[1],
      'daysUntilDue': 1, 
    },
    {
      'id': 99994,
      'value': "Clean the kitchen",
      'description': "Do the dishes, mop the floor, and take out the rubbish.",
      'status': statuses[0],
      'daysUntilDue': 3,
    },
  ]);
  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");

  
  // Helper Functions

  // Adds a new item to the list array
  function addItem() {
    // ! Check for empty item
    if (!newItem) {
      alert("Please enter a new task.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000 * Math.random() * 1000),
      value: newItem,
      description: newDescription,
      status: 0,
      daysUntilDue: 1,
    };

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset inputs back to their defaults
    setNewItem("");
    setNewDescription("");
  }

  // Deletes an item based on the `item.id` key
  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  // Edit an item.
  function editItem(id, newText, newDescription) {
    // Get the current item
    const currentItem = items.filter((item) => item.id === id);

    // Create a new item with same id
    const newItem = {
      id: currentItem.id,
      value: newText,
      description: newDescription,
      status: 0,
      daysUntilDue: 1,

    };

    deleteItem(id);

    // Replace item in the item list
    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setUpdatedDescription("");
    setShowEdit(-1);
  }

  // Main part of app
  return (
    <div className="app">
      <Header/>
      
      <InputArea 
        newItem={newItem} 
        setNewItem={setNewItem} 
        addItem={addItem} 
        newDescription={newDescription}
        setNewDescription={setNewDescription}
      />

      <ToDos
        items={items}
        deleteItem={deleteItem}
        showEdit={showEdit}
        setShowEdit={setShowEdit}
        updatedText={updatedText}
        setUpdatedText={setUpdatedText}
        updatedDescription={updatedDescription}
        setUpdatedDescription={setUpdatedDescription}
        editItem={editItem}
      />
    </div> 
  );
}

export default App;
