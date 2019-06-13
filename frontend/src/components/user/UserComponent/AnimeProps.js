import React, {Component} from 'react';
import Anime from './Anime';

class AnimeProps extends Component{
	render(){
		return(
			<div>
				<Anime animeAnime={this.state.animeList} />
			</div>
		);
	}	
}

export default AnimeProps;