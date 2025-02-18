export function Footer({ children }: any) {
    return (
      <nav className="bg-blue-500 text-white text-center">
        <div className="container mx-auto flex justify-between items-center p-4">
          <p className="text-2xl font-bold w-fit">
            Version de prueba
          </p>
          {children}
        </div>
      </nav>
    );
  }