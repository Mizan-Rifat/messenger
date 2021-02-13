import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputBox from '../../custom/Inputbox';
import SingleMessage from './SingleMessage';
import { Scrollbars } from 'react-custom-scrollbars';
import LoadMoreBtn from '../../custom/LoadMoreBtn';
import InfoDrawer from './InfoDrawer';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%',
        position: 'relative'
    },
    mainbarContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    messages: {
        flex: 1
    },
    footer: {
        margin: '10px 0'
    }
}));

export default function Mainbar() {
    const classes = useStyles();

    return (

        <div className={classes.root} >
            
            
            <div className={classes.mainbarContainer}>

                <div className={classes.messages}>

                    <Scrollbars
                    >

                        <div className="" style={{ padding: 10 }}>

                            <LoadMoreBtn />


                            <SingleMessage />
                            <SingleMessage ownMsg />
                            <SingleMessage />
                        </div>
                    </Scrollbars>

                </div>
                <div className={classes.footer}>
                    <InputBox />
                </div>
            </div>

            <InfoDrawer />
        </div>
    )
}
