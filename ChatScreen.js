// import React, { useState, useCallback } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';

// const ChatScreen = ({ route }) => {
//   const { user } = route.params; // Get user data from navigation
//   const [messages, setMessages] = useState([]);

//   // Add initial messages or previous conversation if needed
//   React.useEffect(() => {
//     const initialMessages = [
//       {
//         _id: 1,
//         text: `Hi ${user.name}, welcome to the chat!`,
//         createdAt: new Date(),
//         user: {
//           _id: 'system',
//           name: 'System',
//           avatar: 'https://i.pravatar.cc/300?u=system',
//         },
//       },
//     ];
//     setMessages(initialMessages);
//   }, [user]);

//   // Append new messages
//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <GiftedChat
//         messages={messages}
//         onSend={messages => onSend(messages)}
//         user={{
//           _id: user.id,
//           name: user.name,
//           avatar: user.profileImage,
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

// export default ChatScreen;


import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';


const ChatScreen = () => {
  return (
    <View style={styles.container}>
    <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ChatScreen;
