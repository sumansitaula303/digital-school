import { router } from "expo-router";
import {
  Bill,
  Calendar,
  CardEdit,
  ClipboardText,
  Messages1,
  People,
  ProfileTick,
  UserOctagon,
  Video,
} from "iconsax-react-native";

export const iconList = [
  {
    title1: "Assignment",
    unread: false,
    iconData: <CardEdit size="28" color="#185cab" />,
    onPress: () => {
      return null;
    },
  },
  {
    title1: "FeedBack",
    unread: false,
    iconData: <Messages1 size="28" color="#185cab" />,
    onPress: () => {
      return null;
    },
  },
  {
    title1: "Results",
    unread: true,
    iconData: <ClipboardText size="28" color="#185cab" />,
    onPress: () => {
      return null;
    },
  },
  {
    title1: "Calendar",
    unread: false,
    iconData: <Calendar size="28" color="#185CAB" />,
    onPress: () => {
      return null;
    },
  },
  {
    title1: "Online Class",
    unread: false,
    iconData: <Video size="28" color="#185CAB" />,
    onPress: () => {
      //   return router.push("/(student)/exam-type-selection")
    },
  },
  {
    title1: "Bill",
    unread: false,
    iconData: <Bill size="28" color="#185CAB" />,
    onPress: () => {
      return null;
    },
  },
  {
    title1: "My Profile",
    unread: false,
    iconData: <ProfileTick size="30" color="#185CAB" />,
    onPress: () => {
      return null;
    },
  },
  {
    unread: false,
    title1: "Staff Profile",
    iconData: <People size="30" color="#185CAB" />,
    onPress: () => {
      return null;
    },
  },
  {
    unread: false,
    title1: "School Attendance",
    iconData: <UserOctagon size="30" color="#185CAB" />,
    onPress: () => {
      return null;
    },
  },
];
