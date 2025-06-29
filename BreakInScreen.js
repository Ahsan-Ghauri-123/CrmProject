// import React from 'react';
// import { Text, View, Image } from 'react-native';

// const BreakInScreen = () => {
//     return (
//        <View style={{flex:1, backgroundColor:"#1A6592"}}>
//        <View style={{justifyContent:"center", alignItems:"center", marginTop:44}}>
//        <Image source={require("../Assets/hnh.png")} style={{height:120, width:140, justifyContent:"center", alignItems:"center"}} />
//        </View>
//        <View style={{justifyContent:"center", alignItems:"center", marginTop:44}}>
//        <Text style={{fontSize:26, fontWeight:"bold", color:"white", fontFamily:"Segoe UI", textDecorationLine:"underline"}}>Break in</Text>
//        </View>
//        </View>
//     );
// };

// export default BreakInScreen;

// import React, { useState, useEffect } from 'react';
// import { Text, View, Image, TouchableOpacity } from 'react-native';
// import MyButton from '../Components/MyButton';

// const BreakInScreen = (props) => {
//     const { timerMinutes, timerSeconds } = props.route.params || { timerMinutes: 0, timerSeconds: 0 }; // Receiving timer state from HomeScreen
//     const [minutes, setMinutes] = useState(timerMinutes); // Timer minutes
//     const [seconds, setSeconds] = useState(timerSeconds); // Timer seconds
//     const [isTimerRunning, setIsTimerRunning] = useState(true); // Timer running state

//     useEffect(() => {
//         let interval;
//         if (isTimerRunning) {
//             interval = setInterval(() => {
//                 setSeconds((prev) => {
//                     if (prev === 0) {
//                         if (minutes > 0) {
//                             setMinutes((m) => m - 1);
//                             return 59;
//                         } else {
//                             clearInterval(interval);
//                             return 0;
//                         }
//                     }
//                     return prev - 1;
//                 });
//             }, 1000);
//         } else {
//             clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//     }, [isTimerRunning, minutes]);

//     const handleBreakOut = () => {
//         setIsTimerRunning(false); // Stop the timer
//         props.navigation.navigate("Home", { timerMinutes: minutes, timerSeconds: seconds }); // Navigate back to HomeScreen with updated timer
//     };

//     return (
//         <View style={{ flex: 1, backgroundColor: "#1A6592" }}>
//             {/* Logo Section */}
//             <View style={{ justifyContent: "center", alignItems: "center", marginTop: 44 }}>
//                 <Image source={require("../Assets/hnh.png")} style={{ height: 120, width: 140 }} />
//             </View>

//             {/* Timer Display */}
//             <View style={{ alignItems: "center", marginTop: 60 }}>
//                 <Text style={{ fontSize: 26, fontWeight: "bold", color: "white", fontFamily: "Segoe UI", textDecorationLine: "underline", textAlign: "center", marginTop: 8 }}>
//                     Break in
//                 </Text>

//                 <Text
//                     style={{
//                         textAlign: "center",
//                         fontSize: 104,
//                         color: "white",
//                         fontWeight: "regular",
//                     }}
//                 >
//                     {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//                 </Text>
//             </View>

//             {/* BreakOut Button */}
//             <View style={{ marginTop: -4, flexDirection: "row", justifyContent: "space-between" }}>
//                 <TouchableOpacity
//                     onPress={() => {
//                         props.navigation.navigate("HomeTabs");
//                     }}
//                     style={{ height: 60, width: "65%", backgroundColor: "white", borderRadius: 10, marginTop: 25, justifyContent: "center", alignItems: "center", marginHorizontal: 14 }}>
//                     <Text style={{ fontSize: 25, fontWeight: "bold", color: "#024C84" }}>Break Out</Text>
//                 </TouchableOpacity>
//                 <View style={{ height: 65, width: "25%", backgroundColor: "#b5dcf7", borderRadius: 10, marginTop: 24, justifyContent: "center", alignItems: "center", marginRight: 85, paddingHorizontal: 22 }}>
//                     <Image
//                         tintColor="#1342b0"
//                         source={require("../Assets/finger.png")} style={{ height: 55, width: 30 }} />
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default BreakInScreen;

// import React, { useState, useEffect } from 'react';
// import { Text, View, Image, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

// const BreakInScreen = (props) => {
//     const { timerMinutes, timerSeconds } = props.route.params || { timerMinutes: 0, timerSeconds: 0 };
//     const [minutes, setMinutes] = useState(timerMinutes);
//     const [seconds, setSeconds] = useState(timerSeconds);
//     const [isTimerRunning, setIsTimerRunning] = useState(true);

//     useEffect(() => {
//         let interval;
//         if (isTimerRunning) {
//             interval = setInterval(() => {
//                 setSeconds((prev) => {
//                     if (prev === 0) {
//                         if (minutes > 0) {
//                             setMinutes((m) => m - 1);
//                             return 59;
//                         } else {
//                             clearInterval(interval);
//                             return 0;
//                         }
//                     }
//                     return prev - 1;
//                 });
//             }, 1000);
//         } else {
//             clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//     }, [isTimerRunning, minutes]);

//     const handleBreakOut = async () => {
//         setIsTimerRunning(false);
//         await AsyncStorage.setItem('breakOutStatus', 'true'); // Save state
//         props.navigation.navigate("HomeTabs", { timerMinutes: minutes, timerSeconds: seconds });
//     };

