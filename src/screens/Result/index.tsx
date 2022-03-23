import React, { useContext, useEffect, useState } from "react";

import { View, Text, Image } from "react-native";

import Button from "../../components/Button";

import { Context } from "../../Context";
import { styles } from "./styles";
import { getPrice, getPercentual } from "../../utils/price";

export default function Result() {
  const { formData, handleSetCurrentPage } = useContext(Context);
  const [resultValue, setResultValue] = useState(0);
  const [resultPrice, setResultPrice] = useState(false);

  useEffect(() => {
    if (formData) {
      const percentual = getPercentual(
        Number(formData.alcohol),
        Number(formData.gas)
      );

      setResultValue(percentual);

      const price = getPrice(Number(formData.alcohol), Number(formData.gas));
      setResultPrice(price);
    }
  }, [formData]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.image}
          source={require("../../assets/images/home-illustration.png")}
          resizeMode="contain"
        />

        <View style={styles.header}>
          <Text style={styles.line01}>Etanol está sendo</Text>
          <Text style={styles.line02}>{resultValue.toFixed(2)} %</Text>
        </View>

        <View style={styles.header}>
          <Text style={styles.line01}>
            Aconselhavel usar{" "}
            <Text style={styles.line02}>
              {resultPrice ? "Etanol " : "Gasolina "}
            </Text>
            no próximo abastecimento
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <Button
          type="tertiary"
          title="Voltar"
          onPress={() => handleSetCurrentPage("Home")}
        >
          <Image
            source={require("../../assets/images/arrow-illustration-data.png")}
            resizeMode="contain"
          />
        </Button>
      </View>
    </View>
  );
}
