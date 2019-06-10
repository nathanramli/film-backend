import React, { Component } from 'react';
import FilmsService from '../../../FilmsService';

import LinkDownload from '../UserComponent/LinkDownload';

// Material UI
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import TableCell from '@material-ui/core/TableCell';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/grid';
import Typography from '@material-ui/core/Typography';

const filmsService = new FilmsService();


class AnimeDetail extends Component {
      state = {
          kode: '',
          judul: '',
          deskripsi:'',
          gambar:'',
          judul_alternatif: '',
          chara: [],
          id_film: 0
      }

      componentDidMount(){
        const { match: { params } } = this.props;
        if(params && params.kode)
        {
          filmsService.getFilmByKode(params.kode).then((c)=>{
            console.log(c);
            this.setState({kode:c.film.kode});
            this.setState({judul:c.film.judul});
            this.setState({deskripsi:c.film.deskripsi});
            this.setState({gambar:c.film.gambar});
            this.setState({judul_alternatif:c.film.judul_alternatif});

            this.setState({chara: c.chara});
          });
        }
      }

      render() {      
        return (
          <Grid container style={{marginTop:'10px'}} spacing={1} >
            <Grid item xs={12} style={{backgroundColor:'#eee'}}>
              <Grid container>
                <Grid item xs={12} md={8} style={{backgroundColor:'#fff',borderRadius:'3px'}} >
                  <img src={this.state.gambar} alt={this.state.judul} width="100%"/>
                  <Container maxWidth="lg" style={{marginBottom:'10px'}}>
                    <h2>{this.state.judul}</h2>
                   <Card>
                      <CardContent>
                        <Typography style={{fontSize:'20px'}} gutterBottom>
                          Sinopsis {this.state.judul}
                        </Typography>
                          <hr />
                        <Typography color="textSecondary">
                            {this.state.deskripsi}
                        </Typography>
                      </CardContent>
                    </Card>
                    {this.state.chara.length !== 0 &&
                    <Card style={{marginTop:'10px'}}>
                      <CardContent>
                      <div style={{overflowX: 'auto', width: '100%'}}>
                      {this.state.chara.map(row =>
                        <TableCell>
                          <Card style={{width: 300}}>
                            <CardMedia
                              style={{height: 0, paddingTop: "100%"}}
                              image={row.foto}
                              title={row.nama}
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                {row.nama}
                              </Typography>
                            </CardContent>
                          </Card>
                          </TableCell>
                        )}
                      </div>                        
                      </CardContent>
                    </Card>
                    }
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
        );
      }  
}

export default AnimeDetail;