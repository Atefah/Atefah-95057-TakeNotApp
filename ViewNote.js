import React, {useState, useEffect} from 'react'
import {FlatList,View,StyleSheet,TouchableOpacity,Text,Image,ImageBackground} from 'react-native'
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
            tx.executeSql('delete from listNote where id = ?',[id]);
        })
    }

    return (
          <View style={styles.container}>
               {NoteList.length > 0 ? <FlatList 
                    data={NoteList}
                    keyExtractor={(item)=>item.id}
                    renderItem={({item}) => {
                        return <ListNote title={item.title} description={item.description}  onPress={()=> navigation.navigate('DetailsNote', item)} 
                        onDeleteList={() => deleteList(item.id)}

                        onEditPress={() => navigation.navigate("EditNote", { item })}
                        onFavoritePress={() => navigation.navigate("Favorite", { item })}
                        />
                    }}
                />:<View style={styles.text}>
                        <Image
                            style={styles.image}
                            source={require('../assets/icon.png')}
                        />
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
    container:{
        flex:1
    },
    FloatButton:{
        backgroundColor: 'orange',
        padding:20,
        borderRadius:'50%',
        position:'absolute',
        bottom:0,
        right:10
      
    },
    text:{
        textAlign:'auto',
        marginTop:300,
        marginLeft:100
        
    },
    image: {
        flex: 1,
        height:100,
        width:100,
        justifyContent: "center"
      },
   

})


