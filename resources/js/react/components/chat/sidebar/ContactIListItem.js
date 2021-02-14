import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import StatusDropdown from '../../custom/StatusDropdown';
import VertMenuBtn from '../../custom/VertMenuBtn';
import Avatar from '../../custom/Avatar';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: '14px',
        color: theme.palette.text.dark,
    },

    active: {
        background: theme.palette.primary.main,
        boxShadow: '0px 8px 40px rgba(0, 72, 251, 0.3)',
        color: theme.palette.text.light,
    },

    profileBar: {
        background: theme.palette.background.main,
        marginBottom: 10,
    },

    avatar: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '2px solid rgba(70, 211, 98, 1)',
    },

    details: {
        flex: 1,
        padding: '0 10px'
    },

    name: {
        fontSize: 12,
        fontWeight: 600
    },
    text: {
        fontSize: 10,
        fontWeight: 300
    },
    extra: {
        fontSize: 10,
        fontWeight: 400,
    }
}));

export default function ContactIListItem({ active, profile ,user }) {
    const classes = useStyles();

    // const {user} = useSelector(state => state.sessionUser)

    // console.log({user})

    return (
        <div className={clsx(classes.root, {
            [classes.active]: active,
            [classes.profileBar]: profile,
        })}>

            {/* <img src="/img/chat/avatar.png" className={classes.avatar} /> */}

            <Avatar/>

            <div className={classes.details}>

                <h6 className={classes.name}>{user.name}</h6>
                {
                    profile ?
                        <StatusDropdown />
                        :
                        <p className={classes.text}>Thank you Phillip!</p>

                }


            </div>

            <div className={classes.extra}>

                <VertMenuBtn active={active}/>
              
            </div>

        </div>
    )
}
