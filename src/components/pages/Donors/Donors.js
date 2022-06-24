/* eslint-disable eqeqeq */
import { CircularProgress } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useDonors from '../../Hooks/Donors/useDonors';
import Donor from './Donor';


const Donors = () => {
    const [donors] = useDonors();
    return (
        <div>
            <div className="container mt-5">
                <div className="text-center pt-2">
                    <h1 className=" fw-bold text-primary p-2">Top Donors</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-4 m-2 g-4">
                    {donors.length == 0 ?
                        <div className="w-100 text-center">
                            <CircularProgress />
                        </div>
                        :
                        donors.map(donor => <Donor
                            key={donor._id}
                            donor={donor}
                        />)
                    }
                </div>
                <div className="text-center pt-4">
                    <Link to="/donors"><button className="btn btn-cart rounded-pill mb-5">View All</button></Link>
                </div>
            </div> 
        </div>
    );
};

export default Donors;