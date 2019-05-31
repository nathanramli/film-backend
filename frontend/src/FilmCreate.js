import React, { Component } from 'react';
import FilmsService from './FilmsService';

// Material UI
// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';


const filmsService = new FilmsService();

class FilmCreate extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangesJudul = this.handleChangesJudul.bind(this);
        this.handleChangesDeskripsi = this.handleChangesDeskripsi.bind(this);

        this.state = {
            judul_film: '',
            deskripsi: ''
        };
      }

      // componentWillUpdate dipanggil saat akan ada state yang berubah atau diupdate
      // componentWillUpdate dipanggil saat ada state yang telah berubah atau diupdate

      // componentWillMount = Fungsi ini dipanggil sebelum component selesai diload / akan diload

      handleCreate(){
        filmsService.createFilm(
          {
            "judul_film": this.state.judul_film,
            "deskripsi": this.state.deskripsi
        }          
        ).then((result)=>{
          alert("Film berhasil dibuat!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.' + this.state.judul_film + this.state.deskripsi);
        });
      }
      handleSubmit(event) {
        const { match: { params } } = this.props;

        if(params && params.pk){
          this.handleUpdate(params.pk);
        }
        else
        {
          this.handleCreate();
        }

        event.preventDefault();
      }
      handleChangesDeskripsi(event) {
        this.setState({deskripsi: event.target.value});
      }
      handleChangesJudul(event) {
        this.setState({judul_film: event.target.value});
      }


      render() {

        return (
          <Container>
            <Box p={3}>
              <Card>
                <CardContent>
                <form onSubmit={this.handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <TextField label="Judul Film" margin="normal" onChange={this.handleChangesJudul} fullWidth required/>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="Deskripsi" margin="normal" variant="outlined" onChange={this.handleChangesDeskripsi} fullWidth required/>
                    </Grid>
                  <Button type="submit" color="primary">Submit</Button>
                  </Grid>
                </form>
                </CardContent>
            </Card>
            </Box>
          </Container>
        );
      }  
}

export default FilmCreate;