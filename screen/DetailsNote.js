import React from 'react'
import {View,StyleSheet} from 'react-native'
import DetailsListItem from '../components/DetailsListItem'

export default function DetailsNote({route}){
const {title, description} = route.params;
    return (
          <View >
                <DetailsListItem title = {title} description = {description} />
          </View>
    )
}

const styles = StyleSheet.create({
   
   

})


