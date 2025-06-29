// import React from 'react';

// import { Text, View, TouchableOpacity, Image } from 'react-native';
// import Icon from "react-native-vector-icons/AntDesign";

// const HomeScreen = (props) => {
//     return (
//         <View style={{flex:1, backgroundColor:"white"}}>
//         <View style={{height:"40%", backgroundColor:"#09527E", width:"100%"}}>
//         <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:1}}>
//         <TouchableOpacity onPress={()=>{
//             props.navigation.replace("Login");
//         }}>
//         <Icon name='arrowleft' color="white" size={35} />
//         </TouchableOpacity>
//         <Text style={{fontSize:20, fontFamily:"Segoe UI", color:"white", marginHorizontal:50, marginTop:10, textAlign:"center", marginBottom:22}}>HNH Soft Tech Solution</Text>
//         </View>

//         <Image source={require("../Assets/iron.png")} style={{marginTop:8, marginHorizontal:124}} />
//         <Text style={{textAlign:"center", fontSize:26, fontFamily:"Segoe UI", color:"white", fontWeight:"bold"}}>Sohail Aqeel</Text>
//         <Image source={require("../Assets/path.png")} style={{marginTop:-25, marginHorizontal:3, width:"100%"}} />
//         </View>
//         <View>
//         </View>
//         </View>
//     );
// };

// export default HomeScreen;

// import React from "react";
// import { Text, View, TouchableOpacity, Image } from "react-native";
// import Icon from "react-native-vector-icons/AntDesign";

