import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Navbar.css'


const drawerWidth = 240;
const navItems = [ 'Home' ,'services' ];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
           <Link style={{textDecoration:'none' , color:"black"}} to={`/${item}`}><ListItemButton sx={{ textAlign: 'center' }} >
            <ListItemText primary={item}  /> 
            
            </ListItemButton>
            </Link> 
          </ListItem>
        ))}
        <Button style={{display :"flex" , alignItem:"center" , backgroundColor:"#65b3ef5c" , color:"blue", marginLeft:"8px" , marginTop:"5px"}}>Join us</Button>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'  }}>
      <AppBar component="nav" style={{backgroundColor:"white", color: "black"}}>
       
         <Toolbar>
          <IconButton
            
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{display:"flex" , textAlign:"right"}}>
          <h1 className='Nav-head' color='blue'>Appdeployer :)</h1>
         
          
          </Typography>
          <Typography
          
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
         
            
          </Typography>
         
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black', fontWeight:"bold" , textAlign:"center" ,    }}>
                <Link style={{textDecoration:"none" , color:"black"}} to={'/'} >
                  {item}
                </Link>
              </Button>
            ))}
            <Button href='#' sx={{backgroundColor:"#65b3ef5c" , borderRadius:"10px" , marginLeft:"50px" , marginRight:"40px" , color:"blue"}}>
              Join us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;