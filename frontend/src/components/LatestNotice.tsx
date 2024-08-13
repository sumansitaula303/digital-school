import { ArrowRight } from "iconsax-react-native";
import { View, Text, StyleSheet } from "react-native";
type latestNoticeProps = {
  title: string;
  time: number;
};
const LatestNotice = ({ time, title }: latestNoticeProps) => {
  return (
    <View className=" mb-5">
      <Text className=" text-label font-fw-lg mt-[24px] mb-2">
        Latest Notice
      </Text>
      <View style={style.shadowBox}>
        <View className=" p-container-screen-box">
          <Text className=" text-body-xs font-fw-lg">{title}</Text>
          <View className="flex-row mt-4 justify-between items-center">
            <Text className=" text-body-micro font-fw-md">{time + " hrs"}</Text>
            <View>
              <ArrowRight size="25" color="#185CAB" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LatestNotice;
const style = StyleSheet.create({
  shadowBox: {
    shadowColor: "#000000",
    backgroundColor: "white",
    borderRadius: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 5,
    elevation: 5,
    // This is for Android shadow
  },
});
