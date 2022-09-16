import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import NotFound from './components/pages/NoFound';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element ={<Home />} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='users/adduser' element={<AddUser/>} />
        <Route path='users/edit/:id' element={<EditUser/>} />
        <Route path='users/view/:id' element={<ViewUser/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
