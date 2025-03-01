import React,{useState,useRef} from "react";
import { useSearchParams } from "react-router-dom";
import Text from "../components/text";
import { exportComponentAsJPEG } from 'react-component-export-image';


function Editpage() { 
    const componentRef = useRef();
    const [searchParams] = useSearchParams();
    const [count, setCount] = useState(0);
    function addtext() {
      setCount(count+1);
    }
  return (
    <div>
    <div style={{width:"500px"}} ref={componentRef}>
      <img src={searchParams.get("url")} width="300px" />
      {
        Array(count).fill(0).map((e)=><Text />)
      }
    </div>
    <button onClick={addtext}>Add Text</button>
    <button onClick={()=>exportComponentAsJPEG(componentRef)}>Download</button>
    </div>
  );
}

export default Editpage;