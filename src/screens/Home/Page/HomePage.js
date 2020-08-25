import React, {useRef} from 'react'
import { View, Text, Button,StyleSheet, Image, ScrollView, Dimensions,TouchableOpacity, ImageBackground } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import MyCarousel from './../Carousel/Carousel'
import Icon from 'react-native-vector-icons/FontAwesome'


export default function HomePage(){
      const slideShow = [
        "https://cf.shopee.vn/file/e6adbe7551c1bfdc9639c67672b5863b",
        "https://cf.shopee.vn/file/e6adbe7551c1bfdc9639c67672b5863b"
      ]
      const image = { uri: "https://reactjs.org/logo-og.png" };
      return (
        <View style={styles.container}>
            <ImageBackground source={require("./../../../../public/background.jpg")} style={styles.image}>
              <ScrollView>
                <View style={styles.header}>
                  <View style={styles.boxSearch}>
                    <View style={{width:"10%", alignItems:"center", justifyContent:"center"}}>
                      <Text>|||</Text>
                    </View>
                    <View style={{width:"90%"}}>
                      <SearchBar
                        containerStyle={{height:45, padding:0, backgroundColor:"transparent", justifyContent:"center"}}
                        inputContainerStyle={{height:35,backgroundColor:"white"}}
                        lightTheme
                        placeholder="Tìm kiếm"
                        onChangeText={()=>{}}
                      />
                      
                    </View>
                  </View>
                  
                </View>
                <MyCarousel/>
              </ScrollView>
            </ImageBackground>
            
        </View>
      )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  header:{
    flex:0.1,
    justifyContent:"center", alignItems:"center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  boxSearch:{
    width:"100%",
    flexDirection:"row",
    zIndex:9,
    padding:10,
    paddingTop:30,
    
    // borderBottomLeftRadius:100,
    borderBottomRightRadius:100
  }
})