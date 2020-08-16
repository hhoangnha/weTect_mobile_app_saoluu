import React, { Component } from 'react'
import { Text, View,TextInput, StyleSheet, TouchableOpacity,Modal, Keyboard  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'




export default function ScreenLogin({ navigation }){
    const [modal,setModal] = React.useState(false)
    const [hidePass,setHidePass] = React.useState(true);
    const [phone, setPhone] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [errorMsg,setErrorMsg] = React.useState("")


    function login(phone,password){
        Keyboard.dismiss();
        if((phone =='0939165008') && (password=='123456')){
            alert("ok")
        }else{
            setModal(true);
            setErrorMsg("Tên đăng nhập hoặc mật khẩu không hợp lệ")
            if(phone.length<6){
                setErrorMsg("Vui lòng nhập tên đăng nhập")
            }
        }
    }

    return (    
        <View style={style.container}>
            {modal ? (
                <View style={style.boxModal}>
                    <View style={style.modal}>
                        <Text style={{fontSize:15}}>{errorMsg}</Text>
                        <TouchableOpacity onPress={()=>{
                            setModal(false);
                            setErrorMsg("");
                        }} style={style.btnok}>
                                <Text style={style.titleLogin}>Đã rõ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : null}
            


            <View style={style.boxLogo}>
                <Text>LOGO WeTech</Text>
            </View>
            <View style={style.boxLogin}>
                <View style={style.boxInput}>
                    <Icon style={style.icon} name="user" size={25} color="white" />
                    <TextInput 
                        style={style.input}
                        placeholder="Tên đăng nhập"
                        placeholderTextColor="white"
                        defaultValue={phone}
                        returnKeyType="next"
                        onChangeText={(text)=>{
                            setPhone(text)
                        }}
                        
                        />
                </View>
                <View style={style.boxInput}>
                    <Icon style={style.icon} name="lock" size={25} color="white" />
                    <TextInput 
                        style={style.input}
                        placeholder="Mật khẩu"
                        placeholderTextColor="white"
                        defaultValue={password}
                        returnKeyType="done"
                        secureTextEntry={hidePass}
                        onChangeText={(text)=>{
                            setPassword(text)
                        }}
                        />
                    <Icon onPress={()=>setHidePass(!hidePass)} style={style.showIconPassword} name="eye" size={20} color="#DBDBDB" />
                </View>
                <TouchableOpacity onPress = {()=>login(phone,password)} style={style.btnLogin}>
                        <Text style={style.titleLogin}>đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.push("Register")} style={style.btnRegister}>
                        <Text>Bạn chưa có tài khoản?  <Text style={style.registerLink}>Đăng ký ngay</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
    },
    boxModal:{
        width:"100%",
        height:"100%",
        position:"absolute",
        backgroundColor:"rgba(0,0,0,0.5)",
        zIndex:5
    },
    modal:{
        backgroundColor:"white",
        width:"100%",
        height:"30%",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        zIndex:9,
        top:"25%",
        borderRadius:10
    },
    boxLogo:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    boxLogin:{
        flex:1,
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
    showIconPassword:{
        right:"5%",
        top:"5%"
    },  
    input:{
        width:"90%",
        marginTop:"7%",        
        padding:"3%",
        fontSize:15,
        color:"white"
    },
    btnLogin:{
        width:"90%",
        padding:"5%",
        marginTop:"7%",
        backgroundColor:"#0F7C03",
        justifyContent:"center",
        alignItems:"center",
        opacity:.9
    },
    btnRegister:{
        marginTop:"5%",
    },
    btnok:{
        width:"30%",
        padding:"3%",
        marginTop:"20%",
        backgroundColor:"#0F7C03",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5
    },  
    registerLink:{
        color:"#2950F1"
    },
    titleLogin:{
        fontSize:16,
        textTransform:"uppercase",
        color:"white"
    }
})

