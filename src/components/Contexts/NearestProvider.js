
// import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react';

export const Nearest = createContext();

const NearestProvider = ({children}) => {
    const [nearest, setNearest] = useState(JSON.parse(localStorage.getItem('nearestDonors')) ?? []);

    /* const onSubmit = data => {
        console.log(data);
       data.nearest  = nearest;
        data.date = new Date().toLocaleDateString();
        data.time = new Date().toLocaleTimeString();
    

        axios.post(`http://localhost:5000/nearestDonor`, data)
            .then(res => {
                if (res.data.insertedId) {
                    setNearest(nearest)
                }else if(res.data.insertedId !== nearest._id){
                    setNearest('');
                }
            })
    }; */

       // DELETE products
      /*  const handleDeleteProducts = _id => {
       
            const url = `http://localhost:5000/nearestDonor/${_id}`
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingProducts = nearest.filter(near => near._id !== _id);
                        setNearest(remainingProducts);
                    }
                })
        } */

  

/*     useEffect(() => {
        const nearestDonorsData = localStorage.getItem("nearestDonors") ?  JSON.parse(localStorage.getItem('nearestDonors')|| '{}') : [];
        
        setNearest(nearestDonorsData);
       
    }, []); */
    
     useEffect(() => {
        localStorage.setItem("nearestDonors", JSON.stringify(nearest));
    }, [nearest]);

    
    function addToNearest(newDonor) {
        setNearest(prevDonors => [...prevDonors, newDonor])
    }
    
    function removeFromNearest(_id) {
        setNearest(prevDonors => prevDonors.filter(donor => donor._id !== _id))
    }
    return (
        <Nearest.Provider value={{nearest, setNearest, addToNearest, removeFromNearest}}>
           {children}
       </Nearest.Provider>
    );
};

export default NearestProvider;