import React from 'react'
import { Link } from 'react-router-dom'

export default function Review(){
    return(
        <>
        <nav>
            <ul className="nav">
                <Link to=""><li>Home</li></Link>
                <Link to=""><li>Bootcamps</li></Link>
                <Link to=""><li>Review</li></Link>
                <Link to=""><li>Contact us</li></Link>
            </ul>
        </nav>
        </>
    )
}