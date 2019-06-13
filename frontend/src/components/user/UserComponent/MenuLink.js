import React from 'react';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import AppBarTest from './AppBarTest';
// import './../assets/css/style.css';


const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    float:'right',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    
    },

    },
  hidemenu: {
    color:'white',
    float:'left',
    [theme.breakpoints.down('xs')]:{
      display:'none',
    },
  },
  hidesearch:{
    [theme.breakpoints.down('xs')]:{
      display:'none',
    }
  }
}));



const Menulink = ({ menuMenu }) =>
{
	const classes = useStyles();
	const listmenu = menuMenu.map(menu =>
	{
		return(

		   <Box className={classes.hidemenu} p={1} key={menu.id}>
       <Link style={{color:'white'}} component={RouterLink}  variant="button" underline="none" color="textPrimary" to={menu.link}>
		 		{menu.nama}
	     </Link>
       </Box>
        
		);
	}
	);
		return(
		<React.Fragment>
        <AppBarTest />
				{listmenu}
        <div className={classes.hidesearch}>
          <div className={classes.search} >
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase placeholder="Search…" classes={{root: classes.inputRoot,input: classes.inputInput,}} inputProps={{ 'aria-label': 'Search' }} />
          </div>
        </div>
      </React.Fragment>
		);
}


export default Menulink;