import React, {Component} from 'react';
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import Step from '@material-ui/core/Step';
const Menulink = ({ menuMenu }) =>
{
	const listmenu = menuMenu.map(menu =>
	{
		return(

		   <Link component={RouterLink} key={menu.id} variant="button" underline="none" color="textPrimary" to={menu.link} style={{marginRight: '10px',color:'white',fontWeight:'bold'}}>
	       		{menu.nama}
	       </Link>
		);
	}
	);
		return(
			<nav>
				{listmenu}
			</nav>
		);
}


export default Menulink;