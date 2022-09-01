
import {  Box, Divider, FormControl, Select, MenuItem } from "@mui/material"

export const PeopleGridToolBar = () => {
    return (
        <>
            {/* // toolbar for grid table  */}
             <Box
            sx={{ display: 'flex', justifyContent: 'start', py: '0.5rem' }}>
            
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
        </>
    )
}
