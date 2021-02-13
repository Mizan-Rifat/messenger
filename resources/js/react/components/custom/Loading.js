import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    element:{
        position:'absolute',
        left:'50%',
        right:'50%',
        top:'50%'
    }
}))

export default function Loading({size=24,style={}}) {
    const classes = useStyles();

    return (
        <div >
            <CircularProgress size={size} className={classes.element} style={style} />
        </div>
    )
}
