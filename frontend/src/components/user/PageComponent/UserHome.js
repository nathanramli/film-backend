import React , {Component} from 'react';
import {Route} from 'react-router-dom';

import AnimeDetail from './AnimeDetail';
import AppBarUser from './../UserComponent/AppBarUser';
import Anime from './../UserComponent/Anime';

import Container from '@material-ui/core/Container';



class UserHome extends Component{
	render(){
		const Contain = () => {
			return(
			<div>
				<Route path="/" exact component={Anime} />
				<Route path="/:kode" component={AnimeDetail} />
			</div>
			);
		}
		return(
			<React.Fragment>
				<AppBarUser/>
				<Container maxWidth="lg" component="div" style={{ background: 'transparent', height: 'auto',marginBottom:'20px',marginTop:'20px'}}>
                	<Contain />
                </Container>
			</React.Fragment>
		);
	}
}

export default UserHome;