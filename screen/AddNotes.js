
import React,{useState, useEffect} from 'react';
import {StyleSheet,TextInput,View,TouchableOpacity,Text} from 'react-native';
import colors from '../utils/colors';
import *as SQLite from 'expo-sqlite';
import {FAB} from "react-native-paper";
const db =SQLite.openDatabase('takeNote.db');
export default function AddNotes({navigation}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    
    const onSaveNote = (title,description) => {
        db.transaction(tx => {
            tx.executeSql('insert into listNote(title,description) values(?, ?);',
            [title,description], () =>navigation.goBack());
        })
    }
    return(
        <View style={styles.formContainer}>
            <TextInput 
               label="Add Note Title Here"
               value={title}
               mode="outlined"
               onChangeText={(title)=> setTitle(title)}
               style={styles.title}
                />
            <TextInput
                placeholder='Description' 
                value={description}
                onChangeText={(description)=> setDescription(description)}
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
                onPress={() =>onSaveNote(title,description)}
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
  
    fab:{
        position:'absolute',
        right:2,
        marginTop:440
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
   

})