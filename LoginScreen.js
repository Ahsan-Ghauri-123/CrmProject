// import React,{ useState } from "react";

// import { View, Text, Image, TextInput } from "react-native";
// import Color from "../Constants/Color";
// import MyInput from "../Components/MyInput";
// import MyButton from "../Components/MyButton";

// const LoginScreen=(props)=>{
//     const[email, setEmail]=useState("");
//     const[Password, setPassword]=useState("");


//     const LoginHandler=()=>{
//         // if(email===""){
//         //     alert("Please enter your email first");
//         // }else if(Password===""){
//         //     alert("Please enter your Password first");
//         // }else if(email==="sohaibaqeel@gmail.com" && Password==="sohaib123"){
//         //     props.navigation.navigate("HomeScreen");
//         // }else{
//         //     alert("Please enter a valid email or Password");
//         // }
//         props.navigation.navigate("HomeScreen");
//     };

//     return(
//         <View style={{flex:1, backgroundColor:"white"}}>
//             <View style={{height:"25%", width:"100%", justifyContent:"center", alignItems:"center"}}>
//                 <Image
//                 source={require("../Assets/logo.png")}
//                 style={{height:90.96, width:113.59}} 
//                 />

//             </View>
//             <Image source={require("../Assets/Consulting_Isometric.png")} style={{marginHorizontal:43,width:297.93, height:159.66}} />
//             <View style={{ height:"75%", width:"100%",marginHorizontal:10, marginTop:12}}>
//             <Text style={{fontSize:18}}>Welcome Back</Text>
//             <Text style={{fontSize:25, fontWeight:"bold", margin:3, color:"#0f0959"}}>Account Log In</Text>    
//             <Text style={{fontSize:13, fontWeight:"bold", marginTop:15, textAlign:"center"}}>Username or Log In Using Email</Text>  
//             <MyInput
//                 Don="Please Enter your email Address" 
//                 onChangeText={(text)=>{
//                     setEmail(text);
//                 }}

//                 />
//                 <MyInput
//                 secureTextEntry={true}
//                 Don="Please Enter your Password" 
//                 onChangeText={(text)=>{
//                     setPassword(text);
//                 }}

//                 />

//                 <View style={{marginTop:1, flexDirection:"row", justifyContent:"space-between"}}>
//                 <MyButton onPress ={()=>{
//                     props.navigation.navigate("HomeTabs");
//                 }} Ahsan="Continue" />
//                 <View style={{height:75, width:"25%", backgroundColor:"#b5dcf7", borderRadius:20, marginTop:28,  justifyContent:"center", alignItems:"center", marginRight:85, paddingHorizontal:22}}>
//                 <Image 
//                 tintColor="#1342b0"
//                 source={require("../Assets/finger.png")} style={{height:55, width:30 }} />

//                 </View>
//                 </View>

//             </View>

//         </View>

//     );
// };
// export default LoginScreen;

// import React, { useState } from "react";
// import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons"; // For icons (install with `expo install @expo/vector-icons` if using Expo)
// import MyButton from "../Components/MyButton";

// const LoginScreen = (props) => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility

//     const LoginHandler = () => {
//         props.navigation.navigate("HomeScreen");
//     };

//     return (
//         <View style={{ flex: 1, backgroundColor: "white" }}>
//             <View style={{ height: "25%", width: "100%", justifyContent: "center", alignItems: "center" }}>
//                 <Image
//                     source={require("../Assets/logo.png")}
//                     style={{ height: 90.96, width: 113.59, marginTop:2}}
//                 />
//             </View>
//             <Image source={require("../Assets/Consulting_Isometric.png")} style={{ marginHorizontal: 43, width: 297.93, height: 159.66, marginBottom:2}} />
//             <View style={{ height: "75%", width: "100%", marginHorizontal: 10, marginTop: 1 }}>
//                 <Text style={{ fontSize: 18 }}>Welcome Back</Text>
//                 <Text style={{ fontSize: 25, fontWeight: "bold", margin: 3, color: "#024C84" }}>Account Log In</Text>
//                 <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 15, textAlign: "center" }}>Username or Log In Using Email</Text>

//                 {/* Email Input */}

//                 <View style={{
//                   height: 65,
//                   width: "88%",
//                   borderRadius: 10,
//                   borderColor: "#4755ed",
//                   flexDirection: "row",
//                   alignItems: "center",
//                   marginVertical: 10,
//                   borderWidth: 1,
//                   borderColor: "#ccc",
//                   marginHorizontal: 18,
//                   paddingHorizontal: 10,
//                 }}>
//                   <TextInput
//                     placeholder="Please Enter your email Address"
//                     style={{ flex: 1, fontSize: 16 }}
//                     onChangeText={(text) => setEmail(text)}
//                   />
//                   {/* Right Side Icon */}
//                   <Icon name="person-circle-outline" size={24} color="#888" />
//                 </View>


