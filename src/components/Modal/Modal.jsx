import React from "react";
import './index.css'
import cn from 'classnames'
import { useNavigate } from "react-router";


export const Modal = ({modalActive, children}) => {
    const navigate = useNavigate();
    
    return (
    <div className={cn("modal", { 'active': modalActive })}>
        <div className={cn("modal__content", { 'active': modalActive })}>
            <span className="modal__close" onClick={() => navigate('/')}>x</span>
            {children}
        </div>
    </div>)
}