import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/ducks/ContactsDuck';



export default function useContacts() {

    const {contacts,fetching} = useSelector(state => state.contacts)
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(fetchContacts())    
    }, [])

    return {
        contacts,
        fetching,
    }
}
