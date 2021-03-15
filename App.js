import React,{useState, useEffect} from 'react';
import {Text,StyleSheet,TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import{ MaterialIcons}  from '@expo/vector-icons'
import * as SQLite from 'expo-sqlite';
const Stack = createStackNavigator();
const db =SQLite.openDatabase('takeNote.db');
import AddNote from './screen/AddNotes'
import DetailsNote  from './screen/detailsNote'
import SearchNote  from './screen/SearchNotes'
import ViewNote  from './screen/ViewNote'


export default function App(){
    useEffect(()=> {
        db.transaction(tx => {
          tx.executeSql('create table if not exists listNote(id integer primary key autoincrement, title text,  description text);'
          ,[], ()=> console.log('Table created successfully'));
        })
      })
    return(
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name='ViewNote' component={ViewNote} options={({navigation}) =>({
                  headerRight:() =>(
                      <TouchableOpacity style={{paddingRight:20}} onPress={() => navigation.navigate('Search')}>
                          <Text>
                              <MaterialIcons name='search' size={24} color='black'/>
                          </Text>
                      </TouchableOpacity>
                  )
              })}/>
              <Stack.Screen name='AddNote' component={AddNote}/>
              <Stack.Screen name='DetailsNote' component={DetailsNote}/>
              <Stack.Screen name='Search' component={SearchNote}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f8f4f4'
    }
})
