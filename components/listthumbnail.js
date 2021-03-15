

import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import colors from '../utils/colors';


export default function DetailsListItem({title,description}){
    return(
            <View style={styles.DetailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
            </View>
    )
}
const styles = StyleSheet.create({
    DetailsContainer:{
        justifyContent:'center',
        alignItems: 'center'
        

    },
 
    title:{
        color:colors.black,
        fontSize:30,
        fontWeight:'Blod'
    },
    description:{
        color:colors.black,
        fontSize:30,
    }


})