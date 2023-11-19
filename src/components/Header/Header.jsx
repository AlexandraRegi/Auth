import React from "react";
import "./index.css";
import { ReactComponent as Logo } from "./logo3.svg";
import { Link } from 'react-router-dom'


export const Header = () => {
      
  return (
    <header className="header">
      <div className="header_container">
        <div className="header_wrapper_left">
            <Link to={'/'}><Logo className="logo-pic" /></Link> 
        </div>
        <div className="header_wrapper_right">
          <Link className="link" to={'/login'}>
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
};