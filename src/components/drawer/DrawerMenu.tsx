import MuiDrawer from '@mui/material/Drawer';
import {
    styled,
    Theme,
    CSSObject,
  } from '@mui/material/styles';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Avatar, Box, Divider, IconButton, List, Typography } from '@mui/material';
import { AssessmentRoundedIcon, AssignmentTurnedInRoundedIcon, BusinessRoundedIcon, ChevronRightIcon, CloseRoundedIcon, EmailRoundedIcon, HomeIcon, KeyboardDoubleArrowRightRoundedIcon, ModeStandbyRoundedIcon, MoreHorizRoundedIcon, PersonRoundedIcon, PieChartRoundedIcon, PlayCircleOutlineRoundedIcon, SettingsRoundedIcon, WorkRoundedIcon } from '../icons';
import { MenuIconComponent } from '../MenuIcon';
import { FC } from 'react';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

interface DrawerMenuProps {
    open: boolean;
    handleDrawerOpen: () => void;
}


export const DrawerMenu: FC<DrawerMenuProps> = ({open, handleDrawerOpen}) => {
    return (
        <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{display: 'flex', justifyContent: 'space-between' }}>
            { open &&
                <>
                    <Box sx={{ml: '0.5rem', mr: 0}}>
                    <Avatar alt="Gerardo Rodriuez" src="https://www.gerar.ca/_next/image?url=%2Fassets%2FprofilePhoto.png&w=640&q=75" />
                    </Box>
                    <Box sx={{ml: '-1rem'}}>
                    <Typography variant="subtitle1" noWrap component="div" sx={{color: '#d7dde1'}}>Gerardo R</Typography>
                    <Typography variant="caption" noWrap component="div" sx={{color: '#d7dde1'}}>Copper</Typography>
                    </Box>
                </>
            }
          <IconButton onClick={handleDrawerOpen}>
            {!open ? (
              <ChevronRightIcon sx={{ color: 'white' }} />
            ) : (
              <CloseRoundedIcon sx={{ color: 'white' }} />
            )}
          </IconButton>
        </DrawerHeader>
        <List>
          <MenuIconComponent name="Dashboard" isOpen={open}>
            <HomeIcon />
          </MenuIconComponent>
          <Divider sx={{ background: '#948b9b' }} />

          <MenuIconComponent name="Leads" isOpen={open}>
            <ModeStandbyRoundedIcon />
          </MenuIconComponent>

          <MenuIconComponent name="People" isOpen={open}>
            <PersonRoundedIcon />
          </MenuIconComponent>

          <MenuIconComponent name="Companies" isOpen={open}>
            <BusinessRoundedIcon />
          </MenuIconComponent>

          <MenuIconComponent name="Pipelines" isOpen={open}>
            <KeyboardDoubleArrowRightRoundedIcon />
          </MenuIconComponent>

          <MenuIconComponent name="Projects" isOpen={open}>
            <WorkRoundedIcon />
          </MenuIconComponent>
        </List>
        <Divider sx={{ background: '#948b9b' }} />

        <List>
          <MenuIconComponent name="Tasks" isOpen={open}>
            <AssignmentTurnedInRoundedIcon />
          </MenuIconComponent>

          <MenuIconComponent name="Marketing Tools" isOpen={open}>
            <PlayCircleOutlineRoundedIcon />
          </MenuIconComponent>

          <MenuIconComponent name="My Tracked Emails" isOpen={open}>
            <EmailRoundedIcon />
          </MenuIconComponent>

          <MenuIconComponent name="Reports" isOpen={open}>
            <PieChartRoundedIcon />
          </MenuIconComponent>

          <MenuIconComponent name="Legacy Reports" isOpen={open}>
            <AssessmentRoundedIcon />
          </MenuIconComponent>
        </List>
        <Divider sx={{ background: '#948b9b' }} />
        <List>
          <MenuIconComponent name="Settings" isOpen={open}>
            <SettingsRoundedIcon />
          </MenuIconComponent>
        </List>
        {open && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'absolute',
              width: '100%',
              bottom: 0,
              textAlign: 'center',
              paddingLeft: '1.5rem',
              paddingRight: '1rem',
            }}>
            <Typography
              sx={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>
              :copper
            </Typography>

            <IconButton>
              <MoreHorizRoundedIcon sx={{ color: 'white' }} />
            </IconButton>
          </Box>
        )}
      <DrawerHeader />
      </Drawer>
    )
}
