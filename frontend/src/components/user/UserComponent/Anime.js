import React, {Component} from 'react';
import FilmsService from '../../../FilmsService';

import RecipeReviewCard from './AnimeCard';
import Grid from '@material-ui/core/Grid';

const filmsService = new FilmsService();

class Anime extends Component {
		state = {
		  anime: []
		}

		componentDidMount() {
		    var  self  =  this;
		    filmsService.getFilms().then(function (result) {
		        self.setState({ anime:  result.data})
		    });

		    //  Tampilkan 5 dulu
		}

		render() {        
			return(
				<Grid container style={{marginTop: '10px'}} spacing={3}> 
					{this.state.anime.map(row => 
						<Grid item xs={12} sm={6} md={4} lg={3} key={row.id}>
							<RecipeReviewCard judul={row.judul} gambar={row.gambar} deskripsi={row.deskripsi} link={row.kode}/>
						</Grid>
					)}
				</Grid>
			);
		}
}


export default Anime;