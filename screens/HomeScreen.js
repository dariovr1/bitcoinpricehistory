import React,{useEffect} from 'react'; 
import HistoryPrice from '../Components/Container/HistoryPrice';
import LastPrice from '../Components/Container/LastPrice';


export default () => {

    return(
        <>
        <LastPrice />
        <HistoryPrice />
        </>
    )
}