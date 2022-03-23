import React from "react";

export interface ButtonInterface {
  type: "primary" | "secondary" | "tertiary";
  onPress: () => void;
  title: string;
  children: React.ReactNode;
}

export interface GenderInterface {
  onPress: () => void;
  title: string;
  children: React.ReactNode;
}

export type FormData = {
  gas: number;
  alcohol: number;
};

export interface InputInterface {
  children: React.ReactNode;
  unity: string;
  title: string;
}
