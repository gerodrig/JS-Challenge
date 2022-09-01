import { FC } from "react";
import {  Box } from "@mui/material"
import { SortIcon } from "../../icons";

import { styled, alpha } from "@mui/material/styles"

import {
    DataGrid,
    gridClasses,
  } from '@mui/x-data-grid';


//DATA Grid
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

interface PeopleDataGridProps {
    data: any;
    isLoading: boolean;
    toggleRightDrawer: (row: any) => void;
}


export const PeopleDataGrid: FC<PeopleDataGridProps> =  ({data, isLoading, toggleRightDrawer}) => {
    return (
        <>
          {/* // data grid */}
          <Box sx={{ height: '90vh', width: '100%' }}>
            <StripedDataGrid
              loading={isLoading}
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
          </Box>
        </>
    )
}
