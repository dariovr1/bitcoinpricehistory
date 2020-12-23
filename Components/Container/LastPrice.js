import React,{useEffect,useState} from 'react'; 
import PriceView  from '../UI/PriceView/PriceView';
import {UseEffect, usePrevious} from '../hooks/index';
import {getPrice} from '../../Store/Slice/index';
import { useSelector, useDispatch } from 'react-redux';
import {storeData,getData} from '../helper/Storage';
import moment from 'moment';
import {
    View,
    Text,
    FlatList,
} from 'react-native';


export default () => {
    const dispatch = useDispatch();
    const fetchprice = useSelector(state => state.price);
    const prevPrice = usePrevious(fetchprice);
    let flag = null;

    const handleFlag = (prev,curr) => {
       flag = (curr > prev) ? "green" : "red";
    }

    const handleStorage = (value) => {
        console.log("storage is different ", value);
        getData('price').then(res => {
            const data = {
                id : Math.ceil(Math.random()),
                date : moment().format('dddd DD/MM'),
                value
            };
            const save = res && [...res,data] || [data];
            storeData('price',save);
        });
    }


    useEffect(() => {

        //check if Data exist 

        getData('price').then(res => {
            console.log("price from storage",res);
        });

        const interval = setInterval(() => {
            dispatch(getPrice());
          }, 5000);
          return () => clearInterval(interval);
    },[]);

    UseEffect(() => {
        console.log("fetch price changed ");
       prevPrice && prevPrice.price && handleFlag(prevPrice.price,fetchprice.price);
       fetchprice && prevPrice && handleStorage(fetchprice.price);
    },[fetchprice]);

    return (
        <>
        <PriceView pricing={fetchprice} onflag={flag} />
        <FlatList
            data={data.length > 0 && data || []}
            renderItem={() => {
                return(
                    <View>
                        <Text>Ciao</Text>
                    </View>
                )
            }}
            keyExtractor={(item) => item.id}
        />
      </>
    )
}