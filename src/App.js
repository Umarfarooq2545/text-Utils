import React, {useState} from 'react'
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState("light");

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
    }
  }

  const[alert, setalert] = useState(null);
  const showAlert = (message, type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
   
<>
<Router>
  <Navbar Title="TextUtils by Umar" about="About" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>

    <div className="container">  
      <Routes>
              <Route exact path="/" element={<TextForm heading="Enter the text to analyze here" mode={mode} showAlert={showAlert} />}>
              </Route>
              <Route exact path="/about" element={<About />}>              
              </Route>
      </Routes>
    </div>
</Router>
</>
  );
}

export default App;
