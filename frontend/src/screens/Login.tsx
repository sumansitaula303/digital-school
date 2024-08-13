import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React from "react";
import { router } from "expo-router";

const Hello = () => {
  return (
    <View className=" flex-1 justify-center items-center">
      <View className=" justify-center items-center mb-4">
        <View className="rounded-circle-r bg-primary-100 border-white justify-center items-center">
          <Image
            className=" rounded-circle-r h-20 w-20"
            source={require("../assets/images/school-logo.png")}
            resizeMode="stretch"
          />
        </View>
      </View>

      <Text className=" text-xl text-b">Digital School</Text>
      <View className=" flex-row p-inline-field">
        <TextInput
          className=" rounded-inputfield-radius flex-1 px-inline-field py-block-field bg-gray-200"
          placeholder="Username"
        />
      </View>
      <View className=" flex-row p-inline-field">
        <TextInput
          className=" rounded-inputfield-radius flex-1 px-inline-field py-block-field bg-gray-200"
          placeholder="Password"
        />
      </View>
      <TouchableOpacity
        className=" flex-row p-inline-field"
        onPress={() => router.replace("/(tabs)/home")}
      >
        <View className=" bg-primary px-7 py-3 flex-1 justify-center items-center">
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Hello;
