import React, { useContext } from "react";

import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import { useForm, Controller } from "react-hook-form";

import { MaskedTextInput } from "react-native-mask-text";

import Button from "../../components/Button";

import { Context } from "../../Context";
import Input from "../../components/Input";

import { FormData } from "../../@types/context";

export default function Home() {
  const { handleSetFormData, handleSetCurrentPage, handleSetGenderSelection } =
    useContext(Context);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    try {
      handleSetFormData(data);
      handleSetCurrentPage("Result");
    } catch {}
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.header}>
          <Text style={styles.line01}>
            Insira seus dados e deixe a calculadora fazer o resto
          </Text>
        </View>
        <View style={styles.content}>
          <View>
            <Input
              title="Para começar, precisamos saber qual o preço do Etanol"
              unity="R$"
            >
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MaskedTextInput
                    mask={"9.99"}
                    style={styles.input}
                    onBlur={onBlur}
                    keyboardType="numeric"
                    onChangeText={onChange}
                    value={String(value)}
                  />
                )}
                name="alcohol"
              />
              {errors.alcohol && (
                <Text style={styles.error}>Campo obrigatório</Text>
              )}
            </Input>
            <Input title="E agora, indique-nos o preço da Gasolina" unity="R$">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MaskedTextInput
                    mask={"9.99"}
                    style={styles.input}
                    onBlur={onBlur}
                    keyboardType="numeric"
                    onChangeText={onChange}
                    value={String(value)}
                  />
                )}
                name="gas"
              />
              {errors.gas && (
                <Text style={styles.error}>Campo obrigatório</Text>
              )}
            </Input>
          </View>
        </View>
        <Button
          type="primary"
          title="Calcular"
          onPress={handleSubmit(onSubmit)}
        >
          <Image
            source={require("../../assets/images/data-illustration.png")}
            resizeMode="contain"
          />
        </Button>
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
