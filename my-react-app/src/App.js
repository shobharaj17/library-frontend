import React, {useState} from "react";
import "./App.css"
import Footer from "./components/Footer/Footer.js";


function App = () {
  const[currentform, setCurrentform] = useState('login');
  const toggleForm = () ==> {
    setCurrentform(formName);
  }
  return (
    <div>
      <div 
        style= {{
          minHeight: "400px", 
          color : "green",
        }}
      >
        <h1>e-BookShelf</h1>
        
       
      </div>
      <Footer/>
    </div>
  );
}
export default App
