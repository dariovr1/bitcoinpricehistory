import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
    DrawerAvatar,
} from '../Components/UI/index';


export default (props) => {
    return(
        <DrawerContentScrollView>
                <DrawerAvatar alignitems="center" imgdim={100} title="Dario Amato"  small="@dariovr1"  />
        </DrawerContentScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop : 20,
    },
  });