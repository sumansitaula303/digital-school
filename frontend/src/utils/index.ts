import { type ClassValue, clsx } from "clsx"
import { router } from "expo-router"
import { twMerge } from "tw-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

// export const redirectAsRole = (role: string) => {
//   switch (role) {
//   case "student":
//     router.push("/(student)/(tabs)/home")
//     break

//   case "teacher":
//     router.push("/(teacher)/(tabs)/home")
//     break

//   case "school":
//     router.push("/(school)/(tabs)/home")
//     break

//   default:
//     router.push("/(student)/(tabs)/home")
//     break
//   }
// }