//     return (
//         <View style={{ flex: 1, backgroundColor: "#1A6592" }}>
//             {/* Timer and Layout */}
//             <View style={{ justifyContent: "center", alignItems: "center", marginTop: 44 }}>
//                 <Image source={require("../Assets/hnh.png")} style={{ height: 120, width: 140 }} />
//             </View>
//             <View style={{ alignItems: "center", marginTop: 60 }}>
//                 <Text style={{ fontSize: 26, fontWeight: "bold", color: "white", textDecorationLine: "underline", textAlign: "center" }}>Break in</Text>
//                 <Text style={{ fontSize: 104, color: "white" }}>{`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}</Text>
//             </View>
//             <View style={{ marginTop: -4, flexDirection: "row", justifyContent: "space-between" }}>
//                 <TouchableOpacity
//                     onPress={handleBreakOut}
//                     style={{ height: 60, width: "65%", backgroundColor: "white", borderRadius: 10, marginTop: 25, justifyContent: "center", alignItems: "center", marginHorizontal: 14 }}
//                 >
//                     <Text style={{ fontSize: 25, fontWeight: "bold", color: "#024C84" }}>Break Out</Text>
//                 </TouchableOpacity>
//                 <View style={{ height: 65, width: "25%", backgroundColor: "#b5dcf7", borderRadius: 10, marginTop: 24, justifyContent: "center", alignItems: "center", marginRight: 85 }}>
//                     <Image tintColor="#1342b0" source={require("../Assets/finger.png")} style={{ height: 55, width: 30 }} />
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default BreakInScreen;


// import React, { useState, useEffect } from 'react';
// import { Text, View, Image, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const BreakInScreen = (props) => {
//     const { timerMinutes, timerSeconds } = props.route.params || { timerMinutes: 0, timerSeconds: 0 };
//     const [minutes, setMinutes] = useState(timerMinutes);
//     const [seconds, setSeconds] = useState(timerSeconds);
//     const [isTimerRunning, setIsTimerRunning] = useState(true);

//     useEffect(() => {
//         let interval;
//         if (isTimerRunning) {
//             interval = setInterval(() => {
//                 setSeconds((prev) => {
//                     if (prev === 0) {
//                         if (minutes > 0) {
//                             setMinutes((m) => m - 1);
//                             return 59;
//                         } else {
//                             clearInterval(interval);
//                             return 0;
//                         }
//                     }
//                     return prev - 1;
//                 });
//             }, 1000);
//         } else {
//             clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//     }, [isTimerRunning, minutes]);

//     const handleBreakOut = async () => {
//         setIsTimerRunning(false);
//         await AsyncStorage.setItem('breakOutStatus', 'true'); // Save state
//         props.navigation.navigate("HomeTabs", { timerMinutes: minutes, timerSeconds: seconds });
//     };

//     return (
//         <View style={{ flex: 1, backgroundColor: "#1A6592" }}>
//             <View style={{ justifyContent: "center", alignItems: "center", marginTop: 44 }}>
//                 <Image source={require("../Assets/hnh.png")} style={{ height: 120, width: 140 }} />
//             </View>
//             <View style={{ alignItems: "center", marginTop: 60 }}>
//                 <Text style={{ fontSize: 26, fontWeight: "bold", color: "white", textDecorationLine: "underline", textAlign: "center" }}>Break in</Text>
//                 <Text style={{ fontSize: 104, color: "white" }}>{`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}</Text>
//             </View>
//             <View style={{ marginTop: -4, flexDirection: "row", justifyContent: "space-between" }}>
//                 <TouchableOpacity
//                     onPress={handleBreakOut}
//                     style={{ height: 60, width: "65%", backgroundColor: "white", borderRadius: 10, marginTop: 25, justifyContent: "center", alignItems: "center", marginHorizontal: 14 }}
//                 >
//                     <Text style={{ fontSize: 25, fontWeight: "bold", color: "#024C84" }}>Break Out</Text>
//                 </TouchableOpacity>
//                 <View style={{ height: 65, width: "25%", backgroundColor: "#b5dcf7", borderRadius: 10, marginTop: 24, justifyContent: "center", alignItems: "center", marginRight: 85 }}>
//                     <Image tintColor="#1342b0" source={require("../Assets/finger.png")} style={{ height: 55, width: 30 }} />
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default BreakInScreen;

// 
// import React, { useState, useEffect } from 'react';
// import { Text, View, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const BreakInScreen = (props) => {
//     const { timerMinutes, timerSeconds } = props.route.params || { timerMinutes: 0, timerSeconds: 0 };
//     const [minutes, setMinutes] = useState(timerMinutes);
//     const [seconds, setSeconds] = useState(timerSeconds);
//     const [isTimerRunning, setIsTimerRunning] = useState(true);
//     const [isBreakOutDisabled, setIsBreakOutDisabled] = useState(false); // Disable BreakOut button after click

//     useEffect(() => {
//         let interval;
//         if (isTimerRunning) {
//             interval = setInterval(() => {
//                 setSeconds((prev) => {
//                     if (prev === 0) {
//                         if (minutes > 0) {
//                             setMinutes((m) => m - 1);
//                             return 59;
//                         } else {
//                             clearInterval(interval);
//                             return 0;
//                         }
//                     }
//                     return prev - 1;
//                 });
//             }, 1000);
//         } else {
//             clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//     }, [isTimerRunning, minutes]);

