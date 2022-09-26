import React from 'react';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import Header from './components/Header/Header.js'
import Newstd from './screens/Newuser/Newstd.js'
import Updatestd from './screens/Updateuser/updatestd.js'
import Viewstd from './screens/Alluser/Viewstd.js'
import Deletestd from './screens/Deleteuser/Deletestd.js'
import './App.css';

const App = () =>{
  // const [view, setView] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/app/viewstd")
  //     .then(res => setView(res.data))
  //     .catch(error => console.log(error));
  // });

  return (
    <div>
      <header>
        <Header/>
      </header>
      
      <main>
        <Router>
          <div>
            <Routes>
              <Route exact path="/newstd"  element ={<Newstd/>} />
              <Route exact path="/viewstd"  element ={<Viewstd/>} />
              <Route path="/updatestd/:type"  element ={<Updatestd/>} />
              <Route exact path="/deletestd"  element ={<Deletestd/>} />
            </Routes>
          </div>
        </Router>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export default App;
