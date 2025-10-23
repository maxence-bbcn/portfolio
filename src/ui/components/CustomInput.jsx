export default function CustomInput({ fieldName, placeholder, ...props }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={fieldName}>{fieldName} *</label>
      <input
        {...props}
        type="text"
        required
        id={fieldName}
        name={fieldName}
        placeholder={placeholder}
        className="border rounded-lg p-6 bg-primary-bg border-primary-500/50"
      />
    </div>
  );
}
