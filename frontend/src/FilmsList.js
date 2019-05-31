import  React, { Component } from  'react';
import  FilmsService  from  './FilmsService';

// Material UI
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

const  filmsService  =  new  FilmsService();

class  FilmsList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        films: [],
        nextPageURL:  '',
        beforePageURL: ''
    };
    this.nextPage  =  this.nextPage.bind(this);
    this.prevPage  =  this.prevPage.bind(this);
    this.handleDelete  =  this.handleDelete.bind(this);
}

componentDidMount() {
    var  self  =  this;
    filmsService.getFilms().then(function (result) {
        console.log(result);
        self.setState({ films:  result.data, nextPageURL:  result.nextlink, beforePageURL:result.prevlink })
    });
}
handleDelete(e,pk){
    var  self  =  this;
    filmsService.deleteFilm({pk :  pk}).then(()=>{
        var  newArr  =  self.state.films.filter(function(obj) {
            return  obj.pk  !==  pk;
        });

        self.setState({films:  newArr})
    });
}

nextPage(){
    var  self  =  this;
    // console.log(this.state.nextPageURL);        
    filmsService.getFilmsByURL(this.state.nextPageURL).then((result) => {
        self.setState({ films:  result.data, nextPageURL:  result.nextlink, beforePageURL:  result.prevlink})
    });
}

prevPage(){
    let self = this;
    // console.log(this.state.beforePageURL);        
    filmsService.getFilmsByURL(this.state.beforePageURL).then((result) => {
        self.setState({ films:  result.data, beforePageURL:  result.prevlink, nextPageURL:  result.nextlink})
    });
}

render() {

    return (
        <React.Fragment>
        <Table style={{marginBottom: 10}}>
        <TableHead>
          <TableRow>
            <TableCell>Judul Film</TableCell>
            <TableCell>Deskripsi</TableCell>
            <TableCell>Aksi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {this.state.films !== "" ? this.state.films.map( c  =>
                <TableRow  key={c.pk}>
                    <TableCell>{c.judul_film}</TableCell>
                    <TableCell>{c.deskripsi}</TableCell>
                    <TableCell>
                    <Button onClick={(e)=>  this.handleDelete(e,c.pk) } variant="outlined" color="secondary">Delete</Button>&nbsp;
                    <Button href={"/film/update/" + c.pk} variant="contained" color="primary">Update</Button>
                    <Button href={"/film/" + c.pk} variant="contained" color="primary" style={{marginLeft: 3}}>Detail</Button>
                    </TableCell>
                </TableRow>
            ) : 
            <TableRow><TableCell colspan={3} style={{textAlign: "center"}}><Typography variant="h6">Tidak ada film</Typography></TableCell></TableRow>}      
        </TableBody>
        </Table>
        <Button variant="contained" size="small" color="primary" onClick={this.nextPage}>Next</Button>&nbsp;
        <Button variant="contained" size="small" color="primary" onClick={this.prevPage}>Before</Button>        
        </React.Fragment>
        );
  }
}
export  default  FilmsList;