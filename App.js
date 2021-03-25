
import React,{useEffect} from 'react';
import {Text,StyleSheet,TouchableOpacity,View} from 'react-native';
import{ MaterialIcons}  from '@expo/vector-icons'
import * as SQLite from 'expo-sqlite';
const db =SQLite.openDatabase('takeNote.db');
import AddNote from './screen/AddNotes'
import EditNote from './screen/EditNote'
import DetailsNote  from './screen/DetailsNote'
import Favorite from "./screen/Favorite"
import SearchNote  from './screen/SearchNotes'
import ViewNote  from './screen/ViewNote'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  useEffect(()=> {
    db.transaction(tx => {
      tx.executeSql('create table if not exists listNote(id integer primary key autoincrement, title text,  description text);'
      ,[], ()=> console.log('Table created successfully'));
    })
  })
  return (
      <View style={styles.container}>
          <NavigationContainer>
              <Tab.Navigator
                  initialRouteName="View"
                  tabBarOptions={{
                    activeTintColor:'#841548'
                  }}
                >
                <Tab.Screen 
                    name="ViewNote"
                    component={ViewStack}
                    options={{
                      tabBarLabel:"View",
                      tabBarIcon:({color,size}) =>(
                          <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                          />
                      )
                    }}
                />

                 <Tab.Screen 
                    name="Favorite"
                    component={FavoriteStack}
                    options={{
                      tabBarLabel:"Favorite",
                      tabBarIcon:({color,size}) =>(
                          <MaterialCommunityIcons
                            name="heart"
                            color={color}
                            size={size}
                          />
                      )
                    }}
                />
              </Tab.Navigator>
            </NavigationContainer>
      </View>
  );
}
function ViewStack() {
  return(
    <Stack.Navigator
          initialRouteName="View"
          screenOptions={{
          headerStyle:{backgroundColor:"#841458"},
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight: "bold"}
        }}
        >
       <Stack.Screen name='ViewNote' component={ViewNote}
             options={({navigation}) =>({
              headerRight:() =>(
                  <TouchableOpacity style={{paddingRight:20}} onPress={() => navigation.navigate('Search')}>
                      <Text>
                          <MaterialIcons name='search' size={24} color='black'/>
                      </Text>
                  </TouchableOpacity>
              )
             })}
          />
           <Stack.Screen name='AddNote' component={AddNote}
                options={({navigation}) =>({
                  headerRight:() =>(
                      <TouchableOpacity style={{paddingRight:20}} onPress={() => navigation.goBack()}>
                          <Text>
                              <MaterialIcons name='close' size={24} />
                          </Text>
                      </TouchableOpacity>
                  )
              })}/>
            <Stack.Screen name='DetailsNote' component={DetailsNote}/>
            <Stack.Screen name='EditNote' component={EditNote}/>
            <Stack.Screen name='Search' component={SearchNote}/>
    </Stack.Navigator>
  )
}

function FavoriteStack() {
  return(
    <Stack.Navigator
          initialRouteName="Favorite"
          screenOptions={{
          headerStyle:{backgroundColor:"#841458"},
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight: "bold"}
        }}
        >
        <Stack.Screen 
          name="Favorite"
          component={Favorite}
          options={{title: "Favorite Page"}}
        /> 
        
    </Stack.Navigator>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
