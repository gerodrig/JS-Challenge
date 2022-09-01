import * as React from 'react';

import {
  styled,
  useTheme,
  Theme,
  CSSObject,
  alpha,
} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import {
    Avatar,
  Badge,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  IconButton,
  Input,
  InputBase,
  InputLabel,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Tab,
} from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LaunchIcon from '@mui/icons-material/Launch';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import ModeStandbyRoundedIcon from '@mui/icons-material/ModeStandbyRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import AssignmentTurnedInRoundedIcon from '@mui/icons-material/AssignmentTurnedInRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PieChartRoundedIcon from '@mui/icons-material/PieChartRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ExplicitRoundedIcon from '@mui/icons-material/ExplicitRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import {
  DataGrid,
  gridClasses,
  GridColDef,
  GridRowsProp,
  GridValueGetterParams,
} from '@mui/x-data-grid';

import { MenuIconComponent } from './MenuIcon';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import SortIcon from '@mui/icons-material/Sort';
import { useDemoData } from '@mui/x-data-grid-generator';

import TabContext from '@mui/lab/TabContext';
import { TabList, TabPanel } from '@mui/lab';
import InputUnstyled from '@mui/base/InputUnstyled';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { borderRadius } from '@mui/system';

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

const rows = [
  { id: 1, firstName: 'Jon', company: 'Snow', title: 'CEO', age: 35 },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42 },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 45 },
  { id: 4, firstName: 'Arya', lastName: 'Stark', age: 16 },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: null },
  { id: 6, firstName: null, lastName: 'Melisandre', age: 150 },
  { id: 7, firstName: 'Ferrara', lastName: 'Clifford', age: 44 },
  { id: 8, firstName: 'Rossini', lastName: 'Frances', age: 36 },
  { id: 9, firstName: 'Harvey', lastName: 'Roxie', age: 65 },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90, hide: true },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 300,
    editable: true,
  },
  {
    field: 'company',
    headerName: 'Company',
    width: 200,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 110,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 110,
    editable: true,
  },
  {
    field: 'ownedBy',
    headerName: 'Owned By',
    width: 110,
    editable: true,
  },
  {
    field: 'street',
    headerName: 'Street',
    width: 110,
    editable: true,
  },
  {
    field: 'created',
    headerName: 'Created',
    width: 110,
    editable: true,
  },
  {
    field: 'lastContacted',
    headerName: 'Last Contacted',
    width: 110,
    editable: true,
  },
];

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  },
}));

