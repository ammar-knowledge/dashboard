import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Collapse,  } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import routes from '../../routes';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const Sidebar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderMenuItems = (routes) => {
    return routes.map((route, index) => {
      if (route.children) {
        return (
          <div key={index}>
            <ListItem button onClick={handleClick}>
              <ListItemIcon>
                <i className="material-icons">{route.icon}</i>
              </ListItemIcon>
              <ListItemText primary={route.name} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderMenuItems(route.children)}
              </List>
            </Collapse>
          </div>
        );
      } else {
        return (
          <ListItem button key={index} component={Link} to={route.path}>
            <ListItemIcon>
              <i className="material-icons">{route.icon}</i>
            </ListItemIcon>
            <ListItemText primary={route.name} />
          </ListItem>
        );
      }
    });
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {renderMenuItems(routes)}
      </List>
    </Drawer>
  );
};

export default Sidebar;
