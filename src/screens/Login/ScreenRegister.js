import React, { Component } from 'react'
import { Text, View,TextInput, StyleSheet, TouchableOpacity, Keyboard  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator } from '@react-navigation/stack';

function Infomation({navigation}){
    const [phone, setPhone] = React.useState("")
    const [password, setPassword] = React.useState('')
    const [enterPassword, setEnterPassword] = React.useState('')
    let [ErrPhone,setEP] = React.useState(false)
    let [ErrPassword,setErrPassword] = React.useState(false)
    let [ErrEnterPassword,setErrEnterPassword] = React.useState(false)
    let [DetailPhoneErr,setDetailPhoneErr] = React.useState("Tên đăng nhập phải từ 6 ký tự")
    let [DetailPasswordErr,setDetailPasswordErr] = React.useState("Mật khẩu chưa đủ mạnh")
    let [DetailEnterPasswordErr,setDetailEnterPasswordErr] = React.useState("Nhập lại mật khẩu không đúng")

    const nextConfirmCode = async (phone, password,enterPassword)=>{
        Keyboard.dismiss()
        function next(){

        }
        if(phone.length<6){
            setEP(true);
        }
        else{
            setEP(false);
            if(password.length<6){
                setErrPassword(true);
            }
            else{
                setErrPassword(false);
                if(enterPassword != password){
                    setErrEnterPassword(true);
                }
                else{
                    setErrEnterPassword(false)
                    
                    //chuyển trang mã xác nhận đăng ký tài khoản
                    navigation.navigate("ConfirmCode",{
                        phone:phone
                    })
                }
            }
        }
        
        
  
        
    }

    return(
        <View style={style.container}>
            <View style={style.boxLogo}>
                <Text>LOGO WeTech</Text>
            </View>
            <View style={style.boxLogin}>
                <View style={style.boxInput}>
                    <Icon style={style.icon} name="user" size={25} color="white" />
                    <TextInput 
                        style={style.input}
                        placeholder="Nhập số điện thoại"
                        placeholderTextColor="white"
                        autoCapitalize = 'none'
                        defaultValue={phone}
                        onChangeText={(text)=>{
                            setPhone(text)
                        }}
                        />
                        
                        <View>{ErrPhone? (<Icon style={{marginTop:"100%"}} name="exclamation-triangle" size={20} color="red" />) : null}</View>
                </View>
                <View style={style.boxInput}>
                    
                <Icon style={style.icon} name="lock" size={25} color="white" />
                    <TextInput 
                        style={style.input}
                        placeholder="Mật khẩu"
                        placeholderTextColor="white"
                        autoCapitalize = 'none'
                        defaultValue={password}
                        onChangeText={(text)=>{
                            setPassword(text)
                        }}
                        />
                        <View>{ErrPassword? (<Icon style={{marginTop:"100%"}} name="exclamation-triangle" size={20} color="red" />) : null}</View>
                </View>
                <View style={style.boxInput}>
                <Icon style={style.icon} name="lock" size={25} color="white" />
                    <TextInput 
                        style={style.input}
                        placeholder="Nhập lại mật khẩu"
                        placeholderTextColor="white"
                        autoCapitalize = 'none'
                        defaultValue={enterPassword}
                        onChangeText={(text)=>{
                            setEnterPassword(text)
                        }}
                        />
                        <View>{ErrEnterPassword? (<Icon style={{marginTop:"100%"}} name="exclamation-triangle" size={20} color="red" />) : null}</View>
                </View>
                <TouchableOpacity onPress={()=>nextConfirmCode(phone,password,enterPassword)} style={style.btnLogin}>
                        <Text style={style.titleLogin}>tiếp theo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress ={()=>navigation.goBack()} style={style.btnRegister}>
                        <Text>Bạn đã có tài khoản?  <Text style={style.loginLink}>Đăng nhập ngay</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
function ConfirmCode({navigation, route}){
    return(
        <View style={style.container}>
            <View style={style.boxLogo}>
                <Text>LOGO WeTech</Text>
            </View>
            
            <View style={style.boxConfirm}>
            <Text>Mã xác nhận đã được gửi đến: {route.params.phone}</Text>
                <View style={style.boxInput}>
                    <Icon style={style.icon} name="key" size={25} color="white" />
                    <TextInput 
                        style={style.input}
                        placeholder="Nhập mã xác nhận"
                        placeholderTextColor="white"
                        
                        />
                    <Text></Text>
                </View>
                <TouchableOpacity onPress = {()=>{alert("ok")}} style={style.btnLogin}>
                        <Text style={style.titleLogin}>tiếp theo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const Stack = createStackNavigator();
export default function ScreenRegister(){
    return (    
            <Stack.Navigator screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen name="Infomation" component={Infomation} />
                <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
            </Stack.Navigator>
        
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
    },
    boxLogo:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    boxLogin:{
        flex:2,
        backgroundColor:"#6FB477",
        justifyContent:"center",
        alignItems:"center",
        
    },
    boxConfirm:{
        flex:.5,
        backgroundColor:"#6FB477",
        justifyContent:"center",
        alignItems:"center",
    },
    boxInput:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1.5,
        borderColor:"#E4E0E0",
        width:"90%",
        position:'relative'
    },
    
    icon:{
        marginTop:"7%",      
    },
    iconError:{
        marginTop:"7%",  
        color:"red"
    },
   
    input:{
        width:"90%",
        marginTop:"7%",        
        padding:"3%",
        fontSize:15,
        color:"white"
    },
    inputError:{
        width:"90%",
        marginTop:"7%",        
        padding:"3%",
        fontSize:15,
        color:"red"
    },
    btnLogin:{
        width:"90%",
        padding:"5%",
        marginTop:"7%",
        backgroundColor:"#F17B29",
        justifyContent:"center",
        alignItems:"center",
        opacity:.9
    },
    btnRegister:{
        marginTop:"5%",
    },
    loginLink:{
        color:"#F17B29"
    },
    titleLogin:{
        fontSize:16,
        textTransform:"uppercase",
        color:"white"
    },
    errorInputMsg:{
        color:"red",
        marginTop:"15%"
    }
})

