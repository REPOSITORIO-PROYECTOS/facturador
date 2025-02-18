export function Button({ children, className, onClick }: any) {
    return (
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  