//                 {/* Password Input */}
//                 <View style={{height:65, width:"88%", borderRadius:10, borderColor:"#4755ed", flexDirection: "row", alignItems: "center", marginVertical: 10, borderWidth: 1, borderColor: "#ccc", marginHorizontal:18 }}>
//                     <TextInput
//                         placeholder="Please Enter your Password"
//                         secureTextEntry={!showPassword}
//                         style={{ flex: 1, fontSize: 16 }}
//                         onChangeText={(text) => setPassword(text)}
//                     />
//                     <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
//                         <Icon name={showPassword ? "eye" : "eye-off"} size={20} color="#888" style={{ marginHorizontal: 10 }} />
//                     </TouchableOpacity>
//                 </View>
//         <View style={{ marginTop: -4, flexDirection: "row", justifyContent: "space-between" }}>
//                     <MyButton onPress={() => {
//                         props.navigation.navigate("HomeTabs");
//                     }} Ahsan="Continue" />
//                     <View style={{ height: 65, width: "25%", backgroundColor: "#b5dcf7", borderRadius: 10, marginTop: 24, justifyContent: "center", alignItems: "center", marginRight: 85, paddingHorizontal: 22 }}>
//                         <Image
//                             tintColor="#1342b0"
//                             source={require("../Assets/finger.png")} style={{ height: 55, width: 30 }} />
//                     </View>
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default LoginScreen;

// import React, { useState } from "react";
// import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons"; // For icons (install with `expo install @expo/vector-icons` if using Expo)
// import MyButton from "../Components/MyButton";

// const LoginScreen = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility

//   const LoginHandler = () => {
//     if (email === "") {
//       alert("Please enter your email first");
//     } else if (password === "") {  // Change Password to password here
//       alert("Please enter your Password first");
//     } else if (email === "sohaibaqeel@gmail.com" && password === "sohaib123") {  // Change Password to password here
//       props.navigation.navigate("HomeTabs");
//     } else {
//       alert("Please enter a valid email or Password");
//     }
//   };
//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}>
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
//         <View style={{ backgroundColor: "white" }}>
//           <View style={{ height: "25%", width: "100%", justifyContent: "center", alignItems: "center" }}>
//             <Image
//               source={require("../Assets/logo.png")}
//               style={{ height: 90.96, width: 113.59, marginTop: 2 }}
//             />
//           </View>
//           <Image source={require("../Assets/Consulting_Isometric.png")} style={{ marginHorizontal: 43, width: 297.93, height: 159.66, marginBottom: 2 }} />
//           <View style={{ marginHorizontal: 10, marginTop: 1 }}>
//             <Text style={{ fontSize: 18 }}>Welcome Back</Text>
//             <Text style={{ fontSize: 25, fontWeight: "bold", margin: 3, color: "#024C84" }}>Account Log In</Text>
//             <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 15, textAlign: "center" }}>Username or Log In Using Email</Text>

//             {/* Email Input */}
//             <View style={{
//               height: 65,
//               width: "88%",
//               borderRadius: 10,
//               borderColor: "#4755ed",
//               flexDirection: "row",
//               alignItems: "center",
//               marginVertical: 10,
//               borderWidth: 1,
//               borderColor: "#ccc",
//               marginHorizontal: 18,
//               paddingHorizontal: 10,
//             }}>
//               <TextInput
//                 placeholder="Please Enter your email Address"
//                 style={{ flex: 1, fontSize: 16 }}
//                 onChangeText={(text) => setEmail(text)}
//               />
//               {/* Right Side Icon */}
//               <Icon name="person-circle-outline" size={24} color="#888" />
//             </View>

//             {/* Password Input */}
//             <View style={{
//               height: 65,
//               width: "88%",
//               borderRadius: 10,
//               borderColor: "#4755ed",
//               flexDirection: "row",
//               alignItems: "center",
//               marginVertical: 10,
//               borderWidth: 1,
//               borderColor: "#ccc",
//               marginHorizontal: 18
//             }}>
//               <TextInput
//                 placeholder="Please Enter your Password"
//                 secureTextEntry={!showPassword}
//                 style={{ flex: 1, fontSize: 16 }}
//                 onChangeText={(text) => setPassword(text)}
//               />
//               <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
//                 <Icon name={showPassword ? "eye" : "eye-off"} size={20} color="#888" style={{ marginHorizontal: 10 }} />
//               </TouchableOpacity>
//             </View>

