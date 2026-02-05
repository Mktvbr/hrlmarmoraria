'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { VscThreeBars } from "react-icons/vsc";


export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    // bg-gray-800
    <header className="w-full h-20 bg-amber-50 text-white flex items-center justify-center sm:justify-between pt-1 sm:px-20">

      <nav className="w-full max-w-7xl flex items-center justify-between ">
        <Image src="/extendida.png" alt="Logo"
          width={280}
          height={190}
          // style={{ width: "auto", height: "auto" }}
          quality={100} priority={true} />

        <div className={isOpen ? "sm:hidden absolute top-20 left-0 w-full bg-amber-50 z-10 flex flex-col items-center py-4" : "hidden sm:flex items-center invisible sm:visible"}>
        <div className={isOpen ? "flex flex-col items-center gap-4" : "flex items-center"}>

          <Link data-active={pathname === '/catalogo'} href="/catalogo" className={`
          relative ml-10 sm:0 text-2xl font-bold text-gray-800 hover:text-red-800     
          ${pathname === "/catalogo"
              ? "h-8 border-b-2 text-red-800 border-red-800"
              : ` 
          transition-colors
          after:content-[''] after:absolute after:left-1/2 after:bottom-0 
          after:w-0 after:h-[2px] after:bg-red-800 
          after:transition-all after:duration-300 
          hover:after:w-full hover:after:left-0 `} 
        `}>Catálogo</Link>

          <Link data-active={pathname === '/contato'} href="/contato" className={`          
          relative ml-10 text-2xl font-bold text-gray-800 hover:text-red-800 
          ${pathname === "/contato"
              ? "h-8 border-b-2 text-red-800 border-red-800"
              : ` 
          transition-colors
          after:content-[''] after:absolute after:left-1/2 after:bottom-0 
          after:w-0 after:h-[2px] after:bg-red-800 
          after:transition-all after:duration-300 
          hover:after:w-full hover:after:left-0 `} 
        `}>
            Contato
          </Link>

          <Link data-active={pathname === '/sobre'} href="/sobre" className={`          
          relative ml-10 text-2xl font-bold text-gray-800 hover:text-red-800 
          ${pathname === "/sobre"
              ? " h-8 border-b-2 text-red-800 border-red-800"
              : ` 
          transition-colors
          after:content-[''] after:absolute after:left-1/2 after:bottom-0 
          after:w-0 after:h-[2px] after:bg-red-800 
          after:transition-all after:duration-300 
          hover:after:w-full hover:after:left-0 `} 
        `}>Sobre</Link>
        </div>
        </div>


      </nav>
      <button className="sm:hidden text-3xl text-gray-800 m-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <VscThreeBars />
      </button>
    </header>
  );
}