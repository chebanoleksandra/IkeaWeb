import React, { useRef } from "react";
import { Link} from 'react-router-dom';
import './style.css'

export function SignUp() {
    const name = useRef(null);
    let validName = false;
    const surname = useRef(null);
    let validSurname = false;
    const birthDate = useRef(null);
    let validBirthDate = false;
    const country = useRef(null);
    let validCountry = false;
    const address = useRef(null);
    let validAddress = false;
    const phoneNum = useRef(null);
    let validPhone = false;
    const email = useRef(null);
    let validEmail = false;
    const password = useRef(null);
    let validPassword = false;
    const agree = useRef(null);
    let validAgree = false;
    function handlePhoneNum() {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneNum.current.value);
    }
    function handleEmail() {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.current.value);
    }
    function handlePassword() {
        return password.current.value.length >= 7 && password.current.value.length <= 12;
    }
    function handleName() {
        return /^[a-zA-Z]{2,}$/.test(name.current.value);
    }
    function handleSurname() {
        return /^[a-zA-Z]{1,}$/.test(surname.current.value);
    }
    function handleBirthDate() {
        return /^\d?[\/|\-|\s]?\d?[\/|\-|\.\s]\d(\s?)[\/|\-|\s]?\d?(\s?)[\/|\-|\.\s]\d{2,4}[\s]?$/.test(birthDate.current.value);
    }
    function handleCountry() {
        return /^[a-zA-Z]{2,}$/.test(country.current.value);
    }
    function handleAddress() {
        return /^[#.0-9a-zA-Z\s,-]+$/.test(address.current.value);
    }
    function onNameChange() {
        validName = handleName();
    }
    function onSurnameChange() {
        validSurname = handleSurname();
    }
    function onBirthDateChange() {
        validBirthDate = handleBirthDate();
    }
    function onCountryChange() {
        validCountry = handleCountry();
    }
    function onAddressChange() {
        validAddress = handleAddress();
    }
    function onPhoneChange() {
        validPhone = handlePhoneNum();
    }
    function onEmailChange() {
        validEmail = handleEmail();
    }
    function onPasswordChange() {
        validPassword = handlePassword();
    }
    function onAgreeChange()
    {
        if(agree.current.checked)
        {
            validAgree = true;
        }
    };
    function handleSubmit(e) {

        if (validName === true && validSurname === true && validBirthDate === true && validCountry === true && validAddress === true && validPhone === true && validEmail === true && validPassword == true && validAgree === true) {
            alert(`Вас зареєстровано!`);
        }
        else {
            alert(`Вас НЕ зареєстровано!`);
            // console.log("Name: ", validName);
            // console.log("Surame: ", validSurname);
            // console.log("Birdth: ", validBirthDate);
            // console.log("Country: ", validCountry);
            // console.log("Address: ", validAddress);
            // console.log("Phone: ", validPhone);
            // console.log("Email: ", validEmail);
            // console.log("Password: ", validPassword);
            // console.log("Agree: ", validAgree);
            e.preventDefault();
        }
    }
    return <div style={{ display: 'flex', alignItems: 'center'}}>
        <Link to="/"><img src="backIcon.png" style={{ width: '42px', position: 'absolute', top: '40px', left: '40px' }}></img></Link>
        <img src="signUpBackground.png" style={{ width: '590px', height: '100%' }}></img>
        <div style={{ marginLeft: '156px' }}>
            <form>
                <label for="name" style={{ marginTop: '30px' }} required>Ім'я</label>
                <input type='text' className="input" id="name" ref={name} onChange={onNameChange} required></input>
                <label for="surname" style={{ marginTop: '30px' }}>Фамілія</label>
                <input type='text' className="input" id="surname" ref={surname} onChange={onSurnameChange} required></input>
                <label for="birthDate" style={{ marginTop: '30px' }}>Дата народження</label>
                <input type='text' className="input" id="birthDate" ref={birthDate} onChange={onBirthDateChange} required></input>
                <label for="birthDate" style={{ marginTop: '30px' }}>Дата народження</label>
                <input type='text' className="input" id="birthDate" ref={birthDate} onChange={onBirthDateChange} required></input>
                <label for="country" style={{ marginTop: '30px' }}>Країна</label>
                <input type='text' className="input" id="country" ref={country} onChange={onCountryChange} required></input>
                <label for="address" style={{ marginTop: '30px' }}>Адреса</label>
                <input type='text' className="input" id="address" ref={address} onChange={onAddressChange} required></input>
                <label for="phone" style={{ marginTop: '30px' }}>Мобільний номер</label>
                <input type='text' className="input" id="phone" ref={phoneNum} onChange={onPhoneChange} required></input>
                <p style={{ color: 'rgba(100, 100, 100, 1)', fontSize: '12px', width: '423px', marginTop: '10px' }}>
                    By entering your mobile number and one-time code sign-in option, you agree to receive a one-time verification code via SMS from IKEA. Message and data rates may apply.</p>
                <a style={{ color: 'rgba(100, 100, 100, 1)', fontSize: '12px', fontWeight: '400', textDecoration: 'underline', lineHeight: '100%', marginTop: '10px' }}>
                    More info about Privacy Policy
                </a>
                <label for="email" style={{ marginTop: '30px' }}>Електронна пошта</label>
                <input type='text' className="input" id="email" ref={email} onChange={onEmailChange} required></input>
                <p style={{ color: 'rgba(100, 100, 100, 1)', fontSize: '12px', width: '423px', marginTop: '10px' }}>
                    Вам потрібно буде пройти верифікацію</p>
                <label for="password" style={{ marginTop: '30px' }}>Пароль</label>
                <input type='password' className="input" id="password" ref={password} onChange={onPasswordChange} required></input>
                <div style={{ width: '411px', display: "flex", justifyContent: 'space-between', marginTop: '30px', marginBottom: '20px' }}>
                    <input type="checkbox" id="agree" style={{ marginRight: '20px' }} ref={agree} onChange={onAgreeChange} required></input>
                    <label for="agree" style={{ display: "inline-block", color: '#646464', fontWeight: '400' }}>
                        Я, ознайомлений з Політикою конфіденційності з обробки та захисту персональних даних</label>
                </div>
                <button className="blackButton" onClick={handleSubmit}>продовжити</button>
            </form>
        </div>
    </div>;
}