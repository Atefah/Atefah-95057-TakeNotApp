
import React,{useState, useEffect} from 'react';
import {StyleSheet,TextInput,View,TouchableOpacity,Text} from 'react-native';
import colors from '../utils/colors';
import *as SQLite from 'expo-sqlite';
import {FAB} from "react-native-paper";
const db =SQLite.openDatabase('takeNote.db');
export default function EditNote({route}){
    const {title, description} = route.params;
    const EditList = (id) =>{
        db.transaction(tx =>{
            tx.executeSql('update listNote SET title ,description where id = ?',[id])
        })
    }
    return(
        <View style={styles.formContainer}>
            <TextInput 
               label="Add Note Title Here"
               value={title}
               mode="outlined"
               style={styles.title}
                />
            <TextInput
                placeholder='Description' 
                value={description}
                mode="flat"
                multiline={true}
                scrollEnabled={true}
                returnKeyLabel="done"
                blurOnSubmit={true}
                style={styles.description}/>
            
            <FAB
                style={styles.fab}
                small
                icon="check"
                disabled={title == '' ? true : false}
                onPress={() =>EditList()}
            />
            
        </View>
    )
}
const styles = StyleSheet.create({
    formContainer:{
        borderRadius:30,
        marginTop:20,
        paddingVertical:20,
        paddingHorizontal:40,
        backgroundColor:'white',

    },
    FloatButton:{
        position:'absolute',
        top:120,
        left:280,
    },
    
    fab:{
        position:'absolute',
        right:0,
        top:10,
        marginTop:500
    },
    description:{
        height:300,
        fontSize:16,
        padding:30,
        margin:10,
        borderColor:colors.secondry,
        backgroundColor:'#fff',
        borderWidth:2,
        
     },
     title:{
        padding:10,
        margin:10,
        borderColor:colors.secondry,
        borderWidth:2
    },
    button:{
        padding:20,
        marginTop:20,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
  

})