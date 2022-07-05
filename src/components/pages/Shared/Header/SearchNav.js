import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";
import useDonors from "../../../Hooks/Donors/useDonors";
import { BiMapPin } from "react-icons/bi";

const SearchNav = () => {
  const [donors] = useDonors();

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = donors.filter((value) => {
      return (
        value.bloodGroup.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.area.district.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.area.city.toLowerCase().includes(searchWord.toLowerCase())
      );
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
      <nav className="nav">
        <li className="nav-item">
          <div className="searchInputs input-group">
            <input
              className="form-control border-danger rounded-0"
              type="search"
              placeholder="Search Blood Group"
              value={wordEntered}
              onChange={handleFilter}
            />
            <span className="input-group-text border-danger bg-danger text-light rounded-0">
              <SearchIcon />
            </span>
            {/* <span className="searchIcon">
                                            {filteredData.length === 0 ? (
                                                <SearchIcon />
                                            ) : (
                                                <CloseIcon id="clearBtn" onClick={clearInput} />
                                            )}
                                            </span> */}
          </div>
          <div>
            {filteredData.length !== 0 && (
              <div className="dataResult rounded">
                {filteredData.map((value) => (
                  <div key={value?._id}>
                    <ul className="list-group ">
                      <Link title="See Details" to={`/mobile/${value?._id}`}>
                        <li className="searchResult list-group-item d-flex justify-content-between align-items-center">
                          <small>{value?.bloodGroup}</small>
                          <span>
                            <small>
                              {value?.name},
                              <BiMapPin className="text-danger" />
                              {value?.area.district}
                            </small>
                          </span>
                        </li>
                      </Link>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </li>
      </nav>
    </div>
  );
};

export default SearchNav;
