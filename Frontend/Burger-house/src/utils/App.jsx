import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fries from '../pages/fries';
import Home from '../pages/home';
import { AlertProvider } from '../components/GlobalContent';
import Burgers from '../pages/burgers';
import Drink from '../pages/drink';
function App() {
  return (
    <AlertProvider>
    <BrowserRouter>
    <Routes>
      <Route path='/Papas' element={<Fries></Fries>}>
      </Route>
      <Route path='/Home' element={<Home></Home>}>
      </Route>
      <Route path='/Hamburguesas' element={<Burgers></Burgers>}>
      </Route>
      <Route path='/Bebidas' element={<Drink></Drink>}>
      </Route>
    </Routes>
    </BrowserRouter>
    </AlertProvider>
  )
}

export default App
