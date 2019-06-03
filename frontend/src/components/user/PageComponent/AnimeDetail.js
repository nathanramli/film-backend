import React, { Component } from 'react';
import FilmsService from '../../../FilmsService';

// Material UI
import Grid from '@material-ui/core/grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Movie from '@material-ui/icons/Movie';
// import Download from '@material-ui/icons/Link';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';


const filmsService = new FilmsService();

// const [openEp1, setOpen] = React.useState(false);
//     const [openEp2, setOpen2] = React.useState(false);
//     const [open480, setOpen3] = React.useState(false);
//     const [open720, setOpen4] = React.useState(false);


//       function handleClickEp1() {
//        setOpen(!openEp1);
//       }
//       function handleClickEp2() {
//        setOpen2(!openEp2);
//       }
//       function handleClick480() {
//        setOpen3(!open480);
//       }
//       function handleClick720() {
//        setOpen4(!open720);
//       }  

class AnimeDetail extends Component {
      state = {
          kode: '',
          judul: '',
          deskripsi:'',
          gambar:'',
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
            this.setState({deskripsi:c.deskripsi});
            this.setState({gambar:c.gambar});
            this.setState({judul_alternatif:c.judul_alternatif});
          });

        }
      }

      render() {      
        return (
          <Grid container style={{marginTop:'10px'}} spacing={1} >
            <Grid item xs={12} style={{backgroundColor:'#eee'}}>
              <Grid container>
                <Grid item xs={12} sm={6} md={8} style={{backgroundColor:'#fff',borderRadius:'3px'}} >
                  <img src={this.state.gambar} alt="Tate No Yusha" width="100%"/>
                  <Container maxWidth="md" style={{marginBottom:'10px'}}>
                  <p>
                    <h2>{this.state.judul}</h2>
                  </p>
                   <Card>
                      <CardContent>
                        <Typography style={{fontSize:'20px'}} gutterBottom>
                          Sinopsis {this.state.judul}
                          <hr />
                        </Typography>
                        <Typography color="textSecondary">
                         <p>
                            {this.state.deskripsi}
                         </p>
                        </Typography>
                      </CardContent>
                    </Card>
                    <Card style={{marginTop:'10px'}}>
                      <List component="nav">
                        <ListItem button >
                          <ListItemText>
                            {this.state.judul} Episode 1
                          </ListItemText> 
                        </ListItem>
                        <Collapse in="true" timeout="auto" unmountOnExit>
                          <ListItem>
                              <ListItemIcon>
                                <Movie />
                              </ListItemIcon>
                              <ListItemText>
                                Mp4-240p : Fansdrive | Zippyshare | Google Drive
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Movie />
                              </ListItemIcon>
                              <ListItemText>
                                Mp4-360p : Fansdrive | Zippyshare | Google Drive
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Movie />
                              </ListItemIcon>
                              <ListItemText>
                                Mp4-480p : Fansdrive | Zippyshare | Google Drive
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Movie />
                              </ListItemIcon>
                              <ListItemText>
                                Mp4-720p : Fansdrive | Zippyshare | Google Drive
                              </ListItemText>
                            </ListItem>
                          </Collapse>

                          <ListItem button >
                          <ListItemText>
                            {this.state.judul}Episode 2
                          </ListItemText> 
                          
                        </ListItem>
                        <Collapse in="true" timeout="auto" unmountOnExit>
                          <ListItem>
                              <ListItemIcon>
                                <Movie />
                              </ListItemIcon>
                              <ListItemText>
                                Mp4-240p : Fansdrive | Zippyshare | Google Drive
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Movie />
                              </ListItemIcon>
                              <ListItemText>
                                Mp4-360p : Fansdrive | Zippyshare | Google Drive
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Movie />
                              </ListItemIcon>
                              <ListItemText>
                                Mp4-480p : Fansdrive | Zippyshare | Google Drive
                              </ListItemText>
                            </ListItem>
                            <ListItem>
                              <ListItemIcon>
                                <Movie />
                              </ListItemIcon>
                              <ListItemText>
                                Mp4-720p : Fansdrive | Zippyshare | Google Drive
                              </ListItemText>
                            </ListItem>
                          </Collapse>
                      </List> 
                    </Card>
                </Container>
                </Grid>
                <Grid item xs={12} sm={4} md={3} style={{backgroundColor:'#fff',margin:'auto',marginTop:'10px',textAlign:'center',borderRadius:'3px',fontSize:'36px',position:'static'}}>
                  Ads Here
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        );
      }  
}

export default AnimeDetail;