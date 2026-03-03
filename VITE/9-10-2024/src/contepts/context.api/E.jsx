import { useContext } from "react";
import myFirstContext from "./context";
function E() {
    let contextData = useContext(myFirstContext);
    return (
        <div style={{padding: "10px", margin: "10px 0px" }}>
            <h2>E cpmponent</h2>
            <p>{contextData}</p>
        </div>
    );
}

 export default E;