//     const handleBreakOut = async () => {
//         setIsTimerRunning(false);
//         setIsBreakOutDisabled(true); // Disable interactions
//         await AsyncStorage.setItem('breakOutStatus', 'true'); // Save BreakOut status
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Image source={require("../Assets/hnh.png")} style={styles.logo} />
//             </View>
//             <View style={styles.timerContainer}>
//                 <Text style={styles.title}>Break in</Text>
//                 <Text style={styles.timer}>
//                     {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//                 </Text>
//             </View>
//             <View style={styles.actionContainer}>
//                 <TouchableOpacity
//                     onPress={handleBreakOut}
//                     disabled={isBreakOutDisabled} // Disable button after BreakOut
//                     style={[
//                         styles.breakOutButton,
//                         isBreakOutDisabled && { backgroundColor: 'gray' },
//                     ]}
//                 >
//                     {isBreakOutDisabled ? (
//                         <ActivityIndicator size="large" color="#024C84" />
//                     ) : (
//                         <Text style={styles.breakOutText}>Break Out</Text>
//                     )}
//                 </TouchableOpacity>
//                 <View style={styles.iconContainer}>
//                     <Image
//                         tintColor="#1342b0"
//                         source={require("../Assets/finger.png")}
//                         style={styles.icon}
//                     />
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: "#1A6592" },
//     header: { justifyContent: "center", alignItems: "center", marginTop: 44 },
//     logo: { height: 120, width: 140 },
//     timerContainer: { alignItems: "center", marginTop: 60 },
//     title: { fontSize: 26, fontWeight: "bold", color: "white", textDecorationLine: "underline", textAlign: "center" },
//     timer: { fontSize: 104, color: "white" },
//     actionContainer: { marginTop: -4, flexDirection: "row", justifyContent: "space-between" },
//     breakOutButton: { height: 60, width: "65%", backgroundColor: "white", borderRadius: 10, marginTop: 25, justifyContent: "center", alignItems: "center", marginHorizontal: 14 },
//     breakOutText: { fontSize: 25, fontWeight: "bold", color: "#024C84" },
//     iconContainer: { height: 65, width: "25%", backgroundColor: "#b5dcf7", borderRadius: 10, marginTop: 24, justifyContent: "center", alignItems: "center", marginRight: 85 },
//     icon: { height: 55, width: 30 },
// });

// export default BreakInScreen;


// import React, { useState, useEffect } from 'react';
// import { Text, View, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const BreakInScreen = ({ navigation, route }) => {
//   const { timerMinutes, timerSeconds } = route.params || { timerMinutes: 0, timerSeconds: 0 };
//   const [minutes, setMinutes] = useState(timerMinutes);
//   const [seconds, setSeconds] = useState(timerSeconds);
//   const [isTimerRunning, setIsTimerRunning] = useState(true);
//   const [isBreakOutDisabled, setIsBreakOutDisabled] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isTimerRunning) {
//       interval = setInterval(() => {
//         setSeconds((prev) => {
//           if (prev === 0) {
//             if (minutes > 0) {
//               setMinutes((m) => m - 1);
//               return 59;
//             } else {
//               clearInterval(interval);
//               return 0;
//             }
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isTimerRunning, minutes]);

//   const handleBreakOut = async () => {
//     setIsTimerRunning(false);
//     setIsBreakOutDisabled(true); // Disable the button after clicking
//     await AsyncStorage.setItem('breakOutStatus', 'true'); // Mark BreakOut as completed
//     navigation.replace('HomeTabs'); // Navigate to HomeTabs
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image source={require("../Assets/hnh.png")} style={styles.logo} />
//       </View>
//       <View style={styles.timerContainer}>
//         <Text style={styles.title}>Break in</Text>
//         <Text style={styles.timer}>
//           {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//         </Text>
//       </View>
//       <View style={styles.actionContainer}>
//         <TouchableOpacity
//           onPress={handleBreakOut}
//           disabled={isBreakOutDisabled}
//           style={[
//             styles.breakOutButton,
//             isBreakOutDisabled && { backgroundColor: 'gray' },
//           ]}
//         >
//           {isBreakOutDisabled ? (
//             <ActivityIndicator size="large" color="#024C84" />
//           ) : (
//             <Text style={styles.breakOutText}>Break Out</Text>
//           )}
//         </TouchableOpacity>
//         <View style={styles.iconContainer}>
//           <Image
//             tintColor="#1342b0"
//             source={require("../Assets/finger.png")}
//             style={styles.icon}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#1A6592" },
//   header: { justifyContent: "center", alignItems: "center", marginTop: 44 },
//   logo: { height: 120, width: 140 },
//   timerContainer: { alignItems: "center", marginTop: 60 },
//   title: { fontSize: 26, fontWeight: "bold", color: "white", textDecorationLine: "underline", textAlign: "center" },
//   timer: { fontSize: 104, color: "white" },
//   actionContainer: { marginTop: -4, flexDirection: "row", justifyContent: "space-between" },
//   breakOutButton: { height: 60, width: "65%", backgroundColor: "white", borderRadius: 10, marginTop: 25, justifyContent: "center", alignItems: "center", marginHorizontal: 14 },
//   breakOutText: { fontSize: 25, fontWeight: "bold", color: "#024C84" },
//   iconContainer: { height: 65, width: "25%", backgroundColor: "#b5dcf7", borderRadius: 10, marginTop: 24, justifyContent: "center", alignItems: "center", marginRight: 85 },
//   icon: { height: 55, width: 30 },
// });

