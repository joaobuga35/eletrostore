"use client";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header/index";
import ModalCreate from "@/components/Modal";
import ModalEditDelete from "@/components/ModalEditAndDelete";
import { AppContext } from "@/context/appContext";
import { useContext, useState } from "react";

export default function Home() {
  const { eletros, modal, modalEdit } = useContext(AppContext);
  return (
    <>
      {modal && <ModalCreate />}
      {modalEdit && <ModalEditDelete />}
      <Header />
      <Banner />
      <main className="mb-20 px-6">
        <section className="mt-[40px] flex justify-center items-center">
          {eletros.length === 0 ? (
            <div className="h-[250px] w-[250px] bg-gray-4 flex gap-3 flex-col justify-center items-center px-4 md:h-[200px] md:w-[600px]">
				Você ainda não possui Eletros cadastrados!
				<p>Após criar é só clicar no card para deletar ou editar</p>
			</div>
          ) : (
            <ul className="flex flex-row gap-10 overflow-auto h-[400px] md:flex-wrap md:overflow-hidden md:h-auto">
              {eletros.map((elem) => (
                <Card key={elem.id} eletro={elem} />
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
