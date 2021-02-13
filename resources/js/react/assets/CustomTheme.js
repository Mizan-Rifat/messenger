import React from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6588DE',
        },
        secondary: {
            main: "#EF2743",
        },
        info: {
            main: '#52585D'
        },
        success: {
            main: '#161731'
        },

        background: {
            main: '#E3F6FC'
        },
        online: {
            main: '#44b700'
        },
        offline: {
            main: '#EF2743'
        },
        text: {
            light: '#fff',
            dark: '#52585D',
            disabled: 'rgba(175, 188, 198, 1)'
        }
    },
    type: 'dark'
});


export default function CustomTheme(props) {

    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    );
}



