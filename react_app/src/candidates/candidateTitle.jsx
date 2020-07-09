import React from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import './candidates.scss'

function CandidateTitle(props) {

    const { candidate } = props;
    return (

        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar src={candidate.avatar} />
            </ListItemAvatar>
            <ListItemText
                primary={candidate.first_name + ' ' + candidate.last_name}
                secondary={
                    <Typography component="span" variant="body2" color="textPrimary">
                        {candidate.job_title}
                    </Typography>
                }
            />
            {props.children}
        </ListItem>
    );
}

export default CandidateTitle;