import { forwardRef } from "react";

const CustomInput = forwardRef(
  ({ fieldName, placeholder, ...inputProps }, ref) => {
    return (
      <div className="flex w-full flex-col gap-1">
        <label htmlFor={inputProps.name}>{fieldName} *</label>
        <input
          ref={ref}
          id={inputProps.name}
          placeholder={placeholder}
          className="bg-primary-bg border-primary-500/50 rounded-lg border p-6"
          {...inputProps}
        />
      </div>
    );
  },
);

CustomInput.displayName = "CustomInput";
export default CustomInput;
