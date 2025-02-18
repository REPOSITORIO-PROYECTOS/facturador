"use client";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import Formulario from "@/components/interfaces/Formulario";
import HistorialComprobantes from "@/components/interfaces/HistorialComprobantes";
import { useState } from "react";


export default function FacturaForm() {
  const [selectedPage, setSelectedPage] = useState("formulario");
  const handlePageChange = (page:string) => {
    setSelectedPage(page);
  };
  return (
    <div className="flex flex-col gap-5">
      <Navbar handlePageChange={handlePageChange} />
      {
        selectedPage === 'formulario' ? <Formulario /> : <HistorialComprobantes />
      }
      <Footer/>
    </div>
  );
}
