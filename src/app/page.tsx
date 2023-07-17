"use client"
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header/index";
import { AppContext } from "@/context/appContext";
import { useContext } from "react";

const mockData = [
	{
		id: "99aa360b-a77b-4f08-a462-bc4f61476552",
		name: "Geladeira",
		image: "https:\/\/consul.vtexassets.com\/arquivos\/ids\/231389-800-auto?v=638004093349600000&width=800&height=auto&aspect=true",
		description: "Geladeira nova com diversas cores para escolher.",
		tension: "220v",
		created_at: "2023-07-17T03:08:22.000000Z",
		updated_at: "2023-07-17T03:08:22.000000Z",
		brand: "LG",
		price: 2000
	},
	{
		id: "99aa406b-dd74-40ba-9932-c2b687f1f16b",
		name: "Geladeira",
		image: "https:\/\/consul.vtexassets.com\/arquivos\/ids\/231389-800-auto?v=638004093349600000&width=800&height=auto&aspect=true",
		description: "Geladeira nova com diversas cores para escolher.",
		tension: "220v",
		brand: "LG",
		price: 2000,
		created_at: "2023-07-17T03:37:23.000000Z",
		updated_at: "2023-07-17T03:37:23.000000Z"
	}
]

export default function Home() {
  const {eletros} = useContext(AppContext);

  return (
    <>
      <Header/>
      <Banner/>
      <main className="mb-20 px-6">
        <section className="mt-[40px]">
          <ul className="flex flex-row gap-10 overflow-auto h-[400px]">
            {mockData.map((elem) => (<Card key={elem.id} eletro={elem}/>))}
          </ul>
        </section>
      </main>
      <Footer/>
    </>
  )
}
