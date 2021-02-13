import React, { useEffect, useState,useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton,Button } from '@material-ui/core';
import clsx from 'clsx'
import CancelIcon from '@material-ui/icons/Cancel';
import Avatar from '../../custom/Avatar';
import CallBtn from '../../custom/CallBtn';
import ActionBtn from '../../custom/ActionBtn';
import BlockIcon from '@material-ui/icons/Block';
import VolumeMuteIcon from '@material-ui/icons/VolumeMute';
import DeleteIcon from '@material-ui/icons/Delete';
import { DrawerContext } from '../../../pages/chat';


const useStyles = makeStyles((theme) => ({
    drawer: {
        top: 20,
        width: 300,
        zIndex: 122,
        height: '90vh',
        position: 'absolute',
        right: -200,
        opacity: 0,
        transition: 'all .5s ease',
        background: theme.palette.background.main,
        boxShadow: '0px 8px 40px rgba(142, 194, 208, 0.4)',
        borderRadius: 14,
        padding: 10
    },

    slide: {
        right: 0,
        opacity: 1
    },
    contactInfo: {
        textAlign: 'center'
    },
    title: {
        color: theme.palette.primary.main,
        fontSize: 18,
        fontWeight: 600
    },
    callBtns: {
        display: 'flex',
        justifyContent:'space-around',
        borderBottom:`1px solid ${theme.palette.primary.main}`,
        padding:'25px 0'
    },
    avatar:{
        margin:20
    },



}));

export default function InfoDrawer() {
    const classes = useStyles();

    const {drawerOpen:open,setDrawerOpen:setOpen} = useContext(DrawerContext)

    const style = {
        height: 100,
        width: 100,
        display: 'inline-block',
        // border:'3px solid #F7B6B4'
    }

    return (

        <div className={clsx(classes.drawer, {
            [classes.slide]: open
        })}>
            <IconButton onClick={() => setOpen(!open)}>
                <CancelIcon style={{ color: 'red' }} />
            </IconButton>

            <div className={classes.contactInfo}>
                <h5 className={classes.title}>Contact Info</h5>

                <div className={classes.avatar}>
                    <Avatar style={style} offline />
                </div>

                

                <h5 className={classes.title}>Alena Rhiel Madsen</h5>
                <div className={classes.callBtns}>

                    <CallBtn />
                    <CallBtn video/>
                    

                </div>

                <div className="" style={{marginTop:20}}>
                    <ActionBtn 
                        label='mute notifications'
                        icon={<VolumeMuteIcon />}
                    />
                    <ActionBtn 
                        label='Block Contact'
                        icon={<BlockIcon />}
                    />
                    <ActionBtn 
                        label='Delete Chat'
                        icon={<DeleteIcon />}
                    />
                </div>
            </div>
        </div>
    )
}