export default function Menu() {
  const { data, loading } = useDemoData({
    dataSet: 'Employee',
    rowLength: 200,
  });

  const [open, setOpen] = React.useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = React.useState(false);
  const [userData, setUserData] = React.useState<any>({});

  //TABS
  const [value, setValue] = React.useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const toggleRightDrawer = (data: any) => {
    setRightDrawerOpen(true);
    setUserData(data);
  };

  //   const handleDrawerClose = () => {
  //     setOpen(false);
  //   };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{display: 'flex', justifyContent: 'space-between' }}>
            { open &&
                <>
                    <Box sx={{ml: '0.5rem', mr: 0}}>
                    <Avatar alt="Gerardo Rodriuez" src="src/assets/avatar.jpeg" />
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
      </Drawer>
      <DrawerHeader />
      {/* //TODO: Implement a separate component for People navbar  */}
      <Box component="main" sx={{ flexGrow: 1, marginLeft: '-1rem' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: ' 0.5rem 1rem 0.5rem 1rem',
          }}>
          <Typography
            variant="h6"
            component="h1"
            sx={{ alignSelf: 'flex-end', borderBottom: '2px solid blue' }}>
            People
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '32rem',
              background: '#eaf0f3',
              pl: '1rem',
              borderRadius: '1rem',
            }}>
            <SearchIcon sx={{ color: '#948b9b', marginRight: '1rem' }} />
            {/* Implement a search bar with rounded corners  */}
            <InputBase
              placeholder="Search by name, email, domain or phone number"
              sx={{ width: '100%', fontSize: '1rem' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '8rem',
            }}>
            <AddRoundedIcon />
            <Badge badgeContent={47} color="error">
              <NotificationsRoundedIcon htmlColor="#0b0c0c" />
            </Badge>
            <ExplicitRoundedIcon htmlColor="#323944" />
            <HelpRoundedIcon htmlColor="#939798" />
          </Box>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', height: '100%' }}>
          <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
            <Box
              sx={{ display: 'flex', justifyContent: 'start', py: '0.5rem' }}>
              {/* //TODO: Implement a toolbar for grid table  */}
              
              <FormControl
                          variant="standard"
                          sx={{ width: '11rem', pl: '1rem', fontWeight: 'bold' }}>
                          <Select
                            labelId="showPeople"
                            id="showPeople"
                            displayEmpty
                            value={''}
                            label="showPeople"
                            disableUnderline
                            renderValue={(selected: string) => {
                              if (selected.length === 0) {
                                return <em>{`All People 156663`}</em>;
                              }

                              return selected;
                            }}>
                            <MenuItem disabled value="">
                              <em>-Select User-</em>
                            </MenuItem>
                            <MenuItem value={10}>User 1</MenuItem>
                            <MenuItem value={20}>User 2</MenuItem>
                            <MenuItem value={30}>User 3</MenuItem>
                          </Select>
                        </FormControl>

              <FormControl
                          variant="standard"
                          sx={{ width: '8rem', pl: '2rem', borderRadius: '1rem', background: '#2b40b2'}}>
                          <Select
                            labelId="addPeople"
                            id="addPeople"
                            displayEmpty
                            value={''}
                            label="addPeople"
                            disableUnderline
                            sx={{ color: 'white',fontWeight: 'bold',pt: '2px', fontSize: '12px', '.MuiSvgIcon-root ': {
                                fill: "white !important",
                              }}}
                            renderValue={(selected: string) => {
                              if (selected.length === 0) {
                                return <em>{`ADD NEW`}</em>;
                              }

                              return selected;
                            }}>
                            <MenuItem disabled value="">
                              <em>-Add User-</em>
                            </MenuItem>
                            <MenuItem value={10}>User 1</MenuItem>
                            <MenuItem value={20}>User 2</MenuItem>
                            <MenuItem value={30}>User 3</MenuItem>
                          </Select>
                        </FormControl>


            </Box>
            <Divider />
            {/* //TODO: Implement the data grid */}
            <Box sx={{ height: '90vh', width: '100%' }}>
              <StripedDataGrid
                loading={loading}
                {...data}
                onRowClick={({ row }) => toggleRightDrawer(row)}
                components={{
                  ColumnSortedAscendingIcon: () => (
                    <SortIcon sx={{ color: 'blue' }} />
                  ),
                  ColumnSortedDescendingIcon: () => (
                    <SortIcon
                      sx={{ transform: 'rotate(180deg)', color: 'blue' }}
                    />
                  ),
                }}
                getRowClassName={(params) =>
                  params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                }
              />
              {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        components={{
            ColumnSortedAscendingIcon: () => <SortIcon sx={{color: 'blue'}} />,
            ColumnSortedDescendingIcon: () => <SortIcon sx={{transform: 'rotate(180deg)', color: 'blue'}} />,
        }}
        /> */}
            </Box>
          </Box>
          {
            //TODO: easin the box appereance
            rightDrawerOpen && (
              <Box
                sx={{
                  background: 'white',
                  //   boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                  border: '1px solid #eaf0f3',
                  width: '20rem',
                  display: 'flex',
                  flexDirection: 'column',
                  pl: '1rem',
                  transition: 'all 5s ease',
                }}>
                <Box sx={{ display: 'flex' }}>
                  <IconButton onClick={() => setRightDrawerOpen(false)}>
                    <ArrowForwardIcon />
                  </IconButton>
                  <Box sx={{ flexGrow: 1 }}></Box>
                  <IconButton>
                    <LaunchIcon />
                  </IconButton>

                  <IconButton>
                    <StarOutlineIcon />
                  </IconButton>

                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </Box>
                <Box sx={{ display: 'flex' }}>
                <Avatar sx={{ bgcolor: userData.avatar, mr: '1rem'}}>{userData.name[0].toUpperCase()}</Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      component="h1"
                      sx={{ overflow: 'hidden' }}>
                        
                      { userData.name ?? ''}
                    </Typography>
                    <Typography variant="caption" component="h1">
                      {userData.company.length > 24 ? userData.company.slice(0, 24) + '...' : userData.company}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example">
                        <Tab label="Details" value="1" />
                        <Tab label="Activity" value="2" />
                        <Tab label="Related" value="3" />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 1,
                        }}>
                        <FormControl variant="standard">
                          <InputLabel htmlFor="name" shrink={true}>
                            Name
                          </InputLabel>
                          <Input
                            id="name"
                            value={userData.name}
                            disableUnderline
                          />
                        </FormControl>
                        <FormControl variant="standard">
                          <InputLabel htmlFor="company" shrink={true}>
                            Company
                          </InputLabel>
                          <Input
                            id="company"
                            value={userData.company}
                            disableUnderline
                          />
                        </FormControl>
                        <FormControl variant="standard">
                          <InputLabel htmlFor="title" shrink={true}>
                            Title
                          </InputLabel>
                          <Input
                            id="title"
                            value={userData.title}
                            placeholder="Add Title"
                            disableUnderline
                          />
                        </FormControl>
                        <FormControl variant="standard">
                          <InputLabel htmlFor="workEmail" shrink={true}>
                            Work Email
                          </InputLabel>
                          <Input
                            id="workEmail"
                            value={userData.email}
                            placeholder="Work Email"
                            disableUnderline
                          />
                        </FormControl>
                        <FormControl variant="standard">
                          <InputLabel htmlFor="phone" shrink={true}>
                            Work Phone
                          </InputLabel>
                          <Input
                            id="phone"
                            value={userData.phone}
                            placeholder="Work Phone"
                            disableUnderline
                          />
                        </FormControl>

                        {/* Rating */}
                        <FormControl
                          variant="standard"
                          sx={{ minWidth: 120, width: '100%' }}>
                          <InputLabel id="Rating" shrink={true}>
                            Rating
                          </InputLabel>
                          <Select
                            labelId="rating"
                            id="rating"
                            displayEmpty
                            value={''}
                            label="Rating"
                            disableUnderline
                            renderValue={(selected: string) => {
                              if (selected.length === 0) {
                                return <em>-Select Rating-</em>;
                              }

                              return selected;
                            }}>
                            <MenuItem disabled value="">
                              <em>-Select Rating-</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>

                        {/* Status */}
                        <FormControl
                          variant="standard"
                          sx={{ minWidth: 120, width: '100%' }}>
                          <InputLabel id="status" shrink={true}>
                            Status
                          </InputLabel>
                          <Select
                            labelId="status"
                            id="status"
                            displayEmpty
                            value={''}
                            label="Status"
                            disableUnderline
                            renderValue={(selected: string) => {
                              if (selected.length === 0) {
                                return <em>-Select Status-</em>;
                              }

                              return selected;
                            }}>
                            <MenuItem disabled value="">
                              <em>-Select Status-</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>

                        {/* Recycled Reasons */}
                        <FormControl
                          variant="standard"
                          sx={{ minWidth: 120, width: '100%' }}>
                          <InputLabel id="recycledReasons" shrink={true}>
                            Recycled Reasons
                          </InputLabel>
                          <Select
                            labelId="recycledReasons"
                            id="recycledReasons"
                            displayEmpty
                            value={''}
                            label="recycledReasons"
                            disableUnderline
                            renderValue={(selected: string) => {
                              if (selected.length === 0) {
                                return <em>-Select Recycled Reasons-</em>;
                              }

                              return selected;
                            }}>
                            <MenuItem disabled value="">
                              <em>-Select Recycled Reasons-</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl variant="standard">
                          <InputLabel htmlFor="owner" shrink={true}>
                            Owner
                          </InputLabel>
                          <Input
                            id="owner"
                            value={userData.email}
                            placeholder="Add Owner"
                            disableUnderline
                          />
                        </FormControl>

                        {/* AE Assignee */}
                        <FormControl
                          variant="standard"
                          sx={{ minWidth: 120, width: '100%' }}>
                          <InputLabel id="aeAssignee" shrink={true}>
                            AE Assignee
                          </InputLabel>
                          <Select
                            labelId="aeAssignee"
                            id="aeAssignee"
                            displayEmpty
                            value={''}
                            label="aeAssignee"
                            disableUnderline
                            renderValue={(selected: string) => {
                              if (selected.length === 0) {
                                return <em>-Select AE Assignee-</em>;
                              }

                              return selected;
                            }}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl component="fieldset">
                          <FormLabel component="legend">
                            Account Owner
                          </FormLabel>
                          <FormGroup aria-label="position" row>
                            <FormControlLabel
                              value="true"
                              control={<Checkbox />}
                              label=""
                            />
                          </FormGroup>
                        </FormControl>

                        <FormControl variant="standard">
                          <InputLabel htmlFor="companySize" shrink={true}>
                            Company Size
                          </InputLabel>
                          <Input
                            id="companySize"
                            value={500}
                            placeholder="Company Size"
                            disableUnderline
                          />
                        </FormControl>
                      </Box>
                    </TabPanel>
                    <TabPanel value="2">Activity</TabPanel>
                    <TabPanel value="3">Related</TabPanel>
                  </TabContext>
                </Box>
              </Box>
            )
          }
        </Box>
      </Box>
    </Box>
  );
}
