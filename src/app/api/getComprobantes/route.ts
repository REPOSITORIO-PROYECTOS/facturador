import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const filePath = path.join("/tmp", 'facturas.json');

  let facturas = [];

  try {
    const fileData = await readFile(filePath, 'utf-8');
    facturas = JSON.parse(fileData);
    return new Response(JSON.stringify(facturas), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error al leer el archivo:', error);
  }
}
