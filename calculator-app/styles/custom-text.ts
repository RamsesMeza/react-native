import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  default: {
    fontFamily: "SNPro",
    color: colors.withe,
  },
  mainText: {
    color: colors.lightGray,
    fontSize: 60,
    fontFamily: "SNPro",
  },
  secondText: {
    color: colors.darkGray,
    fontSize: 50,
  },
});

export default styles;
