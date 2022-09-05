import React from 'react';
import TextField from '@material-ui/core/TextField';

function UsernameInput(props) {

    const { register, errors } = props;
    return (
        <TextField label="User Name"
            name="username"
            variant="outlined"
            error={!!errors.username}
            fullWidth
            margin="normal"
            inputRef={register({ required: true })}
            helperText={errors.username && '*Required!'} />
    )
};
export default UsernameInput;
