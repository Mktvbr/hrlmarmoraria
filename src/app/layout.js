import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HRL Mármores e Granitos | Móveis em Mármore Sob Medida na Bahia",
  description: "Empresa especializada em mármores e granitos  em Feira de Santana,Coração de Maria, Conceição do jacuípe e irará. oferecendo uma ampla variedade de produtos de alta qualidade para projetos residenciais e comerciais.",
  openGraph: {
    title: "HRL Mármores e Granitos | Móveis em Mármore Sob Medida na Bahia",
    description: "Empresa especializada em mármores e granitos  em Feira de Santana,Coração de Maria, Conceição do jacuípe e irará. oferecendo uma ampla variedade de produtos de alta qualidade para projetos residenciais e comerciais.",
    url: "https://hrl-marmores-e-granitos.vercel.app/",
    siteName: "HRL Mármores e Granitos",
    images: [ '/logomarmores.jpeg' ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-800`}
      >
        {children}
      </body>
    </html>
  );
}
