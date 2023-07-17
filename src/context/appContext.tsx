"use client";
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
    description:string;
    tension: string;
    brand: string;
    price: number;
    createdAt: string;
    updatedAt: string;
}

interface appProviderData {
  eletros: IEletros[]
}

 const AppContext = createContext<appProviderData>(
  {} as appProviderData
);

 function AppProvider({ children }: Props) {
    const [eletros, setEletros] = useState<IEletros[]>([])
    async function getEletros() {
        try {
          const response = await api.get<IEletros[]>("/eletros");
          setEletros(response.data);
        } catch (error) {}
      }
    useEffect(() => {
      getEletros()
    },[])
  return (
    <AppContext.Provider
      value={{
        eletros
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export {
    AppContext,
    AppProvider,
    type IEletros
}