
/* import { Avatar } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles'; */
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MailIcon from '@mui/icons-material/Mail';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';
import {  NavLink } from 'react-router-dom';
import "./Header.css";
// import SearchNav from './SearchNav';
import { Drawer, Box } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import SearchNav from './SearchNav';

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  /*   const { user, logOut } = useAuth();
    const [users] = useUser(); */
 

    return (
    <div>
        <div style={{marginBottom:"76px"}} className="header">
            <div className="header-inner">
                <nav className="navbar py-3 fixed-top ms-auto bg-light">
                 <div className="container">
                        <div>
                            <div className='d-flex  justify-content-evenly'>
                            <div className='m-auto'>
                                <div>
                                    <IconButton onClick={() => setIsDrawerOpen(true)}
                                    // sx={{ mr: 2, display: { sm: 'none' } }}
                                    sx={{color:"#D7E1F7"}}
                                    size='large'
                                    edge='start'
                                    aria-label='logo'>
                                    <MenuIcon />
                                    </IconButton>  
                                </div>
                                <div>
                                <Drawer
                                    anchor='left'
                                    open={isDrawerOpen}
                                    onClose={() => setIsDrawerOpen(false)}>
                                    <Box  width='250px' role='presentation' textAlign='center'>
                                        <div className="p-2 text-end">
                                            <button className='me-4 fw-boldtext-danger' onClick={() => setIsDrawerOpen(false)}><CloseIcon/></button>
                                        </div>
                                    <ul className="navbar-nav">
                                        <li className="nav-item my-auto small-search">
                                            <NavLink className='me-4 fw-bold w-100 mb-2' style={({isActive})=> ({color: isActive ? '#DF2443' : '#637381', textDecoration: isActive ?'none' : 'none'})} to={`/compare`} >
                                            <IconButton aria-label="compare">
                                            {/* <StyledBadge badgeContent={addToCompare?.length} color="error">
                                            <MdCompareArrows className='text-dark' />
                                            </StyledBadge> */}
                                            </IconButton>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item my-auto">
                                            <NavLink className='me-4 fw-bold w-100 mb-2 text-start' style={({isActive})=> ({color: isActive ? '#DF2443' : '#637381', textDecoration: isActive ?'none' : 'none'})} to="/"><HomeIcon className='mx-3'/> Home</NavLink>
                                        </li>
                                        <li className="nav-item my-auto">
                                            <NavLink className='me-4 fw-bold w-100 mb-2 text-start' style={({isActive})=> ({color: isActive ? '#DF2443' : '#637381', textDecoration: isActive ?'none' : 'none'})} to="/mobiles"><ShoppingBagIcon className='mx-3'/> Shop</NavLink>
                                        </li>
                                        <li className="nav-item my-auto">
                                            <NavLink className='me-4 fw-bold w-100 mb-2 text-start' style={({isActive})=> ({color: isActive ? '#DF2443' : '#637381', textDecoration: isActive ?'none' : 'none'})} href="#contact" to="/contact"><MailIcon className='mx-3'/> Contact</NavLink>
                                        </li>
                                        <li className="nav-item my-auto">
                                            <NavLink className='me-4 fw-bold w-100 mb-2 text-start' style={({isActive})=> ({color: isActive ? '#DF2443' : '#637381', textDecoration: isActive ?'none' : 'none'})} to="/about"><GroupsIcon className='mx-3'/> About</NavLink>
                                        </li>
                                     </ul>
                                    </Box>
                                </Drawer>  
                               </div>
                            </div>

                            <div className='m-auto'>
                                    <NavLink className="navbar-brand fw-bold fs-3 text-danger" to="/home">BLOOD</NavLink>
                            </div>   
                         </div>
                        </div>
                        
                                <div className=''>                      
                                    <div className='small-search m-auto'>
                                         <NavLink className='mx-1 btn' style={{textDecoration:"none"}} to="/search"><span><SearchIcon className='text-danger'/></span></NavLink>
                                    </div>
                                    <Box  sx={{ display: { sm: 'none', md:"block", xs:"none"} }}>
                                         <ul className='nav'>
                                     
                                        <li className="nav-item my-auto">
                                            <NavLink className='me-4 fw-bold w-100 text-start' style={({isActive})=> ({color: isActive ? '#DF2443' : '#637381', textDecoration: isActive ?'none' : 'none'})} to="/">HOME</NavLink>
                                        </li>
                                        <li className="nav-item my-auto">
                                            <NavLink className='me-4 fw-bold w-100 text-start' style={({isActive})=> ({color: isActive ? '#DF2443' : '#637381', textDecoration: isActive ?'none' : 'none'})} to="/mobiles">ABOUT US</NavLink>
                                        </li>
                                        <li className="nav-item my-auto">
                                            <NavLink className='me-4 fw-bold w-100 text-start' style={({isActive})=> ({color: isActive ? '#DF2443' : '#637381', textDecoration: isActive ?'none' : 'none'})} href="#contact" to="/contact">CAMPAIGN</NavLink>
                                        </li>
                                        <li className="nav-item my-auto">
                                            <NavLink className='me-4 fw-bold w-100 text-start' style={({isActive})=> ({color: isActive ? '#DF2443' : '#637381', textDecoration: isActive ?'none' : 'none'})} to="/donors">DONOR</NavLink>
                                        </li>
                                        <li className="nav-item my-auto">
                                            <NavLink className='me-4 fw-bold w-100 text-start' style={({isActive})=> ({color: isActive ? '#DF2443' : '#637381', textDecoration: isActive ?'none' : 'none'})} to="/about">BLOG</NavLink>
                                        </li>
                                        <li className="nav-item my-auto">
                                            <NavLink className='me-4 fw-bold w-100 text-start' style={({isActive})=> ({color: isActive ? '#DF2443' : '#637381', textDecoration: isActive ?'none' : 'none'})} to="/about">CONTACT</NavLink>
                                        </li>
                                        <li className="nav-hidder">
                                            <SearchNav/>
                                        </li>
                                        </ul>
                                        <div className=''>
                                                
                                    </div>
                                    </Box>
                                       
                                </div>   
                            </div>
                            
                                        
                                
                       
                    </nav>
                   
                </div>
                
            </div>
             {/* <BottomHeader/> */}
        </div>
    );
};

export default Header;