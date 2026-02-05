'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {

  const pathname = usePathname();

  return (
    // bg-gray-800
    <header className="w-full h-20 bg-amber-50 text-white flex items-center justify-center sm:justify-between pt-1 sm:px-20">

      <nav className="w-full max-w-7xl flex items-center justify-between">
        <Image src="/extendida.png" alt="Logo"
          width={280}
          height={190}
          // style={{ width: "auto", height: "auto" }}
          quality={100} priority={true} />

        <div className="hidden sm:flex items-center invisible sm:visible">

          <Link data-active={pathname === '/catalogo'} href="/catalogo" className={`
          relative text-2xl font-bold text-gray-800 hover:text-red-800     
          ${pathname === "/catalogo"
              ? " border-b-2 text-red-800 border-red-800"
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
              ? " border-b-2 text-red-800 border-red-800"
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
              ? " border-b-2 text-red-800 border-red-800"
              : ` 
          transition-colors
          after:content-[''] after:absolute after:left-1/2 after:bottom-0 
          after:w-0 after:h-[2px] after:bg-red-800 
          after:transition-all after:duration-300 
          hover:after:w-full hover:after:left-0 `} 
        `}>Sobre</Link>

        </div>
      </nav>
    </header>
  );
}