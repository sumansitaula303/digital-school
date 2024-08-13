import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
type iconProps = {
  title1: string;
  unRead: boolean;
  icon: React.ReactNode;
  onPress: () => void;
};
const HomePageIcons = (props: iconProps) => {
  return (
    <View
      className="items-center mb-8 overflow-hidden"
      style={{ width: "33%" }}
    >
      <TouchableOpacity className="items-center" onPress={props.onPress}>
        <View
          className="h-[70rem] w-[70rem]  rounded-circle-r p-icons-home justify-center items-center border-[2px] border-primary-light"
          style={style.boxShadow}
        >
          {props.icon}
        </View>
        <View className="items-center ">
          <Text className="mt-3  text-body-sm font-fw-lg">{props.title1}</Text>
          {/* <Text className=" mt-0.5 text-body-sm font-fw-lg">{props.title2}</Text> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomePageIcons;
const style = StyleSheet.create({
  boxShadow: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4,
    elevation: 2, // This is for Android shadow
  },
});
