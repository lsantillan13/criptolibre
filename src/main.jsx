import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Categories from './products/components/Categories.jsx';
import Offers from './products/components/Offers.jsx';
import PaymentInfo from './payments/PaymentInfo.jsx';
import HowToBuy from './help/components/HowToBuy.jsx';
import Help from './help/components/Help.jsx';
import Login from './auth/components/Login.jsx';
import Register from './auth/components/Register.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/Categories" element={<Categories/>}/>
        <Route path="/Offers" element={<Offers/>}/>
        <Route path="/HowToBuy" element={<HowToBuy/>}/>
        <Route path="/PaymentInfo" element={<PaymentInfo/>}/>
        <Route path="/Help" element={<Help/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
