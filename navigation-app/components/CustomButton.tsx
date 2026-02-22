import { Colors, getColor } from "@/constants/colors";
import { styles } from "@/styles/styles";
import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  children: string;
  color?: Colors;
}
export default function CustomButton({
  children,
  color,
  style,
  ...rest
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        color && { backgroundColor: getColor(color) },
      ]}
      {...rest}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
}