// export default BreakInScreen;

// import React, { useState, useEffect } from 'react';
// import { Text, View, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const BreakInScreen = (props) => {
//     const { timerMinutes, timerSeconds } = props.route.params || { timerMinutes: 0, timerSeconds: 0 };
//     const [minutes, setMinutes] = useState(timerMinutes);
//     const [seconds, setSeconds] = useState(timerSeconds);
//     const [isTimerRunning, setIsTimerRunning] = useState(true);
//     const [isBreakOutDisabled, setIsBreakOutDisabled] = useState(false); // Disable BreakOut button after click

//     useEffect(() => {
//         let interval;
//         if (isTimerRunning) {
//             interval = setInterval(() => {
//                 setSeconds((prev) => {
//                     if (prev === 0) {
//                         if (minutes > 0) {
//                             setMinutes((m) => m - 1);
//                             return 59;
//                         } else {
//                             clearInterval(interval);
//                             return 0;
//                         }
//                     }
//                     return prev - 1;
//                 });
//             }, 1000);
//         } else {
//             clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//     }, [isTimerRunning, minutes]);

//     const handleBreakOut = async () => {
//         // Prevent any action from being performed
//         setIsBreakOutDisabled(true); // Disable interactions
//         // Optionally, you can show a message or feedback to the user
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Image source={require("../Assets/hnh.png")} style={styles.logo} />
//             </View>
//             <View style={styles.timerContainer}>
//                 <Text style={styles.title}>Break in</Text>
//                 <Text style={styles.timer}>
//                     {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//                 </Text>
//             </View>
//             <View style={styles.actionContainer}>
//                 <TouchableOpacity
//                     onPress={handleBreakOut}
//                     disabled={isBreakOutDisabled} // Disable button after BreakOut
//                     style={[
//                         styles.breakOutButton,
//                         isBreakOutDisabled && { backgroundColor: 'gray' },
//                     ]}
//                 >
//                     {isBreakOutDisabled ? (
//                         <ActivityIndicator size="large" color="#024C84" />
//                     ) : (
//                         <Text style={styles.breakOutText}>Break Out</Text>
//                     )}
//                 </TouchableOpacity>
//                 <View style={styles.iconContainer}>
//                     <Image
//                         tintColor="#1342b0"
//                         source={require("../Assets/finger.png")}
//                         style={styles.icon}
//                     />
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: "#1A6592" },
//     header: { justifyContent: "center", alignItems: "center", marginTop: 44 },
//     logo: { height: 120, width: 140 },
//     timerContainer: { alignItems: "center", marginTop: 60 },
//     title: { fontSize: 26, fontWeight: "bold", color: "white", textDecorationLine: "underline", textAlign: "center" },
//     timer: { fontSize: 104, color: "white" },
//     actionContainer: { marginTop: -4, flexDirection: "row", justifyContent: "space-between" },
//     breakOutButton: { height: 60, width: "65%", backgroundColor: "white", borderRadius: 10, marginTop: 25, justifyContent: "center", alignItems: "center", marginHorizontal: 14 },
//     breakOutText: { fontSize: 25, fontWeight: "bold", color: "#024C84" },
//     iconContainer: { height: 65, width: "25%", backgroundColor: "#b5dcf7", borderradius: 10, marginTop: 24, justifyContent: "center", alignItems: "center", marginRight: 85 },
//     icon: { height: 55, width: 30 },
// });

// export default BreakInScreen;

// import React, { useState, useEffect } from 'react';
// import { Text, View, Image, TouchableOpacity, ActivityIndicator, StyleSheet, AppState } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const BreakInScreen = (props) => {
//     const { timerMinutes, timerSeconds } = props.route.params || { timerMinutes: 0, timerSeconds: 0 };
//     const [minutes, setMinutes] = useState(timerMinutes);
//     const [seconds, setSeconds] = useState(timerSeconds);
//     const [isTimerRunning, setIsTimerRunning] = useState(true);
//     const [isBreakOutDisabled, setIsBreakOutDisabled] = useState(false); // Disable BreakOut button after click
//     const [appState, setAppState] = useState(AppState.currentState);

//     useEffect(() => {
//         let interval;
//         if (isTimerRunning) {
//             interval = setInterval(() => {
//                 setSeconds((prev) => {
//                     if (prev === 0) {
//                         if (minutes > 0) {
//                             setMinutes((m) => m - 1);
//                             return 59;
//                         } else {
//                             clearInterval(interval);
//                             return 0;
//                         }
//                     }
//                     return prev - 1;
//                 });
//             }, 1000);
//         } else {
//             clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//     }, [isTimerRunning, minutes]);

//     useEffect(() => {
//         // Detect app state changes (background, active)
//         const subscription = AppState.addEventListener('change', handleAppStateChange);
//         return () => subscription.remove();
//     }, []);

