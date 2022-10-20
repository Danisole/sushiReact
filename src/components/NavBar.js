import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';
import CartWidget from './CartWidget';
import DrawerComp from './DrawerComp';
import logoAppBar from '../assets/img/Logotipo_sushi_moderno_negro-removebg-preview.png'


const PAGES  =["Home","Nosotros", "Productos", "Contactanos"]

const NavBar = () => {
  const [value, setValue] = useState();
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar sx={{background:"#393d3f", color:"white"}}>
      <Toolbar >
        <Typography>
          <img src={logoAppBar} alt='logoSushi' style={{ width: 70, height:"auto" }} />
        </Typography>
        
          {
            isMatch?(
              <>
              <DrawerComp />
              </>
            ):(
              <>
              <Tabs

          sx={{margin: 'auto'}}
          textColor="inherit"
          value={value} 
          onChange={(e,value)=> setValue(value)}
          indicatorColor="secondary">
            {
              PAGES.map((page, index)=>(
                <Tab key={index} label={page} />
              ))
            }
         
        </Tabs>
        
              </>
            )
          }
        <CartWidget/>
      </Toolbar>
      
    </AppBar>
    
  )
}

export default NavBar