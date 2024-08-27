import React, { useCallback, useEffect, useState } from 'react'

function useFetch() {
  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState('');

    const fetchData = useCallback(async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json()
            setData(data);
        } catch (error) {
            setError("Something Went Wrong!!")
        }finally{
            setLoading(false);
        }
    },[])

    return {data,loading,error,fetchData}
}

export default useFetch
