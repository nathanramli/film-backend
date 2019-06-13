import React, { Component } from 'react';
import Menulink from './MenuLink';

//Material Ui
import AppBar from '@material-ui/core/AppBar';
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
		<React.Fragment>
      <AppBar position="static" style={{boxShadow:'none',alignItems:'center'}}>
          <img src="/logo2.png" width="240px" alt="Fansnime"/>
       </AppBar>
       <AppBar position="sticky" style={{boxShadow:'none'}}>
        <Toolbar style={{display:'inline-block'}}>
          <Menulink menuMenu={this.state.menu}/>
        </Toolbar>
       </AppBar>
    </React.Fragment>
		)
	}
}
export default AppBarUser;