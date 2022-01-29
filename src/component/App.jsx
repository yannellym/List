import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {

const [list, setList] = useState([]);

function addFood(textInput){
  setList((previousItems) => { 
    return [...previousItems, textInput]
  });
};

function deleteItem(id){
  setList(prevValue => { 
    return prevValue.filter(
      (value, index) => {
         return index !== id; 
      });
  });
}

  return (
    <div className="container">
     <div className="heading">
       <h1>Foods I want to try: </h1>
     </div>
     <InputArea
     onAdd={addFood} />
     <div>
       <ul>
        {list.map((listItems, index)=> (
        <ToDoItem key={index} id={index} text={listItems}
        onChecked={deleteItem} />
        ))}
       </ul>
     </div>
    </div>
  );
}

export default App;
