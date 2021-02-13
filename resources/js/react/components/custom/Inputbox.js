import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MicIcon from '@material-ui/icons/Mic';


const useStyles = makeStyles((theme) => ({

    input: {
        padding: '8px',
    },
    inputRoot: {
        borderRadius: 10,
        paddingRight: 0,
        background:'#FDFDFD',
        '&:hover $notchedOutline':{
            border:'1px solid rgba(150, 169, 186, 1)'
        }
       
    },
    button: {
        // backgroundColor:'#6588DE !important',
        borderRadius:10,
        padding:'5px 16px'
    },
    notchedOutline:{
        border:'1px solid rgba(150, 169, 186, 0.7)',
    }
}));

export default function InputBox() {
    const classes = useStyles();

    return (
        <div>
            <TextField
                className={classes.margin}
                id="input-with-icon-textfield"
                variant="outlined"
                placeholder='Type a new message...'
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton style={{ padding: 0 }}>
                                <AttachFileIcon />
                            </IconButton>
                            <IconButton style={{ padding: 0 }}>
                                <MicIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment>
                            <SendBtn />
                        </InputAdornment>
                    ),
                    classes: {
                        root: classes.inputRoot,
                        input: classes.input,
                        notchedOutline:classes.notchedOutline
                    }
                }}
            />

            {/* <SendBtn /> */}

        </div>
    );
}

function SendBtn() {
    const classes = useStyles();
    return (
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon/>}
        disableElevation
      >
            Send
      </Button>
    )
}
