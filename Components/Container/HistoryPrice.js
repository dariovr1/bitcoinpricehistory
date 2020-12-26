import React,{useEffect,useState} from 'react'; 
import PriceList from '../UI/List/PriceList';
import {storeData,getData} from '../helper/Storage';
import { useSelector, useDispatch } from 'react-redux';
import {usePrevious} from '../../Components/hooks/index';

export default () => {
    const history = useSelector(state => state.history);
    const [resultSet,setresultSet] = useState([]);

    useEffect(() => {
        getData('price').then(res => {
            console.log("from storage data is ", res);
            res && setresultSet(res);
        });
    },[]);

    useEffect(() => {
        if (history.length > 0 ) {
            getData('price').then(res => {
                storeData("price",[...res,...history]);
            });
        }
    },[history]);

    return(
        <PriceList dataset={resultSet} />
    )
}