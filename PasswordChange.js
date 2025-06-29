import React,{useState} from 'react';
import { Text, View, ImageBackground, TextInput, Image, TouchableOpacity } from 'react-native';
import MyButton from '../Components/MyButton';
import Icon from "react-native-vector-icons/Ionicons";
const PasswordChange = (props) => {
   const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={{flex:1}}>
    <ImageBackground
      source={require('../Assets/back.png')}
      style={{ height: '100%', width: '100%', flex: 1 }}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "black", fontFamily: "Segoe UI", textAlign: "center", marginTop: 55 }}>Change Password</Text>
      </View>
      <View style={{ height: 67.03, width: 309.78, backgroundColor: "white", borderRadius: 10, borderWidth: 1, borderColor: "gray", marginTop: 140, marginHorizontal: 33 }}>
        <TextInput placeholder='old Password' style={{ height: "100%", width: "100%", flex: 1 }} />

      </View>
      <View style={{
        height: 67.03,
        width: 309.78,
        borderRadius: 10,
        borderColor: "#4755ed",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 15,
        borderWidth: 0.3,
        borderColor: "#ccc",
        marginHorizontal: 37,
        marginTop:22
      }}>
        <TextInput
          placeholder="New Password"
          secureTextEntry={!showPassword}
          style={{ flex: 1, fontSize: 16 }}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
          <Icon name={showPassword ? "eye" : "eye-off"} size={20} color="#888" style={{ marginHorizontal: 10 }} />
        </TouchableOpacity>
      </View>
      <View style={{
        height: 67.03,
        width: 309.78,
        borderRadius: 10,
        borderColor: "#4755ed",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        borderWidth: 0.3,
        borderColor: "#ccc",
        marginHorizontal: 37,
        marginTop:8
      }}>
        <TextInput
          placeholder="Repeat Password"
          secureTextEntry={!showPassword}
          style={{ flex: 1, fontSize: 16 }}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
          <Icon name={showPassword ? "eye" : "eye-off"} size={20} color="#888" style={{ marginHorizontal: 10 }} />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 25, flexDirection: "row", justifyContent: "space-between", height: 65, width: "95%", marginHorizontal: 24 }}>
        <MyButton onPress={() => { props.navigation.navigate("HomeTabs"); }} Ahsan="Confirm" />
        <View style={{
          height: 65, width: "25%", backgroundColor: "#b5dcf7", borderRadius: 10, marginTop: 24, justifyContent: "center", alignItems: "center", marginRight: 85, paddingHorizontal: 22
        }}>
          <Image
            tintColor="#1342b0"
            source={require("../Assets/finger.png")} style={{ height: 55, width: 30 }} />
        </View>
      </View>
    </ImageBackground>
    </View>
    
  );
};

export default PasswordChange;
