import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../redux/ducks/SessionUserDuck';


const useStyles = makeStyles((theme) => ({

}));

export default function Homepage() {
    const classes = useStyles();

    const {user,fetching} = useSelector(state => state.sessionUser)

    const dispatch = useDispatch()

    


    useEffect(() => {
        dispatch(fetchUser())
        .then(res=>{
            console.log({res})
        })
        .catch(err=>{
            console.log({err})
        })
    }, [])

    useEffect(() => {
        console.log({fetching})
    }, [fetching])

    return (
        <div>

        </div>
    )
}
