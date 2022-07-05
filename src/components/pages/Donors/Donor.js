import { Avatar } from '@mui/material';
import React, { useContext } from 'react';
import { Nearest } from '../../Contexts/NearestProvider';
import { BiMapPin } from "react-icons/bi";
import CountdownTimer from '../../Hooks/Countdown/CoundownTimer';

const Donor = ({donor}) => {
    const {name,bloodGroup,lastDonate,area,image,donation}=donor;

    const {nearest,setNearest} = useContext(Nearest);
    return (
        <div>
            <div className="col mb-2 rounded ribbon">
                <div className="card bg-light shadow border-0 h-100">
                <div className="d-flex justify-content-between align-items-center">

                    <div className="app-download text-center">
                    <label className="fa-mobile-phone bounce text-light">{bloodGroup}</label>
                        </div>
                        <span className="p-2 border-0 btn-bg position-absolute text-end rounded-0 w-100 top-0 "> {donation} Times Donate </span>
                    </div>

                    <div className='p-4'>
                            <div className="d-flex justify-content-evenly align-items-center">
                               <Avatar src={image} alt='donar image' />
                                <div>
                                <h6>{name}</h6>
                                <small><BiMapPin className='text-info bounce'/> {area?.district}</small>
                            </div>
                            </div>
                        </div>
                        <div style={{height:"2rem"}}>
                                <CountdownTimer lastDonate={lastDonate}/>
                            </div>
                    <div>
                            {
                           nearest.includes(donor) ? (
                              <button onClick={()=>{setNearest(nearest.filter((c)=>c._id !== donor._id))}} className='btn btn-danger w-100 rounded-0'> Marked nearest </button>  
                            )
                            :
                            (
                            <button onClick={()=>{setNearest([...nearest,donor])}} className='btn btn-success w-100 rounded-0'> Mark as nearest </button>
                            )
                        }   
                                             
                        </div> 
                </div>
            </div>
        </div>
    );
};

export default Donor;