
import { useState } from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { DrawerMenu } from './drawer/DrawerMenu';
import { PeopleModule } from './modules/people/PeopleModule';




export default function Menu() {

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <DrawerMenu open={open} handleDrawerOpen={handleDrawerOpen} />
      <PeopleModule />

    </Box>
  );
}
