import { Badge, Box, Divider, InputBase, Typography } from "@mui/material"
import { AddRoundedIcon, ExplicitRoundedIcon, HelpRoundedIcon, NotificationsRoundedIcon, SearchIcon } from "../../icons"

export const PeopleToolBar = () => {
    return (
        <>
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
        </>

    )
}