//     const handleAppStateChange = (nextAppState) => {
//         if (appState.match(/inactive|background/) && nextAppState === 'active') {
//             // When app comes to the foreground, check if BreakOut was clicked
//             checkBreakOutStatus();
//         }
//         setAppState(nextAppState);
//     };

//     const handleBreakOut = async () => {
//         setIsTimerRunning(false);
//         setIsBreakOutDisabled(true); // Disable interactions
//         await AsyncStorage.setItem('breakOutStatus', 'true'); // Save BreakOut status
//     };

//     const checkBreakOutStatus = async () => {
//         const status = await AsyncStorage.getItem('breakOutStatus');
//         if (status === 'true') {
//             props.navigation.replace('HomeTabs'); // If BreakOut status is true, navigate to HomeTabs
//         } else {
//             props.navigation.replace('Splash'); // Otherwise, navigate to SplashScreen
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Image source={require("../Assets/hnh.png")} style={styles.logo} />
//             </View>
//             <View style={styles.timerContainer}>
//                 <Text style={styles.title}>Break in</Text>
//                 <Text style={styles.timer}>
//                     {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//                 </Text>
//             </View>
//             <View style={styles.actionContainer}>
//                 <TouchableOpacity
//                     onPress={handleBreakOut}
//                     disabled={isBreakOutDisabled} // Disable button after BreakOut
//                     style={[
//                         styles.breakOutButton,
//                         isBreakOutDisabled && { backgroundColor: 'gray' },
//                     ]}
//                 >
//                     {isBreakOutDisabled ? (
//                         <ActivityIndicator size="large" color="#024C84" />
//                     ) : (
//                         <Text style={styles.breakOutText}>Break Out</Text>
//                     )}
//                 </TouchableOpacity>
//                 <View style={styles.iconContainer}>
//                     <Image
//                         tintColor="#1342b0"
//                         source={require("../Assets/finger.png")}
//                         style={styles.icon}
//                     />
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: "#1A6592" },
//     header: { justifyContent: "center", alignItems: "center", marginTop: 44 },
//     logo: { height: 120, width: 140 },
//     timerContainer: { alignItems: "center", marginTop: 60 },
//     title: { fontSize: 26, fontWeight: "bold", color: "white", textDecorationLine: "underline", textAlign: "center" },
//     timer: { fontSize: 104, color: "white" },
//     actionContainer: { marginTop: -4, flexDirection: "row", justifyContent: "space-between" },
//     breakOutButton: { height: 60, width: "65%", backgroundColor: "white", borderRadius: 10, marginTop: 25, justifyContent: "center", alignItems: "center", marginHorizontal: 14 },
//     breakOutText: { fontSize: 25, fontWeight: "bold", color: "#024C84" },
//     iconContainer: { height: 65, width: "25%", backgroundColor: "#b5dcf7", borderRadius: 10, marginTop: 24, justifyContent: "center", alignItems: "center", marginRight: 85 },
//     icon: { height: 55, width: 30 },
// });

// export default BreakInScreen;


// import React, { useState, useEffect } from 'react';
// import { Text, View, Image, TouchableOpacity, ActivityIndicator, StyleSheet, AppState } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const BreakInScreen = (props) => {
//     const { timerMinutes, timerSeconds } = props.route.params || { timerMinutes: 0, timerSeconds: 0 };
//     const [minutes, setMinutes] = useState(timerMinutes);
//     const [seconds, setSeconds] = useState(timerSeconds);
//     const [isTimerRunning, setIsTimerRunning] = useState(true);
//     const [isBreakOutDisabled, setIsBreakOutDisabled] = useState(false); // Disable BreakOut button after click
//     const [appState, setAppState] = useState(AppState.currentState);

//     useEffect(() => {
//         let interval;
//         if (isTimerRunning) {
//             interval = setInterval(() => {
//                 setSeconds((prev) => {
//                     if (prev === 0) {
//                         if (minutes > 0) {
//                             setMinutes((m) => m - 1);
//                             return 59;
//                         } else {
//                             clearInterval(interval);
//                             return 0;
//                         }
//                     }
//                     return prev - 1;
//                 });
//             }, 1000);
//         } else {
//             clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//     }, [isTimerRunning, minutes]);

//     useEffect(() => {
//         // Detect app state changes (background, active)
//         const subscription = AppState.addEventListener('change', handleAppStateChange);
//         return () => subscription.remove();
//     }, [appState]);

//     const handleAppStateChange = (nextAppState) => {
//         if (appState.match(/inactive|background/) && nextAppState === 'active') {
//             // When app comes to the foreground, check if BreakOut was clicked
//             checkBreakOutStatus();
//         }
//         setAppState(nextAppState);
//     };

//     const handleBreakOut = async () => {
//         setIsTimerRunning(false);
//         setIsBreakOutDisabled(true); // Disable interactions after BreakOut
//         await AsyncStorage.setItem('breakOutStatus', 'true'); // Save BreakOut status
//     };

