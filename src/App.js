import "./App.css";
import { useState } from "react";
function App() {
const[courselist , setCourselist] = useState([]);
const[newcourse , setNewcourse] = useState("")


let HandelInput = (e)=>{
  setNewcourse(e.target.value)
}

let Addcourse = ()=>{
  setCourselist([...courselist , newcourse])
}
  return (
    <div className="App">
    <div>
      <input
       type="text"
        placeholder="type..."
           value={newcourse} 
          onChange={HandelInput}>
          </input>
      <botton onClick={Addcourse}>Added</botton>

    </div>
    {courselist.map((value , index)=>{
      return(<div>
        <h1 key={index}>{value}</h1>
        <button>X</button>
      </div>)
    })}
    <div>

    </div>
    </div>
  );
}

export default App;
