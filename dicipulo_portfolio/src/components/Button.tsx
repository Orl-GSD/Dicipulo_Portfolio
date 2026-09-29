import React, { ReactNode } from 'react';

// Define the types for the component's props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'iconOnly';
  href?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  target?: string; // Included for when it renders as an <a> tag
}

const Button = ({
  children,
  variant = 'primary',
  href,
  leftIcon,
  rightIcon,
  disabled = false,
  className = '',
  ...props
}: ButtonProps) => {
  // Base styles applied to all variations
  const baseStyles = 'inline-flex items-center justify-center font-albert text-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  // Styles for different variations
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-mainwhite font-bold text-mainblue hover:bg-blue-100 focus:ring-gray-900',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-100 focus:ring-blue-500',
    iconOnly: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 rounded-full',
  };

  // Adjust padding/rounding based on whether it's text or icon-only
  const layoutStyles = variant === 'iconOnly' ? 'p-2 aspect-square' : 'px-4 py-2 rounded-md';

  // Disabled styles (Overrides hover and adds opacity/cursor changes)
  const disabledStyles = disabled
    ? 'disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:border-none opacity-70 pointer-events-none'
    : '';

  // Combine all Tailwind classes
  const combinedClassName = `${baseStyles} ${variants[variant]} ${layoutStyles} ${disabledStyles} ${className}`;

  // Inner content structure
  const content = (
    <>
      {leftIcon && <span className="shrink-0 flex items-center justify-center">{leftIcon}</span>}
      {variant !== 'iconOnly' && children && <span>{children}</span>}
      {rightIcon && <span className="shrink-0 flex items-center justify-center">{rightIcon}</span>}
    </>
  );

  // If href is provided (and it's not disabled), render an anchor tag
  if (href && !disabled) {
    return (
      <a href={href} className={combinedClassName} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  // Otherwise, render a standard button
  return (
    <button disabled={disabled} className={combinedClassName} {...props}>
      {content}
    </button>
  );
};

export default Button;