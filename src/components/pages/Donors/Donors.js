/* eslint-disable eqeqeq */
import { CircularProgress } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useDonors from '../../Hooks/Donors/useDonors';
import Donor from './Donor';
import './Donors.css';


const Donors = () => {
    const [donors] = useDonors();
    return (
        <div>
            <div className="container mt-5">
                <div className="text-center pt-2">
                    <h1 className=" fw-bold text-primary p-2">Top Donors</h1>
                </div>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 m-2 g-4">
                    {donors.length == 0 ?
                        <div className="w-100 text-center">
                            <CircularProgress />
                        </div>
                        :
                        donors.sort((a,b)=>(a.donation < b.donation ? 1 : -1)).slice(0,15).map(donor => <Donor
                            key={donor._id}
                            donor={donor}
                        />)
                    }
                </div>
                <div className="text-center">
                    <Link to="/donors"><button className="btn btn-danger rounded-pill mb-5">See All Donors</button></Link>
                </div>
            </div> 
        </div>
    );
};

export default Donors;