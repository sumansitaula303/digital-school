import { View, Text } from "react-native";
import React from "react";
import { iconList } from "../types/moduleTypes";
import HomePageIcons from "@/src/components/HomePageIcons";
const QuickActions = () => {
  return (
    <View>
      <Text className=" text-header-lg font-fw-lg">Quick actions</Text>
      <View className="py-block-icon">
        <View className="flex-row flex-wrap space-y-4">
          {iconList.map((item, index) => (
            <HomePageIcons
              unRead={item.unread}
              key={index}
              title1={item.title1}
              // title2={item.title2}
              icon={item.iconData}
              onPress={item.onPress}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

export default QuickActions;
