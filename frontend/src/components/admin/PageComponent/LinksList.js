import  React, { Component } from  'react';
import LinksService  from  '../../../LinksService';
import FilmsService  from  '../../../FilmsService';

// Material UI
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

const  linksService  =  new  LinksService();
const  filmsService  =  new  FilmsService();

class  LinksList  extends  Component {
  state = {
      kode: '',
      judul: '',
      jumlah_episode: '',
      rating: '',
      credit: '',    
      deskripsi: '',    
      gambar: '',
      links: []
  }

  componentDidMount() {
      const { match: { params } } = this.props;
      if(params && params.pk)
      {
        filmsService.getFilm(params.pk).then((c)=>{
          this.setState({
              kode:c.kode,
              judul:c.judul,
              jumlah_episode:c.jumlah_episode,
              rating:c.rating,
              credit:c.credit,
              deskripsi:c.deskripsi,
              gambar:c.gambar
          });
        });

        linksService.getLinks(params.pk).then((c)=>{
            this.setState({
              links: c.data
            });
        });
      }    
  }

  pecahVariabel(variabel){
    return variabel.split("|||");
  }

  render() {

    return (
        <Container>
          <Box p={3}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={12} style={{textAlign: "center"}}>
                    <img src={this.state.gambar} width="80%" alt={this.state.judul}/>
                  </Grid>
                  <Grid item xs={12} style={{marginTop: 50}}>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell style={{fontWeight: "bold"}}>Kode</TableCell>
                          <TableCell>:</TableCell>
                          <TableCell>{this.state.kode}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={{fontWeight: "bold"}}>Judul</TableCell>
                          <TableCell>:</TableCell>
                          <TableCell>{this.state.judul}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={{fontWeight: "bold"}}>Jumlah Episode</TableCell>
                          <TableCell>:</TableCell>
                          <TableCell>{this.state.jumlah_episode}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={{fontWeight: "bold"}}>Rating</TableCell>
                          <TableCell>:</TableCell>
                          <TableCell>{this.state.rating}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={{fontWeight: "bold"}}>Credit</TableCell>
                          <TableCell>:</TableCell>
                          <TableCell>{this.state.credit}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell style={{fontWeight: "bold"}}>Deskripsi</TableCell>
                          <TableCell>:</TableCell>
                          <TableCell>{this.state.deskripsi}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card style={{marginTop: 20}}>
              <CardContent>
                <div style={{borderBottom: '2px solid red'}}>
                  <Typography variant="h5" style={{fontFamily: 'Comic Sans Ms'}}>Link Download</Typography>
                </div>
                {this.state.links.map(row =>
                  <Box p={2}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell colSpan={2}>{this.state.judul} {row.judul_link}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                          {row.url1080p &&
                            <TableRow>
                              <TableCell>
                                1080p
                              </TableCell>
                              <TableCell>
                                {this.pecahVariabel(row.url1080p).map(row => 
                                    <div>
                                      <TextField value={row.split("||")[0]} />
                                      <TextField value={row.split("||")[1]} />
                                    </div>
                                )}
                              </TableCell>
                            </TableRow>
                          }
                          {row.url720p &&
                            <TableRow>
                              <TableCell>
                                720p
                              </TableCell>
                              <TableCell>
                                {this.pecahVariabel(row.url720p).map(row => 
                                    <div>
                                      <TextField value={row.split("||")[0]} />
                                      <TextField value={row.split("||")[1]} />
                                    </div>
                                )}
                              </TableCell>
                            </TableRow>
                          }
                          {row.url540p &&
                            <TableRow>
                              <TableCell>
                                540p
                              </TableCell>                            
                              <TableCell>
                                {this.pecahVariabel(row.url540p).map(row => 
                                    <div>
                                      <TextField value={row.split("||")[0]} />
                                      <TextField value={row.split("||")[1]} />
                                    </div>
                                )}
                              </TableCell>
                            </TableRow>
                          }
                          {row.url480p &&
                            <TableRow>
                              <TableCell>
                                480p
                              </TableCell>
                              <TableCell>
                                {this.pecahVariabel(row.url480p).map(row => 
                                    <div>
                                      <TextField value={row.split("||")[0]} />
                                      <TextField value={row.split("||")[1]} />
                                    </div>
                                )}
                              </TableCell>
                            </TableRow>
                          }
                          {row.url360p &&
                            <TableRow>
                              <TableCell>
                                360p
                              </TableCell>
                              <TableCell>
                                {this.pecahVariabel(row.url360p).map(row => 
                                    <div>
                                      <TextField value={row.split("||")[0]} />
                                      <TextField value={row.split("||")[1]} />
                                    </div>
                                )}
                              </TableCell>
                            </TableRow>
                          }
                          {row.url240p &&
                            <TableRow>
                              <TableCell>
                                240p
                              </TableCell>
                              <TableCell>
                                {this.pecahVariabel(row.url240p).map(row => 
                                    <div>
                                      <TextField value={row.split("||")[0]} />
                                      <TextField value={row.split("||")[1]} />
                                    </div>
                                )}
                              </TableCell>
                            </TableRow>
                          }                          
                      </TableBody>
                    </Table>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Box>

        </Container>
    );
  }
}
export default LinksList;