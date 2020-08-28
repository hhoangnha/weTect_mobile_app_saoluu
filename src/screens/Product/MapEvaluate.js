import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Avatar, Badge, Icon, Button  } from 'react-native-elements'
import { Ionicons,FontAwesome5,EvilIcons,AntDesign} from '@expo/vector-icons';

export default function MapEvaluate({ item }) {
    return (
        <View style={{backgroundColor:"#F4F4F4", padding:10, borderBottomWidth:0.5, borderColor:"#129A00"}}>
            <View style={styles.boxDetailRating}>
                <View style={{width:"30%", flexDirection:"row",alignItems:"center"}}>
                    <Avatar
                        rounded
                        source={{
                            uri:item.avatar
                        }}
                    />
                    <View>
                        <Text style={{fontSize:15, padding:5}}>{item.name}</Text>
                        <Text style={{fontSize:11, paddingLeft:5, color:"#AAA9A9"}}>27-08-2020</Text>
                    </View>
                </View>
                <View style={{width:"30%"}}></View>
                <View style={{width:"30%"}}>
                    <Text>
                        <AntDesign name="star" size={15} color="#FEC100" />
                        <AntDesign name="star" size={15} color="#FEC100" />
                        <AntDesign name="staro" size={15} color="#FEC100" />
                        <AntDesign name="staro" size={15} color="#FEC100" />
                        <AntDesign name="staro" size={15} color="#FEC100" />
                    </Text>
                </View>
            </View>
            <View style={{marginLeft:50}}>
                <Text>
                    {item.content}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
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
})