// const HomeScreen = (props) => {
//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }}>
//       <View style={{ height: "40%", backgroundColor: "#09527E", width: "100%" }}>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-around",
//             marginTop: 1,
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => {
//               props.navigation.replace("Login");
//             }}
//           >
//             <Icon name="arrowleft" color="white" size={35} />
//           </TouchableOpacity>
//           <Text
//             style={{
//               fontSize: 20,
//               fontFamily: "Segoe UI",
//               color: "white",
//               marginHorizontal: 50,
//               marginTop: 10,
//               textAlign: "center",
//               marginBottom: 22,
//             }}
//           >
//             HNH Soft Tech Solution
//           </Text>
//         </View>

//         <Image
//           source={require("../../Assets/iron.png")}
//           style={{ marginTop: 8, marginHorizontal: 124 }}
//         />
//         <Text
//           style={{
//             textAlign: "center",
//             fontSize: 26,
//             fontFamily: "Segoe UI",
//             color: "white",
//             fontWeight: "bold",
//           }}
//         >
//           Sohail Aqeel
//         </Text>
//         <Image
//           source={require("../../Assets/path.png")}
//           style={{ marginTop:-40, marginHorizontal: 3, width: "100%" }}
//         />
//       </View>
//       <View>
//         <Text
//           style={{
//             textAlign: "center",
//             fontSize: 18,
//             color: "#09527E",
//             marginTop: 20,
//           }}
//         >
//           Welcome to the Home Screen!
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;
// import React, { useState, useEffect } from "react";
// import { Text, View, TouchableOpacity, Image, Switch } from "react-native";
// import Icon from "react-native-vector-icons/AntDesign";

// const HomeScreen = (props) => {
//   const [seconds, setSeconds] = useState(0); // Initial seconds
//   const [minutes, setMinutes] = useState(0); // Initial minutes
//   const [timerActive, setTimerActive] = useState(false); // Timer status
//   const [timeIn, setTimeIn] = useState(false); // "Time In" toggle
//   const [breakout, setBreakout] = useState(false); // "Breakout" toggle

//   // Timer Logic
//   useEffect(() => {
//     let interval = null;
//     if (timerActive) {
//       interval = setInterval(() => {
//         setSeconds((prevSeconds) => {
//           if (prevSeconds === 59) {
//             setMinutes((prevMinutes) => prevMinutes + 1); // Increment minutes
//             return 0; // Reset seconds
//           }
//           return prevSeconds + 1; // Increment seconds
//         });
//       }, 1000);
//     } else {
//       clearInterval(interval); // Clear interval when the timer is not active
//     }
//     return () => clearInterval(interval); // Cleanup
//   }, [timerActive]);

//   // Handle Time In toggle
//   const handleTimeInToggle = (value) => {
//     if (breakout) return; // Prevent Time In toggle when Breakout is active
//     setTimeIn(value);
//     setTimerActive(value); // Start or pause the timer
//   };

//   // Handle Breakout toggle
//   const handleBreakoutToggle = (value) => {
//     setBreakout(value);
//     if (value) {
//       setTimeIn(false); // Turn off Time In
//       setTimerActive(false); // Stop the timer
//       setSeconds(0); // Reset seconds
//       setMinutes(0); // Reset minutes
//     }
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }}>
//       {/* Header Section */}
//       <View style={{ height: "48%", backgroundColor: "#09527E", width: "100%" }}>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-around",
//             marginTop: 1,
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => {
//               props.navigation.replace("Login");
//             }}
//           >
//             <Icon name="arrowleft" color="white" size={35} />
//           </TouchableOpacity>
//           <Text
//             style={{
//               fontSize: 20,
//               fontFamily: "Segoe UI",
//               color: "white",
//               marginHorizontal: 50,
//               marginTop: 10,
//               textAlign: "center",
//               marginBottom: 22,
//             }}
//           >
//             HnH Soft Tech Solution
//           </Text>
//         </View>

//         <Image
//           source={require("../../Assets/iron.png")}
//           style={{ marginTop: 8, marginHorizontal: 124 }}
//         />
//         <Text
//           style={{
//             textAlign: "center",
//             fontSize: 26,
//             fontFamily: "Segoe UI",
//             color: "white",
//             fontWeight: "bold",
//           }}
//         >
//           Sohail Aqeel
//         </Text>
//         <Image
//           source={require("../../Assets/path.png")}
//           style={{ marginTop: -20, marginHorizontal: 3, width: "100%" }}
//         />
//       </View>

//       {/* Timer and Toggles Section */}
//       <View style={{ alignItems: "center", marginTop: 60 }}>
//         {/* Timer Display */}
//         <Text
//           style={{
//             textAlign: "center",
//             fontSize: 104,
//             color: "black",
//             fontWeight: "regular",
//           }}
//         >
//           {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//         </Text>

//         {/* Time In Toggle */}
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             marginVertical: 10,
//             marginTop: 32
//           }}
//         >
//           <Icon name="clockcircle" size={24} color="#09527E" style={{ marginRight: 10 }} />
//           <Text style={{ fontSize: 18, marginRight: 10, color: "#09527E" }}>Time In</Text>
//           <Switch
//             value={timeIn}
//             onValueChange={handleTimeInToggle} // Handle Time In toggle
//           />
//         </View>

//         {/* Breakout Toggle */}
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             marginVertical: 10,
//           }}
//         >
//           <Icon name="poweroff" size={24} color="#09527E" style={{ marginRight: 10 }} />
//           <Text style={{ fontSize: 18, marginRight: 10, color: "#09527E" }}>Breakout</Text>
//           <Switch
//             value={breakout}
//             onValueChange={(value) => {
//               handleBreakoutToggle(value); // Call the toggle handler
//               if (value) {
//                 props.navigation.navigate("BreakIn"); // Navigate to BreakIn screen
//               }
//             }}
//           />
//         </View>

//       </View>
//     </View>
//   );
// };

// export default HomeScreen;


// import React, { useState, useEffect } from "react";
// import { Text, View, TouchableOpacity, Image, Switch } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
// import Icon from "react-native-vector-icons/AntDesign";

// const HomeScreen = (props) => {
//   const [seconds, setSeconds] = useState(0); // Initial seconds
//   const [minutes, setMinutes] = useState(0); // Initial minutes
//   const [timerActive, setTimerActive] = useState(false); // Timer status
//   const [timeIn, setTimeIn] = useState(false); // "Time In" toggle
//   const [breakout, setBreakout] = useState(false); // "Breakout" toggle

//   // Timer Logic
//   useEffect(() => {
//     let interval = null;
//     if (timerActive) {
//       interval = setInterval(() => {
//         setSeconds((prevSeconds) => {
//           if (prevSeconds === 59) {
//             setMinutes((prevMinutes) => prevMinutes + 1); // Increment minutes
//             return 0; // Reset seconds
//           }
//           return prevSeconds + 1; // Increment seconds
//         });
//       }, 1000);
//     } else {
//       clearInterval(interval); // Clear interval when the timer is not active
//     }
//     return () => clearInterval(interval); // Cleanup
//   }, [timerActive]);

//   // Fetch initial BreakOut state
//   useEffect(() => {
//     const fetchBreakoutState = async () => {
//       const savedBreakoutState = await AsyncStorage.getItem("isBreakOutActive");
//       setBreakout(savedBreakoutState === "true");
//     };
//     fetchBreakoutState();
//   }, []);

//   // Handle Time In toggle
//   const handleTimeInToggle = (value) => {
//     if (breakout) return; // Prevent Time In toggle when Breakout is active
//     setTimeIn(value);
//     setTimerActive(value); // Start or pause the timer
//   };

//   // Handle Breakout toggle
//   const handleBreakoutToggle = async (value) => {
//     setBreakout(value);
//     await AsyncStorage.setItem("isBreakOutActive", value ? "true" : "false");
//     if (!value) {
//       await AsyncStorage.setItem("isBreakOutButtonClicked", "false");
//     }
//     if (value) {
//       setTimeIn(false); // Turn off Time In
//       setTimerActive(false); // Stop the timer
//       setSeconds(0); // Reset seconds
//       setMinutes(0); // Reset minutes
//       props.navigation.navigate("BreakIn"); // Navigate to BreakIn screen
//     }
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: "white" }}>
//       {/* Header Section */}
//       <View style={{ height: "48%", backgroundColor: "#09527E", width: "100%" }}>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-around",
//             marginTop: 1,
//           }}
//         >
//           <TouchableOpacity
//             onPress={() => {
//               props.navigation.replace("Login");
              
