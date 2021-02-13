import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Chat from '../pages/chat';
import Homepage from '../pages/Homepage';


export default function Routes() {


    return (



        <BrowserRouter>

            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/chat' component={Chat} />
            </Switch>


        </BrowserRouter>



    )
}
