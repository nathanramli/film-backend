import React, {Component} from 'react';
import axios from 'axios';
import LoadingBar from 'react-top-loading-bar';

import RecipeReviewCard from './AnimeCard';
import Grid from '@material-ui/core/Grid';

class Anime extends Component {
		state = {
		  anime: [],
          loading: 1
		}

		componentDidMount() {
			const API_URL = 'http://localhost:8000';
			const url = `${API_URL}/api/film_limit_enam/`;
        	axios.get(url, {
            onDownloadProgress: (progressEvent) => {
					if(progressEvent.lengthComputable){
						let percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
						this.setState({loading: this.state.loading+percent});                
					}else{
						this.setState({loading: 100});
					}
	            }
          	}).then((response) => {
        		let result = response.data;
		        this.setState({ anime:  result.data})
		    });
		}

		render() {        
			return(
	          <React.Fragment>
	          <LoadingBar progress={this.state.loading} height={3} color="red" />				
				<Grid container style={{marginTop: '10px'}} spacing={3}> 
					{this.state.anime.map(row => 
						<Grid item xs={12} sm={6} md={4} lg={3} key={row.pk}>
							<RecipeReviewCard judul={row.judul} gambar={row.gambar} link={row.kode}/>
						</Grid>
					)}
				</Grid>
				</React.Fragment>
			);
		}
}


export default Anime;