import { createContext } from "react";

import { FormData } from "../@types/context";

type ContextProps = {
  formData: FormData | undefined;
  currentPage: string;
  genderSelection: string;
  handleSetFormData: (data: FormData) => void;
  handleSetCurrentPage: (page: string) => void;
  handleSetGenderSelection: (genderSelection: string) => void;
};

export const Context = createContext({} as ContextProps);
