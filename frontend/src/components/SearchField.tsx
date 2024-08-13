import { View, Text } from "react-native";
import React from "react";
import { SearchNormal1 } from "iconsax-react-native";

const SearchField = () => {
  return (
    <View className=" bg-gray-100 border-gray-300 rounded-[50px] border flex-row items-center">
      <SearchNormal1
        className=" my-[12px] ml-[16px]"
        size="18"
        color="#4B5563"
      />
      <Text className="ml-2"> Search Module</Text>
    </View>
  );
};

export default SearchField;
