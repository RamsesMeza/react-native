import CustomTextStyles from "@/styles/custom-text";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}
export function CustomText({ variant = "h1", children, ...rest }: Props) {
  return (
    <Text
      style={[
        CustomTextStyles.default,
        variant === "h1" && CustomTextStyles.mainText,
        variant === "h2" && CustomTextStyles.secondText,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      {children}
    </Text>
  );
}
