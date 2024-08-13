import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import HomeHeader from "@/src/components/HomeHeader";
import LatestNotice from "@/src/components/LatestNotice";
import SearchField from "@/src/components/SearchField";
import QuickActions from "./components/QuickActions";

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  return (
    <SafeAreaView>
      <ScrollView>
        <View className=" bg-primary">
          <HomeHeader
            greetings={"Hello user"}
            name={"Suman Sitaula"}
            role={"Student"}
            school={"Model Campus Damak"}
          />
          <View className="bg-white p-container-screen-box rounded-t-modal-radius">
            <SearchField />
            <LatestNotice title={"Holiday announcement"} time={3} />
            <QuickActions />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

    //In case safe area creates issue use this as the wrapper
    // <View style={{ marginTop: top }}>
    //   <Text>HomeScreen</Text>
    // </View>
  );
};

export default HomeScreen;
