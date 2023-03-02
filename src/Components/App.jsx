import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [wasteData, setWasteData] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem(inputText) {

    if(inputText === ""){
      setWasteData([...wasteData, inputText]);
    }else{
      setItems((prevItems) => {
        return [...prevItems, inputText]
    })
    }
    setInputText("");
  }

  function handelKeyPress(event){
    if(event.key === "Enter"){
       addItem(inputText);
    } 
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        handleChange={handleChange}
        inputText={inputText}
        addItem={addItem}
        handelKeyPress={handelKeyPress}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
