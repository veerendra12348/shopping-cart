import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from '../Pages/Login/login';
import Registration from '../Pages/Registration/registration';
import Products from '../Pages/Products/products';
import Header from '../Components/header';
import Profile from '../Pages/Profile/profile';

const Router = () => {

    return (
        
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
            </BrowserRouter>
        
    )

}

export default Router;