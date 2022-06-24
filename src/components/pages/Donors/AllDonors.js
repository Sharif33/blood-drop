import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useDonors from '../../Hooks/Donors/useDonors';
import Header from '../Shared/Header/Header';
import AllDonor from './AllDonor';

const columns = [
    { id: 'bg',  label: 'BG', minWidth: 100, color:"#fe3c47" },
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'phone', label: 'Phone', minWidth: 100 },
    { id: 'dist', label: 'District', minWidth: 100 },
    { id: 'city', label: 'City', minWidth: 100 },
    { id: 'zone', label: 'Zone', minWidth: 100 },
    { id: 'ld', label: 'Last Donate', minWidth: 100 },
    { id: 'rqst', label: 'Message', minWidth: 100, color:"#fe3c47" },
  ];

const AllDonors = () => {
    const [donors] = useDonors();
    // Modal
   
    //Table
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

    return (
        <>
        <Header/>
        <div className='container'>
            <div>
                <div className='my-4'>
                    <h3>All Blood Donors List</h3>
                    <small>Total Happy Donors: {donors?.length}</small>
                </div>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: "80vh" }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth, color: column?.color }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                        <TableBody>
                        {donors
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((donor) => {
                            return (
                                <AllDonor key={donor._id} donor={donor}/>
                            );
                        })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[25, 50, 75, 100]}
                    component="div"
                    count={donors.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
        </>
        
    );
};

export default AllDonors;