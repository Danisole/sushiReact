import React, { useState } from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const PAGES  =["Home","Nosotros", "Productos", "Contactanos", "Login"]
const DrawerComp = () => {

    const [openDrawer, setOpenDrawer] = useState(false)
  return(
    <>
    
    <IconButton sx={{color: "white", margin: "auto"}} onClick={()=>setOpenDrawer(!openDrawer)}>
        <MenuIcon/>
    </IconButton>

    <Drawer open={openDrawer}
    onClose={() => setOpenDrawer(false)}
    
    >
        <List>
            {
                PAGES.map((page, index)=>(
                    <ListItemButton key={index} onClick={()=>setOpenDrawer(false)}>
                <ListItemIcon>
                    <ListItemText>{page}</ListItemText>
                </ListItemIcon>
            </ListItemButton>
                ))
            }
           
        </List>
    </Drawer>
    
    </>
  )
}

export default DrawerComp