//     const checkBreakOutStatus = async () => {
//         const status = await AsyncStorage.getItem('breakOutStatus');
//         if (status === 'true') {
//             props.navigation.replace('HomeTabs'); // If BreakOut status is true, navigate to HomeTabs
//         } else {
//             props.navigation.replace('Splash'); // Otherwise, navigate to SplashScreen
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Image source={require("../Assets/hnh.png")} style={styles.logo} />
//             </View>
//             <View style={styles.timerContainer}>
//                 <Text style={styles.title}>Break in</Text>
//                 <Text style={styles.timer}>
//                     {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//                 </Text>
//             </View>
//             <View style={styles.actionContainer}>
//                 <TouchableOpacity
//                     onPress={handleBreakOut}
//                     disabled={isBreakOutDisabled} // Disable button after BreakOut
//                     style={[
//                         styles.breakOutButton,
//                         isBreakOutDisabled && { backgroundColor: 'gray' },
//                     ]}
//                 >
//                     {isBreakOutDisabled ? (
//                         <ActivityIndicator size="large" color="#024C84" />
//                     ) : (
//                         <Text style={styles.breakOutText}>Break Out</Text>
//                     )}
//                 </TouchableOpacity>
//                 <View style={styles.iconContainer}>
//                     <Image
//                         tintColor="#1342b0"
//                         source={require("../Assets/finger.png")}
//                         style={styles.icon}
//                     />
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: "#1A6592" },
//     header: { justifyContent: "center", alignItems: "center", marginTop: 44 },
//     logo: { height: 120, width: 140 },
//     timerContainer: { alignItems: "center", marginTop: 60 },
//     title: { fontSize: 26, fontWeight: "bold", color: "white", textDecorationLine: "underline", textAlign: "center" },
//     timer: { fontSize: 104, color: "white" },
//     actionContainer: { marginTop: -4, flexDirection: "row", justifyContent: "space-between" },
//     breakOutButton: { height: 60, width: "65%", backgroundColor: "white", borderRadius: 10, marginTop: 25, justifyContent: "center", alignItems: "center", marginHorizontal: 14 },
//     breakOutText: { fontSize: 25, fontWeight: "bold", color: "#024C84" },
//     iconContainer: { height: 65, width: "25%", backgroundColor: "#b5dcf7", borderRadius: 10, marginTop: 24, justifyContent: "center", alignItems: "center", marginRight: 85 },
//     icon: { height: 55, width: 30 },
// });

// export default BreakInScreen;

// import React, { useState, useEffect } from 'react';
// import { Text, View, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const BreakInScreen = (props) => {
//     const { timerMinutes, timerSeconds } = props.route.params || { timerMinutes: 0, timerSeconds: 0 };
//     const [minutes, setMinutes] = useState(timerMinutes);
//     const [seconds, setSeconds] = useState(timerSeconds);
//     const [isTimerRunning, setIsTimerRunning] = useState(true);
//     const [isBreakOutDisabled, setIsBreakOutDisabled] = useState(false); // Disable BreakOut button after click

//     useEffect(() => {
//         let interval;
//         if (isTimerRunning) {
//             interval = setInterval(() => {
//                 setSeconds((prev) => {
//                     if (prev === 0) {
//                         if (minutes > 0) {
//                             setMinutes((m) => m - 1);
//                             return 59;
//                         } else {
//                             clearInterval(interval);
//                             return 0;
//                         }
//                     }
//                     return prev - 1;
//                 });
//             }, 1000);
//         } else {
//             clearInterval(interval);
//         }
//         return () => clearInterval(interval);
//     }, [isTimerRunning, minutes]);

//     const handleBreakOut = async () => {
//         setIsTimerRunning(false);
//         setIsBreakOutDisabled(true); // Disable interactions
//         await AsyncStorage.setItem('breakOutStatus', 'true'); // Save BreakOut status
//         props.navigation.replace('HomeTabs'); // Directly navigate to HomeTabs after BreakOut
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Image source={require("../Assets/hnh.png")} style={styles.logo} />
//             </View>
//             <View style={styles.timerContainer}>
//                 <Text style={styles.title}>Break in</Text>
//                 <Text style={styles.timer}>
//                     {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//                 </Text>
//             </View>
//             <View style={styles.actionContainer}>
//                 <TouchableOpacity
//                     onPress={handleBreakOut}
//                     disabled={isBreakOutDisabled} // Disable button after BreakOut
//                     style={[
//                         styles.breakOutButton,
//                         isBreakOutDisabled && { backgroundColor: 'gray' },
//                     ]}
//                 >
//                     {isBreakOutDisabled ? (
//                         <ActivityIndicator size="large" color="#024C84" />
//                     ) : (
//                         <Text style={styles.breakOutText}>Break Out</Text>
//                     )}
//                 </TouchableOpacity>
//                 <View style={styles.iconContainer}>
//                     <Image
//                         tintColor="#1342b0"
//                         source={require("../Assets/finger.png")}
//                         style={styles.icon}
//                     />
//                 </View>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: { flex: 1, backgroundColor: "#1A6592" },
//     header: { justifyContent: "center", alignItems: "center", marginTop: 44 },
//     logo: { height: 120, width: 140 },
//     timerContainer: { alignItems: "center", marginTop: 60 },
//     title: { fontSize: 26, fontWeight: "bold", color: "white", textDecorationLine: "underline", textAlign: "center" },
//     timer: { fontSize: 104, color: "white" },
//     actionContainer: { marginTop: -4, flexDirection: "row", justifyContent: "space-between" },
//     breakOutButton: { height: 60, width: "65%", backgroundColor: "white", borderRadius: 10, marginTop: 25, justifyContent: "center", alignItems: "center", marginHorizontal: 14 },
//     breakOutText: { fontSize: 25, fontWeight: "bold", color: "#024C84" },
//     iconContainer: { height: 65, width: "25%", backgroundColor: "#b5dcf7", borderRadius: 10, marginTop: 24, justifyContent: "center", alignItems: "center", marginRight: 85 },
//     icon: { height: 55, width: 30 },
// });

