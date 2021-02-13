import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

    input: {
        padding: '0 10px',
        background: theme.palette.primary.main,
        color: 'white',
        borderRadius: 20,
        fontSize: 12,

    },

    select: {
        padding: '2px 0'
    },

    icon: {
        color: 'white'
    },
    dot: {
        display: 'inline-block',
        height: 6,
        width: 6,
        borderRadius: '50%',
        marginRight: 5
    }
}));

export default function StatusDropdown() {

    const classes = useStyles();

    const [value, setvalue] = useState('online')

    const [menuItems, setmenuItems] = useState([
        {
            label: 'Online',
            value: 'online',
            color:'rgba(243, 186, 74, 1)'
        },
        {
            label: 'Offline',
            value: 'offline',
            color:'red'
        },
    ])

  const handleChange = (e)=>{
      setvalue(e.target.value)
  }


    return (
        <div>
            <TextField
                id="select"
                value={value}
                select
                InputProps={{
                    classes: {
                        root: classes.input
                    },
                    disableUnderline: true
                }}
                SelectProps={{
                    classes: {
                        icon: classes.icon,
                        root: classes.select,
                    },
                }}
                onChange={handleChange}
            >

                {
                    menuItems.map(item => (

                        <MenuItem value={item.value}>
                            <div className={classes.dot} style={{background: item.color }}>
                            </div>
                            {item.label}
                        </MenuItem>

                    ))
                }
            </TextField>
        </div>
    );
}
