import { useEffect, useState } from 'react';

const useRequests = () => {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        let isMounted = true;
       
          try {
            async function callApi() {
                let data = await fetch(`http://localhost:5000/requests`);
                data = await data.json();
                if(isMounted ){ 
                setRequests(data);
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
    return [requests, setRequests];
};

export default useRequests;