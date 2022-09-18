import { React, useEffect, useState} from 'react';
import Page from './Page/Page';
import './openbook.css'

const OpenBook = (props)=>{
    const [skrivles, setSkrivles] = useState(props.skrivles);
    const [pages, setPages] = useState([]);
    
    return(
        <>
        <div className = "openbook-cover">
            <Page/>
        </div>
        </>)
}

export default OpenBook;