import React, { Component } from 'react';
import axios from 'axios';

import NotFound from './NotFound';
import LinkDownload from '../UserComponent/LinkDownload';

import LoadingBar from 'react-top-loading-bar';
// Material UI
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class AnimeDetail extends Component {
      state = {
          kode: '',
          judul: '',
          deskripsi:'',
          gambar:'',
          judul_alternatif: '',
          genre: [],
          chara: [],
          id_film: 0,
          loading: 1,
          redirect: false
      }


      componentDidMount(){    
       const API_URL = 'http://localhost:8000';
   
        const { match: { params } } = this.props;
        if(params && params.kode)
        {
          const url = `${API_URL}/api/film_by_kode/${params.kode}`;
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
            let row = response.data;
            this.setState({kode:row.film.kode});
            this.setState({judul:row.film.judul});
            this.setState({deskripsi:row.film.deskripsi});
            this.setState({genre:row.film.genre[0].split(',')});
            this.setState({gambar:row.film.gambar});
            this.setState({judul_alternatif:row.film.judul_alternatif});
            this.setState({chara: row.chara});
          }).catch(() => {
            this.setState({redirect: true});
          });
        }
      }

      getWarna(genre){
        switch(genre){
          case 'Romance':
            return 'pink';
          case 'Action':
            return 'lightblue';
          case 'Comedy':
            return 'lime';
          case 'Slice Of Life':
            return 'yellow';
          case 'Fantasy':
            return 'purple';
          case 'Material Art':
            return 'maroon';            
          default:
            return 'black';
        }
      }
      render() {      
        if(this.state.redirect){
          return (
            <NotFound />
          );
        }else{
          return (
            <React.Fragment>
            <LoadingBar progress={this.state.loading} height={3} color="red" />
            <Grid container style={{marginTop:'10px'}} spacing={1} >
              <Grid item xs={12} style={{backgroundColor:'#eee'}}>
                <Grid container>
                  <Grid item xs={12} md={8} style={{backgroundColor:'#fff',borderRadius:'3px'}} >
                    <div style={{backgroundImage: `url(${this.state.gambar})`, height: 500, backgroundSize: '100%', backgroundRepeat: 'no-repeat'}}>
                      <div style={{padding: 10}}>
                      {this.state.genre.map(row =>
                        <Chip size='small' key={row} label={row} style={{margin: 2, color: 'black', border: `3px solid ${this.getWarna(row)}`, backgroundColor: 'rgba(255, 255, 255, 0.8)'}} />
                      )}
                      </div>
                    </div>
                    <Container maxWidth="lg" style={{marginBottom:'10px'}}>
                      <h2>{this.state.judul}</h2>
                      {this.state.chara.length !== 0 &&
                      <Card >
                        <CardContent>
                        <Typography variant="h6">Characters</Typography>
                        <div style={{overflowX: 'auto', width: '100%'}}>
                        {this.state.chara.map(row =>
                          <div style={{padding: '14px 40px 14px 16px', display: 'table-cell'}} key={row.pk}>
                            <Card style={{width: 200}}>
                              <CardMedia
                                style={{height: 0, paddingTop: "100%"}}
                                image={row.foto}
                                title={row.nama}
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h6">
                                  {row.nama}
                                </Typography>
                              </CardContent>
                            </Card>
                          </div>
                          )}
                        </div>                        
                        </CardContent>
                      </Card>
                      }
                     <Card style={{marginTop:'10px'}}>
                        <CardContent>
                          <Typography style={{fontSize:'20px'}} gutterBottom>
                            Sinopsis {this.state.judul}
                          </Typography>
                            <hr />
                          <Typography color="textSecondary" style={{whiteSpace: 'pre-wrap'}}>
                              {this.state.deskripsi}
                          </Typography>
                        </CardContent>
                      </Card>

                      <Card style={{marginTop:'10px'}}>
                          <LinkDownload judul={this.state.judul}/>
                          <LinkDownload judul={this.state.judul}/>
                          <LinkDownload judul={this.state.judul}/>
                          <LinkDownload judul={this.state.judul}/>
                      </Card>
                  </Container>
                  </Grid>
                  <Grid item xs={12} md={3} style={{backgroundColor:'#fff',margin:'auto',marginTop:'10px',textAlign:'center',borderRadius:'3px',fontSize:'36px',position:'static'}}>
                    Ads Here
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            </React.Fragment>
          );
        }
      }  
}

export default AnimeDetail;