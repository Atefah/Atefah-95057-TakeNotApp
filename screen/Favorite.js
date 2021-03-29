
import React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import FavoriteItems  from "../components/FavoriteItems"
export default function Favorite({route}) {
  const {title, description} = route.params.item;
  return (
    <View style={styles.container}>
            <FavoriteItems title= {title} description={description} />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
  

});
;