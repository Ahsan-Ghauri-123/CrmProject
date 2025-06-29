
import React, { useState } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const GroupChat = () => {
  const [searchText, setSearchText] = useState('');
  const chats = [
    {
      id: '1',
      name: 'Group 1',
      lastMessage: 'Hi there!',
      profileImage: require('../../Assets/man.jpg'), // Local image
    },
    {
      id: '2',
      name: 'Group 2',
      lastMessage: 'Let’s catch up soon.',
      profileImage: require('../../Assets/1.png'), // Remote image
    },
    {
      id: '3',
      name: 'Group 3',
      lastMessage: 'Thanks for the update!',
      profileImage: require('../../Assets/2.png') ,// Remote image
    },
    {
      id: '4',
      name: 'Group 4',
      lastMessage: 'Looking forward to it.',
      profileImage: require('../../Assets/3.png') ,// Remote image
    },
    {
      id: '5',
      name: 'Group 5',
      lastMessage: 'Can we reschedule?',
      profileImage: require('../../Assets/4.png') , // Remote image
    },
  ];

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground
      source={require('../../Assets/back.png')}
      style={{ height: '100%', width: '100%', flex: 1 }}
    >
      {/* Search Bar */}
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: 10,
          paddingHorizontal: 10,
          elevation: 5,
        }}
      >
        {/* Search Icon */}
        <Icon name="search" size={24} color="#888" />

        {/* Search TextInput */}
        <TextInput
          placeholder="Search here"
          style={{ flex: 1, fontSize: 16, color: '#333', marginLeft: 10 }}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <Image source={require('../../Assets/iron.png')} style={{ height: 40, width: 30 }} />
      </View>

      {/* Chat List */}
      <FlatList
        data={filteredChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              marginHorizontal: 20,
              marginVertical: 10,
              borderRadius: 10,
              padding: 10,
              elevation: 3,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onPress={() => alert(`Chat with ${item.name}`)} // Replace this with navigation
          >
            <Image
              source={item.profileImage}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                marginRight: 10,
              }}
            />
            <View style={{ flexDirection: 'column', flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>{item.name}</Text>
              <Text style={{ fontSize: 14, color: '#888' }}>{item.lastMessage}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
};

export default GroupChat;

