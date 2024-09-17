import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Header from './components/Header/index';
import { createContext, useState } from 'react';
import axios from 'axios'; // Corrected import
import { useEffect } from 'react';


const MyContext = createContext();

function App() {

  const [countryList, setcountryList] = useState([]);

useEffect(() => {
  getCountry('https://countriesnow.space/api/v0.1/countires');
},[])


async function getCountry(url) {
  try {
    const response = await axios.get(url); // No need for .then here
    console.log(response); // Log the response correctly
  } catch (error) {
    console.error("Error fetching data:", error); // Handle any error
  }
}


  const values= {

  }

  return (
    <MyContext.Provider value={value}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
    </MyContext.Provider>
  
);
}

export default App;
export {MyContext}