//             <View style={{ marginTop: -4, flexDirection: "row", justifyContent: "space-between" }}>
//               <MyButton onPress={ LoginHandler } Ahsan="Continue" />
//               <View style={{
//                 height: 65, width: "25%", backgroundColor: "#b5dcf7", borderRadius: 10, marginTop: 24, justifyContent: "center", alignItems: "center", marginRight: 85, paddingHorizontal: 22
//               }}>
//                 <Image
//                   tintColor="#1342b0"
//                   source={require("../Assets/finger.png")} style={{ height: 55, width: 30 }} />
//               </View>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default LoginScreen;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons"; // For icons
// import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
// import MyButton from "../Components/MyButton";

// const LoginScreen = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility

//   // Load saved credentials on component mount
//   useEffect(() => {
//     const loadSavedCredentials = async () => {
//       try {
//         const savedEmail = await AsyncStorage.getItem("email");
//         const savedPassword = await AsyncStorage.getItem("password");
//         if (savedEmail) setEmail(savedEmail);
//         if (savedPassword) setPassword(savedPassword);
//       } catch (error) {
//         console.error("Error loading saved credentials:", error);
//       }
//     };
//     loadSavedCredentials();
//   }, []);

//   // Save user credentials after successful login
//   const saveCredentials = async () => {
//     try {
//       await AsyncStorage.setItem("email", email);
//       await AsyncStorage.setItem("password", password);
//     } catch (error) {
//       console.error("Error saving credentials:", error);
//     }
//   };

//   const LoginHandler = async () => {
//     if (email === "") {
//       alert("Please enter your email first");
//     } else if (password === "") {
//       alert("Please enter your Password first");
//     } else if (email === "sohaibaqeel@gmail.com" && password === "sohaib123") {
//       // Save credentials
//       await saveCredentials();
//       setEmail(""); 
//       setPassword("");
//       // Navigate to HomeTabs
//       props.navigation.navigate("HomeTabs");
//     }else {
//       alert("Please enter a valid email or Password");
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}>
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
//         <View style={{ backgroundColor: "white" }}>
//           <View style={{ height: "25%", width: "100%", justifyContent: "center", alignItems: "center" }}>
//             <Image
//               source={require("../Assets/logo.png")}
//               style={{ height: 90.96, width: 113.59, marginTop: 2 }}
//             />
//           </View>
//           <Image
//             source={require("../Assets/Consulting_Isometric.png")}
//             style={{ marginHorizontal: 43, width: 297.93, height: 159.66, marginBottom: 2 }}
//           />
//           <View style={{ marginHorizontal: 10, marginTop: 1 }}>
//             <Text style={{ fontSize: 18 }}>Welcome Back</Text>
//             <Text style={{ fontSize: 25, fontWeight: "bold", margin: 3, color: "#024C84" }}>Account Log In</Text>
//             <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 15, textAlign: "center" }}>
//               Username or Log In Using Email
//             </Text>

//             {/* Email Input */}
//             <View
//               style={{
//                 height: 65,
//                 width: "88%",
//                 borderRadius: 10,
//                 borderColor: "#4755ed",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginVertical: 10,
//                 borderWidth: 1,
//                 borderColor: "#ccc",
//                 marginHorizontal: 18,
//                 paddingHorizontal: 10,
//               }}
//             >
//               <TextInput
//                 placeholder="Please Enter your email Address"
//                 style={{ flex: 1, fontSize: 16 }}
//                 value={email}
//                 onChangeText={(text) => setEmail(text)}
//               />
//               <Icon name="person-circle-outline" size={24} color="#888" />
//             </View>

//             {/* Password Input */}
//             <View
//               style={{
//                 height: 65,
//                 width: "88%",
//                 borderRadius: 10,
//                 borderColor: "#4755ed",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginVertical: 10,
//                 borderWidth: 1,
//                 borderColor: "#ccc",
//                 marginHorizontal: 18,
//               }}
//             >
//               <TextInput
//                 placeholder="Please Enter your Password"
//                 secureTextEntry={!showPassword}
//                 style={{ flex: 1, fontSize: 16 }}
//                 value={password}
//                 onChangeText={(text) => setPassword(text)}
//               />
//               <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
//                 <Icon
//                   name={showPassword ? "eye" : "eye-off"}
//                   size={20}
//                   color="#888"
//                   style={{ marginHorizontal: 10 }}
//                 />
//               </TouchableOpacity>
//             </View>

