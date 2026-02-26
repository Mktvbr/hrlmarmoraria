import Image from "next/image";
import Header from "./components/header";
import Carousel from "./components/carousel";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import Link from "next/link";


export default function Home() {
  return (
    <div className="font-sans min-h-screen pt-0 gap-16">
      <Header className="z-30" />
      <main className=" w-full max-w-7xl mx-auto" >

        <a
          href=" https://wa.me/557582500131"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 mb-0 pb-0 right-6 z-40"
        >
          <Image
            src="/icone.png"
            alt="Fale conosco pelo WhatsApp"
            width={220}
            height={80}
            className="drop-shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </a>

        <section className="relative flex-grow flex mt-0 pt-0 min-h-screen items-center justify-center">
          <div className="flex flex-col items-center ">

            <h1 className="text-4xl text-white  backdrop-blur-sm tracking-wide px-6 mb-1 rounded-full drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)]text-outline-soft leading-tight text-center"
            >O seu móvel em <span className="text-red-500">MÁRMORE</span>
            </h1>
            <h1 className="text-4xl text-white backdrop-blur-sm tracking-wide px-6 mb-4 rounded-full text-outline-soft leading-tight text-center"
            >do jeito que você sempre sonhou
            </h1>

            <h2 className="mt-20">
              <span className="text-2xl font-medium tracking-wider
              text-white backdrop-blur-sm rounded-full px-6 py-2 mt-4">Transformando lares em:</span>
            </h2>
            <div className="mt-10 flex flex-row max-[45rem]:flex-col items-center justify-center gap-6 ">
              <h2 className="mt-2 px-6 py-2 max-[45rem]:text-base text-2xl font-medium tracking-wider
              text-white bg-red-500/40 backdrop-blur-sm rounded-full">Coração de Maria</h2>
              <h2 className="mt-2 px-6 py-2 max-[45rem]:text-base text-2xl font-medium tracking-wider
              text-white bg-red-500/40 backdrop-blur-sm rounded-full">Conceição do Jacuípe</h2>
              <h2 className="mt-2 px-6 py-2 max-[45rem]:text-base text-2xl font-medium tracking-wider
              text-white bg-red-500/40 backdrop-blur-sm rounded-full">Feira de Santana</h2>
              <h2 className="mt-2 px-6 py-2 max-[45rem]:text-base text-2xl font-medium tracking-wider
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

        </section>

        <section id='sobre' className="relative pt-18 pb-28 min-h-[100vh] flex items-center justify-center">
          <Image
            src="/marmorebrancabg.png"
            alt="Logo Image"
            fill
            className=" absolute object-cover -z-10 opacity-30 pointer-events-none"
          />
          <div className="flex flex-row max-[75rem]:flex-col  gap-20 max-w-7xl px-8">
            <div className="flex flex-col elementor-widget-container 
            backdrop-blur-sm tracking-wide px-2 py-4 rounded-lg text-outline-soft
            leading-relaxed text-left max-w-xl gap-6">
              <p className="text-lg text-white">
                Há mais de cinco anos, a HRL Mármores e Granitos transforma ambientes
                em verdadeiras expressões de personalidade, elegância e permanência.
                Reconhecida e premiada quatro vezes como a melhor marmoraria da região,
                nossa trajetória é marcada pela busca constante pela excelência e pelo
                compromisso inegociável com a qualidade.
              </p>
              <p className="text-lg text-white">
                Cada projeto nasce de um propósito: criar espaços que encantam, acolhem
                e valorizam. Trabalhamos com mármores e granitos cuidadosamente selecionados,
                unindo sofisticação estética, resistência e acabamento impecável para transformar
                ambientes em verdadeiras identidade de luxo. Mais do que peças sob medida,
                desenvolvemos elegância.
              </p>
            </div>
            <Image
              src="/premiacao.jpg"
              alt="Premiação"
              width={600}
              height={400}
              className=" w-full h-auto rounded-lg shadow-lg  object-cover"
            />
          </div>
        </section>
        <section id='servicos' className="relative pt-18 pb-28 min-h-[50vh]  ">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-5xl text-white mb-12 text-center">
              Nossos Trabalhos
            </h2>

            <Carousel />
          </div>
          <Image
            src="/verde.jpg"
            alt="Background Image"
            fill
            className=" absolute object-cover -z-10 opacity-30 pointer-events-none"
          />
        </section>
        <section id="contato" className="relative pt-18 bg-amber-50 pb-15 min-h-[50vh] flex items-center justify-center z-50">
          <div className="flex flex-col items-center gap-6">
            <h2 className="text-4xl text-gray-800 mb-4">Entre em Contato</h2>
            <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">
              Para orçamentos, dúvidas ou consultas, estamos à disposição para ajudar.
              Entre em contato conosco e transforme seu projeto em realidade.
            </p>
            <div className="flex flex-row items-center gap-4">
              <Link
                href="https://wa.me/557582500131"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
              >
                <BsWhatsapp size={24} />
                Fale Conosco pelo WhatsApp
              </Link>
              <Link
                href="https://www.instagram.com/hrl_marmores_e_granitos/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
              >
                <BsInstagram size={24} />
                Siga-nos no Instagram
              </Link>

            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500 mt-10">
              <span>Produzido por</span>
              <Link
                href="https://www.instagram.com/sharkwebbrasil/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-700 hover:text-indigo-900 
                transition-colors duration-300 font-semibold
                "
              >
                SharkWeb
              </Link>
            </div>
          </div>

        </section>

      </main>

    </div>
  );
}
