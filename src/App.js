import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
import LoadingBar from 'react-top-loading-bar'


const App = (props) => {
  const [progress, setprogress] = useState(0)
  return (
    <>
    <div className="main_div">
      <LoadingBar height={3} color='#f11946' progress={progress} />
      <Navbar/>
      <TextForm setprogress={setprogress}/>
    </div>
      </>

  );
}

export default App;
