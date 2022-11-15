import React from "react";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import CrearCuenta from "./pages/auth/CrearCuenta";
import Home from "./pages/Home";
import Productos from "./pages/Productos/ListarProductos"
import CrearProductos from "./pages/Productos/CrearProductos";
import EditarProducto from "./pages/Productos/EditarProducto";



function App() {
  return (
    <div >
      <Fragment>
        <Router>
          <Routes>
            <Route path="/" exact element={<Login/>}  />
            <Route path="/CrearCuenta" exact element={<CrearCuenta/>} />
            <Route path="/Home" exact element={<Home/>} />
            <Route path="/Productos" exact element={<Productos/>} />
            <Route path="/crearProductos" exact element={<CrearProductos/>} />
            <Route path="/editarProducto/:idproducto" exact element={<EditarProducto/>} />
          </Routes>
        </Router>
      </Fragment>
    </div>
  );
}

export default App;
