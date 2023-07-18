"use client";
import { eletroData, eletroDataEdit } from "@/schemas/eletro.schema";
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
  updateEletro: (eletroDatas: eletroDataEdit) => void;
  deleteEletros: () => void;
  eletros: IEletros[];
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  modalEdit: boolean;
  setModalEdit: Dispatch<SetStateAction<boolean>>;
  filterEletros: IEletros[];
  setFilterEletros: Dispatch<SetStateAction<IEletros[]>>;
}

const AppContext = createContext<appProviderData>({} as appProviderData);

function AppProvider({ children }: Props) {
  const [eletros, setEletros] = useState<IEletros[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [modalEdit, setModalEdit] = useState<boolean>(false);
  const [filterEletros, setFilterEletros] = useState<IEletros[]>([]);
  const id = filterEletros.map((elem) => elem.id);

  const registerEletro = async (eletroDatas: eletroData) => {
    try {
      const response = await api.post("/eletros", eletroDatas);
    } catch (error) {
      console.error(error);
    }
  };

  const updateEletro = async (eletroDatas: eletroDataEdit) => {
    try {
      const response = await api.patch(`/eletros/${id}`, eletroDatas);
    } catch (error) {}
  };

  async function deleteEletros() {
    try {
      const response = await api.delete(`/eletros/${id}`);
    } catch (error) {}
  }
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
        updateEletro,
        deleteEletros,
        eletros,
        modal,
        setModal,
        modalEdit,
        setModalEdit,
        filterEletros,
        setFilterEletros
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider, type IEletros };
