import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { IconButton,Button } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles((theme) => ({
    button:{
        borderRadius:'14px',
        fontSize:10,
        height:25
    }
}));

export default function CallBtn({video}) {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={video ? <VideocamIcon /> :<CallIcon /> }
            disableElevation
            size='small'
        >

            {
                video ? 'Video Call' : 'Voice Call'
            }
            
        </Button>
    )
}
