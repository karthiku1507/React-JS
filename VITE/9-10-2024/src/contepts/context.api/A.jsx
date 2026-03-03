import { useState } from "react";
import B from "./B";
import myFirstContext from "./context";
function A() {
    const [data,setData] = useState("---");
    return (
        <div style={{ padding: "10px" }}>
            <h2>A Component</h2>
            <br />
            <button>send Data</button>
            <br />
            <br />
            <hr />
            <myFirstContext value={data}>
             <B />
            </myFirstContext>
            
        </div>
    )
}
export default A;