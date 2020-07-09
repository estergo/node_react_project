import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@material-ui/core/Button';

import UsernameInput from './usernameInput';
import EmailInput from './emailInput';
import PasswordInput from './passwordInput';

import './auth.scss';
import AuthHttp from './authHttp';

function Register(props) {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = user => {
        AuthHttp.signup(user).then(data => {
            AuthHttp.setToken(data.token);
            props.history.push('/candidates');
        }).catch(err => console.log(err));
    }; 

    return (
        <div className="form-wrapper">
            <h1 className="title">
                Sign Up
            </h1>
            <p>Hi,
                To register this website,
                Please enter User name, your email adress and choose a passord.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <UsernameInput register={register} errors={errors} />
                <EmailInput register={register} errors={errors} />
                <PasswordInput register={register} errors={errors} />
                <div className="action-btns">
                    <span>
                        <span className="already-registered">Already registered?</span> <br />
                        <Button href="/login" variant="outlined" color="primary">Sign In</Button>
                    </span>
                    <Button className="sign-btn" type="submit" variant="contained" color="primary">Sign Up</Button>
                </div>

            </form>
        </div>
    );
}

export default Register;
