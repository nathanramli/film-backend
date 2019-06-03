import React, { Component } from 'react';
import axios from 'axios';

// Material UI
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';



class FilmCreate extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangesKode = this.handleChangesKode.bind(this);
        this.handleChangesJudul = this.handleChangesJudul.bind(this);
        this.handleChangesJudulAlternatif = this.handleChangesJudulAlternatif.bind(this);
        this.handleChangesMusimRilis = this.handleChangesMusimRilis.bind(this);
        this.handleChangesJumlahEpisode = this.handleChangesJumlahEpisode.bind(this);
        this.handleChangesMulaiTayang = this.handleChangesMulaiTayang.bind(this);
        this.handleChangesSelesaiTayang = this.handleChangesSelesaiTayang.bind(this);
        this.handleChangesStudio = this.handleChangesStudio.bind(this);
        this.handleChangesRating = this.handleChangesRating.bind(this);
        this.handleChangesCredit = this.handleChangesCredit.bind(this);
        this.handleChangesDeskripsi = this.handleChangesDeskripsi.bind(this);
        this.handleChangesGambar = this.handleChangesGambar.bind(this);

        this.state = {
            kode: '',
            judul: '',
            judul_alternatif: '',
            musim_rilis: '',
            jumlah_episode: '',
            mulai_tayang: '',
            selesai_tayang: '',
            studio: '',
            rating: '',
            credit: '',
            deskripsi: '',
            gambar: null,
            file: "/placeholder.png"
        };
      }

      // componentWillUpdate dipanggil saat akan ada state yang berubah atau diupdate
      // componentWillUpdate dipanggil saat ada state yang telah berubah atau diupdate

      // componentWillMount = Fungsi ini dipanggil sebelum component selesai diload / akan diload

      handleCreate(){
        let form_data = new FormData();
        form_data.append("kode", this.state.kode);
        form_data.append("judul", this.state.judul);
        form_data.append("judul_alternatif", this.state.judul_alternatif);
        form_data.append("musim_rilis", this.state.musim_rilis);
        form_data.append("jumlah_episode", this.state.jumlah_episode);
        form_data.append("mulai_tayang", this.state.mulai_tayang);
        form_data.append("selesai_tayang", this.state.selesai_tayang);
        form_data.append("studio", this.state.studio);
        form_data.append("rating", this.state.rating);
        form_data.append("credit", this.state.credit);
        form_data.append("deskripsi", this.state.deskripsi); 
        let ekstensi = this.state.gambar.name.split("."); 
        form_data.append("gambar", this.state.gambar, this.state.kode + '.' + ekstensi[ekstensi.length-1]);

        let url = 'http://localhost:8000/api/film/'
        axios.post(url, form_data, {
              headers: {
                'content-type': 'multipart/form-data'
              }
        }).then((result)=>{
          alert("Film berhasil dibuat!");
        }).catch(()=>{
          alert('There was an error! Please re-check your form.');
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
      handleChangesKode(event) {
        this.setState({kode: event.target.value});
      }
      handleChangesJudul(event) {
        this.setState({judul: event.target.value});
      }
      handleChangesJudulAlternatif(event) {
        this.setState({judul_alternatif: event.target.value});
      }
      handleChangesMusimRilis(event) {
        this.setState({musim_rilis: event.target.value});
      }
      handleChangesJumlahEpisode(event) {
        this.setState({jumlah_episode: event.target.value});
      }
      handleChangesMulaiTayang(event) {
        this.setState({mulai_tayang: event.target.value});
      }
      handleChangesSelesaiTayang(event) {
        this.setState({selesai_tayang: event.target.value});
      }
      handleChangesStudio(event) {
        this.setState({studio: event.target.value});
      }
      handleChangesRating(event) {
        this.setState({rating: event.target.value});
      }
      handleChangesCredit(event) {
        this.setState({credit: event.target.value});
      }
      handleChangesDeskripsi(event) {
        this.setState({deskripsi: event.target.value});
      }
      handleChangesGambar(event) {
        // if(this.state.file !== "/placeholder.png")
        URL.revokeObjectURL(event.target.files[0]);
        this.setState({gambar: event.target.files[0], file: URL.createObjectURL(event.target.files[0])});
      }


      render() {

        return (
          <React.Fragment>
            <Container>
              <Box p={3}>
                <Card>
                  <CardContent>
                  <form onSubmit={this.handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <TextField label="Kode" margin="normal" onChange={this.handleChangesKode} fullWidth placeholder="Contoh: naruto-shippuden" helperText="Jangan gunakan spasi (Ini untuk urlnya nanti)" required/>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Judul" margin="normal" onChange={this.handleChangesJudul} helperText="Kalau judul panjang, isi dengan judul inti/singkat aja. judul lengkap tulis di judul alternatif" fullWidth required/>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Judul Alternatif" margin="normal" onChange={this.handleChangesJudulAlternatif} fullWidth helperText="Judul panjang atau judul lain dari anime ini (Kalau hanya satu judul samakan dengan judul)" required/>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Musim Rilis" margin="normal" onChange={this.handleChangesMusimRilis} placeholder="Contoh: Spring 2019" fullWidth required/>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Jumlah Episode" margin="normal" onChange={this.handleChangesJumlahEpisode} type="number" inputProps={{step: 1, max: 1000, min: 0}} helperText="Kosongkan atau tulis 0 jika belum tamat" fullWidth/>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Mulai Tayang" margin="normal" onChange={this.handleChangesMulaiTayang} placeholder="Contoh: 1 Januari 2019 / Januari 2019" fullWidth/>
                      </Grid>                      
                     <Grid item xs={12}>
                        <TextField label="Selesai Tayang" margin="normal" onChange={this.handleChangesSelesaiTayang} placeholder="Contoh: 1 Desember 2019 / Desember 2019" helperText="Jika belum tamat kosongkan" fullWidth/>
                      </Grid>
                     <Grid item xs={12}>
                        <TextField label="Studio" margin="normal" onChange={this.handleChangesStudio} fullWidth/>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Rating" margin="normal" onChange={this.handleChangesRating} type="number" helperText="0.0 - 10.0 (lihat dari rating MyAnimeList)" inputProps={{step: 0.01, max: 10, min: 0}} placeholder="Contoh: 7.70" fullWidth required/>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Credit" margin="normal" variant="outlined" onChange={this.handleChangesCredit} fullWidth multiline rows="2" placeholder="Contoh: awsubs, animedotid & decoder" required/>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Deskripsi" margin="normal" variant="outlined" onChange={this.handleChangesDeskripsi} fullWidth multiline rows="4" required/>
                      </Grid>
                      <Grid item xs={12}>
                        <img src={this.state.file} width="350px" alt=""/>
                        <Input id="upload" accept="image/*" onChange={this.handleChangesGambar} fullWidth multiple type="file" required/>
                      </Grid>
                    <Button type="submit" color="primary">Tambah</Button>
                    </Grid>
                  </form>
                  </CardContent>
              </Card>
              </Box>
            </Container>
          </React.Fragment>
        );
      }  
}

export default FilmCreate;