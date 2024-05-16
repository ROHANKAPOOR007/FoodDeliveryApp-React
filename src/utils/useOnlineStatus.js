import { useEffect, useState } from 'react'

function useOnlineStatus() {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            return setOnlineStatus(false);
        });
        
        window.addEventListener("online", ()=>{
            return setOnlineStatus(true);
        }); 


    }, [])


    // return Boolean
    return onlineStatus;
}

export default useOnlineStatus