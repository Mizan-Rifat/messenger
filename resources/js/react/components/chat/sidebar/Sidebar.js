import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import ContactIListItem from './ContactIListItem';
import SidebarFooter from './SidebarFooter';
import useContacts from '../../../customHooks/useContacts';
import { useSelector } from 'react-redux';

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


    const { user } = useSelector(state => state.sessionUser)
    const { contacts, fetching } = useContacts();

    console.log({contacts})

    return (
        <div className={classes.sidebar}>

            <div>
                <ContactIListItem profile user={user} />
            </div>


            <div className={classes.contactList}>
                <Scrollbars
                    autoHide
                >

                    <div className="" style={{ padding: 10 }} >


                        {
                            fetching ? 'loading' :
                            contacts.filter(contact=>contact.id != user.id).map(contact => (
                                <ContactIListItem 
                                    user={contact}
                                    key={contact.id}
                                />
                            ))
                        }

                    </div>

                </Scrollbars>
            </div>

            <SidebarFooter />


        </div>
    )
}

