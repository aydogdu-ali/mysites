import React from 'react'
import Typography from '@mui/material/Typography';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Profil from "../assets/profil.jpg"
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';


const Main = () => {
  return (
    <>
    <Typography variant="h6" sx={{ my: 2, color: "green" }}>
    KİŞİSEL WEB SAYFAMA HOŞGELDİNİZ 
    </Typography>
    <Typography variant="h6" sx={{ my: 1, mb:5 }}>
    Web Developer(React-Django)  
    </Typography>

    <Grid container spacing={2} justifyContent="center" alignItems="center">
        
    <Grid item xs={12} sm={6} md={4}>
              <Card>
                
                 
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     Hakkımda
                    </Typography>
                    <Typography variant="h6" color="secondary">
                        Herkese Merhaba,
                        
                     
                    </Typography>
                    <Typography variant="body1" color="secondary">
                        
                        Yazılım öğrenme sürecimi 2 yıldır sürdürüyorum. Kendimi geliştiriyorum. Bu alanın sonu olmadığı aşikar ancak bununla birlikte React ve Django alanlarında uzmanlaşmaya çalışıyorum.  
                     
                    </Typography>
                  </CardContent>
              
               
                  
               
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
              
                  <Typography> 
                  <img src={Profil} alt="img"/>   
                  </Typography>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     
                    </Typography>
                  </CardContent>
               
               
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
               
                 
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     Kişisel Bilgiler
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     Ali
                    </Typography><Typography variant="body2" color="text.secondary">
                     Lokasyon: Kocaeli
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     Bildiğim Teknolojiler:
                     <Box> 
                     <ListItem >
           
              <ListItemText>HTML </ListItemText>
              <ListItemText>CSS-SASS </ListItemText>
              <ListItemText>BOOSTSTRAP-MUI </ListItemText>
              <ListItemText>REACT </ListItemText>
              <ListItemText>DJANGO </ListItemText>
           
          </ListItem>
          </Box>
                    </Typography>
                  </CardContent>
              
               
              </Card>
            </Grid>
          
       
      </Grid>

    </>
  )
}

export default Main