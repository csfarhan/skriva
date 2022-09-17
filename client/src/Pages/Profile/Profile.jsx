import React from 'react'
import {useState, useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import HTMLFlipBook from "react-pageflip";
import LeftNav from "../../components/LeftNav/LeftNav"
import "./profile.css"
import authService from '../../features/auth/authService';
import DividerLine from '../../components/DividerLine/DividerLine';
import UserIcon from '../../components/UserIcon/UserIcon';

const Profile = () =>{
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
    return (
    user ? 
    <>
        <div className='profile-body'>
            <div className='side-nav'>
                <LeftNav/>
            </div>
            <div className='div-line'>
                <DividerLine/>
            </div>
            <div className = "user-icon-profile">
                <UserIcon/>
            </div>
        </div>
    </> :
    "User not found");
}

export default Profile;