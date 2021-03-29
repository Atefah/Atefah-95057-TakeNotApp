import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
export default function FavoriteItems({title, description}) {
  return (
    <View style={styles.container}>
     
       <View style={styles.content}>
           <Text style={styles.title}>{title}</Text>
           <Text style={styles.description}>{description}</Text>
       </View>
       <MaterialCommunityIcons 
        style={styles.icone} 
        name="delete"
        size={30}
       />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        borderRadius:30,
     
    },
    icone:{
        marginBottom:5,
        padding:2
    },
    content:{
        flex:1,
        borderBottomWidth:0.5
    },
    title:{
        color:"green",
        fontSize:18,
        fontWeight:"bold"
    },
    
  
  

});
