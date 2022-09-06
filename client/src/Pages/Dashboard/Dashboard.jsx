import React from 'react'
import {useState, useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import HTMLFlipBook from "react-pageflip";
import LeftNav from "../../components/LeftNav/LeftNav"
import "./dashboard.css"
import DividerLine from '../../components/DividerLine/DividerLine';



const Dashboard = () =>{
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("Eter")
        if(isError){
            toast.error(message)
        }
        
        if(!(user || isSuccess)){
            navigate("/")
        }
    }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);

    return (
        user ? 
        <>
            <div className='dashboard-body'>
                <LeftNav/>
            </div>
            <DividerLine/>
        </>
    : "User not found")
}

export default Dashboard;
