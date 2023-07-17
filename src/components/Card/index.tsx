import Image from "next/image";
import imagemCapa from "../../assets/imagemCapa.jpg"
import { IEletros } from "@/context/appContext";


const Card = (eletro: any) => {
    return (
      <>
        <li className="w-[295px] h-[300px]">
          <figure className="bg-gray-7 h-[9.5rem] mb-4 flex justify-center items-center">
            <img src={eletro.image} alt="car" width={250} height={250} />
          </figure>
          <h2 className=" whitespace-nowrap font-lex font-semibold mb-4 text-ellipsis overflow-hidden ">
            {eletro.name}
          </h2>
          <p className="font-inter font-normal text-xs text-gray-2">
            {eletro.description}
          </p>
  
          <div className="flex justify-between items-center mt-4">
            <div className="flex gap-2">
              <span className="w-[2.875rem] h-[1.875rem] flex justify-center items-center bg-brand-3 rounded font-inter font-medium text-brand-1 text-sm">{eletro.brand}</span>
              <span className="w-[2.875rem] h-[1.875rem] flex justify-center items-center bg-brand-3 rounded font-inter font-medium text-brand-1 text-sm">{eletro.tension}</span>
            </div>
            <span className="whitespace-nowrap text-ellipsis overflow-hidden">{eletro.price}</span>
          </div>
        </li>
      </>
    );
  };
  
  export default Card;