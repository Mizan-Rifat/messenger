import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container:{
        textAlign:'center'
    },
    btn: {
        borderRadius: 14,
        fontWeight: 600,
        fontSize: 12,
    }
}));

export default function LoadMoreBtn() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Button
                variant='contained'
                color='primary'
                className={classes.btn}
                size='small'
                disableElevation
            >
                Load More
            </Button>
        </div>
    )
}
