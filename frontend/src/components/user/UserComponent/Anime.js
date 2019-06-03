import React from 'react';
import RecipeReviewCard from './AnimeCard';
import Grid from '@material-ui/core/Grid';

const Anime = ({ animeAnime }) => 
{
	const listAnime = animeAnime.map(anime => {
		return(
	      <Grid item xs={6} sm={3} key={anime.id}>
	        <RecipeReviewCard judul={anime.judul} gambar={anime.gambar} deskripsi={anime.deskripsi} link={anime.link}/>
	      </Grid>
		);
	});
	return(
		<Grid container style={{marginTop: '10px'}} spacing={3}> 
			{listAnime}
		</Grid>
	);
}


export default Anime;