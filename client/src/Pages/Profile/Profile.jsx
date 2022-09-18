import React from 'react'
import {useState, useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import LeftNav from "../../components/LeftNav/LeftNav"
import "./profile.css"
import DividerLine from '../../components/DividerLine/DividerLine';
import UserIcon from '../../components/UserIcon/UserIcon';
import Book from '../../components/Book/Book';
import OpenBook from '../../components/OpenBook/OpenBook';

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
            <div className='profile-container'>
                <div className = "user-icon-profile">
                    <UserIcon/>
                    <div className='user-prof'>
                        <div className = "name-prof">
                            {user.firstName} {user.lastName}
                        </div>
                        <div className = "bio-prof">
                            {user.bio ? user.bio : "No bio."}
                        </div>
                    </div>
                </div>

                <div className='books-prof'>
                    <div className='book-shelf-lbl'>
                        Your <br/> book shelf
                    </div>
                    <div className='book-shelf'>
                        <Book bookname = "Test"/>
                        <Book bookname = "Liked Skrivles"/>
                        <Book bookname = "Test"/>
                    </div>
                </div>
                <img className = "profile-shelf" src = "images/shelf.png"/>
            </div>
            <div className = "displayed-book">
                    <OpenBook skrivles = {['test', 'test']}/>
            </div>
        </div>
    </> :
    "User not found");
}

export default Profile;