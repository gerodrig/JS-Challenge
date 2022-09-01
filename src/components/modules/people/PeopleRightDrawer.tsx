import { FC, useState } from "react";


import TabContext from '@mui/lab/TabContext';
import { TabList, TabPanel } from '@mui/lab';
import {  Box, FormControl, Select, Typography, MenuItem, IconButton, Avatar, Tab, InputLabel, Input, FormLabel, FormGroup, FormControlLabel, Checkbox} from "@mui/material"

import { ArrowForwardIcon, LaunchIcon, MoreVertIcon, StarOutlineIcon } from "../../icons";

interface PeopleRightDrawerProps {
    userData: any;
    open: boolean;
    closeRightDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

export const PeopleRightDrawer: FC<PeopleRightDrawerProps> = ({userData, open: rightDrawerOpen, closeRightDrawer }) => {

    //TABS
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    };

    return (
        <>
            {
          // easin the box appereance
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
                <IconButton onClick={() => closeRightDrawer(false)}>
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
        </>
    )
}
