import Column from "@/components/Column";
import { CustomBtn } from "@/components/CustomBtn";
import { CustomText } from "@/components/CustomText";
import { Row } from "@/components/Row";
import { colors } from "@/constants/colors";
import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

export default function Index() {
  const [operation, setOperation] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const onPressBtn = (text: string) => setOperation((prev) => prev + text);
  const onReset = () => {
    setOperation("");
    setResult("");
  };
  const onFinishOperation = () => {
    console.log("Termine la operación");
    const result = eval(operation);

    if (!result) setResult("Error");

    setResult(result);
  };
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
          <CustomText>{operation}</CustomText>
          <CustomText variant={"h2"}>{result}</CustomText>
        </Column>

        <Column
          style={{
            // backgroundColor: "blue",
            alignItems: "flex-end",
          }}
        >
          <Row>
            <CustomBtn
              text={"C"}
              color={colors.lightGray}
              textColor={colors.darkGray}
              onPress={onReset}
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
            <CustomBtn
              text={"÷"}
              color={colors.orange}
              onPress={() => onPressBtn("/")}
            />
          </Row>
          <Row>
            <CustomBtn text={"1"} onPress={() => onPressBtn("1")} />
            <CustomBtn text={"2"} onPress={() => onPressBtn("2")} />
            <CustomBtn text={"3"} onPress={() => onPressBtn("3")} />
            <CustomBtn
              text={"-"}
              onPress={() => onPressBtn("-")}
              color={colors.orange}
            />
          </Row>
          <Row>
            <CustomBtn text={"4"} onPress={() => onPressBtn("4")} />
            <CustomBtn text={"5"} onPress={() => onPressBtn("5")} />
            <CustomBtn text={"6"} onPress={() => onPressBtn("6")} />
            <CustomBtn
              text={"x"}
              onPress={() => onPressBtn("*")}
              color={colors.orange}
            />
          </Row>
          <Row>
            <CustomBtn text={"7"} onPress={() => onPressBtn("7")} />
            <CustomBtn text={"8"} onPress={() => onPressBtn("8")} />
            <CustomBtn text={"9"} onPress={() => onPressBtn("9")} />
            <CustomBtn
              text={"+"}
              onPress={() => onPressBtn("+")}
              color={colors.orange}
            />
          </Row>
          <Row>
            <CustomBtn
              variant="large"
              text={"0"}
              onPress={() => onPressBtn("0")}
            />
            <CustomBtn text={"."} onPress={() => onPressBtn(".")} />
            <CustomBtn
              text={"="}
              onPress={onFinishOperation}
              color={colors.orange}
            />
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
