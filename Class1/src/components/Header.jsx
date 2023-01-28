
import { logo } from "../config"
import { useState } from "react";
import { Link } from "react-router-dom";

const Title = (props) => {
    return <img src={logo} className='w-12'/>
}

export const Header = (props) => {

    const [isLoggedIn, setLoggedIn] = useState(false);

    return (
        <div className='flex justify-between items-center p-3 mb-12 bg-green-400'>
        <Title></Title>
        <div className='nav-items'>
            <ul className="flex justify-between gap-4 list-none items-center text-0.5xl">
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/'><svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-5'>
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"></path>
        </svg></Link></li>
            </ul>
        </div>
        {
            isLoggedIn ? <button onClick={() => setLoggedIn(!isLoggedIn)}>Logout</button> : <button onClick={() => setLoggedIn(!isLoggedIn)}>Login</button>
        }
        </div>
    )
}

export default Header;