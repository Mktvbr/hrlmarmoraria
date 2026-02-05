import Image from "next/image";
import Header from "./components/header";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen pt-0 gap-16">
      <Header className="z-30" />
      <main className="flex-grow flex max-w-7xl items-center justify-center" >


        <div className="flex flex-col items-center ">

          <h1 className="text-6xl text-white mt-20 text-outline-soft leading-tight text-center"
          >A Marmoraria Mais Conhecida da Região
          </h1>
          <div className="mt-10 flex flex-row items-center justify-center gap-6 ">
            <h2 className="mt-2 px-6 py-2 text-2xl font-medium tracking-wider
              text-white bg-red-500/40 backdrop-blur-sm rounded-full">Coração de Maria</h2>
            <h2 className="mt-2 px-6 py-2 text-2xl font-medium tracking-wider
              text-white bg-red-500/40 backdrop-blur-sm rounded-full">Conceição do Jacuípe</h2>
            <h2 className="mt-2 px-6 py-2 text-2xl font-medium tracking-wider
              text-white bg-red-500/40 backdrop-blur-sm rounded-full">Irará</h2>
          </div>
        </div>

        <Image
          src="/bg1.jpg"
          alt="Background Image"
          fill
          priority
          className="object-cover -z-10 opacity-30"
        />
      </main>

    </div>
  );
}
