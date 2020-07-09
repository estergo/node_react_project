import React from 'react';
import TextField from '@material-ui/core/TextField';

function PasswordInput(props) {

    const { register, errors } = props;
    return (
        <TextField
            label="Password"
            name="password"
            variant="outlined"
            error={!!errors.password}
            fullWidth
            margin="normal"
            inputRef={register({
                required: true,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/
            })}
            type={props.type}
            helperText={errors.password && 'Password should contain UpperCase, LowerCase and Number!'}
        />
    )
};
export default PasswordInput;
