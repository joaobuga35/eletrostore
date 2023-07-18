import { AppContext, IEletros } from "@/context/appContext";
import { useContext } from "react";

const Card = (eletro: any) => {
  const { setModalEdit, setFilterEletros, eletros } = useContext(AppContext);

  const filterAll = (id: string) => {
    const oneEletro = eletros.filter((elem) => elem.id === id);
    setFilterEletros(oneEletro);
  };
  return (
    <>
      <li onClick={() =>{
          filterAll(eletro.eletro.id);
          setModalEdit(true);
        }} className="w-auto h-auto md:mb-5 border-2 border-white hover:border-solid hover:border-brand-1 hover:border-2 cursor-pointer ">
        <figure className="bg-gray-7 mb-4 flex justify-center items-center w-[295px] h-[200px]">
          <img
            className="w-[200px] h-[200px]"
            src={eletro.eletro.image}
            alt="car"
          />
        </figure>
        <h2 className=" whitespace-nowrap font-lex font-semibold mb-4 text-ellipsis overflow-hidden ">
          {eletro.eletro.name}
        </h2>
        <p className="font-inter font-normal text-xs text-gray-2">
          {eletro.eletro.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2">
            <span className="w-auto px-2 h-[1.875rem] flex justify-center items-center bg-brand-3 rounded font-inter font-medium text-brand-1 text-sm">
              {eletro.eletro.brand}
            </span>
            <span className="w-[2.875rem] h-[1.875rem] flex justify-center items-center bg-brand-3 rounded font-inter font-medium text-brand-1 text-sm">
              {eletro.eletro.tension}
            </span>
          </div>
          <span className="whitespace-nowrap text-ellipsis overflow-hidden">
            R$ {eletro.eletro.price}
          </span>
        </div>
      </li>
    </>
  );
};

export default Card;
