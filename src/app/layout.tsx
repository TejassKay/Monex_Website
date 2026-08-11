import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monex | Official Catalogue - Stone Care Chemicals & Power Tools",
  description: "Official Monex product catalogue for premium stone care chemicals, heavy-duty power tools, and precision diamond cutting accessories.",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-slate-900 text-slate-100 antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
