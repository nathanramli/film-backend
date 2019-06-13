import React from 'react';
import {Link as RouterLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function AnimeCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea component={RouterLink} to={props.link}>
          <CardMedia
            style={{height: 0}}
            className={classes.media}
            image={props.gambar}
            title={props.judul}
          />
          <CardActions>
            <Typography variant="h5">{props.judul}</Typography>
          </CardActions>
      </CardActionArea>
    </Card>
    );
}

export default AnimeCard;