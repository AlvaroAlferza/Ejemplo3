import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Misti | Cocina Peruana Contemporánea",
  description:
    "Casa Misti — cocina peruana contemporánea en el corazón de Arequipa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}