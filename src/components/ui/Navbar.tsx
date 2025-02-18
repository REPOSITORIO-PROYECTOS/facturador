/* eslint-disable */
export function Navbar({ handlePageChange, children }: any) {
    return (
      <nav className="bg-blue-500 text-white">
        <div className="container mx-auto flex gap-7 items-center p-4">
          <p className="text-2xl font-bold">
            Facturador
          </p>
          <button onClick={()=>handlePageChange('formulario')} className="">
            Formulario
          </button>
          <button onClick={()=>handlePageChange('historial')} className="">
            Comprobantes
          </button>
          {children}
        </div>
      </nav>
    );
  }