import React from 'react';
import donor from '../../../../images/blood-donation.jpg';
import sample from '../../../../images/doctor-taking-blood.jpg';
import donate from '../../../../images/giving-blood.jpg';

const Banner2 = () => {
    return (
        <>
        <div className="container">
            <div className='row row-cols-1 row-cols-md-3 mx-2 g-4'>
            <div className="col">    
                <div className='banner2'>
                    <img className="img-fluid" src={donor} alt="" />
                    <div className="bnr2  text-center p-4">
                    <h2 className='fw-bold py-2'>Become a <br /> Donor</h2>
                    <p className='p-3'>Giving blood is easy and safe. If you are generally fit and well, aged between 17 and 65, weight between 50kg and 158kg, have suitable veins can donate</p>
                    <button className='btn btn-lg btn-light rounded-pill px-5 py-3'> Donate </button>
                </div>
                </div>
            </div>
            <div className="col">       
                <div className=' banner2'>
                    <img className="img-fluid" src={sample} alt="" />
                     <div className="bnr2  text-center p-4">
                    <h2 className='fw-bold py-2'>Why Give <br /> Blood</h2>
                    <p className='p-3'>Blood is the most precious gift that anyone can give to another person – the gift of life. Donate your blood can save a life, or even several.</p>
                    <button className='btn btn-lg btn-light rounded-pill px-5 py-3'> Donate </button>
                </div>
                </div>
            </div>
            <div className="col">               
                <div className=' banner2'>
                    <img className="img-fluid" src={donate} alt="" />
                    <div className="bnr2  text-center p-4">
                    <h2 className='fw-bold py-2'>How Donations <br /> Help</h2>
                    <p className='p-3'>Regular blood donation is linked to lower blood pressure and a lower risk for heart attacks. It definitely helps to reduce cardiovascular risk factors</p>
                    <button className='btn btn-lg btn-light rounded-pill px-5 py-3'> Donate </button>
                </div>
                </div>
            </div>
            </div> 
        </div>
           
        </>
    );
};

export default Banner2;