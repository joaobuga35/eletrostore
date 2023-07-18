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
	  {modalEdit && <ModalEditDelete/>}
      <Header />
      <Banner />
      <main className="mb-20 px-6">
        <section className="mt-[40px]">
          <ul className="flex flex-row gap-10 overflow-auto h-[400px] md:flex-wrap md:overflow-hidden md:h-auto">
            {eletros.map((elem) => (
              <Card key={elem.id} eletro={elem} />
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
