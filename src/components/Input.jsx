import { mergeRefs } from "react-merge-refs";
import cn from "clsx";
import { forwardRef, useRef } from "react";

const Input = forwardRef((props, ref) => {
  const { name, label, error, className, inputClassName, ...rest } = props;
  const localRef = useRef();

  const inputClasses = cn(
    "p-3 border border-[#E3E0E0] bg-[#FAFAFA] text-semibold focus:outline-none rounded-lg w-full",
    inputClassName
  );

  return (
    <div className={className}>
      <label className="block text-sm font-light text-gray-700 mb-3">
        {label}
      </label>
      <input className={inputClasses} {...rest} ref={mergeRefs([ref, localRef])} />
    </div>
  );
})

export default Input;
