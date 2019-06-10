import React from 'react';


// Material UI
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import Movie from '@material-ui/icons/Movie';

function LinkDownload(props){

  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }
  return (
          <List component="nav">
            <ListItem button onClick={handleClick.bind(this)}>
              <ListItemText>
                {props.judul} Episode 1
              </ListItemText> 
              <ListItemIcon>
                {open ? <ExpandLess/> : <ExpandMore/>}
              </ListItemIcon>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
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
      );
}

export default LinkDownload;