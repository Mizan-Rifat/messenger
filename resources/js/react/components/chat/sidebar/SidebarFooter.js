import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({

    footer: {
        borderTop: `1px solid ${theme.palette.primary.main}`,
        padding: '5px 0',
        display: 'flex',
        justifyContent: 'space-around',
        color: theme.palette.text.disabled,
        background: theme.palette.background.main,
    },
    itemActive: {
        color: theme.palette.primary.main,
    }
}));

export default function SidebarFooter() {
    const classes = useStyles();

    return (
        <div className={classes.footer}>

            <IconButton  color="primary">
                <PersonOutlineIcon />
            </IconButton>

            <IconButton>
                <PeopleOutlineIcon />
            </IconButton>

            <IconButton>
                <StarOutlineIcon />
            </IconButton>

            <IconButton>
                <SearchIcon />
            </IconButton>


        </div>
    )
}
