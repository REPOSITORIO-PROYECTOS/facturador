/* eslint-disable */
'use client'

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { GuardarFactura } from "../utils/GuardarFractura";

export default function Formulario() {
  const [form, setForm] = useState({
    cuit: "",
    puntoVenta: "",
    tipoComprobante: "",
    clienteCuit: "",
    detalle: [{ descripcion: "", cantidad: 1, precio: 0 }],
  });

  const handleChange = (e:any, index:any = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      const newDetalle:any = [...form.detalle];
      newDetalle[index][name] = value;
      setForm({ ...form, detalle: newDetalle });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const agregarItem = () => {
    setForm({
      ...form,
      detalle: [...form.detalle, { descripcion: "", cantidad: 1, precio: 0 }],
    });
  };

  const handleSave = async() => {
    const response = await fetch('/api/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
  
    const result = await response.json();
    alert(result.message);
  };

  return (
      <Card className="p-4 max-w-2xl mx-auto">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">Factura AFIP</h2>
          <div className="grid gap-2">
            <Input
              placeholder="CUIT Responsable Inscripto"
              name="cuit"
              value={form.cuit}
              onChange={(e:any)=>handleChange(e)}
            />
            <Input
              placeholder="Punto de Venta"
              name="puntoVenta"
              value={form.puntoVenta}
              onChange={handleChange}
            />
            <Input
              placeholder="Tipo de Comprobante"
              name="tipoComprobante"
              value={form.tipoComprobante}
              onChange={handleChange}
            />
            <Input
              placeholder="CUIT Cliente"
              name="clienteCuit"
              value={form.clienteCuit}
              onChange={handleChange}
            />
          </div>
          <h3 className="mt-4 font-semibold">Detalle</h3>
          {form.detalle.map((item, index) => (
            <div key={index} className="grid grid-cols-3 gap-2 mt-2">
              <Input
                placeholder="Descripción"
                name="descripcion"
                value={item.descripcion}
                onChange={(e:any) => handleChange(e, index)}
              />
              <Input
                placeholder="Cantidad"
                name="cantidad"
                type="number"
                value={item.cantidad}
                onChange={(e:any) => handleChange(e, index)}
              />
              <Input
                placeholder="Precio"
                name="precio"
                type="number"
                value={item.precio}
                onChange={(e:any) => handleChange(e, index)}
              />
            </div>
          ))}
          <Button className="mt-2" onClick={agregarItem}>Agregar Ítem</Button>
          <Button className="mt-4 w-full" onClick={()=>handleSave()}>Generar Factura</Button>
        </CardContent>
      </Card>
  );
}
