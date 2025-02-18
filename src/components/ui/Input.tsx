export function Input({ placeholder, name, value, onChange, type = "text" }: any) {
    return (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border rounded-lg p-2 w-full"
      />
    );
  }
  