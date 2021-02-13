import React, { createContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Sidebar from '../../components/chat/sidebar/Sidebar';
// import Inputbox from '../childComponents/Inputbox';
import Mainbar from '../../components/chat/mainbar/Mainbar';


const useStyles = makeStyles((theme) => ({
    gridContainer: {
        height: '100vh',
        overflow: 'hidden',
        margin: 0
    },
    sidebarContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }
}));

export const DrawerContext = createContext();

export default function Chat() {

    const [drawerOpen, setDrawerOpen] = useState(false)

    const classes = useStyles();

    return (
        <DrawerContext.Provider value={{drawerOpen,setDrawerOpen}}>
            <Container>

                <Grid container spacing={3} className={classes.gridContainer}>

                    <Grid item xs={3} className={classes.sidebarContainer}>

                        <Sidebar />

                    </Grid>

                    <Grid item xs={9}>
                        <Mainbar />
                    </Grid>


                </Grid>
            </Container>
        </DrawerContext.Provider>
    )
}
