import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const MsgDonor = ({donor,open,handleClose}) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    // Post Msg
    const { register, handleSubmit, reset, } = useForm();
    const date = new Date().toLocaleDateString();
    const time = new Date().getTime().toLocaleString();

    // const [request, setRequest] = useState([]);
    // console.log(request);
    const navigate = useNavigate();

   const onSubmit = data => {
        // console.log(data);
        data.donor = donor;
        data.donor.date = new Date().toLocaleDateString();
        data.donor.time = new Date().getTime().toLocaleString();
    

        axios.post(`http://localhost:5000/msgForDonor`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Msg sent successfully');
                    // setRequest(data);
                    reset();
                    navigate(`/donors`)
                }
            })
    }
    return (
        <div>
            <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            >
            <DialogTitle id="responsive-dialog-title">
            </DialogTitle>
            <DialogContent>
            <DialogContentText>
            <div style={{backgroundColor:"#EAEDF1"}}>
                    <div style={{backgroundColor:"#fe3c47"}}>
                        <h3 className='py-4 text-center text-white'>REQUEST BLOOD DONOR</h3>
                    </div>
                    {
                        donor && <form className='input-group' onSubmit={handleSubmit(onSubmit)}>
                      <div className="row m-auto">
                      <div className="col-sm-12 col-md-6">
                        <div className="form-floating mb-1">
                          <input  id="floatingInput2" className="form-control border-0 rounded-0  w-100"  {...register("rqstrFullName")} placeholder='Name' />
                          <label className='text-secondary' htmlFor="floatingInput2">Name</label>
                        </div>

                        <div className="form-floating mb-1">
                          <input  id="floatingInput3" className="form-control border-0 rounded-0  w-100 "  {...register("rqstrPatientName")} placeholder="Patient Name"/>
                          <label className='text-secondary' htmlFor="floatingInput3">Patient Name</label>
                        </div>
                        
                        <div className="form-floating mb-1">
                          <input  id="floatingInput4" className="form-control border-0 rounded-0  w-100 "  {...register("rqstrDisease")} placeholder="Patient's disease" />
                          <label className='text-secondary' htmlFor="floatingInput4">Patient's disease</label>
                        </div>
                        
                        <div className="form-floating mb-1">
                          <input  id="floatingInput5" className="form-control border-0 rounded-0  w-100"  {...register("rqstrAddress")} placeholder='Full Address' />
                          <label className='text-secondary' htmlFor="floatingInput5">Full Address</label>
                        </div>

                        <div className="form-floating mb-1">
                          <input  id="floatingInput" className="form-control border-0 rounded-0  w-100"  {...register("rqstrRwp")} placeholder='Your Relation With Patient' />
                          <label className='text-secondary' htmlFor="floatingInput">Your Relation With Patient</label>
                        </div>
                        
                        <div className="form-floating mb-1">
                          <input  id="floatingInput6" className="form-control border-0 rounded-0  w-100 " type="number" {...register("rqstrContact")} placeholder='Phone number' required />
                          <label className='text-secondary' htmlFor="floatingInput6">Phone Number</label>
                        </div>     
                        </div>

                        <div className="col-sm-12 col-md-6">
                        <div className="form-floating mb-1">
                          <input  id="floatingInput7" className="form-control border-0 rounded-0  w-100 "  {...register("rqstrBloodGroup")} placeholder='Blood Group' />
                          <label className='text-secondary' htmlFor="floatingInput7">Blood Group</label>
                        </div>

                        <div className="form-floating mb-1">
                          <input  id="floatingInput8" className="form-control border-0 rounded-0  w-100 " type="number" min='1' {...register("rqstrBloodBag",{ required: true })} placeholder="How many bag do you need?" />
                          <label className='text-secondary' htmlFor="floatingInput8">How many bag do you need?</label>
                        </div>
                        
                        <div className="form-floating mb-1">
                          <input  id="floatingInput9" className='form-control border-0 rounded-0  w-100' defaultValue={date} type="date"  {...register("rqstrDate")} required />
                          <label className='text-secondary' htmlFor="floatingInput9">When need? (Date)</label>
                        </div>        
                    
                        <div className="form-floating mb-1">
                          <input  id="floatingInput10" className='form-control border-0 rounded-0  w-100' defaultValue={time} type="time"  {...register("rqstrTime", { required: true })} />
                          <label className='text-secondary' htmlFor="floatingInput10">When need? (time)</label>
                        </div>
                       
                        <div className="form-floating mb-1">
                        <select id="floatingInput11" className='form-select border-0 rounded-0  w-100' {...register("rqstrArea", { required: true })}>
                        <option defaultValue={""}></option>
                        <option value="Cumilla">Cumilla</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattogram">Chattogram</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Mymansingh">Mymansingh</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Rajshahi">Rajshahi</option>
                        </select>
                          <label className='text-secondary' htmlFor="floatingInput11">Select Area</label>
                        </div>
                       
                        <div className="form-floating mb-1">
                          <input  id="floatingInput12" className="form-control border-0 rounded-0  w-100" {...register("rqstrHospital")} placeholder="Hospital name" />
                          <label className='text-secondary' htmlFor="floatingInput12">Hospital Name</label>
                        </div>

                        </div>

                         <div className="mb-2">
                          <input className='form-control form-control-lg rounded-0'  id="imgUpload formFileLg" accept="image/*" type="file" />   
                        </div>       
                      <div className="mx-auto">
                        <textarea className="form-control border-0 rounded-0 w-100" {...register("rqstrMsg")} placeholder="Your Message" />
                      </div>
                        
                      </div>

                      <div className="text-center ms-auto pt-4">
                            <button className='btn btn-danger rounded-0 ' type="submit">Send Message</button>
                      </div>   
                    </form>
                    }
                    
                </div>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} autoFocus>
                Cancel
            </Button>
            </DialogActions>
            </Dialog>
    </div>
    );
};

export default MsgDonor;