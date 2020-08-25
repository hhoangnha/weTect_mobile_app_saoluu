import React, {useRef} from 'react'
import { View, Text, Button,StyleSheet, Image, ScrollView, Dimensions,TouchableOpacity } from 'react-native'
import { SearchBar } from 'react-native-elements';

export default function HomePage({navigation}) {

    const slideShow = [
      "https://cf.shopee.vn/file/e6adbe7551c1bfdc9639c67672b5863b",
      "https://cf.shopee.vn/file/e6adbe7551c1bfdc9639c67672b5863b"
    ]
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.boxSearch}>
              <View style={{width:"10%"}}>
                <Text>|||</Text>
              </View>
              <View style={{width:"80%"}}>
                <SearchBar
                  containerStyle={{padding:0}}
                  lightTheme
                  placeholder="Type Here..."
                  onChangeText={()=>{}}
                  value={'hello'}
                />
                
              </View>
              
            </View>
              
          </View>
        
      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  header:{
    flex:0.3,
    backgroundColor:'#48BE6F'
  },
  boxSearch:{
    width:"100%",
  }
})