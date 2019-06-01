import React, { Component } from 'react';
import Menulink from './MenuLink';

import logo from '../../../assets/image/logo.png';

//Material Ui
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';

class AppBarUser extends Component{
	state ={
      menu:[
        {id:'1',nama:'Home',link:'/',state:'this.state.animeList'},
        {id:'2',nama:'Daftar Anime',link:'/daftaranime'},
        {id:'3',nama:'Genre',link:'#'},
      ]
    }
	render(){
		return(
		<AppBar position="relative" color="default" style={{backgroundColor: '#ffb7c5'}} elevation={0}>
         <Toolbar style={{borderBottom: '2px solid white'}}>
          <img src={logo} width="20%"/>
          <div  style={{marginLeft: "auto"}}>
          <Menulink menuMenu={this.state.menu}/>
          </div>
         </Toolbar>
       </AppBar>
		)
	}
}
export default AppBarUser;