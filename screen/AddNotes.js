
import React,{useState, useEffect} from 'react';
import {StyleSheet,TextInput,View,TouchableOpacity,Text} from 'react-native';
import colors from '../utils/colors';
import *as SQLite from 'expo-sqlite';
const db =SQLite.openDatabase('takeNote.db');
export default function AddNotes({navigation}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const AddNote = (title,description) => {
        db.transaction(tx => {
            tx.executeSql('insert into listNote(title,description) values(?, ?);',
            [title,description], () =>navigation.navigate('ViewNote'));
        })
    }
    return(
        <View style={styles.formContainer}>
            <TextInput placeholder='Title' style={styles.input} value={title} onChangeText={(title)=> setTitle(title)}/>
            <TextInput placeholder='Description' style={styles.input} value={description} onChangeText={(description)=> setDescription(description)}/>
            <TouchableOpacity style={[styles.button,{backgroundColor:colors.primary}]}>
                <Text style={styles.buttonTxt} onPress={()=>AddNote(title,description)}>save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor:'red'}]}>
                <Text style={styles.buttonTxt}>cancel</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    formContainer:{
        borderRadius:30,
        marginTop:60,
        paddingVertical:20,
        paddingHorizontal:40,
        backgroundColor:colors.white

    },
    input:{
        paddingBottom:10,
        marginBottom:10,
        borderBottomColor:colors.secondry,
        borderBottomWidth:1
    },
    button:{
        padding:20,
        marginTop:20,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonTxt:{
        color: colors.white
    }

})