import Column from "@/components/Column";
import { CustomBtn } from "@/components/CustomBtn";
import { CustomText } from "@/components/CustomText";
import { Row } from "@/components/Row";
import { colors } from "@/constants/colors";
import { StatusBar, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Column
        style={{
          // backgroundColor: "pink",
          padding: 10,
          marginBottom: 30,
        }}
      >
        <Column
          style={{
            // backgroundColor: "red",
            alignItems: "flex-end",
          }}
        >
          <CustomText>10 x 20</CustomText>
          <CustomText variant={"h2"}>500</CustomText>
        </Column>

        <Column
          style={{
            // backgroundColor: "blue",
            alignItems: "flex-end",
          }}
        >
          <Row>
            <CustomBtn
              text={"1"}
              color={colors.lightGray}
              textColor={colors.darkGray}
            />
            <CustomBtn
              text={"+/-"}
              color={colors.lightGray}
              textColor={colors.darkGray}
            />
            <CustomBtn
              text={"del"}
              color={colors.lightGray}
              textColor={colors.darkGray}
            />
            <CustomBtn text={"÷"} color={colors.orange} />
          </Row>
          <Row>
            <CustomBtn text={"1"} />
            <CustomBtn text={"2"} />
            <CustomBtn text={"3"} />
            <CustomBtn text={"-"} color={colors.orange} />
          </Row>
          <Row>
            <CustomBtn text={"4"} />
            <CustomBtn text={"5"} />
            <CustomBtn text={"6"} />
            <CustomBtn text={"x"} color={colors.orange} />
          </Row>
          <Row>
            <CustomBtn text={"7"} />
            <CustomBtn text={"8"} />
            <CustomBtn text={"9"} />
            <CustomBtn text={"+"} color={colors.orange} />
          </Row>
          <Row>
            <CustomBtn variant="large" text={"0"} />
            <CustomBtn text={"."} />
            <CustomBtn text={"="} color={colors.orange} />
          </Row>
        </Column>
      </Column>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "flex-end",
  },
});
