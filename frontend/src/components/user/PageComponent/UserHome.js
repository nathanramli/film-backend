import React , {Component} from 'react';
import AppBarUser from './../UserComponent/AppBarUser';
import AnimeProps from './../UserComponent/AnimeProps';

import Container from '@material-ui/core/Container';



class UserHome extends Component{
	render(){
		return(
			<React.Fragment>
				<AppBarUser/>
				<Container maxWidth="lg" component="div" style={{ background: 'transparent', height: 'auto',marginBottom:'20px',marginTop:'20px'}}>
              		<AnimeProps />
                </Container>
			</React.Fragment>
		);
	}
}

export default UserHome;