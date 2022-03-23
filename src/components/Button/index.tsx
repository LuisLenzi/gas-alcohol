import React from "react";
import { Pressable, Text, View } from "react-native";

import { ButtonInterface } from "../../@types/context";

import { styles } from "./styles";

export default function Button({
  type,
  onPress,
  title,
  children,
}: ButtonInterface) {
  const buttonType = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
  };

  const textType = {
    primary: styles.primaryText,
    secondary: styles.secondaryText,
    tertiary: styles.tertiaryText,
  };

  return (
    <Pressable style={buttonType[type]} onPress={onPress}>
      {type === "tertiary" ? (
        <>
          <View style={styles.backIcon}>{children}</View>
          <Text style={textType[type]}>{title}</Text>
        </>
      ) : (
        <>
          <Text style={textType[type]}>{title}</Text>
          <View style={styles.nextIcon}>{children}</View>
        </>
      )}
    </Pressable>
  );
}