import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button:{
        fontWeight: 500,
        fontSize: 12,
        boxSizing: 'border-box',
        borderRadius: 8,
        height:40,
        margin:'10px 0',
        width:'100%'
    }
}));

export default function ActionBtn({label,icon}) {
    const classes = useStyles();

    return (
            <Button
            variant="outlined"
            fullwidth
            color="primary"
            className={classes.button}
            startIcon={icon}
            disableElevation
        >

            {label}
            
        </Button>
    )
}

