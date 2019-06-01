import React, {Component} from 'react';
import Anime from './Anime';

class AnimeProps extends Component{
	state={
		animeList:[
        {id:'1',judul:'Tate No Yusha',gambar:1,deskripsi:'lorem',link:'#'},
        {id:'2',judul:'Oni Chi Chi',gambar:2,deskripsi:'lorem',link:'#'},
        {id:'3',judul:'Gege No Kitaro',gambar:3,deskripsi:'lorem',link:'#'},
        {id:'4',judul:'Highschool Dxd',gambar:4,deskripsi:'lorem',link:'#'},
        {id:'5',judul:'Kenja No Mago',gambar:5,deskripsi:'lorem',link:'#'},
      ],
	}
	render(){
		return(
			<div>
				<Anime animeAnime={this.state.animeList} />
			</div>
		);
	}	
}

export default AnimeProps;