//             }}
//           >
//             <Icon name="arrowleft" color="white" size={35} />
//           </TouchableOpacity>
//           <Text
//             style={{
//               fontSize: 20,
//               fontFamily: "Segoe UI",
//               color: "white",
//               marginHorizontal: 50,
//               marginTop: 10,
//               textAlign: "center",
//               marginBottom: 22,
//             }}
//           >
//             HnH Soft Tech Solution
//           </Text>
//         </View>

//         <Image
//           source={require("../../Assets/iron.png")}
//           style={{ marginTop: 8, marginHorizontal: 124 }}
//         />
//         <Text
//           style={{
//             textAlign: "center",
//             fontSize: 26,
//             fontFamily: "Segoe UI",
//             color: "white",
//             fontWeight: "bold",
//           }}
//         >
//           Sohail Aqeel
//         </Text>
//         <Image
//           source={require("../../Assets/path.png")}
//           style={{ marginTop: -20, marginHorizontal: 3, width: "100%" }}
//         />
//       </View>

//       {/* Timer and Toggles Section */}
//       <View style={{ alignItems: "center", marginTop: 60 }}>
//         {/* Timer Display */}
//         <Text
//           style={{
//             textAlign: "center",
//             fontSize: 104,
//             color: "black",
//             fontWeight: "regular",
//           }}
//         >
//           {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
//         </Text>

//         {/* Time In Toggle */}
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             marginVertical: 10,
//             marginTop: 32,
//           }}
//         >
//           <Icon name="clockcircle" size={24} color="#09527E" style={{ marginRight: 10 }} />
//           <Text style={{ fontSize: 18, marginRight: 10, color: "#09527E" }}>Time In</Text>
//           <Switch value={timeIn} onValueChange={handleTimeInToggle} />
//         </View>

//         {/* Breakout Toggle */}
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             marginVertical: 10,
//           }}
//         >
//           <Icon name="poweroff" size={24} color="#09527E" style={{ marginRight: 10 }} />
//           <Text style={{ fontSize: 18, marginRight: 10, color: "#09527E" }}>Breakout</Text>
//           <Switch
//             value={breakout}
//             onValueChange={handleBreakoutToggle} // Persist state and navigate
//           />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;


import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Image, Switch, BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import AsyncStorage
import Icon from "react-native-vector-icons/AntDesign";

