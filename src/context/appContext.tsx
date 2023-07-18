"use client";
import { eletroData } from "@/schemas/eletro.schema";
import { api } from "@/services/api";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface IEletros {
  id: string;
  name: string;
  image: string;
  description: string;
  tension: string;
  brand: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

interface appProviderData {
  registerEletro: (eletroDatas: eletroData) => void;
  eletros: IEletros[];
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<appProviderData>({} as appProviderData);

function AppProvider({ children }: Props) {
  const [eletros, setEletros] = useState<IEletros[]>([]);
  const [modal, setModal] = useState<boolean>(false);

  const registerEletro = async (eletroDatas: eletroData) => {
    try {
      const response = await api.post("/eletros", eletroDatas);
    } catch (error) {
      console.error(error);
    }
  };

  async function getEletros() {
    try {
      const response = await api.get<IEletros[]>("/eletros");
      setEletros(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    getEletros();
  }, []);

  return (
    <AppContext.Provider
      value={{
        registerEletro,
        eletros,
        modal,
        setModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider, type IEletros };
