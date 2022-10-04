import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllProducts from './components/AllProducts';
import Form from './components/Form';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';

function App() {

  let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={
          <>
            <h1>Product Manager</h1>
            <Form formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted}></Form>
            <AllProducts formSubmitted={formSubmitted}></AllProducts>
          </>
        }>
      </Route>
      <Route exact path="/products/:id" element={<OneProduct/>}></Route>

      <Route exact path="/products/edit/:id" element={<EditProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
