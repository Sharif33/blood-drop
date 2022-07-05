import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Header from '../Shared/Header/Header';
import AllDonor from './AllDonor';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const columns = [
    { id: 'bg',  label: 'BG', maxWidth: 100, color:"#fe3c47" },
    { id: 'name', label: 'Name', maxWidth: 100 },
    { id: 'phone', label: 'Phone', maxWidth: 100 },
    { id: 'dist', label: 'District', maxWidth: 100 },
    { id: 'city', label: 'City', maxWidth: 100 },
    { id: 'zone', label: 'Zone', maxWidth: 100 },
    { id: 'ld', label: 'Next Donation In', maxWidth: 100 },
    { id: 'rqst', label: 'Message', color:"#fe3c47" },
  ];

const AllDonors = () => {
    const [donors, setDonors] = React.useState([]);
    const [fDonors, setFdonors] = React.useState([]);
    const [spinner,setSpinner] = React.useState(true);

    // tab
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    React.useEffect(() => {
        setTimeout(() => setSpinner(false), 1500)
      }, []);

    React.useEffect(() => {
        let isMounted = true;
       
          try {
            async function callApi() {
                let data = await fetch(`http://localhost:5000/donors`);
                data = await data.json();
                if(isMounted ){ 
                setDonors(data);
                setFdonors(data);
                 }
            }
            callApi(); 
            return () => {
            isMounted = false;
            };
        }
        catch (error) {
            console.log ('error',error)
          }  
       
        
    }, []);

    const filterResult = (bloodGroup) => {
      const result = donors.filter(currentData => {
          return currentData.bloodGroup === bloodGroup;
      });
      setFdonors(result);
    //   console.log(result)
  }
   
    //Table
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(25);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
        setPage(0);
      };

    return (
        <>
        <Header/>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12 col-md-3 my-4'>
                    <h3>All Blood Donors List</h3>
                    <small>Total Happy Donors: {fDonors?.length}</small>
                </div>
                <div className='col-sm-12 col-md-9 my-4 text-center'>
                     <Box sx={{ bgcolor: 'background.paper', }}>
                    {/* <h4 className=''>Filter Blood Group</h4> */}
                    <Tabs  variant="scrollable"
                    textColor="primary"
                    indicatorColor="secondary"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example" value={value} onChange={handleChange}>
                        <Tab onClick={()=>setFdonors(donors)} label="All" />
                        <Tab onClick={()=>filterResult('A+')} label="A+" />
                        <Tab onClick={()=>filterResult('A-')} label="A-" />
                        <Tab onClick={()=>filterResult('B+')} label="B+" />
                        <Tab onClick={()=>filterResult('B-')} label="B-" />
                        <Tab onClick={()=>filterResult('AB+')} label="AB+" />
                        <Tab onClick={()=>filterResult('AB-')} label="AB-" />
                        <Tab onClick={()=>filterResult('O+')} label="O+" />
                        <Tab onClick={()=>filterResult('O-')} label="O-" />
                    </Tabs>
                </Box>
                </div>
               
            </div>
            {
                !spinner ? <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: "80vh" }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ maxWidth: column.maxWidth, color: column?.color, fontSize:"1.1rem" }}
                            >
                            {column.label}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                        <TableBody>
                        {fDonors
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .sort((a,b)=>(a?.bloodGroup > b?.bloodGroup ? 1 : -1)).map((donor) => {
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
                    count={fDonors.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            :
            <CircularProgress/>
            }
            
        </div>
        </>
        
    );
};

export default AllDonors;