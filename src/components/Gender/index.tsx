import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";

import { GenderInterface } from "../../@types/context";
import { Context } from "../../Context";

import { styles } from "./styles";

export default function Gender({ onPress, title, children }: GenderInterface) {
  const { genderSelection } = useContext(Context);

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.icon}>{children}</View>
      <Text
        style={
          genderSelection === ""
            ? styles.title
            : title === genderSelection
            ? styles.titleSelected
            : styles.title
        }
      >
        {title}
      </Text>
    </Pressable>
  );
}
