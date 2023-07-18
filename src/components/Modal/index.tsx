"use client";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { eletroData, eletroSchema } from "@/schemas/eletro.schema";
import { zodResolver } from "@hookForm/resolvers/zod";
import { useContext } from "react";
import { AppContext } from "@/context/appContext";

const ModalCreate = () => {
  const { setModal, registerEletro } = useContext(AppContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<eletroData>({
    mode: "onSubmit",
    resolver: zodResolver(eletroSchema),
  });

  const submit = (formData: eletroData) => {
    registerEletro(formData);
    setModal(false)
  };

  return (
    <div className="modal-wrapper z-50">
      <div className="modal-container">
        <div className="h-[40px] text-white-200 bg-blue flex justify-between items-center rounded-t px-4 mb-2">
          <h2 className="text-[16px]">Adicionar contato</h2>
          <button type="button" onClick={() => setModal(false)}>
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
          {errors.name && <p className="error">{errors.name.message}</p>}
          <Input
            id="image"
            label="Imagem"
            type="text"
            placeholder="Digite a url da imagem"
            colorText="text-gray-1"
            register={register("image")}
          />
          {errors.image && <p className="error">{errors.image.message}</p>}
          <Input
            id="description"
            label="Descrição"
            type="text"
            placeholder="Ex: Geladeira nova e sem nenhum detalhe."
            colorText="text-gray-1"
            register={register("description")}
          />
          {errors.description && (
            <p className="error">{errors.description.message}</p>
          )}
          <Input
            id="tension"
            label="Voltagem"
            type="text"
            placeholder="Ex: 220v ou 110v"
            colorText="text-gray-1"
            register={register("tension")}
          />
          {errors.tension && <p className="error">{errors.tension.message}</p>}
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
            {errors.brand && <p className="error">{errors.brand.message}</p>}
          </div>
          <Input
            id="price"
            label="Preço"
            type="number"
            placeholder="Ex: 2000"
            colorText="text-gray-1"
            register={register("price")}
          />
          {errors.price && <p className="error">{errors.price.message}</p>}
          <div className="mb-4">
            <button
              className="w-full cursor-pointer rounded-[0.25rem] button-grey-outline"
              type="submit"
            >
              Salvar Eletro
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalCreate;
