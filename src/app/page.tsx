"use client"
import Banner from "@/components/Banner";
import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header/index";
import { AppContext } from "@/context/appContext";
import { useContext } from "react";

export default function Home() {
  const {eletros} = useContext(AppContext);
  return (
    <>
      <Header/>
      <Banner/>
      <main className="mb-40">
        <section>
          <ul>
            {eletros?.map((elem) => (<li key={elem.id}>{elem.name}</li>)) }
          </ul>
        </section>
      </main>
      <Footer/>
    </>
  )
}
