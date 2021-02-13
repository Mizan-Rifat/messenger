import React from "react"
import ReactDOM from 'react-dom';
import './assets/style.scss';
import Routes from "./routes/Routes";
import { Provider } from 'react-redux';
import { store } from './redux/store'

export default function App() {

    console.log('sadf')
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
