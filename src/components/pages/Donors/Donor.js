import React from 'react';

const Donor = ({donor}) => {
    const {name,bgrp,lastDonate,gender,area,image}=donor;
    return (
        <div>
            <div className="col mb-5 rounded">
                <div className="card card-hover bg-light shadow border-0 h-100">
                    <div className='row p-3 g-0'>
                    <div className='p-3 text-center'>
                    <div style={{marginTop:"-3.5rem"}} className='rounded fw-bold text-center bg-white text-danger'>
                            <h1>{bgrp}</h1>
                            </div>
                            <img style={{ width:"7rem"}} src={image} className="img-fluid rounded-circle p-2 m-3" alt="" />
                            <div>
                                <h4>{name}</h4>
                                <h4>Area: {area}</h4>
                                <h5>{gender}</h5> 
                                <p className="text-danger fw-bold">Last Donate : {lastDonate}</p>
                            </div>
                            
                            {/* <Box sx={{
                                '& > legend': { mt: 2 },
                            }}>
                                <Rating name="half-rating-read" precision={0.5} size="small" value={Number(star)} readOnly />
                            </Box> */}
                            {/* <div style={{ textAlign: "justify" }} className="p-2">
                                <p className="text-secondary">{specs}</p>
                            </div> */}

                        </div>
                        
                    </div>
                    <div className="d-flex justify-content-between">
                        {/* <Link to={`/mobile/${_id}`}><button className="btn btn-custom-2">OVERVIEW</button></Link>
                        <Link to={`/mobile2/${_id}`}><button className="btn btn-custom">BUY NOW</button></Link> */}
                        <button className='btn btn-custom w-100'>Request for donate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donor;