//             <View style={{ marginTop: -4, flexDirection: "row", justifyContent: "space-between" }}>
//               <MyButton onPress={LoginHandler} Ahsan="Continue" />
//               <View
//                 style={{
//                   height: 65,
//                   width: "25%",
//                   backgroundColor: "#b5dcf7",
//                   borderRadius: 10,
//                   marginTop: 24,
//                   justifyContent: "center",
//                   alignItems: "center",
//                   marginRight: 85,
//                   paddingHorizontal: 22,
//                 }}
//               >
//                 <Image
//                   tintColor="#1342b0"
//                   source={require("../Assets/finger.png")}
//                   style={{ height: 55, width: 30 }}
//                 />
//               </View>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default LoginScreen;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons"; // For icons
// import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
// import MyButton from "../Components/MyButton";

// const LoginScreen = (props) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility

//   // Load saved credentials on component mount
//   useEffect(() => {
//     const loadSavedCredentials = async () => {
//       try {
//         const savedEmail = await AsyncStorage.getItem("email");
//         const savedPassword = await AsyncStorage.getItem("password");
//         if (savedEmail) setEmail(savedEmail);
//         if (savedPassword) setPassword(savedPassword);
//       } catch (error) {
//         console.error("Error loading saved credentials:", error);
//       }
//     };

//     loadSavedCredentials();
//   }, []);

//   // Save user credentials after successful login
//   const saveCredentials = async () => {
//     try {
//       await AsyncStorage.setItem("email", email);
//       await AsyncStorage.setItem("password", password);
//     } catch (error) {
//       console.error("Error saving credentials:", error);
//     }
//   };

//   const LoginHandler = async () => {
//     if (email === "") {
//       alert("Please enter your email first");
//     } else if (password === "") {
//       alert("Please enter your Password first");
//     } else if (email === "sohaibaqeel@gmail.com" && password === "sohaib123") {
//       // Save credentials
//       await saveCredentials();

//       // Clear credentials in the state after login
//       setEmail("");
//       setPassword("");

//       // Navigate to HomeTabs
//       props.navigation.navigate("HomeTabs");
//     } else {
//       alert("Please enter a valid email or Password");
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={{ flex: 1 }}
//     >
//       <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
//         <View style={{ backgroundColor: "white" }}>
//           <View style={{ height: "25%", width: "100%", justifyContent: "center", alignItems: "center" }}>
//             <Image
//               source={require("../Assets/logo.png")}
//               style={{ height: 90.96, width: 113.59, marginTop: 2 }}
//             />
//           </View>
//           <Image
//             source={require("../Assets/Consulting_Isometric.png")}
//             style={{ marginHorizontal: 43, width: 297.93, height: 159.66, marginBottom: 2 }}
//           />
//           <View style={{ marginHorizontal: 10, marginTop: 1 }}>
//             <Text style={{ fontSize: 18 }}>Welcome Back</Text>
//             <Text style={{ fontSize: 25, fontWeight: "bold", margin: 3, color: "#024C84" }}>Account Log In</Text>
//             <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 15, textAlign: "center" }}>
//               Username or Log In Using Email
//             </Text>

//             {/* Email Input */}
//             <View
//               style={{
//                 height: 65,
//                 width: "88%",
//                 borderRadius: 10,
//                 borderColor: "#4755ed",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginVertical: 10,
//                 borderWidth: 1,
//                 borderColor: "#ccc",
//                 marginHorizontal: 18,
//                 paddingHorizontal: 10,
//               }}
//             >
//               <TextInput
//                 placeholder="Please Enter your email Address"
//                 style={{ flex: 1, fontSize: 16 }}
//                 value={email}
//                 onChangeText={(text) => setEmail(text)}
//               />
//               <Icon name="person-circle-outline" size={24} color="#888" />
//             </View>

//             {/* Password Input */}
//             <View
//               style={{
//                 height: 65,
//                 width: "88%",
//                 borderRadius: 10,
//                 borderColor: "#4755ed",
//                 flexDirection: "row",
//                 alignItems: "center",
//                 marginVertical: 10,
//                 borderWidth: 1,
//                 borderColor: "#ccc",
//                 marginHorizontal: 18,
//               }}
//             >
//               <TextInput
//                 placeholder="Please Enter your Password"
//                 secureTextEntry={!showPassword}
//                 style={{ flex: 1, fontSize: 16 }}
//                 value={password}
//                 onChangeText={(text) => setPassword(text)}
//               />
//               <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
//                 <Icon
//                   name={showPassword ? "eye" : "eye-off"}
//                   size={20}
//                   color="#888"
//                   style={{ marginHorizontal: 10 }}
//                 />
//               </TouchableOpacity>
//             </View>

