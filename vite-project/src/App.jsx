import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Header from './components/Header/index';
import { createContext, useState } from 'react';
import axios from 'axios'; 
import { useEffect } from 'react';
import ContactUs from './pages/Contactus/Contactus';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CartPage from './components/CartPage/CartPage';
import { CartProvider } from './context/CartContext'; // Import CartProvider
import ShopPage from './components/ShopPage/ShopPage';

const MyContext = createContext();

function App() {
  const [countryList, setcountryList] = useState([]);

  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  }, []);

  async function getCountry(url) {
    try {
      const response = await axios.get(url);
      setcountryList(response.data?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const values = { countryList };

  return (
    <MyContext.Provider value={values}>
      <CartProvider> {/* Wrap with CartProvider */}
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </MyContext.Provider>
  );
}

export default App;
export { MyContext };
