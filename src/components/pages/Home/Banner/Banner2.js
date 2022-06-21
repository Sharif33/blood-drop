import React from 'react';
import donor from '../../../../images/blood-donation.jpg';
import sample from '../../../../images/doctor-taking-blood.jpg';
import donate from '../../../../images/giving-blood.jpg';

const Banner2 = () => {
    return (
        <>
        <div className="container">
            <div className='row row-cols-1 row-cols-md-3 mx-2 g-4'>
            <div className="col banner2">
                <div className="bnr2 mx-3 text-center fw-bold p-4">
                    <h2>Become a <br /> Donor</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, ducimus.</p>
                    <button className='btn btn-lg btn-light rounded-pill px-5 py-3'> Donate </button>
                </div>
                <div>
                    <img className="img-fluid px-1" src={donor} alt="" />
                </div>
            </div>
            <div className="col banner2">
                <div className="bnr2 mx-3 text-center fw-bold p-4">
                    <h2>Become a <br /> Donor</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, ducimus.</p>
                    <button className='btn btn-lg btn-light rounded-pill px-5 py-3'> Donate </button>
                </div>
                <div>
                    <img className="img-fluid px-1" src={sample} alt="" />
                </div>
            </div>
            <div className="col banner2">
                <div className="bnr2 mx-3 text-center fw-bold p-4">
                    <h2>Become a <br /> Donor</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, ducimus.</p>
                    <button className='btn btn-lg btn-light rounded-pill px-5 py-3'> Donate </button>
                </div>
                <div>
                    <img className="img-fluid px-1" src={donate} alt="" />
                </div>
            </div>
            </div> 
        </div>
           
        </>
    );
};

export default Banner2;