const HomeScreen = (props) => {
  const [seconds, setSeconds] = useState(0); // Initial seconds
  const [minutes, setMinutes] = useState(0); // Initial minutes
  const [timerActive, setTimerActive] = useState(false); // Timer status
  const [timeIn, setTimeIn] = useState(false); // "Time In" toggle
  const [breakout, setBreakout] = useState(false); // "Breakout" toggle

  // Timer Logic
  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1); // Increment minutes
            return 0; // Reset seconds
          }
          return prevSeconds + 1; // Increment seconds
        });
      }, 1000);
    } else {
      clearInterval(interval); // Clear interval when the timer is not active
    }
    return () => clearInterval(interval); // Cleanup
  }, [timerActive]);

  // Fetch initial BreakOut state
  useEffect(() => {
    const fetchBreakoutState = async () => {
      const savedBreakoutState = await AsyncStorage.getItem("isBreakOutActive");
      setBreakout(savedBreakoutState === "true");
    };
    fetchBreakoutState();
  }, []);

  // Handle Time In toggle
  const handleTimeInToggle = (value) => {
    if (breakout) return; // Prevent Time In toggle when Breakout is active
    setTimeIn(value);
    setTimerActive(value); // Start or pause the timer
  };

  // Handle Breakout toggle
  const handleBreakoutToggle = async (value) => {
    setBreakout(value);
    await AsyncStorage.setItem("isBreakOutActive", value ? "true" : "false");
    if (!value) {
      await AsyncStorage.setItem("isBreakOutButtonClicked", "true");
    }
    if (value) {
      setTimeIn(false); // Turn off Time In
      setTimerActive(false); // Stop the timer
      setSeconds(0); // Reset seconds
      setMinutes(0); // Reset minutes
      props.navigation.navigate("BreakIn"); // Navigate to BreakIn screen
    }
  };

  // Handle back button press to exit app
  // useEffect(() => {
  //   const backAction = () => {
  //     BackHandler.exitApp(); // Exit the app directly when back button is pressed
  //     return true; // Prevent default back button behavior (no confirmation dialog)
  //   };
  //   // const handleExitApp = () => {
  //   //   BackHandler.exitApp(); // This will exit the app completely
  //   // };
  //   const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

  //   // Cleanup listener when component is unmounted
  // //   return () => BackHandler.remove();
  // }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* Header Section */}
      <View style={{ height: "48%", backgroundColor: "#09527E", width: "100%" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              BackHandler.exitApp();
            }}
          >
            <Icon name="arrowleft" color="white" size={35} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Segoe UI",
              color: "white",
              marginHorizontal: 50,
              marginTop: 10,
              textAlign: "center",
              marginBottom: 22,
            }}
          >
            HnH Soft Tech Solution
          </Text>
        </View>

        <Image
          source={require("../../Assets/iron.png")}
          style={{ marginTop: 8, marginHorizontal: 124 }}
        />
        <Text
          style={{
            textAlign: "center",
            fontSize: 26,
            fontFamily: "Segoe UI",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Sohail Aqeel
        </Text>
        <Image
          source={require("../../Assets/path.png")}
          style={{ marginTop: -20, marginHorizontal: 3, width: "100%" }}
        />
      </View>

      {/* Timer and Toggles Section */}
      <View style={{ alignItems: "center", marginTop: 60 }}>
        {/* Timer Display */}
        <Text
          style={{
            textAlign: "center",
            fontSize: 104,
            color: "black",
            fontWeight: "regular",
          }}
        >
          {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
        </Text>

        {/* Time In Toggle */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
            marginTop: 32,
          }}
        >
          <Icon name="clockcircle" size={24} color="#09527E" style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 18, marginRight: 10, color: "#09527E" }}>Time In</Text>
          <Switch value={timeIn} onValueChange={handleTimeInToggle} />
        </View>

        {/* Breakout Toggle */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Icon name="poweroff" size={24} color="#09527E" style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 18, marginRight: 10, color: "#09527E" }}>Breakout</Text>
          <Switch
            value={breakout}
            onValueChange={handleBreakoutToggle} // Persist state and navigate
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
