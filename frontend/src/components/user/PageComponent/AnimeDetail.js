import React, { Component } from 'react';
import FilmsService from '../../../FilmsService';
import AppBarUser from '../UserComponent/AppBarUser';

// Material UI
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


const filmsService = new FilmsService();

class AnimeDetail extends Component {
      state = {
          kode: '',
          judul: '',
          judul_alternatif: ''
      }

      // componentWillUpdate dipanggil saat akan ada state yang berubah atau diupdate
      // componentWillUpdate dipanggil saat ada state yang telah berubah atau diupdate

      // componentWillMount = Fungsi ini dipanggil sebelum component selesai diload / akan diload
      componentDidMount(){ // Fungsi ini dipanggil ketika component selesai dibuat/OnDocumentSuccessLoad
        const { match: { params } } = this.props;
        if(params && params.kode)
        {
          filmsService.getFilmByKode(params.kode).then((c)=>{
            this.setState({kode:c.kode});
            this.setState({judul:c.judul});
            this.setState({judul_alternatif:c.judul_alternatif});
          });

        }
      }

      render() {

        return (
          <React.Fragment>
          <AppBarUser/>
          <Container>
            <Box p={3}>
              <Card>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      {this.state.judul}
                    </Grid>
                    <Grid item xs={6}>
                      {this.state.judul_alternatif}
                    </Grid>
                  </Grid>
                </CardContent>
            </Card>
            </Box>
          </Container>
          </React.Fragment>
        );
      }  
}

export default AnimeDetail;