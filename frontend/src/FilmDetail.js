import React, { Component } from 'react';
import FilmsService from './FilmsService';

// Material UI
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const filmsService = new FilmsService();

class FilmDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            judul_film: '',
            deskripsi: ''
        };        
      }

      // componentWillUpdate dipanggil saat akan ada state yang berubah atau diupdate
      // componentWillUpdate dipanggil saat ada state yang telah berubah atau diupdate

      // componentWillMount = Fungsi ini dipanggil sebelum component selesai diload / akan diload
      componentDidMount(){ // Fungsi ini dipanggil ketika component selesai dibuat/OnDocumentSuccessLoad
        const { match: { params } } = this.props;
        if(params && params.pk)
        {
          filmsService.getFilm(params.pk).then((c)=>{
            this.setState({judul_film:c.judul_film});
            this.setState({deskripsi:c.deskripsi});
          })
        }
      }

      render() {

        return (
          <Container>
            <Box p={3}>
              <Card>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      {this.state.judul_film}
                    </Grid>
                    <Grid item xs={6}>
                      {this.state.deskripsi}
                    </Grid>
                  </Grid>
                </CardContent>
            </Card>
            </Box>
          </Container>
        );
      }  
}

export default FilmDetail;