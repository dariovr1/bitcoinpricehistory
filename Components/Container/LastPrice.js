import React,{useEffect,useState} from 'react'; 
import PriceView  from '../UI/PriceView/PriceView';
import {UseEffect, usePrevious} from '../hooks/index';
import {getPrice,setHistory} from '../../Store/Slice/index';
import { useSelector, useDispatch } from 'react-redux';
import {storeData,getData} from '../helper/Storage';
import moment from 'moment';
import {uniqueId} from '../helper/common';

export default () => {
    const dispatch = useDispatch();
    const fetchprice = useSelector(state => state.price);
    const prevPrice = usePrevious(fetchprice);
    const [flag,setFlag] = useState(null);

    const handleFlag = (prev,curr) => {
       setFlag((prevState) => {
           return (curr > prev) ? "green" : "red";
       });
    }

    const handleStorage = (prev,value) => {
        dispatch(setHistory({
            id : uniqueId(),
            date : moment().format('dddd DD/MM'),
            value,
            active :  (prev && value > prev) ? true : false,
        }));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(getPrice());
          }, 5000);
          return () => clearInterval(interval);
    },[]);

    useEffect(() => {
        console.log("fetch price changed ");
       prevPrice && prevPrice.price && handleFlag(prevPrice.price,fetchprice.price);
       fetchprice && prevPrice && handleStorage(prevPrice.price,fetchprice.price);
    },[fetchprice]);

    return (
        <>
        <PriceView pricing={fetchprice} onflag={flag} />
      </>
    )
}