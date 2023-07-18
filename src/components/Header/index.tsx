"use client"
import { AppContext } from "@/context/appContext";
import { fontInter } from "../../app/styles/fonts";
import { useContext } from "react";

const Header = () => {
  const { setModal } = useContext(AppContext);
  return (
    <header
      className={`${fontInter.className} w-full px-4 py-5 bg-gray-10 border-2 border-gray-6 sticky md:py-0 top-0 left-0 z-40`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-0 to-brand-1 hover:text-brand-2 select-none transition-colors">
          Eletros<span className="text-base">shop</span>
        </h1>
        <nav className="w-full py-8 flex flex-col gap-11 md:w-max md:py-3 md:pl-11 md:border-l-2 md:border-gray-6 md:flex-row md:items-center">
          <button className="font-semibold text-base text-gray-2 cursor-pointer" onClick={() => setModal(true)}>
            Criar eletro
          </button>
          <button className="w-full cursor-pointer md:w-max button-grey-outline h-max rounded-[0.25rem] font-semibold null transition-colors button-big">
            Editar eletro
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
