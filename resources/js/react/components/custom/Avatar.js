import React from 'react';
import Badge from '@material-ui/core/Badge';
import MAvatar  from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';


const StyledBadge = withStyles((theme,props) => {
  
  console.log(theme.palette)
  return {
  
  badge: {
    backgroundColor: theme.palette.online.main,
    color: theme.palette.online.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: -1,
      left: -1,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}})(Badge);



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent:'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  avatar:{
    border: `2px solid ${theme.palette.online.main}`,
  },
  offline:{
    '& .MuiBadge-dot':{
      background: 'red',
      '&::after':{
        animation:'unset'
      }
    },
    '& $avatar':{
      border: `2px solid ${theme.palette.offline.main}`,
    }
  }
}));

export default function BadgeAvatars({style,offline}) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root,{[classes.offline]:offline})}>
      <StyledBadge
        // className={}
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <MAvatar alt="Remy Sharp" src="/img/chat/avatar.png" style={style} className={classes.avatar} />
        
      </StyledBadge>
      
     
    </div>
  );
}
