import React, { FC } from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

interface IMenu {
    isOpen: boolean;
    name: string;
    children: any;
}


export const MenuIconComponent: FC<IMenu> = ({name, isOpen, children}) => {
    return (
        <ListItem key={name} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: isOpen ? 'initial' : 'center',
            px: 2.5,
          }}>
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: isOpen ? 3 : 'auto',
              justifyContent: 'center',
              color: '#948b9b' 
            }}>
            {children}
          </ListItemIcon>
          <ListItemText primary={`${name}`} sx={{ opacity: isOpen ? 1 : 0, color: '#948b9b' }} />
        </ListItemButton>
        </ListItem>
    )
}
