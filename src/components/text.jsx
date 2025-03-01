import React,{useState} from "react";
import Draggable from "react-draggable";


function Text(props) {

    const [edit,setEdit] = useState(false);
    const [val,setVal] = useState("Double Click to Edit");    
  return (
    <div className="edit-text">
    <Draggable>
        {edit ? <input onDoubleClick={()=>setEdit(false) } value={val} onChange={(e)=>setVal(e.target.value)} /> : <h1 onDoubleClick={()=>setEdit(true)}>{val}</h1>}
    </Draggable>
    </div>
  );
}

export default Text;