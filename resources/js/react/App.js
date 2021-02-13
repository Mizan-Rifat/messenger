import React from "react"
import ReactDOM from 'react-dom';
import './assets/style.scss';
import Routes from "./routes/Routes";
import { Provider } from 'react-redux';
import { store } from './redux/store'
import CustomTheme from "./assets/CustomTheme";

export default function App() {

    return (
        <Provider store={store}>
            <CustomTheme>
                <Routes />
            </CustomTheme>
        </Provider>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
