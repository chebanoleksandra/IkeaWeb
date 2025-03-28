import React, { useRef } from "react";
import { Link} from 'react-router-dom';
import './style.css'

export function LogIn() {
    const emailOrPhone = useRef(null);
    let validEmailOrPhone = false;
    const password = useRef(null);
    let validPassword = false;
    function handleEmailOrPhone() {
        if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailOrPhone.current.value) || /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(emailOrPhone.current.value)===true)
        {
            return true;
        }
        return false;
    }
    function handlePassword()
    {
        return password.current.value.length >= 7 && password.current.value.length <= 12;
    }
    function onEmailOrPhoneChange() {
        validEmailOrPhone = handleEmailOrPhone();
    }
    function onPasswordChange() {
        validPassword = handlePassword();
    }
    function handleSubmit(e) {
        
        if (validEmailOrPhone === true && validPassword==true) {
            alert(`Вхід виконано!`);
        }
        else {
            e.preventDefault();
        }
    }
    return <div style={{ display: 'flex' }}>
        <Link to="/"><img src="backIcon.png" style={{ width: '42px', position: 'absolute', top: '40px', left: '40px' }}></img></Link>
        <div style={{ backgroundImage: 'url("logInBackground.png")', width: '590px', height: '939px' }}>
            <h2 className="pageTitle" style={{ fontSize: '32px', width: '478px', textAlign: "center", margin: '240px auto' }}>
                заповніть вхід до
                облікового запису
            </h2>
        </div>
        <div style={{ marginLeft: '156px', marginTop: '173px' }}>
            <form>
                <label for="emailPhone">Електронна пошта або мобільний номер</label>
                <input type='text' className="input" id="emailPhone" ref={emailOrPhone} onChange={onEmailOrPhoneChange} required></input>
                <p style={{ color: 'rgba(100, 100, 100, 1)', fontSize: '12px', width: '423px', marginTop: '10px' }}>
                    By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification code via SMS from IKEA. Message and data rates may apply.
                </p>
                <a style={{ color: 'rgba(100, 100, 100, 1)', fontSize: '12px', fontWeight: '400', textDecoration: 'underline', lineHeight: '100%', marginTop: '10px' }}>
                    More info about Privacy Policy
                </a>
                <label for="password" style={{ marginTop: '40px' }}>Пароль</label>
                <div className="input" style={{ paddingRight: '16px', display: "flex", alignItems: 'center', marginBottom: '10px' }}>
                    <input type='password' id="password" style={{ height: '100%', width: '413px', border: 'none', outline: 'none' }} ref={password} onChange={onPasswordChange} required></input>
                    <img src="eyeIcon.png" style={{ width: '22px', height: '15px', marginLeft: '5px' }}></img>
                </div>
                <a href="#" style={{ color: 'rgba(100, 100, 100, 1)', fontWeight: '600', textDecoration: 'underline' }}>Забули свій пароль?</a>
                <div style={{ width: '411px', display: "flex", justifyContent: 'space-between', marginTop: '40px', marginBottom: '20px' }}>

                    <label for="forgot" style={{ display: "inline-block", color: 'rgba(100, 100, 100, 1)', fontWeight: '400' }}>
                        <input type="checkbox" id="forgot" style={{ marginRight: '20px' }}></input>
                        Зберегти інформацію</label>
                    <img src="infoIcon.png"></img>
                </div>
                <button className="blackButton" onClick={handleSubmit}>продовжити</button>
            </form>
            <p style={{ marginTop: '80px', fontWeight: '600', marginBottom: '37px' }}>
                У вас ще немає облікового запису? Створіть його:
            </p>
            <Link to="/signup" className="borderA" style={{ width: '428px', height: '50px', padding: '17px 136px' }}>створити аккаунт</Link>
        </div>
    </div>;
}

