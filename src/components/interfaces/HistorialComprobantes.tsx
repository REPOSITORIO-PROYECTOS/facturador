import { useEffect, useState } from "react";

export default function HistorialComprobantes() {
 const [facturas, setFacturas] = useState([]);

  const getComprobantes = async() => {
    const response = await fetch('/api/getComprobantes');
    const result = await response.json();
    setFacturas(result);
  };

  useEffect(() => {
    getComprobantes();
  }, []);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Historial de Comprobantes</h2>
      {facturas.length > 0 ? (
        <ul className="space-y-2">
          {facturas.map((factura:any, index:any) => (
            <li key={index} className="border p-2 rounded-lg shadow-sm">
              <p><strong>CUIT Cliente:</strong> {factura.clienteCuit}</p>
              <p><strong>Tipo de Comprobante:</strong> {factura.tipoComprobante}</p>
              <p><strong>Punto de Venta:</strong> {factura.puntoVenta}</p>
              <p><strong>Detalle:</strong></p>
              <ul className="ml-4 list-disc">
                {factura.detalle.map((item:any, i:any) => (
                  <li key={i}>{item.descripcion} - {item.cantidad} x ${item.precio}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay comprobantes registrados.</p>
      )}
    </div>
  );
}
