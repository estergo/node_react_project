import React from 'react';
import TextField from '@material-ui/core/TextField';

function EmailInput(props) {
    const { register, errors } = props;
    return (
        <TextField
        label="Email address"
        name="email"
        autoComplete="email"
        variant="outlined"
        error={!!errors.email}
        fullWidth
        margin="normal"
        inputRef={register({
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        })}
        helperText={errors.email && 'Invalid email address!'}
    />
    )
};
export default EmailInput;
