import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
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
      <CardActionArea>
        <Link underline="none" href={props.link} className={classes.linkstyle}>
          <CardHeader
            title={props.judul}
            subheader="September 14, 2016"
          />
        </Link>
      </CardActionArea>
      <CardActionArea>
        <Link href={props.link}>
          <CardMedia
            style={{height: 0}}
            className={classes.media}
            image={require ("./../../../assets/image/"+props.gambar+".jpg")}
            title={props.judul}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.deskripsi}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
    );
}

export default AnimeCard;