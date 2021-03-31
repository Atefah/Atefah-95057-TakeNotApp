
import React, { useState } from "react";
import {
	View,
	TextInput,
	Text,
	TouchableOpacity,
	StyleSheet,
	Alert,
} from "react-native";
import colors from '../utils/colors';
import {FAB} from "react-native-paper";
import * as SQLite from "expo-sqlite";
const db =SQLite.openDatabase('takeNote.db');

export default function EditNote({ navigation, route }) {
	const { title,description ,id} = route.params.item;
	const [newTitle, setTitle] = useState(title);
	const [newdescription, setDescription] = useState(description);

	const update = () => {
            db.transaction((tx) => {
                tx.executeSql(
                    "update listNote set title=?, description=? where id=?",
                    [newTitle, newdescription,id],
                    () => navigation.navigate("ViewNote")
                );
            });
       
	}
    return(
        <View style={styles.formContainer}>
            <TextInput 
               label="Add Note Title Here"
               value={newTitle}
               mode="outlined"
               style={styles.title}
               onChangeText={(newTitle) => setTitle(newTitle)}
                />
            <TextInput
                placeholder='Description' 
                value={newdescription}
                mode="flat"
                multiline={true}
                scrollEnabled={true}
                returnKeyLabel="done"
                blurOnSubmit={true}
                onChangeText={(newdescription) => setDescription(newdescription)}
                style={styles.description}/>
            
            <FAB
                style={styles.fab}
                small
                icon="check"
                disabled={title == '' ? true : false}
                onPress={() =>update()}
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
        bottom:0,
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