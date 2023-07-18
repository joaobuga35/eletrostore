"use client";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { eletroData, eletroDataEdit, eletroEditSchema, eletroSchema } from "@/schemas/eletro.schema";
import { zodResolver } from "@hookForm/resolvers/zod";
import { useContext } from "react";
import { AppContext } from "@/context/appContext";

const ModalEditDelete = () => {
  const { setModalEdit, filterEletros, updateEletro, deleteEletros } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<eletroDataEdit>({
    mode: "onSubmit",
    resolver: zodResolver(eletroEditSchema),
    defaultValues:{
      name: filterEletros.length > 0 ? filterEletros[0].name : "",
      image: filterEletros.length > 0 ? filterEletros[0].image : "",
      description: filterEletros.length > 0 ? filterEletros[0].description : "",
      tension: filterEletros.length > 0 ? filterEletros[0].tension : "",
      brand: filterEletros.length > 0 ? filterEletros[0].brand : "",
      price: filterEletros.length > 0 ? filterEletros[0].price : "",
    }
  });

  const submit = (formData: eletroDataEdit) => {
    updateEletro(formData)
    setModalEdit(false)
  };

  return (
    <div className="modal-wrapper z-50">
      <div className="modal-container">
        <div className="h-[40px] text-white-200 bg-blue flex justify-between items-center rounded-t px-4 mb-2">
          <h2 className="text-[16px]">Editar ou Deletar Eletro</h2>
          <button type="button" onClick={() => setModalEdit(false)}>
            X
          </button>
        </div>
        <form noValidate onSubmit={handleSubmit(submit)} className="px-4">
          <Input
            id="name"
            label="Nome"
            type="text"
            placeholder="Digite o nome do eletrodoméstico"
            colorText="text-gray-1"
            register={register("name")}
          />
          <Input
            id="image"
            label="Imagem"
            type="text"
            placeholder="Digite a url da imagem"
            colorText="text-gray-1"
            register={register("image")}
          />
          <Input
            id="description"
            label="Descrição"
            type="text"
            placeholder="Ex: Geladeira nova e sem nenhum detalhe."
            colorText="text-gray-1"
            register={register("description")}
          />
          <Input
            id="tension"
            label="Voltagem"
            type="text"
            placeholder="Ex: 220v ou 110v"
            colorText="text-gray-1"
            register={register("tension")}
          />
          <div className="mb-4 flex flex-col gap-1">
            <label className="text-gray-1 text-xs" htmlFor="brand">
              Marca
            </label>
            <select
              className="w-full h-9 p-2 rounded outline-none border-brand-2 ring-1 focus:border-blue focus:ring-2 focus:ring-blue"
              {...register("brand")}
            >
              <option value="LG">LG</option>
              <option value="Samsung">Samsung</option>
              <option value="Brastemp">Brastemp</option>
              <option value="Fischer">Fischer</option>
              <option value="Electrolux">Electrolux</option>
            </select>
          </div>
          <Input
            id="price"
            label="Preço"
            type="number"
            placeholder="Ex: 2000"
            colorText="text-gray-1"
            register={register("price")}
          />
          <div className="mb-4 flex gap-2">
            <button
              className="w-full cursor-pointer rounded-[0.25rem] button-grey-outline"
              type="submit"
            >
              Salvar Eletro
            </button>
            <button
              onClick={() => {deleteEletros(), setModalEdit(false)}}
              className="w-full cursor-pointer rounded-[0.25rem] button-grey-outline"
              type="submit"
            >
              Deletar Eletro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditDelete;