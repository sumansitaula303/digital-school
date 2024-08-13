import { View, Text } from "react-native";
import React from "react";
import ImageComponent from "./imageComponent";

type homeHeader = {
  greetings: string;
  name: string;
  role: string;
  school: string;
};
const HomeHeader = ({ greetings, name, role, school }: homeHeader) => {
  return (
    <View className=" bg-primary">
      <View className="flex-row items-center p-container-screen-box">
        <ImageComponent
          imgType={"homePageImage"}
          img={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Balen_Shah3-cropped.png/330px-Balen_Shah3-cropped.png"
          }
          hasShadow={false}
          hasBorder={true}
        />
        <View className=" justify-between ml-4">
          <Text className=" text-label font-fw-md text-white">{greetings}</Text>
          <Text className=" text-header-xl font-fw-lg text-white">{name}</Text>

          <View className="">
            <Text className="text-fs-body-sm text-white font-fw-xl">
              {role + " | "}
              <Text className=" font-fw-md">{school}</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
