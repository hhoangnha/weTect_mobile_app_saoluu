import React, { useState } from 'react'
import { View, StyleSheet,ImageBackground,Alert,Image } from 'react-native'
import DetailProductCarousel from './Carousel/DetailProductCarousel'
import { Ionicons,FontAwesome5,EvilIcons,AntDesign} from '@expo/vector-icons';
import { TouchableNativeFeedback, ScrollView } from 'react-native-gesture-handler';
import { Avatar, Badge, Icon, Text, Button  } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import MapEvaluate from './MapEvaluate';


export default function ProductScreen({ navigation }) {
    const [showDescription, setShowDescription] = useState(false)
    const [products, setProducts] = useState(
        [
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
    ) 
    const [evaluate, setEvaluate] = useState([
        {
            name:"Nhã ml",
            avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            content:"hello mấy bạn"
        },
        {
            name:"Tiến chuot",
            avatar:"https://api.adorable.io/avatars/50/abott@adorable.png",
            content:"t làm xong cái logo rồi"
        },
        {
            name:"Triển bung heo",
            avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEel8QtWwJByjZKYObgYLSP_WelpYZqD_eMA&usqp=CAU",
            content:"hahahahahahahahah"
        }
    ])
    const abc = ()=>{
        <Text>ok</Text>
    }

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
            <ImageBackground source={require("./../../../public/background2.jpg")} style={styles.image}>
                <TouchableNativeFeedback onPress={()=>{
                    navigation.goBack();
                }}>
                <View style={styles.header}>
                    <View style={styles.iconBack}>
                        <Ionicons name="ios-arrow-back" size={24} color="white" />
                    </View>
                    <Text style={{fontSize:17,textTransform:"uppercase", color:"white",padding:10}}>Chi tiết sản phẩm</Text>
                </View>
                </TouchableNativeFeedback>
      
                <ScrollView>
                    <View style={styles.boxImg}>
                        <View style={{width:"50%", justifyContent:"center",}}>
                            <DetailProductCarousel/>
                            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                                    <Text style={{color:"#696868"}}>Vuốt sang trái xem thêm ảnh</Text>
                            </View>
                        </View>
                        <View style={{width:"50%"}}>
                            <View style={{justifyContent:"center", alignItems:"center"}}>
                                <Text style={{fontSize:16, textTransform:"uppercase"}}>mô tả ngắn</Text>
                            </View>
                            <View style={{padding:5}}>
                                <Text style={{padding:5}}>
                                    Danh mục: Quần áo
                                </Text>
                                <View style={{ position:"relative", justifyContent:"center", padding:5}}>
                                    <Text>Kích cỡ:</Text>
                                    <Badge
                                        status="success"
                                        value="S"
                                        containerStyle={{ position: 'absolute',left:60, padding:5 }}
                                    />
                                    <Badge
                                        status="error"
                                        value="M"
                                        containerStyle={{ position: 'absolute',left:80, padding:5 }}
                                    />
                                    <Badge
                                        status="warning"
                                        value="freesize"
                                        containerStyle={{ position: 'absolute',left:100, padding:5 }}
                                    />
                                    
                                </View>
                                
                                <View style={{padding:5}}>
                                    <Text>còn lại: 254 sản phẩm</Text>
                                </View>
                                <View style={{padding:5, alignItems:"center",flexDirection:"row"}}>
                                    <View style={{width:"50%"}}>
                                        <Text h4 h4Style={{color:"red"}}>250.000</Text>
                                    </View>
                                    <View style={{width:"50%"}}><Text>-10%</Text></View>
                                </View>
                                <View style={{padding:5, flexDirection:"row"}}>
                                    <View style={{width:'30%', justifyContent:"center", alignItems:"center"}}>
                                        <TouchableNativeFeedback onPress={()=>{alert("yeu thich")}}>
                                            <EvilIcons name="heart" size={25} color="gray" style={{padding:10}} />
                                        </TouchableNativeFeedback>
                                    </View>
                                    <View style={{width:'70%'}}>
                                        <TouchableNativeFeedback onPress={()=>alert("them vao gio")}>
                                            <View style={{backgroundColor:"#FF830F", justifyContent:"center", alignItems:"center", padding:10}}>
                                            <Text style={{color:"white"}}>Thêm vào giỏ</Text> 
                                            </View>
                                        </TouchableNativeFeedback>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                
                    <View style={styles.boxDescription}>
                        <View>
                            <Text style={{fontSize:17,}}>Chi tiết sản phẩm</Text>
                        </View>
                        <View style={{
                            width:"80%", 
                            justifyContent:"center", 
                            alignItems:"center", 
                            borderWidth:0.5,
                            borderColor:"#A6A6A6", 
                            marginTop:20, 
                            borderRadius:10}}>
                            <View style={{padding:20}}>
                                <View style={{flexDirection:"row", alignItems:"center", paddingLeft:10,}}>
                                    <Text>Danh mục sản phẩm: </Text>
                                    <Button
                                        title="Quần áo"
                                        type="clear"
                                    />
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center", paddingLeft:10}}>
                                    <Text>Cung cấp bởi: </Text>
                                    <Button
                                        title="weTech"
                                        type="outline"
                                        titleStyle={{color:"red"}}
                                        onPress={()=>alert("ok")}
                                    />
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center", padding:10}}>
                                    <Text>kích cỡ: </Text>
                                    <Badge
                                        status="success"
                                        value="S"
                                        containerStyle={{ position: 'absolute',left:60, padding:5 }}
                                    />
                                    <Badge
                                        status="error"
                                        value="M"
                                        containerStyle={{ position: 'absolute',left:80, padding:5 }}
                                    />
                                    <Badge
                                        status="warning"
                                        value="freesize"
                                        containerStyle={{ position: 'absolute',left:100, padding:5 }}
                                    />
                                </View>
                                <View style={{flexDirection:"row", alignItems:"center", paddingLeft:10}}>
                                    <Text>Mã sản phẩm: </Text>
                                    <Text>id457w54d2xs2</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{padding:10}}>
                            <Button
                                title="Mô tả sản phẩm"
                                type="solid"
                                onPress={()=>{
                                    setShowDescription(true)
                                }}
                            />
                        </View>
                    </View>

                    {
                        showDescription ? (
                            <Animatable.View animation='fadeIn' duration={300} style={styles.boxModal}>
                                <View style={styles.modal}>
                                    <View style={styles.boxDescription}>
                                        <View style={{padding:20, justifyContent:"center", alignItems:"center"}}>
                                            <Text style={{fontSize:17,}}>Mô tả sản phẩm</Text>
                                            <ScrollView>
                                                <Text style={{padding:10}}>
                                                    Hiểu bản chất và ứng dụng chắc tay 90% chủ điểm ngữ pháp để thi cử và giao tiếp
                                                    Hiểu sâu bản chất các công thức ngữ pháp 
                                                    Đơn giản hóa các kiến thức phức tạp
                                                    Ứng dụng ngay vào thực tế

                                                    Bộ sản phẩm có gì khác biệt?
                                                    1. SÁCH: Dễ hiểu bản chất, chấm dứt học vẹt
                                                    Lý thuyết được chuyển thành hình ảnh, sơ đồ cực dễ hiểu
                                                    Mỗi một thành phần câu đều có màu đại diện, dễ nhớ hơn bao nhiêu
                                                    Những mẩu truyện hài hước đan xen nên học vui vẻ không mệt
                                                    2. APP: Lộ trình từ A - Z để áp dụng linh hoạt
                                                    Bước 1: Luyện tập theo chuyên đề tương ứng với từng unit theo 3 cấp độ Dễ - Vừa - Khó
                                                    Bước 2: Tăng khả năng sử dụng linh hoạt các điểm ngữ pháp thông qua kho luyện tập trộn kiến thức
                                                    Bước 3: Theo dõi các video chia sẻ bí kíp thi cử, học ngữ pháp, phương pháp học hay
                                                    3. Lớp học livestream và Group cộng đồng
                                                    Bộ sản phẩm có gì khác biệt?
                                                    1. SÁCH: Dễ hiểu bản chất, chấm dứt học vẹt
                                                    Lý thuyết được chuyển thành hình ảnh, sơ đồ cực dễ hiểu
                                                    Mỗi một thành phần câu đều có màu đại diện, dễ nhớ hơn bao nhiêu
                                                    Những mẩu truyện hài hước đan xen nên học vui vẻ không mệt
                                                    2. APP: Lộ trình từ A - Z để áp dụng linh hoạt
                                                    Bước 1: Luyện tập theo chuyên đề tương ứng với từng unit theo 3 cấp độ Dễ - Vừa - Khó
                                                    Bước 2: Tăng khả năng sử dụng linh hoạt các điểm ngữ pháp thông qua kho luyện tập trộn kiến thức
                                                    Bước 3: Theo dõi các video chia sẻ bí kíp thi cử, học ngữ pháp, phương pháp học hay
                                                    3. Lớp học livestream và Group cộng đồng
                                                    Bộ sản phẩm có gì khác biệt?
                                                    1. SÁCH: Dễ hiểu bản chất, chấm dứt học vẹt
                                                    Lý thuyết được chuyển thành hình ảnh, sơ đồ cực dễ hiểu
                                                    Mỗi một thành phần câu đều có màu đại diện, dễ nhớ hơn bao nhiêu
                                                    Những mẩu truyện hài hước đan xen nên học vui vẻ không mệt
                                                    2. APP: Lộ trình từ A - Z để áp dụng linh hoạt
                                                    Bước 1: Luyện tập theo chuyên đề tương ứng với từng unit theo 3 cấp độ Dễ - Vừa - Khó
                                                    Bước 2: Tăng khả năng sử dụng linh hoạt các điểm ngữ pháp thông qua kho luyện tập trộn kiến thức
                                                    Bước 3: Theo dõi các video chia sẻ bí kíp thi cử, học ngữ pháp, phương pháp học hay
                                                    3. Lớp học livestream và Group cộng đồng
                                                </Text>
                                            </ScrollView>
                                            
                                            <TouchableNativeFeedback onPress={()=>{
                                                setShowDescription(false)
                                            }}>
                                                <View style={{padding:15, width:100, alignItems:"center"}}>
                                                    <Text style={{color:"blue"}}>Đóng</Text>
                                                </View>
                                            </TouchableNativeFeedback>
                                        </View>
                                    </View>
                                </View>
                            </Animatable.View>
                        )
                        : null
                    }

                    <View style={styles.boxDescription}>
                        <View style={{justifyContent:"center", alignItems:"center"}}>
                            <Text style={{fontSize:17,}}>Đánh giá</Text>
                            <View style={{flexDirection:"row"}}>
                                <View style={{width:"50%", justifyContent:"center", alignItems:"center"}}>
                                    <Text>Trung bình: 4.2 <AntDesign name="star" size={20} color="#FEC100" /> </Text>
                                </View>
                                <View style={{width:"50%", justifyContent:"center", alignItems:"center"}}>
                                    <Text>
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                    </Text>
                                    <Text>
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="staro" size={15} color="#FEC100" />
                                    </Text>
                                    <Text>
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="staro" size={15} color="#FEC100" />
                                        <AntDesign name="staro" size={15} color="#FEC100" />
                                    </Text>
                                    <Text>
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="staro" size={15} color="#FEC100" />
                                        <AntDesign name="staro" size={15} color="#FEC100" />
                                        <AntDesign name="staro" size={15} color="#FEC100" />
                                    </Text>
                                    <Text>
                                        <AntDesign name="star" size={15} color="#FEC100" />
                                        <AntDesign name="staro" size={15} color="#FEC100" />
                                        <AntDesign name="staro" size={15} color="#FEC100" />
                                        <AntDesign name="staro" size={15} color="#FEC100" />
                                        <AntDesign name="staro" size={15} color="#FEC100" />
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.boxRating}>

                            {
                                evaluate.map((item,index) =>{
                                    return (
                                        <MapEvaluate item={item} key={index} />
                                    )
                                })
                            }
                            <View style={{justifyContent:"center", alignItems:"center", width:"100%", padding:10}}>
                                <Text style={{color:"blue"}}>Xêm thêm</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.boxSuggestion}>
                        <View>
                            <View style={{flexDirection:"row", padding:5,justifyContent:"center",  alignItems:"center"}}>
                                <View >
                                    <Image 
                                        source={{uri:"https://thegioixedien.com.vn/images/loading2.gif"}}
                                        style={{ width:50, height:50, resizeMode:"center"}}
                                    />
                                </View>
                                <View >
                                <Text style={{fontSize:16, textTransform:"uppercase"}}>Sản phẩm cùng loại</Text>
                                </View>
                                
                            
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
                    
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
    },
    header:{
        width:"100%",
        backgroundColor:"transparent",
        justifyContent:'center', 
        alignItems:"center",
        padding:10
    },
    iconBack:{
        position:"absolute",
        left:"5%"
    },
    boxImg:{
        backgroundColor:"white",
        flexDirection:"row",
        justifyContent:"center", 
        alignItems:"center",
        padding:20
    },
    boxDescription:{
        width:"100%",
        backgroundColor:"white",
        marginTop:"1%",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:20,
        paddingBottom:20
    },
    boxModal:{
        width:"100%",
        position:"absolute",
        backgroundColor:"rgba(0,0,0,0.5)",
        zIndex:9,
        justifyContent:"center",
        alignItems:"center"
    },
    modal:{
        backgroundColor:"white",
        width:"100%",
        padding:"5%"
    },
    boxRating:{
        width:"100%", 
        borderTopWidth:2,
        margin:10,
        borderColor:"#E8E8E8", 
    },
    boxDetailRating:{
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center", 
        paddingTop:10,
    },
    boxSuggestion:{
        backgroundColor:"white", 
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
