export function Card({ children, className }: any) {
    return (
      <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }: any) {
    return <div className="p-4">{children}</div>;
  }
  