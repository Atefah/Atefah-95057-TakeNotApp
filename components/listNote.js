import React from 'react';
import {StyleSheet,View,TouchableOpacity,Text} from 'react-native';
import colors from '../utils/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native'

export default function listNote({title,description,onPress,onDeleteList}){
    const navigation = useNavigation()
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
               
                <View style={styles.EditIcone}>
                    <MaterialCommunityIcons name="pen" color="green" size={24}  onPress={()=> navigation.navigate('EditNote', {title, description})}/>
                </View>
                <View style={styles.favoriteIcone}>
                    <MaterialCommunityIcons name="heart" color="green" size={24}  onPress={()=> navigation.navigate('Favorite', {title, description})}/>
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
        marginLeft:150,
        justifyContent:'center'
        
    },
    EditIcone:{
        marginLeft:120,
        
    },
    favoriteIcone:{
        marginLeft:100,
    }


})