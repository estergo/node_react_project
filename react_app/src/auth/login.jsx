import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@material-ui/core/Button';

import UsernameInput from './usernameInput';
import PasswordInput from './passwordInput';
import AuthHttp from './authHttp';
import './auth.scss';

function Login(props) {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = user => {
        AuthHttp.signin(user).then(data => {
            AuthHttp.setToken(data.token);
            props.history.push('/candidates');
        }).catch(err => console.log(err));
    };

    return (
        <div className="form-wrapper">
            <h1 className="title">
                Sign In
            </h1>
            <p>Hi, Please enter your user name and password</p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <UsernameInput register={register} errors={errors} />
                <PasswordInput register={register} errors={errors} type="password" />

                <div className="action-btns">
                    <Button href="/register" variant="outlined" color="primary">Create a new Account</Button>
                    <Button className="sign-btn" type="submit" variant="contained" color="primary">Sign In</Button>
                </div>

            </form>
        </div>
    );
}

export default Login;
