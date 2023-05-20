import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from "../pages/HomePage";
import Login from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import SearchResultList from "../pages/SearchResultListPage";
import ThankYou from "../pages/ThankYouPage";
import TourDetails from "../pages/TourDetailsPage";
import Tours from "../pages/ToursPage";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home'/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/tours" element={<Tours/>} />
            <Route path="/tours/:id" element={<TourDetails/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/thank-you" element={<ThankYou/>} />
            <Route path="/tours/search" element={<SearchResultList/>} />
        </Routes>
    )
}

export default Router