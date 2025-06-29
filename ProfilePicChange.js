// import React, { useState } from 'react';
// import { Text, View, Image } from 'react-native';
// import Icon from "react-native-vector-icons/Feather";
// const ProfilePicChange = () => {

//   return (
//     <View style={{ alignItems: 'center', paddingTop: 50 }}>
//       {/* Display Profile Picture */}
//       <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily:"Segoe UI", color:"black"}}>Profile Picture Change</Text>

//       <Image
//         source={require("../Assets/iron.png")}
//         style={{
//           width: 210,
//           height: 200,
//           borderRadius: 50,
//           marginBottom: 20,
//           marginTop:144
//         }}
//       />
//       <View style={{marginLeft:92, marginBottom:12}}>
//       <Icon name="edit" size={22} color="black" />
      
//       </View>
//     </View>
//   );
// };

// export default ProfilePicChange;

// import React, { useState } from 'react';
// import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
// import Icon from 'react-native-vector-icons/Feather';

// const ProfilePicChange = () => {
//   // State to store the profile picture URL
//   const [profilePic, setProfilePic] = useState(require('../Assets/iron.png')); // Default image

//   // Function to change the profile picture
//   const changeProfilePic = () => {
//     Alert.alert(
//       "Change Profile Picture",
//       "Would you like to change your profile picture?",
//       [
//         {
//           text: "No",
//           style: "cancel",
//         },
//         {
//           text: "Yes", 
//           onPress: () => setProfilePic(require('../Assets/iron.png')), // Change to new profile image
//         }
//       ]
//     );
//   };

//   return (
//     <View style={{ alignItems: 'center', paddingTop: 50 }}>
//       {/* Profile Picture Change Title */}
//       <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'black' }}>
//         Profile Picture Change
//       </Text>

//       {/* Display Profile Picture */}
//       <View style={{ position: 'relative', marginTop: 112 }}>
//         <Image
//           source={profilePic}
//           style={{
//             width: 210,
//             height: 200,
//             borderRadius: 50,
//             marginBottom: 20,
//           }}
//         />
        
//         {/* Edit Icon positioned on the right side of the image */}
//         <TouchableOpacity
//           onPress={changeProfilePic}
//           style={{
//             position: 'absolute',
//             right: -10,
//             bottom: -10,
//             backgroundColor: 'white',
//             borderRadius: 20,
//             padding: 5,
//             elevation: 5,
//           }}
//         >
//           <Icon name="edit" size={22} color="black" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default ProfilePicChange;


import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';

const ProfilePicChange = () => {
  // State to store the profile picture URL
  const [profilePic, setProfilePic] = useState(require('../Assets/iron.png')); // Default image

  // Function to handle profile picture change
  const openImagePicker = () => {
    Alert.alert(
      "Change Profile Picture",
      "Would you like to change your profile picture?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            ImagePicker.openPicker({
              width: 210,
              height: 200,
              cropping: true,
              cropperCircleOverlay: true, // Circle cropper
              mediaType: 'photo',
            })
              .then(image => {
                setProfilePic({ uri: image.path }); // Set the selected image
              })
              .catch(error => {
                if (error.message !== 'User cancelled image selection') {
                  console.error("Image Picker Error: ", error);
                }
              });
          },
        },
      ]
    );
  };

  return (
    <View style={{ alignItems: 'center', paddingTop: 50 }}>
      {/* Profile Picture Change Title */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', fontFamily: 'Segoe UI', color: 'black' }}>
        Profile Picture Change
      </Text>

      {/* Display Profile Picture */}
      <View style={{ position: 'relative', marginTop: 112 }}>
        <Image
          source={profilePic}
          style={{
            width: 210,
            height: 200,
            borderRadius: 105, // Fully rounded for circle
            marginBottom: 20,
          }}
        />
        
        {/* Edit Icon positioned on the right side of the image */}
        <TouchableOpacity
          onPress={openImagePicker}
          style={{
            position: 'absolute',
            right: -10,
            bottom: -10,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 5,
            elevation: 5,
          }}
        >
          <Icon name="edit" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilePicChange;
