import './App.css';
import Navbar from './Navbar';
import { Routes, Route,} from "react-router-dom";
import { useState } from 'react';
import Continue from './Component/Continue';
import Home from './Component/Home'

function App() {
  const [quan,setQuan]=useState(0); 
  const[proCount,setProCount]=useState(0);
  var [GP,setGp]=useState(0)
  return (
   <>
   <Routes>
      <Route  element={<Navbar  quan={quan} setQuan={setQuan} GP={GP} setGp={setGp} />}>
      <Route path="/" element={<Home quan={quan} setQuan={setQuan} GP={GP} setGp={setGp} 
        proCount={proCount} setProCount={setProCount} />} />        
      <Route path="/continue" element={<Continue/>} />
      </Route>    
    </Routes>
 
   </>
  );
}

export default App;