//             <View style={{ marginTop: -4, flexDirection: "row", justifyContent: "space-between" }}>
//               <MyButton
//                 onPress={LoginHandler}
//                 Ahsan="Continue"
//               />
//               <View
//                 style={{
//                   height: 65,
//                   width: "25%",
//                   backgroundColor: "#b5dcf7",
//                   borderRadius: 10,
//                   marginTop: 24,
//                   justifyContent: "center",
//                   alignItems: "center",
//                   marginRight: 85,
//                   paddingHorizontal: 22,
//                 }}
//               >
//                 <Image
//                   tintColor="#1342b0"
//                   source={require("../Assets/finger.png")}
//                   style={{ height: 55, width: 30 }}
//                 />
//               </View>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default LoginScreen;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons"; // For icons
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import MyButton from "../Components/MyButton";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility

  // Load saved credentials on component mount
  useEffect(() => {
    const loadSavedCredentials = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem("email");
        const savedPassword = await AsyncStorage.getItem("password");
        if (savedEmail) setEmail(savedEmail);
        if (savedPassword) setPassword(savedPassword);
      } catch (error) {
        console.error("Error loading saved credentials:", error);
      }
    };

    loadSavedCredentials();
  }, []);

  // Save user credentials after successful login
  const saveCredentials = async () => {
    try {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);
    } catch (error) {
      console.error("Error saving credentials:", error);
    }
  };

  // Clear saved credentials
  // const clearCredentials = async () => {
  //   try {
  //     await AsyncStorage.removeItem("email");
  //     await AsyncStorage.removeItem("password");
  //   } catch (error) {
  //     console.error("Error clearing credentials:", error);
  //   }
  // };

  const LoginHandler = async () => {
    if (email === "") {
      alert("Please enter your email first");
    } else if (password === "") {
      alert("Please enter your Password first");
    } else if (email === "sohaibaqeel@gmail.com" && password === "sohaib123") {
      // Save credentials
      await saveCredentials();

      // Clear credentials in the state after login
      setEmail("");
      setPassword("");

      // Navigate to BreakIn Screen
      props.navigation.navigate("HomeTabs");
    } else {
      alert("Please enter a valid email or Password");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={{ backgroundColor: "white" }}>
          <View style={{ height: "25%", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <Image
              source={require("../Assets/logo.png")}
              style={{ height: 90.96, width: 113.59, marginTop: 2 }}
            />
          </View>
          <Image
            source={require("../Assets/Consulting_Isometric.png")}
            style={{ marginHorizontal: 43, width: 297.93, height: 159.66, marginBottom: 2 }}
          />
          <View style={{ marginHorizontal: 10, marginTop: 1 }}>
            <Text style={{ fontSize: 18 }}>Welcome Back</Text>
            <Text style={{ fontSize: 25, fontWeight: "bold", margin: 3, color: "#024C84" }}>Account Log In</Text>
            <Text style={{ fontSize: 13, fontWeight: "bold", marginTop: 15, textAlign: "center" }}>
              Username or Log In Using Email
            </Text>

            {/* Email Input */}
            <View
              style={{
                height: 65,
                width: "88%",
                borderRadius: 10,
                borderColor: "#4755ed",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
                borderWidth: 1,
                borderColor: "#ccc",
                marginHorizontal: 18,
                paddingHorizontal: 10,
              }}
            >
              <TextInput
                placeholder="Please Enter your email Address"
                style={{ flex: 1, fontSize: 16 }}
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <Icon name="person-circle-outline" size={24} color="#888" />
            </View>

            {/* Password Input */}
            <View
              style={{
                height: 65,
                width: "88%",
                borderRadius: 10,
                borderColor: "#4755ed",
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
                borderWidth: 1,
                borderColor: "#ccc",
                marginHorizontal: 18,
              }}
            >
              <TextInput
                placeholder="Please Enter your Password"
                secureTextEntry={!showPassword}
                style={{ flex: 1, fontSize: 16 }}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
                <Icon
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#888"
                  style={{ marginHorizontal: 10 }}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: -4, flexDirection: "row", justifyContent: "space-between" }}>
              <MyButton
                onPress={LoginHandler}
                Ahsan="Continue"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
