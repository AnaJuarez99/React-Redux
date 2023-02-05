import React from 'react'
import Inicio from './components/Inicio';
import Calendario from './components/Calendario';
import Misreservas from './vistas/Misreservas';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import './header.css'

const header = () => {
  return (
    <div>
    <BrowserRouter>
      <div className={"site-content"}>
    <Navbar bg="light" expand="lg">
    
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/Calendario/" className="nav-link">Calendario</Link>
            </li>
            <li className="nav-item">
              <Link to="/Misreservas/" className="nav-link">Misreservas</Link>
            </li>
          </ul>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      <Routes>
        <Route path="/" exact element={<Inicio/>}/>
        <Route path="/Calendario/" element={<Calendario/>} />
        <Route path="/Misreservas/" element={<Misreservas/>} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default header