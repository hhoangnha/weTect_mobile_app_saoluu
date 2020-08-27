import React, {useRef} from 'react'
import { View, Text, Button,StyleSheet, Image, ScrollView, Dimensions,TouchableOpacity, ImageBackground } from 'react-native'
import { SearchBar } from 'react-native-elements';
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import MyCarousel from './../Carousel/Carousel'
import { Ionicons,Foundation } from '@expo/vector-icons';


export default function HomePage({ navigation }){
      const products = [
        {
          title:"Áo thung hàn quốc",
          image:"https://salt.tikicdn.com/cache/280x280/ts/product/40/5b/da/8fb3dfe89367fcd20ad82223df811d2d.jpg",
          price:"200.000",
          id:1
        },
        {
          title:"Áo thung hàn quốc tế",
          image:"https://salt.tikicdn.com/cache/280x280/ts/product/24/c0/45/1e67883d8183ab708810f16a1a420b76.jpg",
          price:"200.000",
          id:2
        },
        {
          title:"Truyện tranh cô nan",
          image:"https://salt.tikicdn.com/cache/280x280/ts/product/ff/26/a2/fdf754ec5975dd1738775416e26feceb.jpg",
          price:"200.000",
          id:4
        },
        {
          title:"Áo thung hàn quốc tế",
          image:"https://salt.tikicdn.com/cache/280x280/ts/product/24/c0/45/1e67883d8183ab708810f16a1a420b76.jpg",
          price:"200.000",
          id:5
        },
        {
          title:"Áo thung hàn quốc",
          image:"https://salt.tikicdn.com/cache/280x280/ts/product/40/5b/da/8fb3dfe89367fcd20ad82223df811d2d.jpg",
          price:"200.000",
          id:7
        },
        {
          title:"Áo thung hàn quốc tế",
          image:"https://salt.tikicdn.com/cache/280x280/ts/product/24/c0/45/1e67883d8183ab708810f16a1a420b76.jpg",
          price:"200.000",
          id:77
        }
      ]

      
      
      const Product = ({item}) => (
        <TouchableNativeFeedback onPress={()=>{
          navigation.navigate("ProductScreen")
        }}>
          <View style={styles.boxProductItem}>
          <View style={{justifyContent:"center", alignItems:"center"}}>
            <Image 
              source={{uri:item.image}}
              style={{width:150, height:200, resizeMode:"cover"}}></Image>
              <View style={styles.boxPrice}>
                <Text style={{color:"white", padding:5}}>200.000</Text>
              </View>
              <Text style={{padding:5}}>{item.title}</Text>
          </View>
        </View>
        </TouchableNativeFeedback>
      );

      return (
        <View style={styles.container}>
            <ImageBackground source={require("./../../../../public/background.jpg")} style={styles.image}>
              <ScrollView>
                <View style={styles.header}>
                  <View style={styles.boxSearch}>
                    <View style={{width:"10%", alignItems:"center", justifyContent:"center"}}>
                      <TouchableNativeFeedback onPress={()=>navigation.openDrawer()}>
                        <Foundation name="list" size={30} color="white" />
                      </TouchableNativeFeedback>
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

                <View style={styles.boxSuggestion}>
                  <View>
                    <View style={{flexDirection:"row", padding:5,  alignItems:"center"}}>
                      <Image 
                        source={{uri:"https://thumbs.gfycat.com/BossySpicyDipper-small.gif"}}
                        style={{ width:50, height:50}}
                       />
                      <Text>Đang khuyến mãi</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                      <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false} 
                      >
                        {
                          products.map(item =>{
                            return <Product key={item.id} item={item} />
                          })
                        }
                        <View style={{justifyContent:"center", alignItems:"center"}}>
                          <TouchableNativeFeedback onPress={()=>{alert("ok")}}>
                            <Text style={{padding:20}}>Xêm thêm</Text>
                          </TouchableNativeFeedback>
                        </View>

                      </ScrollView>
                    </View>
                    
                  </View>
                </View>

                <View style={styles.boxSuggestion}>
                  <View>
                    <View style={{flexDirection:"row"}}>
                      <Text>Đề xuất cho bạn</Text>
                      {/* <Image 
                        source={{uri:"https://thumbs.gfycat.com/BossySpicyDipper-small.gif"}}
                        style={{ width:50, height:50}}
                       /> */}
                    </View>
                    <View style={{flexDirection:"row"}}>
                      <ScrollView 
                        horizontal
                        showsHorizontalScrollIndicator={false} 
                        autoplay 
                      >
                        {
                          products.map(item =>{
                            return <Product key={item.id} item={item} />
                          })
                        }
                        <View style={{justifyContent:"center", alignItems:"center"}}>
                          <TouchableNativeFeedback onPress={()=>{alert("ok")}}>
                            <Text style={{padding:20}}>Xêm thêm</Text>
                          </TouchableNativeFeedback>
                        </View>

                      </ScrollView>
                    </View>
                    
                  </View>
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
  boxSuggestion:{
    backgroundColor:"white",
    marginTop:5,
  },
  boxProductItem:{
    borderWidth:1,
    borderRadius:5,
    borderColor:"#D6DBDF",
    margin:5,
    position:"relative",
  },
  boxPrice:{
    backgroundColor:"#F39C12",
    justifyContent:'center',
    alignItems:"center",
    width:"100%",
    marginTop:-10
  }
})