import React from 'react'
import { View, Text,Image,StatusBar } from 'react-native'

export default function CheckoutLoaderPage( {navigation} ) {
    setTimeout(() => {
        navigation.replace("CartStatusPage");
    }, 10000);
    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <StatusBar hidden backgroundColor="white" />
            <Image source={{uri:"https://416903-1310713-raikfcquaxqncofqfm.stackpathdns.com/wp-content/themes/alliedmotors/assets/img/preloader.gif",width:200,height:200}}></Image>
        </View>
    )
}
