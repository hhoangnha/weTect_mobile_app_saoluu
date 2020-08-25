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
                <View style={{padding:10, backgroundColor:"white", justifyContent:"center", alignItems:"center"}}>
                  <MyCarousel/>
                </View>
                <View style={styles.boxCategory}>              
                  <ScrollView 
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      autoplay={true}
                      alwaysBounceHorizontal={true}
                  >
                      <View style={styles.slideIcon}>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/dienthoai.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>Điện thoại</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/dientu.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>Điện tử</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/car.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>Freeship</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/sale.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>Sale</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/shop.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>Shop mail</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/sale.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>asd</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/car.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>Điện tử</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/car.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>Freeship</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/sale.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>Sale</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/shop.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>Shop mail</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/sale.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>asd</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                      </View>
                      <View style={styles.slideIcon}>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/dientu.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>Điện tử</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/car.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>Freeship</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          <View style={styles.boxIcon}>
                              <Image source={require("./../../../../public/images/icon/sale.png")} style={styles.sizeIcon}></Image>
                              <Text style={styles.textIcon}>Sale</Text>
                              <Text style={{fontSize:10, color:"gray"}}>2054</Text>
                          </View>
                          
                      </View>
                  </ScrollView>
              </View>
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
  },
  boxCategory:{
    backgroundColor:"transparent"
  },
  boxBrand:{
      marginTop:100,
      backgroundColor:"white",
      width:"100%",
      height:30,
      justifyContent:"center",
      alignItems:"center",
      borderTopLeftRadius:100,
  },
  slideIcon:{
      
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      
  },
  boxIcon:{
    justifyContent:"center",
    alignItems:"center", 
    backgroundColor:"white",
    padding:20,
    
  },
  sizeIcon:{
    width:40,
    height:40,
  },
  textIcon:{
    fontSize:12
  },
})