import { useEffect, useState } from 'react';

const useDonors = () => {
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        let isMounted = true;
       
          try {
            async function callApi() {
                let data = await fetch(`http://localhost:5000/donors`);
                data = await data.json();
                if(isMounted ){ 
                setDonors(data);
                 }
            }
            callApi(); 
            return () => {
            isMounted = false;
            };
        }
        catch (error) {
            console.log ('error',error)
          }  
       
        
    }, []);
    return [donors, setDonors];
};

export default useDonors;