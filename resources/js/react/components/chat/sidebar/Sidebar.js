import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import ContactIListItem from './ContactIListItem';
import SidebarFooter from './SidebarFooter';

const useStyles = makeStyles((theme) => ({

    sidebar: {
        height: '100%',
        // padding: 10,
        display: 'flex',
        flexDirection: 'column',
    },
    contactList: {
        padding: 5,
        borderRadius: '14px 14px 0px 0px',
        flex: 1,
        background: theme.palette.background.main,
    }


}));

export default function Sidebar() {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>

            <div>
                <ContactIListItem profile />
            </div>


            <div className={classes.contactList}>
                <Scrollbars
                    autoHide
                >

                    <div className="" style={{ padding: 10 }} >
                        <ContactIListItem />
                        <ContactIListItem active />
                        <ContactIListItem />
                        <ContactIListItem />
                        <ContactIListItem />
                        <ContactIListItem />
                        <ContactIListItem />
                        <ContactIListItem />
                        <ContactIListItem />
                        <ContactIListItem />
                        <ContactIListItem />
                        <ContactIListItem />
                    </div>

                </Scrollbars>
            </div>

            <SidebarFooter />


        </div>
    )
}

