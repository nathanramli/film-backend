import React, { Component } from 'react';

// Components Material UI

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class TemplateAppBar extends Component {
  render() {
    return (
	  <AppBar position="static">
	    <Container>
	      <Toolbar variant="dense">
	        <Typography variant="h6">Meownime</Typography>
	        <Button href="/" color="inherit">Film</Button>
	        <Button href="/film/add/" color="inherit">Tambah Film</Button>
	      </Toolbar>
	    </Container>
	  </AppBar>  
    );
  }
}
export default TemplateAppBar;