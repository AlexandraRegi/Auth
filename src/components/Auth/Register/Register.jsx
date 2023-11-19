import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import '../index.css'
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../utils/api";
import { emailRegister, passwordRegister } from "../Login/Login";


export const RegisterForm = () => {

    const [type, setType] = useState(true)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });

    const sendData = async (data) => {
        await api.signup(data).then(()=> alert('Вы зарегистрировались'), navigate('/'));   
    }

    return (
        <div className="incontent" >
            <h3>Регистрация</h3>
            <form className=" form-example" onSubmit={handleSubmit(sendData)}>
                <div>
                    <input className="form__input" type="text" {...register("email", { ...emailRegister })} placeholder="email" />
                    {errors?.email && <div className="error"> {errors?.email.message}</div>}
                </div>
                <div className="form__pass">
                    <input className="form__input" type={!type ? 'password' : 'text'} {...register("password", { ...passwordRegister })} placeholder="password" />
                    <span onClick={() => setType(!type)} className={`form__pass__icon`}>{type ? 'o' : 'x'}</span>
                    {errors?.password && <div className="error"> {errors?.password.message}</div>}
                </div>
                <div>
                    <Link className="auth__link" to={'/login'}>Я уже зарегистрирован</Link>
                </div>
                <button className="btn btn_type_primary" type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )
}