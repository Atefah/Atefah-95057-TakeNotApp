import React from 'react';
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native';
import colors from '../utils/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function listNote({title,description,onPress,onDeleteList}){
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.listNote}>
                <View style={styles.details}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.deleteIcone}>
                <MaterialCommunityIcons name="trash-can" color="red" size={24} onPress={onDeleteList} />
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        

    },
    listNote:{
        flexDirection:'row',
        paddingVertical:16,
        paddingRight:24,
        borderBottomWidth:0.5,
        backgroundColor:colors.secondry
    },

    details:{
        marginLeft:20
      },
    title:{
        color:colors.black,
        fontSize:30,
        fontWeight:'Blod'
    },
    description:{
     marginLeft:10
    },
    deleteIcone:{
        marginLeft:200
    }


})