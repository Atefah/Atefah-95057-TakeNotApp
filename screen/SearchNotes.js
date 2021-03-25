import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import *as SQLite from 'expo-sqlite'
import  ListNote from '../components/listNote'
import colors from '../utils/colors'  

const db = SQLite.openDatabase('takeNote.db')
export default function SearchNotes(){
    const [allContacts, setAllContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);

    useEffect(()=> {
        db.transaction(tx => {
            tx.executeSql('select * from listNote', [], (tx, {rows}) => {
                var data = [];
                for(var i =0; i< rows.length; i++){
                    data.push(rows[i]);
                }
                setAllContacts(data);
            })
        })
    })
    const searchContacts = (text) => {
        const filterText = text.toLowerCase();
        const newContacts = allContacts.filter((contcat) => {
            const item = contcat.title.toLowerCase();
            return item.indexOf(filterText) > -1;
        })
        setFilteredContacts(newContacts);
        if(text.length < 1) 
        setFilteredContacts([])
    }
    return (
       <View>
        <View style={styles.searchContainer}>
            <TextInput placeholder="Search...." style={styles.searchInput} onChangeText={(text) => searchContacts(text
                )}/>
        </View>
        {filteredContacts.length > 0 ? <FlatList
            data={filteredContacts}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => {
                return <ListNote title={item.title} description={item.description} onPress={()=> navigation.navigate('DetailsNote',{item:item})} onDeleteList={()=> deleteList(item.id)} />
            }}
        /> : <View style={styles.note}><Text>Nothing to display</Text></View>}
      </View>
    )
}
const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: colors.secondry
    },
    searchInput: {
        paddingHorizontal:20,
        paddingVertical:10,
        margin:20,
        borderRadius:10,
        backgroundColor: colors.white,
        
    },
    note:{
        textAlign:'center',
        marginTop:200
    }
})