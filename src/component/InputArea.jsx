import React, {useState} from "react";

function InputArea(props){
const [textInput, setTextInput] = useState("");

function handleChange(event) {
   let newItem = event.target.value
    setTextInput(newItem);
}

    return (
        <div className="form">
            <input onChange={handleChange} type="text" placeholder={props.placeholder} value={textInput} />
            <button onClick={() => {props.onAdd(textInput); setTextInput("")}}>  <span> Add Food </span> </button> 
        </div>
    )
}

export default InputArea;