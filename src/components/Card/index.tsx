import Image from "next/image";
import imagemCapa from "../../assets/imagemCapa.jpg"
import { IEletros } from "@/context/appContext";


const Card = (eletro: any) => {
    return (
      <>
        <li className="w-[295px] h-[300px] md:mb-5 ">
          <figure className="bg-gray-7 mb-4 flex justify-center items-center w-[295px] h-[200px]">
            <img className="w-[200px] h-[200px]" src={eletro.eletro.image} alt="car"/>
          </figure>
          <h2 className=" whitespace-nowrap font-lex font-semibold mb-4 text-ellipsis overflow-hidden ">
            {eletro.eletro.name}
          </h2>
          <p className="font-inter font-normal text-xs text-gray-2">
            {eletro.eletro.description}
          </p>
  
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2">
              <span className="w-auto px-2 h-[1.875rem] flex justify-center items-center bg-brand-3 rounded font-inter font-medium text-brand-1 text-sm">{eletro.eletro.brand}</span>
              <span className="w-[2.875rem] h-[1.875rem] flex justify-center items-center bg-brand-3 rounded font-inter font-medium text-brand-1 text-sm">{eletro.eletro.tension}</span>
            </div>
            <span className="whitespace-nowrap text-ellipsis overflow-hidden">R$ {eletro.eletro.price}</span>
          </div>
        </li>
      </>
    );
  };
  
  export default Card;