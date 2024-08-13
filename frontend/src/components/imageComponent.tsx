import { cn } from "../utils/index";
import { View, Image, StyleSheet } from "react-native";
type imgProps = {
  imgType:
    | "homePageImage"
    | "profileImage"
    | "listImage"
    | "commentImage"
    | "smallImage";
  img: string;
  hasShadow?: boolean;
  hasBorder?: boolean;
};
const ImageComponent = ({ img, imgType, hasBorder, hasShadow }: imgProps) => {
  const imgSize =
    imgType === "commentImage"
      ? { height: "h-[140]", width: "w-[140]" }
      : imgType === "homePageImage"
      ? { height: "h-[70]", width: "w-[70]" }
      : imgType === "listImage"
      ? { height: "h-[60]", width: "w-[60]" }
      : imgType === "profileImage"
      ? { height: "h-[165]", width: "w-[165]" }
      : imgType === "smallImage"
      ? { height: "h-[50]", width: "w-[50]" }
      : { height: "h-[0]", width: "w-[0]" };
  return (
    <View className=" justify-center items-center">
      <View
        style={hasShadow ? imgStyle.shadowBox : null}
        className={cn(
          " rounded-circle-r",
          " bg-primary-text-white",
          " border-white",
          "justify-center",
          "items-center",
          hasBorder ? " border-2" : null
        )}
      >
        <Image
          className={cn(imgSize.height, imgSize.width, " rounded-circle-r")}
          source={{
            uri: img,
          }}
        />
      </View>
    </View>
  );
};

export default ImageComponent;
const imgStyle = StyleSheet.create({
  shadowBox: {
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0,
    shadowRadius: 5,
    elevation: 20, // This is for Android shadow
  },
});
