import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "AuthApp",
  description: "Auth App for do auth with mobile apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
