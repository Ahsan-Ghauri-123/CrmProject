import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingScreen = ({navigation}) => {
    const logoutHandler = async () => {
        try {
            // Clear credentials
            await AsyncStorage.clear();

            // Navigate back to Login Screen
            navigation.replace("Login");
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <ImageBackground
            source={require('../../Assets/back.png')}
            style={{ height: '100%', width: '100%', flex: 1 }}
        >
            <View>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "black", fontFamily: "Segoe UI", textAlign: "center", marginTop: 55 }}>Setting</Text>
            </View>
            <View style={{ marginTop: 90, marginHorizontal: -36 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("ProfilePicChange");
                    }}
                    style={{ height: 60, width: "65%", backgroundColor: "white", borderRadius: 10, marginTop: 25, justifyContent: "center", alignItems: "center", marginHorizontal: 14 }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "black", fontFamily: "Aileron" }}>Profile Picture Change </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("PasswordChange");
                    }}
                    style={{ height: 60, width: "65%", backgroundColor: "white", borderRadius: 10, marginTop: 2, justifyContent: "center", alignItems: "center", marginHorizontal: 2 }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "black", fontFamily: "Aileron" }}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={logoutHandler} // Using the handleLogout function
                    style={{ height: 60, width: "65%", backgroundColor: "white", borderRadius: 10, marginTop: 2, justifyContent: "center", alignItems: "center", marginHorizontal: 2 }}>
                    <Text style={{ fontSize: 14, fontWeight: "bold", color: "black", fontFamily: "Aileron" }}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default SettingScreen;
