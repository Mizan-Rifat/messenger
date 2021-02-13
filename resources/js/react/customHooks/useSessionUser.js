import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../redux/ducks/SessionUserDuck';



export default function useSessionUser() {

    const {user,fetching} = useSelector(state => state.sessionUser)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchUser())
        .then(res=>{
            console.log({res})
        })
        .catch(err=>{
            console.log({err})
        })

    }, [])

    return {
        user,
        fetching,
    }
}
