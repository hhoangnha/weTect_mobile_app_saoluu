import React, {useState} from 'react'
import { View,
     Text,
     StyleSheet, 
     Image,
     SafeAreaView} from 'react-native'
import NumericInput from 'react-native-numeric-input'
import Swipeout from 'react-native-swipeout'
import { TouchableNativeFeedback, FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';

export default function CartPage({navigation}) {
    const [products, setProduct] = useState(
        [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              name: 'Máy giặt nhập khẩu mỹ',
              image:"https://salt.tikicdn.com/cache/280x280/ts/product/b8/27/82/0a05ed6a90b3a342b96c6ce8b555a398.jpg",
              price:"2.000.000"
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              name: 'https://salt.tikicdn.com/cache/280x280/ts/product/20/63/1e/352f0ddb64724b4981108cbac1ffcfca.jpg',
              image:"https://salt.tikicdn.com/cache/280x280/ts/product/20/63/1e/352f0ddb64724b4981108cbac1ffcfca.jpg",
              price:"70.000"
            },
            {
                id: 'c-c1b1-46c2-aed5-3ad53abb28ba',
                name: 'First Item',
                image:"https://salt.tikicdn.com/cache/280x280/ts/product/4c/27/96/19138444526ba7bb75e7092918f884b3.jpg",
                price:"150.000"
            },
            {
                id: 'v-c605-48d3-a4f8-fbd91aa97f63',
                name: 'Second Item',
                price:"200.000",
                image:"https://salt.tikicdn.com/cache/280x280/ts/product/f7/69/9c/49c94872cbca96b9594921a8f72f7cea.jpg",
            },

            {
                id: 'b-c1b1-46c2-aed5-3ad53abb28ba',
                name: 'Máy giặt nhập khẩu mỹ',
                image:"https://salt.tikicdn.com/cache/280x280/ts/product/b8/27/82/0a05ed6a90b3a342b96c6ce8b555a398.jpg",
                price:"2.000.000"
              },
              {
                id: 'r-c605-48d3-a4f8-fbd91aa97f63',
                name: 'https://salt.tikicdn.com/cache/280x280/ts/product/20/63/1e/352f0ddb64724b4981108cbac1ffcfca.jpg',
                image:"https://salt.tikicdn.com/cache/280x280/ts/product/20/63/1e/352f0ddb64724b4981108cbac1ffcfca.jpg",
                price:"70.000"
              },
              {
                  id: 'c-c1b1-ư-aed5-3ad53abb28ba',
                  name: 'First Item',
                  image:"https://salt.tikicdn.com/cache/280x280/ts/product/4c/27/96/19138444526ba7bb75e7092918f884b3.jpg",
                  price:"150.000"
              },
              {
                  id: 'v-c605-48d3-a4f8-fbd91saa97f63',
                  name: 'Second Item',
                  price:"200.000",
                  image:"https://salt.tikicdn.com/cache/280x280/ts/product/f7/69/9c/49c94872cbca96b9594921a8f72f7cea.jpg",
              },
        ]
    )

    const ProductItem = (props) => (
        <View style={styles.boxShopItem}>
            <View style={styles.itemShop}>
                <View style={styles.productItem}>
                    <View style={{
                        width:"20%",
                        justifyContent:'center',
                        alignItems:"center"
                        }}>
                        <Image source={{uri:props.item.image, width:80, height:80,}} style={{resizeMode:"center"}}></Image>
                    </View>
                    <View style={{
                        width:"30%",
                        justifyContent:"center",
                        alignItems:"center",
                        }}>
                        <NumericInput 
                            totalWidth={80} 
                            totalHeight={40} 
                            type='up-down'
                            value={1} 
                            minValue={1}
                            valueType='real'
                            containerStyle={{borderWidth:0}}
                            onChange={()=>{}} 
                            iconStyle={{ color: 'white' }} 
                            upDownButtonsBackgroundColor= {"#48BE6F"}
                            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                            />
                    </View>
                    <View style={{
                        width:"50%",
                    }}>
                        <View>
                            <Text style={{fontSize:15, }}>{props.item.name}</Text>
                            <View style={{flexDirection:"row"}}>
                                <View style={{width:"70%"}}>
                                    <Text style={{fontSize:12, padding:5}}>Loại: <Text style={{color:"#18A308"}}>rửa mặt + gọi đầu + cạo râu</Text></Text>
                                    <Text style={{fontSize:12}}>Giá: <Text style={{color:"red", fontSize:20}}>{props.item.price}</Text></Text>
                                </View>
                                <View style={{width:"30%", justifyContent:"center", alignItems:"center"}}>
                                    <Feather name="trash-2" size={24} color="#F83B1B" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
      
    return (
        <View style={styles.container}>   
            <View style={styles.header}>
                <Text style={{fontSize:17,textTransform:"uppercase", color:"white",padding:10}}>Giỏ hàng</Text>
            </View>
            <SafeAreaView style={{flex:0.8, backgroundColor:"#F3F3F3", borderTopLeftRadius:500}} >
            <FlatList
                data={products}
                renderItem={({item, index})=>{
                    return(
                        <ProductItem item={item} index={index} />
                    )
                }}
                keyExtractor={item => item.id}
            />
                
            </SafeAreaView>
            <View style={{flex:0.2, backgroundColor:"white"}}>
                <TouchableNativeFeedback onPress={()=>alert("ma giam gia")}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:"50%",padding:15, backgroundColor:"#EBEBEB", flexDirection:"row", justifyContent:'center', alignItems:"center"}}>
                            <Text>Bạn có mã giảm giá? </Text>
                        </View>
                        <View style={{width:"50%",padding:15,}}>
                            <Text>-5% khi thanh toán bằng ứng dụng</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
                
                <View style={{backgroundColor:"#FF8400", flex:1}}>
                    <TouchableNativeFeedback onPress={()=>{
                        navigation.navigate("CheckoutPage", {data:products})
                    }}>
                        <View style={{width:"100%", height:"100%",justifyContent:"center", alignItems:"center"}}>
                            <Text style={{color:"white", fontSize:18}}>THANH TOÁN</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#48BE6F",
    },
    header:{
        flex:0.1,
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    boxShopItem:{
        backgroundColor:"white",
        padding:10, 
        margin:1,
        position:"relative",
        
    },
    itemShop:{
        
    },
    productItem:{
        flexDirection:"row",
        // borderBottomWidth:0.5
    }

})
