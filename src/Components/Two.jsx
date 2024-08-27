import React, { useEffect } from 'react'
import useMediaQuery from '../hooks/mediaQuery';
import useFetch from '../hooks/fetch';

function Two() {

    const isMobile = useMediaQuery('(max-width:640px)');
    const isTablet = useMediaQuery('(min-width:640px) and (max-width:1024px)')
    const {data,loading,error,fetchData} = useFetch();

    useEffect(()=>{
      fetchData('https://api.adviceslip.com/advice')
    },[])

  return (
    <div className={`two ${isMobile && 'two-mob'} ${isTablet && 'two-tab'}`}>
      <h3>Advice 2</h3>
      {data && <h5 className={`data ${isMobile && 'data-mob'} ${isTablet && 'data-tab'}`}>{data?.slip?.advice}</h5>}
      {loading && <h5 className={`data ${isMobile && 'data-mob'} ${isTablet && 'data-tab'}`}>Loading...</h5>}
      {error && <h5 className={`data ${isMobile && 'data-mob'} ${isTablet && 'data-tab'}`}>{error}</h5>}
    </div>
  )
}

export default Two
