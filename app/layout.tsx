import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tanguy DAVID - Porftolio",
  description: "Portfolio de Tanguy David",
  icons: {
    icon: "/icones/logo.png", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
