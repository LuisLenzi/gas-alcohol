import React from "react";
import { Text, View } from "react-native";

import { InputInterface } from "../../@types/context";

import { styles } from "./styles";

export default function Input({ unity, title, children }: InputInterface) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputBox}>
        {children}
        <Text style={styles.unity}>{unity}</Text>
      </View>
    </View>
  );
}
