import React, { useEffect, useState } from 'react'

function useMediaQuery(query) {
    const [matches,setMatches] = useState(false);

    useEffect(()=>{
        const media = window.matchMedia(query);
        if(media.matches !== media){
            setMatches(media.matches)
        }

        const listener = (event)=> setMatches(event.matches);

        media.addEventListener("change",listener)

        return ()=> media.removeEventListener("change",listener)

    },[query,matches])

    return matches
}

export default useMediaQuery
