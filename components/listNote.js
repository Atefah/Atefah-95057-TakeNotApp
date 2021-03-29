import React from 'react';
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native';
import colors from '../utils/colors';
import {moment} from 'moment'
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native'

export default function listNote({title,description,onPress,onDeleteList,onEditPress,onFavoritePress}){
    const navigation = useNavigation()
    var d = new Date();
    var year= d.getFullYear();
    var month= d.getMonth();
    var day= d.getDate();
    var hour= d.getHours();
    var minute = d.getMinutes();
    var date = year+'/'+ month+'/'+day+':'+hour+':'+minute;
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.DisplayDate}>
                <Text>{date}</Text>
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
             <View style={styles.MaterialIcon}>
                <MaterialCommunityIcons name="trash-can" color="red" size={24} onPress={onDeleteList} style={{marginHorizontal:15}} />
                <TouchableOpacity onPress={onEditPress}>
                    <MaterialCommunityIcons name="pen" color="gray"  size={24} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.favoriteIcone} onPress={onFavoritePress}>
                    <MaterialCommunityIcons name="heart" color="green" style={{marginHorizontal:15}} size={24} />
                </TouchableOpacity> 
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingVertical:20,
        borderBottomWidth:2,
        backgroundColor:colors.secondry
    },
    DisplayDate:{
        position:"absolute",
        top:0,
        left:0,
        color:"red"

    },
    
   
    details:{
        padding:4
      },
      MaterialIcon:{
        flex:1,
        flexDirection:"row",
        padding:15,
        marginLeft:100
      },
    title:{
        color:colors.green,
        fontSize:30,
        fontWeight:'Blod'
    },
    description:{
     marginLeft:0
    },
   


})