import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
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
import Picture1 from "../assets/picture1.png"
// import Button from '@mui/material/Button';




const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;

  // mobil görüntüdeki toggle tanımlaması
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // mobildeki görüntüsü
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
      KİŞİSEL WEB SAYFAMA HOŞGELDİNİZ 
      </Typography>
      <Divider />
      <List sx={{ flexGrow: 2, display: 'flex'}}>
        
          <ListItem >
            <ListItemButton >
              <ListItemText>Giriş </ListItemText>
              <ListItemText>Hakkimda </ListItemText>
              <ListItemText>Projeler </ListItemText>
              <ListItemText>İletişim </ListItemText>
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Box sx={{ textAlign:"center",  marginLeft:5,  spacing: 5 }}> 
            <ListItem > 
              <img src={Picture1} alt='img' width="100px"/>
              <Typography sx={{  marginLeft:15 }}>KİŞİSEL WEB SAYFAMA HOŞGELDİNİZ </Typography> 
              </ListItem>
            </Box>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block'} ,flexGrow: 1,   textAlign:"center", spacing: 8 }}>
           
          <ListItem >
              <ListItemText >Giriş </ListItemText>
              <ListItemText>Hakkimda </ListItemText>
              <ListItemText>Projeler </ListItemText>
              <ListItemText>İletişim </ListItemText>
              </ListItem>
            
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
            keepMounted: true, 
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



export default DrawerAppBar;