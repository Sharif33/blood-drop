import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import bnr from "../../../images/rqstBnr.jpg"

const PostRequest = () => {
    const { register, handleSubmit, reset, } = useForm();
    const date = new Date().toLocaleDateString();
    const time = new Date().getTime().toLocaleString();

    const [request, setRequest] = useState([]);
    // console.log(request);

   const onSubmit = data => {
        // console.log(data);

        axios.post(`http://localhost:5000/requests`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    setRequest(data);
                    reset();
                    window.location.reload();
                }
            })
    }
    return (
        <>
        <div style={{backgroundColor:"#F5F5F5"}}>
         <div className='container'>
            <div className='row m-auto'>
                <div className="col-sm-12 col-md-6">
                    <img className='img-fluid' src={bnr} alt="" />
                </div>
                <div className="col-sm-12 col-md-6">
                <div style={{backgroundColor:"#EAEDF1"}}>
                    <div style={{backgroundColor:"#fe3c47"}}>
                        <h3 className='py-4 text-center text-white'>REQUEST BLOOD DONOR</h3>
                    </div>
                    {
                        request && <form className='input-group' onSubmit={handleSubmit(onSubmit)}>
                      <div className="row m-auto">
                      <div className="col-sm-12 col-md-6">
                        <div className="form-floating mb-2">
                          <input  id="floatingInput"  placeholder='email' className="form-control border-0 rounded-0 w-100"  {...register("email")} />
                          <label className='text-secondary' htmlFor="floatingInput">Email</label>
                        </div>

                        <div className="form-floating mb-2">
                          <input  id="floatingInput2" className="form-control border-0 rounded-0  w-100"  {...register("fullName")} placeholder='Name' />
                          <label className='text-secondary' htmlFor="floatingInput2">Name</label>
                        </div>

                        <div className="form-floating mb-2">
                          <input  id="floatingInput3" className="form-control border-0 rounded-0  w-100 "  {...register("patientName")} placeholder="Patient Name"/>
                          <label className='text-secondary' htmlFor="floatingInput3">Patient Name</label>
                        </div>
                        
                        <div className="form-floating mb-2">
                          <input  id="floatingInput4" className="form-control border-0 rounded-0  w-100 "  {...register("disease")} placeholder="Patient's disease" />
                          <label className='text-secondary' htmlFor="floatingInput4">Patient's disease</label>
                        </div>
                        
                        <div className="form-floating mb-2">
                          <input  id="floatingInput5" className="form-control border-0 rounded-0  w-100"  {...register("address")} placeholder='Full Address' />
                          <label className='text-secondary' htmlFor="floatingInput5">Full Address</label>
                        </div>
                        
                        <div className="form-floating mb-2">
                          <input  id="floatingInput6" className="form-control border-0 rounded-0  w-100 " type="number" {...register("contact")} placeholder='Phone number' required />
                          <label className='text-secondary' htmlFor="floatingInput6">Phone Number</label>
                        </div>
                       
                        <div className="mb-2">
                          <input className='form-control form-control-lg rounded-0'  id="imgUpload formFileLg" accept="image/*" type="file" />   
                        </div>      
                        </div>

                        <div className="col-sm-12 col-md-6">
                        <div className="form-floating mb-2">
                          <input  id="floatingInput7" className="form-control border-0 rounded-0  w-100 "  {...register("bloodGroup")} placeholder='Blood Group' />
                          <label className='text-secondary' htmlFor="floatingInput7">Blood Group</label>
                        </div>

                        <div className="form-floating mb-2">
                          <input  id="floatingInput8" className="form-control border-0 rounded-0  w-100 " type="number" min='1' {...register("bloodBag",{ required: true })} placeholder="How many bag do you need?" />
                          <label className='text-secondary' htmlFor="floatingInput8">How many bag do you need?</label>
                        </div>
                        
                        <div className="form-floating mb-2">
                          <input  id="floatingInput9" className='form-control border-0 rounded-0  w-100' defaultValue={date} type="date"  {...register("date")} required />
                          <label className='text-secondary' htmlFor="floatingInput9">When need? (Date)</label>
                        </div>        
                    
                        <div className="form-floating mb-2">
                          <input  id="floatingInput10" className='form-control border-0 rounded-0  w-100' defaultValue={time} type="time"  {...register("time", { required: true })} />
                          <label className='text-secondary' htmlFor="floatingInput10">When need? (time)</label>
                        </div>
                       
                        <div className="form-floating mb-2">
                        <select id="floatingInput11" className='form-select border-0 rounded-0  w-100' {...register("area", { required: true })}>
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
                       
                        <div className="form-floating mb-2">
                          <input  id="floatingInput12" className="form-control border-0 rounded-0  w-100" {...register("hospital")} placeholder="Hospital name" />
                          <label className='text-secondary' htmlFor="floatingInput12">Hospital Name</label>
                        </div>

                        <textarea className="form-control border-0 rounded-0  w-100" {...register("description")} placeholder="Description" />
                        </div>     
                      </div>

                      <div className="text-center m-auto pt-4">
                            <button className='btn btn-lg btn-danger rounded-0 ' type="submit">SEND REQUEST</button>
                      </div>   
                    </form>
                    }
                    
                </div>

                </div>
            </div>
             
           
        </div>   
        </div>
        
        </>
        
    );
};

export default PostRequest;