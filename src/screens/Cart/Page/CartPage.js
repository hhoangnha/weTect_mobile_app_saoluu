import React from 'react'
import { View,
     Text,
     Button, 
     StyleSheet, 
     Image,
     ImageBackground,
     ScrollView, 
     SafeAreaView} from 'react-native'
import NumericInput from 'react-native-numeric-input'
import Swipeout from 'react-native-swipeout'
import { TouchableNativeFeedback, FlatList } from 'react-native-gesture-handler'
const data = [
    {
        id:"1",
        image:"https://salt.tikicdn.com/cache/280x280/ts/product/07/42/b5/e2afc2e8d76d102cccd8cdda1d185499.jpg",
        title:"Đồng hồ cát nhập từ mỹ tho cái bè tiền giang",
        price:'100.000'
    },
    {
        id:"2",
        image:"https://salt.tikicdn.com/cache/280x280/ts/product/24/cc/7f/49a8772b42f32f3bfb737d470f87b0ab.jpg",
        title:"sách 2",
        price:'100.000'
    },
    {
        id:"3",
        image:"https://salt.tikicdn.com/cache/280x280/ts/product/d2/4e/47/fb05b03005d05fb7bda243ec2974e4af.jpg",
        title:"sách 1",
        price:'100.000'
    },
    {
        id:"4",
        image:"https://salt.tikicdn.com/cache/280x280/ts/product/24/cc/7f/49a8772b42f32f3bfb737d470f87b0ab.jpg",
        title:"sách 2",
        price:'100.000'
    },
    {
        id:"5",
        image:"https://salt.tikicdn.com/cache/280x280/ts/product/d2/4e/47/fb05b03005d05fb7bda243ec2974e4af.jpg",
        title:"sách 1",
        price:'100.000'
    },
    {
        id:"cc",
        image:"https://salt.tikicdn.com/cache/280x280/ts/product/24/cc/7f/49a8772b42f32f3bfb737d470f87b0ab.jpg",
        title:"sách 2",
        price:'100.000'
    },
    {
        id:"tt",
        image:"https://salt.tikicdn.com/cache/280x280/ts/product/d2/4e/47/fb05b03005d05fb7bda243ec2974e4af.jpg",
        title:"sách 1",
        price:'100.000'
    },
    {
        id:"33",
        image:"https://salt.tikicdn.com/cache/280x280/ts/product/24/cc/7f/49a8772b42f32f3bfb737d470f87b0ab.jpg",
        title:"sách 2",
        price:'100.000'
    },
    {
        id:"22",
        image:"https://salt.tikicdn.com/cache/280x280/ts/product/d2/4e/47/fb05b03005d05fb7bda243ec2974e4af.jpg",
        title:"sách 1",
        price:'100.000'
    },
    {
        id:"11",
        image:"https://salt.tikicdn.com/cache/280x280/ts/product/24/cc/7f/49a8772b42f32f3bfb737d470f87b0ab.jpg",
        title:"sách 2",
        price:'100.000'
    }
]
const swipeoutBtns = [
    {
      text: 'Xóa',
      backgroundColor:"#FA4B4B",
      onPress:()=>alert("ok")
    }
  ]

const ListData = (props) =>{
    return(
        <Swipeout left={swipeoutBtns} >
            <View style={styles.boxProduct}>
                <View style={styles.itemProduct}>
                    <View style={styles.boxImgProduct}>
                        <ImageBackground  
                            style={styles.imgProduct}
                            source={{uri:props.item.image}}
                            resizeMode="center"> 
                        </ImageBackground>
                    </View>
                    <View style={styles.detailProduct}>
                        <View style={styles.boxDetailProduct}>
                            <View style={styles.textDetailProduct}>
                                <Text style={{fontSize:17}}>{props.item.title}</Text>
                                <View style={styles.boxPriceDetail}>
                                    <View style={styles.boxPrice}>
                                        <Text style={styles.price}>{props.item.price}</Text>
                                    </View>
                                    <View style={styles.quantity}>
                                        <NumericInput 
                                            totalWidth={100} 
                                            type='up-down' 
                                            minValue={1}
                                            onChange={()=>{}}
                                            containerStyle={{
                                                borderWidth:0
                                            }}
                                            upDownButtonsBackgroundColor='#1ABC9C' 
                                            />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Swipeout>
    )
}
export default function CartPage({navigation}) {
    return (
        <View style={styles.container}>   
            <View style={styles.header}>
                <Text style={{fontSize:17,textTransform:"uppercase", color:"white",padding:10}}>Giỏ hàng</Text>
            </View>
            <SafeAreaView style={{
                height:"75%"
            }}>
                 <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({item,index})=>{
                        return(
                            <ListData item={item} index={index} />
                        )
                    }}
                    keyExtractor = {item=>`${item.id}`}
                />
            </SafeAreaView>   
            <View style={{height:"20%"}}>
                <TouchableNativeFeedback onPress={()=>alert("ma giam gia")}>
                    <View style={styles.boxVoucher}>
                        <Text>Bạn có mã giảm giá?</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.boxCheckout}>
                    <View style={styles.leftCheckout}>
                        <Text style={{fontWeight:"bold",color:"red"}}>100.000</Text>
                    </View>
                    <View style={styles.rightCheckout}>
                        <TouchableNativeFeedback onPress={()=>navigation.navigate("CheckoutPage",{data:data})}>
                            <View style={{width:"100%"}}>
                                <Text style={{color:"white"}}>THANH TOÁN</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        width:"100%",
        backgroundColor:"#1ABC9C",
        justifyContent:"center",
        alignItems:"center"
    },
    boxProduct:{
        backgroundColor:"white",
        alignItems:"center",
        height:100,
    },
    itemProduct:{
        flexDirection:"row",
        alignItems:"center",
    },
    boxImgProduct:{
        width:"40%",
        height:"90%",
        justifyContent:"center",
        alignItems:"center"
    },
    detailProduct:{
        width:"60%",
        height:"90%",
    },
    boxDetailProduct:{
        flexDirection:"column"
    },
    textDetailProduct:{
        margin:"5%"
    },
    boxPriceDetail:{
        width:"100%",
        flexDirection:"row",
    },
    boxPrice:{
        width:"50%",
        marginTop:"5%",
    },
    price:{
        color:"#F90707"
    },
    quantity:{
        width:"50%",
        height:"50%"
    },
    imgProduct:{
        height:"100%",
        width:"100%"
    },
    boxCheckout:{
        height:"50%",
        justifyContent:'center',
        alignItems:"center",
        flexDirection:"row"
    },
    leftCheckout:{
        width:"50%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    rightCheckout:{
        width:"50%",
        height:"100%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#FF8718"
    },
    boxVoucher:{
        backgroundColor:"white",
        padding:"3%",
        marginTop:"2%"
    }
})
