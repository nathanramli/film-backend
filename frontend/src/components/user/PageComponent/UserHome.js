import React , {Component} from 'react';
import {Route} from 'react-router-dom';

import AnimeDetail from './AnimeDetail';
import AppBarUser from './../UserComponent/AppBarUser';
import Anime from './../UserComponent/Anime';

import Container from '@material-ui/core/Container';



class UserHome extends Component{
	state={
		animeList:[
        {id:'1',judul:'Tate No Yusha',gambar:1,deskripsi:'lorem',link:'#'},
        {id:'2',judul:'Oni Chi Chi',gambar:2,deskripsi:'lorem',link:'/onichichi'},
        {id:'3',judul:'Gege No Kitaro',gambar:3,deskripsi:'lorem',link:'#'},
        {id:'4',judul:'Highschool Dxd',gambar:4,deskripsi:'lorem',link:'#'},
        {id:'5',judul:'Kenja No Mago',gambar:5,deskripsi:'lorem',link:'#'},
      ],
	}
	render(){
		const Contain = () => {
			return(
			<div>
				<Route path="/" exact render={(props)=>
					<Anime animeAnime={this.state.animeList} />
				} />
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