import {  Box } from "@mui/material"
import { useDemoData } from "@mui/x-data-grid-generator";

import { PeopleToolBar, PeopleGrid } from './';

export const PeopleModule = () => {
    const { data, loading } = useDemoData({
        dataSet: 'Employee',
        rowLength: 200,
      });


    return (
    <>
     <Box component="main" sx={{ flexGrow: 1 }}>
        {/* PEOPLE TOOLBAR */}
        <PeopleToolBar />
        <PeopleGrid data={data} isLoading={loading} />
     </Box>
    </>
    )
}
