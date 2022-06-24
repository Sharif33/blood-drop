import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react';
import MsgDonor from './MsgDonor';

const AllDonor = ({donor}) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <>
        <TableRow hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }} tabIndex={-1}>
                                <TableCell component="th" scope="row">{donor?.bgrp}</TableCell>
                                <TableCell>{donor?.name}</TableCell>
                                <TableCell>{donor?.contact}</TableCell>
                                <TableCell>{donor?.area}</TableCell>
                                <TableCell>{donor?.area}</TableCell>
                                <TableCell>{donor?.area}</TableCell>
                                <TableCell>{donor?.lastDonate}</TableCell>
                                <TableCell><Button variant="outlined" onClick={handleClickOpen}>message</Button></TableCell>
                                <TableCell>
                                <React.Fragment>
                                    <MsgDonor
                                    donor={donor}
                                    open={open}
                                    handleClose={handleClose}
                                    />
                                </React.Fragment>
                                </TableCell>
        </TableRow> 
        
        </>
        
    );
};

export default AllDonor;