// export default BreakInScreen;


// import React, { useState, useEffect } from "react";
// import { Text, View, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const BreakInScreen = (props) => {
//   const { timerMinutes, timerSeconds } = props.route.params || { timerMinutes: 0, timerSeconds: 0 };
//   const [minutes, setMinutes] = useState(timerMinutes);
//   const [seconds, setSeconds] = useState(timerSeconds);
//   const [isTimerRunning, setIsTimerRunning] = useState(true);
//   const [isBreakOutDisabled, setIsBreakOutDisabled] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isTimerRunning) {
//       interval = setInterval(() => {
//         setSeconds((prev) => {
//           if (prev === 0) {
//             if (minutes > 0) {
//               setMinutes((m) => m - 1);
//               return 59;
//             } else {
//               clearInterval(interval);
//               return 0;
//             }
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isTimerRunning, minutes]);

//   const handleBreakOut = async () => {
//     setIsTimerRunning(false);
//     setIsBreakOutDisabled(true); // Disable interactions
//     await AsyncStorage.setItem("breakInClicked", "true"); // Save BreakOut status
//   };

  

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image source={require("../Assets/hnh.png")} style={styles.logo} />
//       </View>
//       <View style={styles.timerContainer}>
//         <Text style={styles.title}>Break in</Text>
//         <Text style={styles.timer}>
//           {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//         </Text>
//       </View>
//       <View style={styles.actionContainer}>
//         <TouchableOpacity
//           onPress={handleBreakOut}
//           disabled={isBreakOutDisabled} // Disable button after BreakOut
//           style={[
//             styles.breakOutButton,
//             isBreakOutDisabled && { backgroundColor: "gray" },
//           ]}
//         >
//           {isBreakOutDisabled ? (
//             <ActivityIndicator size="large" color="#024C84" />
//           ) : (
//             <Text style={styles.breakOutText}>Break Out</Text>
//           )}
//         </TouchableOpacity>
//         <View style={styles.iconContainer}>
//           <Image
//             tintColor="#1342b0"
//             source={require("../Assets/finger.png")}
//             style={styles.icon}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#1A6592" },
//   header: { justifyContent: "center", alignItems: "center", marginTop: 44 },
//   logo: { height: 120, width: 140 },
//   timerContainer: { alignItems: "center", marginTop: 60 },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "white",
//     textDecorationLine: "underline",
//     textAlign: "center",
//   },
//   timer: { fontSize: 104, color: "white" },
//   actionContainer: {
//     marginTop: -4,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   breakOutButton: {
//     height: 60,
//     width: "65%",
//     backgroundColor: "white",
//     borderRadius: 10,
//     marginTop: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 14,
//   },
//   breakOutText: { fontSize: 25, fontWeight: "bold", color: "#024C84" },
//   iconContainer: {
//     height: 65,
//     width: "25%",
//     backgroundColor: "#b5dcf7",
//     borderRadius: 10,
//     marginTop: 24,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 85,
//   },
//   icon: { height: 55, width: 30 },
// });

// export default BreakInScreen;


// import React, { useState, useEffect } from "react";
// import { Text, View, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const BreakInScreen = (props) => {
//   const { timerMinutes, timerSeconds } = props.route.params || { timerMinutes: 0, timerSeconds: 0 };
//   const [minutes, setMinutes] = useState(timerMinutes);
//   const [seconds, setSeconds] = useState(timerSeconds);
//   const [isTimerRunning, setIsTimerRunning] = useState(true);
//   const [isBreakOutDisabled, setIsBreakOutDisabled] = useState(false);

//   useEffect(() => {
//     let interval;
//     if (isTimerRunning) {
//       interval = setInterval(() => {
//         setSeconds((prev) => {
//           if (prev === 0) {
//             if (minutes > 0) {
//               setMinutes((m) => m - 1);
//               return 59;
//             } else {
//               clearInterval(interval);
//               return 0;
//             }
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [isTimerRunning, minutes]);

//   // Function to handle BreakOut
//   // const handleBreakOut = async () => {
//   //   setIsTimerRunning(false);
//   //   setIsBreakOutDisabled(true); // Disable interactions
//   //   await AsyncStorage.setItem("breakInClicked", "true"); // Save BreakOut status
//   //   handleBreakOutButton(); // Call the new function here
//   // };

