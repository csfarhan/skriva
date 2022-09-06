import React from 'react'
import {useState, useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {toast} from 'react-toastify';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { useRef } from "react";
import { ReactDOM } from 'react-dom/client';
import './leftnav.css'


const LeftNav = () => {
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);
    
    const profileOption = useRef();
    const feedOption = useRef();
    const exploreOption = useRef();

    const [profileColor, setProfileColor] = useState(profileOption.current);
    const [feedColor, setFeedColor] = useState(feedOption.current);
    const [exploreColor, setExplorColor] = useState(exploreOption.current);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    console.log(location.pathname)
    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        
        if(!(user || isSuccess)){
            navigate("/")
        }
    }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);
    
    useEffect(() =>{
        setProfileColor("#9a87ab");
        setFeedColor("#9a87ab");
        setExplorColor("#9a87ab");
        switch(location.pathname){
            case "/profile":
                setProfileColor("white");
                break;
            case "/dashboard":
                setFeedColor("white");
                break;
            case "/explore":
                setExplorColor("white");
                break;
            default:
                break;
        }
    }, [])
    return(
        user ? 
        <>
            <div className = "sidenav-body">
                <div className = "nav-items">
                    <div className='welcome-text'>
                        Welcome 
                        <div className= 'navbar-username'>
                        {user.firstName},
                        </div>
                        Its time to write.
                    </div>
                    
                    <div className = "profile-option" ref= {profileOption} style = {{color: profileColor}}>
                        <Link to ="/profile">
                            <i class="bi bi-person-fill" style={{ fontSize: 80 , color: profileColor}}></i>
                            <div className='profile-text'>
                                Profile
                            </div>
                        </Link>
                    </div>
                    <div className = "feed-option" ref= {feedOption}  style = {{color: feedColor}}>
                        <Link to = "/dashboard">
                            <i class="bi bi-newspaper" style={{ fontSize: 80 , color: feedColor}}></i>
                            <div className='profile-text'>
                                Feed
                            </div>
                        </Link>
                    </div>
                    <div className = "explore-option" ref = {exploreOption} style = {{color: exploreColor}}>
                        <Link to = "/explore">
                            <i class="bi bi-compass-fill" style={{ fontSize: 80 , color: exploreColor}}></i>
                            <div className='profile-text'>
                                Explore
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
        : "User Not found"
    )
    
}

export default LeftNav;