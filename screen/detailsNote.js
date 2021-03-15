import React from 'react'
import {View,StyleSheet} from 'react-native'
import DetailsListItem from '../components/DetailsListItem'

export default function detailsNote(props){
    const {route} = props;
    const {item} = route.params;
    const {title,description} = item
    return (
          <View>
                <DetailsListItem title= 'note 1' description= 'this is note 1' />
          </View>
    )
}

const styles = StyleSheet.create({
   
   

})


