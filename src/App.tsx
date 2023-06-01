import React from 'react';
import Home from './Components/Simple/Home';
import {Routes,Route} from "react-router-dom"
import Layout from './Layout';

function App() {
  return (
    <div >
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index  element={<Home/>}/>
          <Route path={"*"} element={<Home/>}/>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
