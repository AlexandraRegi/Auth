import React, { useCallback, useState } from "react";
import { useForm } from 'react-hook-form';
import '../index.css'
import { Link, useNavigate } from "react-router-dom";
import { api } from '../../utils/api';


export const emailRegister = { required: 'Обязательное поле для заполнения' }
export const passwordRegister = {
    required: 'Обязательное поле для заполнения',
    pattern: {
        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        message: 'Пароль должен содержать минимум 8 символов, одну большую букву латинского алфавита и одну цифру'
    }
}
export const LoginForm = () => {

    const [type, setType] = useState(true)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });

    const sendData = async (data) => {
        await api.signin(data).then(()=> alert('Вы вошли'), navigate('/'));    
    }

    return (
        <div className="incontent" >
            <h3>Авторизация</h3>
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
                    <Link className="auth__link" to={'/register'}>Регистрация</Link>
                </div>
                <button className="btn" type="submit">Войти</button>
            </form>
        </div>
    )
}