//   // Function to save BreakOut button clicked status
//   const handleBreakOutButton = async () => {
//     await AsyncStorage.setItem("isBreakOutButtonClicked", "true");
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Image source={require("../Assets/hnh.png")} style={styles.logo} />
//       </View>
//       <View style={styles.timerContainer}>
//         <Text style={styles.title}>Break in</Text>
//         <Text style={styles.timer}>
//           {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//         </Text>
//       </View>
//       <View style={styles.actionContainer}>
//         <TouchableOpacity
//           onPress={()=>{
//             props.navigation.navigate("HomeTabs");
//           }}
//           disabled={isBreakOutDisabled} // Disable button after BreakOut
//           style={[
//             styles.breakOutButton,
//             isBreakOutDisabled && { backgroundColor: "gray" },
//           ]}
//         >
//           {isBreakOutDisabled ? (
//             <ActivityIndicator size="large" color="#024C84" />
//           ) : (
//             <Text style={styles.breakOutText}>Break Out</Text>
//           )}
//         </TouchableOpacity>
//         <View style={styles.iconContainer}>
//           <Image
//             tintColor="#1342b0"
//             source={require("../Assets/finger.png")}
//             style={styles.icon}
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#1A6592" },
//   header: { justifyContent: "center", alignItems: "center", marginTop: 44 },
//   logo: { height: 120, width: 140 },
//   timerContainer: { alignItems: "center", marginTop: 60 },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "white",
//     textDecorationLine: "underline",
//     textAlign: "center",
//   },
//   timer: { fontSize: 104, color: "white" },
//   actionContainer: {
//     marginTop: -4,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   breakOutButton: {
//     height: 60,
//     width: "65%",
//     backgroundColor: "white",
//     borderRadius: 10,
//     marginTop: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     marginHorizontal: 14,
//   },
//   breakOutText: { fontSize: 25, fontWeight: "bold", color: "#024C84" },
//   iconContainer: {
//     height: 65,
//     width: "25%",
//     backgroundColor: "#b5dcf7",
//     borderRadius: 10,
//     marginTop: 24,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 85,
//   },
//   icon: { height: 55, width: 30 },
// });

// export default BreakInScreen;

import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BreakInScreen = (props) => {
  const { timerMinutes, timerSeconds } = props.route.params || { timerMinutes: 0, timerSeconds: 0 };
  const [minutes, setMinutes] = useState(timerMinutes);
  const [seconds, setSeconds] = useState(timerSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [isBreakOutDisabled, setIsBreakOutDisabled] = useState(false);
  const [isBreakOutToggle, setBreakOutToggle] = useState(true);

  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 0) {
            if (minutes > 0) {
              setMinutes((m) => m - 1);
              return 59;
            } else {
              clearInterval(interval);
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, minutes]);

  // Function to handle BreakOut button click
  // const handleBreakOutButton = async () => {
  //   setIsBreakOutDisabled(true); // Disable the button temporarily to prevent multiple clicks
  //   try {
  //     // Update AsyncStorage to turn off BreakOut toggle and mark BreakOut button clicked
  //     await AsyncStorage.setItem("isBreakOutButtonClicked", "true");
  //     await AsyncStorage.setItem("isBreakOutActive", "false"); // Turn off BreakOut toggle

  //     // Navigate to HomeTabs after updating the toggle
  //     props.navigation.navigate("HomeTabs");
  //   } catch (error) {
  //     console.error("Error handling BreakOut button:", error);
  //   } finally {
  //     setIsBreakOutDisabled(false); // Re-enable the button after navigation
  //   }
  // };

  const handleBreakOutButton = async () => {
    setIsBreakOutDisabled(true); // Disable the button temporarily to prevent multiple clicks
    try {
      // Update AsyncStorage to turn off BreakOut toggle and mark BreakOut button clicked
      await AsyncStorage.setItem("isBreakOutButtonClicked", "true");
      await AsyncStorage.setItem("isBreakOutActive", "false"); // Turn off BreakOut toggle
  
      // Optionally update global state or context to reflect the toggle's new state
      setBreakOutToggle(false); // Example: Update a state or context variable
  
      // Navigate to HomeTabs after updating the toggle
      props.navigation.navigate("HomeTabs");
    } catch (error) {
      console.error("Error handling BreakOut button:", error);
    } finally {
      setIsBreakOutDisabled(false); // Re-enable the button after navigation
    }
  };
  
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../Assets/hnh.png")} style={styles.logo} />
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.title}>Break in</Text>
        <Text style={styles.timer}>
          {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
        </Text>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity
          onPress={handleBreakOutButton}
          disabled={isBreakOutDisabled} // Disable button after BreakOut
          style={[
            styles.breakOutButton,
            isBreakOutDisabled && { backgroundColor: "gray" },
          ]}
        >
          {isBreakOutDisabled ? (
            <ActivityIndicator size="large" color="#024C84" />
          ) : (
            <Text style={styles.breakOutText}>Break Out</Text>
          )}
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <Image
            tintColor="#1342b0"
            source={require("../Assets/finger.png")}
            style={styles.icon}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1A6592" },
  header: { justifyContent: "center", alignItems: "center", marginTop: 44 },
  logo: { height: 120, width: 140 },
  timerContainer: { alignItems: "center", marginTop: 60 },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  timer: { fontSize: 104, color: "white" },
  actionContainer: {
    marginTop: -4,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  breakOutButton: {
    height: 60,
    width: "65%",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 14,
  },
  breakOutText: { fontSize: 25, fontWeight: "bold", color: "#024C84" },
  iconContainer: {
    height: 65,
    width: "25%",
    backgroundColor: "#b5dcf7",
    borderRadius: 10,
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 85,
  },
  icon: { height: 55, width: 30 },
});

export default BreakInScreen;
