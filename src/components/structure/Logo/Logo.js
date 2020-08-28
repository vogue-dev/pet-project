import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

export default function Modal () {
    return (

        <div className="header-logo">
            <Link className="logo" to={{ pathname: '/' }}><b>OPRYA</b>MARK</Link>
        </div>

    )
}