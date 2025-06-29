// import React from 'react';


import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity
} from 'react-native';
import MyButton from '../Components/MyButton';

const SplashScreen=(props)=>{
  return (
    <SafeAreaView>
     <Text style={{fontSize:25, color:"black", fontWeight:"bold", textAlign:"center", marginTop:55}}>Welcome to the HnH Soft Tech Solutions PVT LTD</Text>
     <View style={{height:1, backgroundColor:"black", marginHorizontal:20, marginVertical:10}} />
     <Text style={{fontSize:24, color:"black", fontWeight:"700", textAlign:"center", marginTop:12}}>Your Potential Our Passion</Text>
     <Image source={require("../Assets/logo.png")} style={{height:230, width:280, justifyContent:"center", margin:65}}/>
     <TouchableOpacity 
     onPress={()=>{
      props.navigation.navigate("Login");
     }}
     style={{height:80, width:"55%", backgroundColor:"#09527E", borderRadius:20, marginTop:15,  justifyContent:"center", alignItems:"center", marginHorizontal:80}}>
     <Text style={{fontSize:25, color:"white", fontWeight:"bold", textAlign:"center"}}>Get Started</Text>
     </TouchableOpacity>
    </SafeAreaView>
  );
};
export default SplashScreen;

// import React, { useEffect } from 'react';
// import {
//   SafeAreaView,
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ActivityIndicator,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const checkBreakOutStatus = async () => {
//       const status = await AsyncStorage.getItem("breakOutStatus");
//       if (status === "true") {
//         navigation.replace("Login");
//       } else {
//         await AsyncStorage.setItem("breakOutStatus", "false");
//         navigation.replace("HomeTabs");
//       }
//     };
//     checkBreakOutStatus();
//   }, []);


//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>
//         Welcome to the HnH Soft Tech Solutions PVT LTD
//       </Text>
//       <View style={styles.separator} />
//       <Text style={styles.subtitle}>Your Potential Our Passion</Text>
//       <Image
//         source={require('../Assets/logo.png')}
//         style={styles.logo}
//       />
//       <TouchableOpacity
//         onPress={() => {
//           props.navigation.navigate('Login');
//         }}
//         style={styles.getStartedButton}
//       >
//         <Text style={styles.getStartedText}>Get Started</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 25,
//     color: 'black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 55,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: 'black',
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   subtitle: {
//     fontSize: 24,
//     color: 'black',
//     fontWeight: '700',
//     textAlign: 'center',
//     marginTop: 12,
//   },
//   logo: {
//     height: 230,
//     width: 280,
//     justifyContent: 'center',
//     margin: 65,
//   },
//   getStartedButton: {
//     height: 80,
//     width: '55%',
//     backgroundColor: '#09527E',
//     borderRadius: 20,
//     marginTop: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   getStartedText: {
//     fontSize: 25,
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default SplashScreen;

// import React, { useEffect } from 'react';
// import {
//   SafeAreaView,
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   ActivityIndicator,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const checkBreakOutStatus = async () => {
//       const status = await AsyncStorage.getItem('breakOutStatus');
//       if (status === 'true') {
//         navigation.replace('HomeTabs'); // Navigate to HomeTabs if BreakOut is completed
//       } else {
//         await AsyncStorage.setItem('breakOutStatus', 'false'); // Reset BreakOut status
//         navigation.replace('Login'); // Navigate to Login if not clicked
//       }
//     };
//     checkBreakOutStatus();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>
//         Welcome to the HnH Soft Tech Solutions PVT LTD
//       </Text>
//       <View style={styles.separator} />
//       <Text style={styles.subtitle}>Your Potential Our Passion</Text>
//       <Image
//         source={require('../Assets/logo.png')}
//         style={styles.logo}
//       />
//       <ActivityIndicator size="large" color="#000" style={styles.loader} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 16 },
//   title: { fontSize: 25, color: 'black', fontWeight: 'bold', textAlign: 'center', marginTop: 55 },
//   separator: { height: 1, backgroundColor: 'black', marginHorizontal: 20, marginVertical: 10 },
//   subtitle: { fontSize: 24, color: 'black', fontWeight: '700', textAlign: 'center', marginTop: 12 },
//   logo: { height: 230, width: 280, justifyContent: 'center', margin: 65 },
//   loader: { marginTop: 20 },
// });

// export default SplashScreen;

// import React, { useEffect } from 'react';
// import {
//   SafeAreaView,
//   Image,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ActivityIndicator,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const checkBreakOutStatus = async () => {
//         const status = await AsyncStorage.getItem('breakOutStatus');
//         if (status === 'true') {
//             navigation.replace('HomeTabs'); // Navigate to HomeTabs
//         } else {
//             await AsyncStorage.setItem('breakOutStatus', 'false'); // Reset status
//             navigation.replace('Splash'); // Navigate to Splash
//         }
//     };
//     checkBreakOutStatus();
//   }, [navigation]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>
//         Welcome to the HnH Soft Tech Solutions PVT LTD
//       </Text>
//       <View style={styles.separator} />
//       <Text style={styles.subtitle}>Your Potential Our Passion</Text>
//       <Image
//         source={require('../Assets/logo.png')}
//         style={styles.logo}
//       />
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('Login');
//         }}
//         style={styles.getStartedButton}
//       >
//         <Text style={styles.getStartedText}>Get Started</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 25,
//     color: 'black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 55,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: 'black',
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   subtitle: {
//     fontSize: 24,
//     color: 'black',
//     fontWeight: '700',
//     textAlign: 'center',
//     marginTop: 12,
//   },
//   logo: {
//     height: 230,
//     width: 280,
//     justifyContent: 'center',
//     margin: 65,
//   },
//   getStartedButton: {
//     height: 80,
//     width: '55%',
//     backgroundColor: '#09527E',
//     borderRadius: 20,
//     marginTop: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   getStartedText: {
//     fontSize: 25,
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default SplashScreen;

// import React, { useEffect } from 'react';
// import { SafeAreaView, Image, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const checkBreakOutStatus = async () => {
//         const status = await AsyncStorage.getItem('breakOutStatus');
//         if (status === 'true') {
//             navigation.replace('HomeTabs'); // Navigate to HomeTabs if BreakOut is true
//         } else {
//             await AsyncStorage.setItem('breakOutStatus', 'false'); // Reset status
//             navigation.replace('Login'); // Navigate to Login if not BreakOut
//         }
//     };
//     checkBreakOutStatus();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>
//         Welcome to the HnH Soft Tech Solutions PVT LTD
//       </Text>
//       <View style={styles.separator} />
//       <Text style={styles.subtitle}>Your Potential Our Passion</Text>
//       <Image source={require('../Assets/logo.png')} style={styles.logo} />
//       <TouchableOpacity
//         onPress={() => navigation.navigate('Login')}
//         style={styles.getStartedButton}
//       >
//         <Text style={styles.getStartedText}>Get Started</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 25,
//     color: 'black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 55,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: 'black',
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   subtitle: {
//     fontSize: 24,
//     color: 'black',
//     fontWeight: '700',
//     textAlign: 'center',
//     marginTop: 12,
//   },
//   logo: {
//     height: 230,
//     width: 280,
//     justifyContent: 'center',
//     margin: 65,
//   },
//   getStartedButton: {
//     height: 80,
//     width: '55%',
//     backgroundColor: '#09527E',
//     borderRadius: 20,
//     marginTop: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   getStartedText: {
//     fontSize: 25,
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default SplashScreen;

// import React, { useEffect } from 'react';
// import { SafeAreaView, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const checkBreakOutStatus = async () => {
//       const status = await AsyncStorage.getItem('breakOutStatus');
//       if (status === 'true') {
//         navigation.replace('HomeTabs'); // Navigate to HomeTabs if BreakOut is true
//       } else {
//         await AsyncStorage.setItem('breakOutStatus', 'false'); // Reset status if not
//         navigation.replace('Splash'); // Navigate to Login if BreakOut is false
//       }
//     };
//     checkBreakOutStatus();
//   }, [navigation]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Welcome to the HnH Soft Tech Solutions PVT LTD</Text>
//       <View style={styles.separator} />
//       <Text style={styles.subtitle}>Your Potential Our Passion</Text>
//       <Image source={require('../Assets/logo.png')} style={styles.logo} />
//       <TouchableOpacity
//         onPress={() => navigation.replace('Login')} // Ensure this navigates to Login directly
//         style={styles.getStartedButton}
//       >
//         <Text style={styles.getStartedText}>Get Started</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 25,
//     color: 'black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 55,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: 'black',
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   subtitle: {
//     fontSize: 24,
//     color: 'black',
//     fontWeight: '700',
//     textAlign: 'center',
//     marginTop: 12,
//   },
//   logo: {
//     height: 230,
//     width: 280,
//     justifyContent: 'center',
//     margin: 65,
//   },
//   getStartedButton: {
//     height: 80,
//     width: '55%',
//     backgroundColor: '#09527E',
//     borderRadius: 20,
//     marginTop: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   getStartedText: {
//     fontSize: 25,
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default SplashScreen;


// import React, { useEffect } from 'react';
// import {
//   SafeAreaView,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const checkBreakOutStatus = async () => {
//       const status = await AsyncStorage.getItem('breakOutStatus');
//       if (status === 'true') {
//         navigation.replace('HomeTabs'); // Navigate to HomeTabs directly
//       } else {
//         navigation.replace('Login'); // Navigate to Login if BreakOut not clicked
//       }
//     };
//     checkBreakOutStatus();
//   }, [navigation]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>
//         Welcome to the HnH Soft Tech Solutions PVT LTD
//       </Text>
//       <View style={styles.separator} />
//       <Text style={styles.subtitle}>Your Potential Our Passion</Text>
//       <Image
//         source={require('../Assets/logo.png')}
//         style={styles.logo}
//       />
//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('Login');
//         }}
//         style={styles.getStartedButton}
//       >
//         <Text style={styles.getStartedText}>Get Started</Text>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   title: {
//     fontSize: 25,
//     color: 'black',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginTop: 55,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: 'black',
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   subtitle: {
//     fontSize: 24,
//     color: 'black',
//     fontWeight: '700',
//     textAlign: 'center',
//     marginTop: 12,
//   },
//   logo: {
//     height: 230,
//     width: 280,
//     justifyContent: 'center',
//     margin: 65,
//   },
//   getStartedButton: {
//     height: 80,
//     width: '55%',
//     backgroundColor: '#09527E',
//     borderRadius: 20,
//     marginTop: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   getStartedText: {
//     fontSize: 25,
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default SplashScreen;


// import React, { useEffect } from "react";
// import { SafeAreaView, Image, StyleSheet, Text, View } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const checkBreakOutStatus = async () => {
//       const status = await AsyncStorage.getItem("breakOutStatus");
//       if (status === "true") {
//         navigation.replace("HomeTabs"); // Navigate to HomeTabs
//       } else {
//         await AsyncStorage.setItem("breakOutStatus", "false"); // Reset status
//         navigation.replace("Splash"); // Navigate to Login
//       }
//     };
//     checkBreakOutStatus();
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>
//         Welcome to the HnH Soft Tech Solutions PVT LTD
//       </Text>
//       <View style={styles.separator} />
//       <Text style={styles.subtitle}>Your Potential Our Passion</Text>
//       <Image source={require("../Assets/logo.png")} style={styles.logo} />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//   },
//   title: {
//     fontSize: 25,
//     color: "black",
//     fontWeight: "bold",
//     textAlign: "center",
//     marginTop: 55,
//   },
//   separator: {
//     height: 1,
//     backgroundColor: "black",
//     marginHorizontal: 20,
//     marginVertical: 10,
//   },
//   subtitle: {
//     fontSize: 24,
//     color: "black",
//     fontWeight: "700",
//     textAlign: "center",
//     marginTop: 12,
//   },
//   logo: {
//     height: 230,
//     width: 280,
//     justifyContent: "center",
//     margin: 65,
//   },
// });

// export default SplashScreen;
