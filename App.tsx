import { StatusBar } from "expo-status-bar";

import { StyleSheet, View } from "react-native";

import AppLoading from "expo-app-loading";

import {
  useFonts,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import Home from "./src/screens/Home";
import Data from "./src/screens/Data";
import Result from "./src/screens/Result";

import { Context } from "./src/Context";
import { useState } from "react";
import { FormData } from "./src/@types/context";

export default function App() {
  const [formData, setFormData] = useState<FormData | undefined>();
  const [currentPage, setCurrentPage] = useState("Home");
  const [genderSelection, setGenderSelection] = useState("");

  function handleSetGenderSelection(gender: string) {
    gender === "male"
      ? setGenderSelection("female")
      : setGenderSelection(gender);
  }

  function handleSetCurrentPage(page: string) {
    setCurrentPage(page);
  }

  function handleSetFormData(data: FormData) {
    setFormData(data);
  }

  let [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Context.Provider
      value={{
        formData,
        currentPage,
        genderSelection,
        handleSetFormData,
        handleSetCurrentPage,
        handleSetGenderSelection,
      }}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        {currentPage === "Home" && <Home />}
        {currentPage === "Data" && <Data />}
        {currentPage === "Result" && <Result />}
      </View>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
