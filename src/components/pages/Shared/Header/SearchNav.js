import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import useDonors from '../../../Hooks/Donors/useDonors';

const SearchNav = () => {
    const [donors] = useDonors();

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    const handleFilter = (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      const newFilter = donors.filter((value) => {
        return value.bgrp.toLowerCase().includes(searchWord.toLowerCase());
      });
  
      if (searchWord === "") {
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
      }
    };
  
  /*   const clearInput = () => {
      setFilteredData([]);
      setWordEntered("");
    }; */
    return (
        <div>
            <nav  className="nav">
                                <li className="nav-item">
                                        <div className="searchInputs input-group">
                                            <input
                                            className='form-control border-danger'
                                            type="search"
                                            placeholder="Search Blood Group"
                                            value={wordEntered}
                                            onChange={handleFilter}
                                            />
                                            <span className="input-group-text border-danger bg-danger text-light"><SearchIcon /></span>
                                            {/* <span className="searchIcon">
                                            {filteredData.length === 0 ? (
                                                <SearchIcon />
                                            ) : (
                                                <CloseIcon id="clearBtn" onClick={clearInput} />
                                            )}
                                            </span> */}
                                        </div>
                                        <div>
                                        {
                                         filteredData.length !== 0 && (
                                            <div className="dataResult rounded">
                                            {filteredData.slice(0, 15).map((value) => <div key={value?._id}>
                                            <ul className="list-group ">  
                                                <Link title='See Details' to={`/mobile/${value?._id}`}>
                                                    <li className="serchResult list-group-item d-flex justify-content-between align-items-center">
                                                        <small>{value?.bgrp}</small>
                                                    <span><img style={{width:"1.5rem"}} src={value?.image} alt="" className="img-fluid" /></span>
                                                    </li>         
                                                    </Link>
                                                </ul>
                                            </div>)}
                                            </div>)
                                        }
                                    </div>
                                       
                                </li>
            </nav>
        </div>
    );
};

export default SearchNav;