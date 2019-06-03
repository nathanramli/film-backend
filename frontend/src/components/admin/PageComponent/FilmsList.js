import  React, { Component } from  'react';
import { Link as RouterLink } from  'react-router-dom';
import  FilmsService  from  '../../../FilmsService';

// Material UI
import AddIcon from '@material-ui/icons/AddCircle';
import LeftIcon from '@material-ui/icons/ChevronLeft';
import RightIcon from '@material-ui/icons/ChevronRight';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';

const  filmsService  =  new  FilmsService();

class  FilmsList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        films: [],
        nextPageURL: '',
        prevPageURL: '',
        count: 0,
        cari: null
    };
    this.nextPage  =  this.nextPage.bind(this);
    this.prevPage  =  this.prevPage.bind(this);
    this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
    var  self  =  this;
    filmsService.getFilms().then(function (result) {
        console.log(result);
        self.setState({ films:  result.data , count: result.count, nextPageURL: result.nextlink, prevPage: result.prevlink})
    });
}

handleDelete(e,pk){
    var  self  =  this;
    filmsService.deleteFilm({pk :  pk}).then(()=>{
        var  newArr  =  self.state.films.filter(function(obj) {
            return  obj.pk  !==  pk;
        });

        self.setState({films:  newArr, count: this.state.count-1})
    });
}

nextPage(){
    var  self  =  this;
    filmsService.getFilmsByURL(this.state.nextPageURL).then((result) => {
        self.setState({ films:  result.data, nextPageURL:  result.nextlink, prevPageURL:  result.prevlink})
    });
}

prevPage(){
    var  self  =  this;
    filmsService.getFilmsByURL(this.state.prevPageURL).then((result) => {
        self.setState({ films:  result.data, nextPageURL:  result.nextlink, prevPageURL:  result.prevlink})
    });
}

handleSubmit(e){
  e.preventDefault();

  if(this.state.cari !== '' && this.state.cari !== null){
    var  self  =  this;
    filmsService.getFilmByJudul(this.state.cari).then(function (result) {
        self.setState({ films:  result.data})
    });
    // .catch(()=>{
    //   alert('Masukan form pencarian dengan benar.');
    // });
  }
}

handleCari(e){
  this.setState({cari: e.target.value});
}

render() {

    return (
        <React.Fragment>
        <Container>
          <div style={{padding: 10, marginTop: 10}}>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <TextField label="Cari" helperText="Hanya dapat menampilkan 5 pencarian terkait (Jika menggunakan tombol < > akan kembali ke FullList)" onChange={this.handleCari.bind(this)}/>
              </form>
          </div>        
          <Table style={{marginTop: 10, marginBottom: 10}}>
          <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align='right' padding='default'>Judul</TableCell>
                <TableCell align='right' padding='default'>Gambar</TableCell>
                <TableCell align='right' padding='default'>Jumlah Episode</TableCell>
                <TableCell align='right' padding='default'>Rating</TableCell>
                <TableCell align='left' padding='default'>
                  <Button variant="contained" style={{backgroundColor: "#28a745", color: "#fff"}} component={RouterLink} to="/admin/film/add"><AddIcon/>&nbsp;Tambah Anime</Button>
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {this.state.films.map(row => 
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.pk}
                  >
                    <TableCell component="th" scope="row">
                      {row.pk}
                    </TableCell>
                    <TableCell align="right" >{row.judul}</TableCell>
                    <TableCell align="right"><img src={`${row.gambar}`} width="150px" alt={row.judul}/></TableCell>
                    <TableCell align="right">{row.jumlah_episode}</TableCell>
                    <TableCell align="right">{row.rating} <StarIcon style={{fontSize: 17, color: "orange"}}/></TableCell>
                    <TableCell>
                      <Fab onClick={(e)=>  this.handleDelete(e,row.pk) } color="secondary" size="small"><DeleteIcon style={{fontSize: 20}}/></Fab>
                      <Fab component={RouterLink} to={"/admin/film/update/" + row.pk} color="primary" size="small"><EditIcon style={{fontSize: 20}}/></Fab>
                      <Fab component={RouterLink} to={"/admin/film/detail/" + row.pk} size="small" ><SearchIcon style={{fontSize: 20}}/></Fab>
                    </TableCell>
                  </TableRow>
              )}
          </TableBody>
          </Table>
          <div style={{padding: 10, marginBottom: 10}}>
            <Fab onClick={this.prevPage} size="small" color="primary"><LeftIcon/></Fab>&nbsp;
            <Fab onClick={this.nextPage} size="small" color="primary"><RightIcon/></Fab>
            <small style={{float: "right"}}>Total : {this.state.count}</small>
          </div>
        </Container>
        </React.Fragment>
        );
  }
}
export  default  FilmsList;