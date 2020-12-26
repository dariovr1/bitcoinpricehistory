import React,{useEffect,useState} from 'react';
import {
    View,
    FlatList,
    Text,
}  from 'react-native';
import ListItem from '../../UI/Items/ListItem';

const PriceList = ({dataset}) => {

    return (
        dataset.length > 0 && (
        <View>
          <FlatList
                data={dataset}
                renderItem={({item : {date,value}}) => <ListItem>
                    <Text>valore: {value}</Text>
                    <Text>data archivio: {date}</Text>
                </ListItem>}
                keyExtractor={(item) => item.id}
            />
        </View>
        ) || (
            <View>
                <Text>Nessun dato in archivio</Text>
            </View>
        )
    )
}

export default PriceList;