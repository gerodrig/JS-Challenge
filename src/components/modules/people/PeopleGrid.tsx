import { FC, useState } from "react";
import {  Box } from "@mui/material"

import { PeopleGridToolBar, PeopleDataGrid, PeopleRightDrawer } from './';

interface PeopleGridProps {
    data: any;
    isLoading: boolean;
}

export const PeopleGrid: FC<PeopleGridProps> = ({data, isLoading}) => {

    const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
    const [userData, setUserData] = useState<any>({});

    const toggleRightDrawer = (data: any) => {
      setRightDrawerOpen(true);
      setUserData(data);
    };

    return (
        <Box sx={{ display: 'flex', height: '100%' }}>
        <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
            <PeopleGridToolBar />
            <PeopleDataGrid data={data} isLoading={isLoading} toggleRightDrawer={toggleRightDrawer} />
            
        </Box>
            <PeopleRightDrawer open={rightDrawerOpen} userData={userData} closeRightDrawer={setRightDrawerOpen} />
      </Box>
    )
}
