import React, {useState} from 'react'
import { View,
     Text,
     StyleSheet, 
     Image,
     ImageBackground,
     SafeAreaView} from 'react-native'
import NumericInput from 'react-native-numeric-input'
import Swipeout from 'react-native-swipeout'
import { TouchableNativeFeedback, FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';

export default function CartPage({navigation}) {
    const [notication, setNocation] = useState(
        [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              name: 'Chúc mừng bạn nhận được 1 bịt thạch dừa',
              from:"weTech",
              image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfNgRukYoeXmV4Fu8FdfU-QLShaELwebryKA&usqp=CAU",
            },
            {
                id: '2-c1b1-46c2-aed5-3ad53abb28ba',
                name: 'Chúc mừng bạn nhận được 1 bịt thạch dừa',
                from:"weTech",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfNgRukYoeXmV4Fu8FdfU-QLShaELwebryKA&usqp=CAU",
              },
              {
                id: 'f-c1b1-46c2-aed5-3ad53abb28ba',
                name: 'Chúc mừng bạn nhận được 1 bịt thạch dừa',
                from:"weTech",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfNgRukYoeXmV4Fu8FdfU-QLShaELwebryKA&usqp=CAU",
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
                        <Image source={{uri:props.item.image, width:50, height:50,}} style={{resizeMode:"center"}}></Image>
                    </View>
                    <View style={{
                        width:"80%",
                        justifyContent:"center",
                    }}>
                        <View>
                            <Text style={{fontSize:15, }}>
                                {props.item.name} từ  -
                                <Text style={{color:"#318C4F"}}> 
                                      {props.item.from}
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
      
    return (
        <View style={styles.container}> 
        <ImageBackground source={require("./../../../../public/pexels-zetong-li-1784578.jpg")} style={{flex:1, resizeMode:"cover"}}>
            <View style={styles.header}>
                <Text style={{fontSize:17,textTransform:"uppercase", color:"white",padding:10}}>thông báo</Text>
            </View>
            <SafeAreaView style={{flex:1, backgroundColor:"#F3F3F3",}} >
            <FlatList
                data={notication}
                renderItem={({item, index})=>{
                    return(
                        <ProductItem item={item} index={index} />
                    )
                }}
                keyExtractor={item => item.id}
            />
                
            </SafeAreaView>
        </ImageBackground>  
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#EC6E04"
    },
    header:{
        flex:0.1,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
    },
    boxShopItem:{
        backgroundColor:"white",
        position:"relative",
        
    },
    itemShop:{
        
    },
    productItem:{
        flexDirection:"row",
        // borderBottomWidth:0.5
    }

})
