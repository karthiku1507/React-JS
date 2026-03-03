import"./Counter.css";
// import {useState} from "react"
function Counter() {
    var count = [2323];
// let [count,,setCount]=useState(0)
    function incCount(){
        // setCount(count+1)
        
    }
    return (
        <div className="counter">
            <h2>Count value is:{count}</h2>
            <button onClick={incCount}>incCount</button>
        </div>
 
    );
}
export default Counter;