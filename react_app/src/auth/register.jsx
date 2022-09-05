import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '@material-ui/core/Button';

import UsernameInput from './usernameInput';
import EmailInput from './emailInput';
import PasswordInput from './passwordInput';

import './auth.scss';
import AuthHttp from './authHttp';
import Trans from '../general/transService';
import CustomInput from '../general/customInput';

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
                {Trans.getTrans('signup')}
            </h1>
            <p>Hi,
                To register this website,
                Please enter User name, your email adress and choose a passord.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>

                <UsernameInput register={register} errors={errors} />
                <EmailInput register={register} errors={errors} />
                <PasswordInput register={register} errors={errors} />

                <h3>{Trans.getTrans('myDetails')}:</h3>
                <CustomInput name="firstName" required="true" register={register} errors={errors}></CustomInput>
                <CustomInput name="lastName" required="true" register={register} errors={errors}></CustomInput>
                <CustomInput name="phoneNumber" register={register} errors={errors}
                    pattern={/^\+?(972|0)(-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/}></CustomInput>
                <CustomInput name="city" register={register} errors={errors}></CustomInput>
                
                <h3>{Trans.getTrans('myWorkDetails')}:</h3>
                <CustomInput name="company" required="true" register={register} errors={errors}></CustomInput>
                <CustomInput name="manpowerCompany" register={register} errors={errors}></CustomInput>
                <CustomInput name="jobTitle" required="true" register={register} errors={errors}></CustomInput>
                <CustomInput name="jobDescription" register={register} errors={errors}></CustomInput>

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
