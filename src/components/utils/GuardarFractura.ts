import fs from "fs";

export const GuardarFactura = (form:any) => {
    let data = JSON.stringify(form);
    let file = fs.createWriteStream("./facturas.json");
    file.write(data);
    file.end();
  };