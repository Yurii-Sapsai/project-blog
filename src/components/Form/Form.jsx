import { useState, useEffect } from "react";
import './Form.sass';

const Form = ({ title, handleClick, button, errorLogin }) => {

    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email cannot be empty');

    const [password, setPassword] = useState('');
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [passwordError, setPasswordError] = useState('Password cannot be empty');

    const [formValid, setFormValid] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const re = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Email is incorrect');
            if (!e.target.value) {
                setEmailError('Email cannot be empty');
            }
        } else {
            setEmailError('');
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 6 || e.target.value.length > 60) {
            setPasswordError('Password is incorrect');
            if (!e.target.value) {
                setPasswordError('Password cannot be empty');
            }
        } else {
            setPasswordError('');
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
        }
    }

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError]);

    return (
        <div className="form">
            <h2>{title}</h2>
            <div>
                <input type="email"
                    name="email"
                    value={email}
                    onChange={(e) => handleEmail(e)}
                    onBlur={(e) => blurHandler(e)}
                    placeholder="Please enter email" />
                <br />
                {(emailDirty && emailError) && <small style={{ color: 'red' }}>{emailError}<br /></small>}
            </div>

            <div>
                <input type="password"
                    name="password"
                    value={password}
                    onChange={(e) => handlePassword(e)}
                    onBlur={(e) => blurHandler(e)}
                    placeholder="Please enter password" />
                <br />
                {(passwordDirty && passwordError) && <small style={{ color: 'red' }}>{passwordError}<br /></small>}

            </div>
            {errorLogin ? <div style={{ color: 'red' }}> Login or password is incorrect </div> : null}

            <button onClick={() => handleClick(email, password)}
                disabled={!formValid}>{button}
            </button>
        </div>
    )
}

export default Form;