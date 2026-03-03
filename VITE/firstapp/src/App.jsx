import"./App.css";
import Header from "./component/Header/Header";
import Msection from "./component/Msection/Msection";
import Footer from "./component/Footer/Footer";
function App(){
  return(
    <div className="container">
      <h2>welcome to react js</h2>
      <Header />
      <Msection />
      <Footer />
    </div>
  );
}

export default App;