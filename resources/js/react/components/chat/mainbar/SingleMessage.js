import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '../../custom/Avatar'
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
    name: {
        fontWeight: 600,
        fontSize: 12,
        color: theme.palette.text.dark,
        marginRight:8,
    },
    bubbleContainer: {
        position: 'relative',
        "&:hover": {
            "& $bubble": {
                transform: 'translateY(-7px)'
            },
            "& $date": {
                transform: 'translateY(8px)'
            }
          }
    },
    bubble: {
        background: theme.palette.background.main,
        borderRadius: '0px 14px 14px 14px',
        fontSize: 12,
        lineHeight: '150.5%',
        color: theme.palette.text.dark,
        maxWidth: 451,
        padding: 10,
        marginBottom: 10,
        transition: 'all .2s linear',
    },
    date: {
        right:0,
        position: 'absolute',
        bottom: 0,
        zIndex: '-1',
        fontSize: 10,
        padding: '0 10px',
        transition: 'all .2s linear',
    
    },
    message:{
        display:'flex',
    },
    avatarContainer:{

    },
    msgRight:{
        textAlign:'right',
        '& $bubble':{
            borderRadius: '14px 0px 14px 14px',
            background:theme.palette.online.main,
            color:theme.palette.text.light,
        },
        '& $message':{
            justifyContent:'flex-end',
        },
        '& $avatarContainer':{
            order:2,
        },
    }
  




}));

export default function SingleMessage({ownMsg}) {
    const classes = useStyles();

    return (
        <div className={clsx({
            [classes.msgRight] : ownMsg
        })}>

            <h6 className={classes.name}>Alena Rhiel Madsen</h6>


            <div className={classes.message}>

                <div className={classes.avatarContainer}>
                    <Avatar />
                </div>

                <div className="" style={{ marginTop: 10 }}>
                    <ChatBubble />
                    <ChatBubble />
                    <ChatBubble />
                    <ChatBubble />
                </div>
            </div>


        </div>
    )
}

function ChatBubble() {
    const classes = useStyles();
    return (
        <div className={classes.bubbleContainer}>
            <div className={classes.bubble}>

                <p>
                    These are the photos I
                </p>

            </div>

            <small className={classes.date}>
                FRI AT 11:59 AM
            </small>
        </div>
    )
}
