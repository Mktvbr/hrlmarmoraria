import Image from "next/image";
import Header from "./components/header";
import Carousel from "./components/carousel";


export default function Home() {
  return (
    <div className="font-sans min-h-screen pt-0 gap-16">
      <Header className="z-30" />
      <main className=" w-full max-w-7xl mx-auto" >

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
            <div className="mt-10 flex flex-row items-center justify-center gap-6 ">
              <h2 className="mt-2 px-6 py-2 max-[45rem]:text-base text-2xl font-medium tracking-wider
              text-white bg-red-500/40 backdrop-blur-sm rounded-full">Coração de Maria</h2>
              <h2 className="mt-2 px-6 py-2 max-[45rem]:text-base text-2xl font-medium tracking-wider
              text-white bg-red-500/40 backdrop-blur-sm rounded-full">Conceição do Jacuípe</h2>
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

        <section className="relative pt-18 pb-28 min-h-[100vh] flex items-center justify-center">
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
        <section className="relative pt-18 pb-28 min-h-[100vh] ">
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

      </main>

    </div>
  );
}
