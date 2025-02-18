import { readFile, writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req:any) {
  try {
    const data = await req.json();
    const filePath = path.join("/tmp", 'facturas.json');

    let facturas = [];

    // Leer el archivo actual si existe
    try {
      const fileData = await readFile(filePath, 'utf-8');
      facturas = JSON.parse(fileData);
    } catch (error) {
      console.log('No hay facturas previas, se creará el archivo.');
    }

    // Agregar la nueva factura a la lista
    facturas = [data, ...facturas];

    // Guardar el archivo con los datos actualizados
    await writeFile(filePath, JSON.stringify(facturas, null, 2));

    return new Response(JSON.stringify({ message: 'Factura guardada correctamente' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Error al guardar la factura' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
