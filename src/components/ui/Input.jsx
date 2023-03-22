import React, { forwardRef, useRef } from 'react';
import cn from 'clsx';
import { mergeRefs } from 'react-merge-refs';

export const Input = forwardRef((props, ref) => {
  const { label, className, inputClassName, ...rest } = props
  const localRef = useRef(null);

  const rootClasses = cn(
    'flex flex-col gap-px',
    className
  )

  const inputClasses = cn(
    'p-3 border border-[#E3E0E0] bg-[#FAFAFA] text-semibold focus:outline-none rounded-lg w-full',
    inputClassName
  )

  return (
    <div className={rootClasses}>
      {label && <label className="text-sm font-light text-[#292D32]">
        {label}
      </label>}
      <input ref={mergeRefs([localRef, ref])} className={inputClasses} {...rest} />
    </div>
  )
})