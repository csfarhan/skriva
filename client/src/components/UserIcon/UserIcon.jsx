import React from 'react'
import { useState } from 'react';
import './usericon.css'

const UserIcon = () =>{

    const[userImage, setUserImage] = useState("images/profile.png"); //Default user icon

    return (<>
        <div className='user-icon'>
            <img src={userImage}/>
        </div>
    </>)
}

export default UserIcon;