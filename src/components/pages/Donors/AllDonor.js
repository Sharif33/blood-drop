import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react';
import CountdownTimer from '../../Hooks/Countdown/CoundownTimer';
import MsgDonor from './MsgDonor';

const AllDonor = ({donor}) => {
  const{bloodGroup,name,lastDonate} = donor;
  const{phone} = donor.contact;
  const{district,city,zone} = donor.area;
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
                                <TableCell component="th" scope="row">{bloodGroup}</TableCell>
                                <TableCell>{name}</TableCell>
                                <TableCell>{phone}</TableCell>
                                <TableCell>{district}</TableCell>
                                <TableCell>{city}</TableCell>
                                <TableCell>{zone}</TableCell>
                                <TableCell><CountdownTimer lastDonate={lastDonate}/></TableCell>
                                <TableCell><Button variant="outlined" onClick={handleClickOpen}>message</Button></TableCell>
                                <TableCell>
                                    <MsgDonor
                                    donor={donor}
                                    open={open}
                                    handleClose={handleClose}
                                    />
                                </TableCell>
        </TableRow> 
        
        </>
        
    );
};

export default AllDonor;