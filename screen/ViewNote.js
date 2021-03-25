import React, {useState, useEffect} from 'react'
import {FlatList,View,StyleSheet,TouchableOpacity,Text,Image} from 'react-native'
import ListNote from '../components/listNote'
import {Feather} from '@expo/vector-icons'
import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('takeNote.db');

export default function ViewNote({navigation}){
    const [NoteList, setList] = useState([]);
    useEffect(()=>{
        db.transaction((tx)=>{
           tx.executeSql('select * from listNote', [], (tx,{rows})=>{
            var data = [];
            for(var i = 0; i< rows.length; i++){
                data.push(rows[i]);
            }
            setList(data);
           })
        })
    })
    const deleteList = (id) =>{
        db.transaction(tx =>{
            tx.executeSql('select * from listNote where id = ?',[id]);
        })
    }
    const FavoriteList = (id) =>{
        db.transaction(tx =>{
            tx.executeSql('select from listNote where id = ?',[id]);
        })
    }
    
    
    return (
          <View> 
               {NoteList.length > 0 ? <FlatList 
                    data={NoteList}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item}) => {
                        return <ListNote title={item.title} description={item.description}  onPress={()=> navigation.navigate('DetailsNote', item)} 
                        onDeleteList={() => deleteList(item.id)}
                        onEditList={() => EditList(item.id)}
                        onFavoriteList={() => FavoriteList(item.id)}
                        />
                    }}
                />:<View style={styles.text}>
                        <Text>no any note</Text>
                    </View>}
                <TouchableOpacity style={styles.FloatButton} onPress={()=> navigation.navigate('AddNote')}>
                   <Text>
                     <Feather name="plus" size="28" color="white" />
                   </Text>
                </TouchableOpacity>
          </View>
    )
}

const styles = StyleSheet.create({
    FloatButton:{
        backgroundColor: 'orange',
        padding:20,
        borderRadius:'50%',
        position:'absolute',
        top:100,
        right:10
      
    },
    text:{
        textAlign:'auto',
        marginTop:300,
        marginLeft:100
        
    }
   

})


