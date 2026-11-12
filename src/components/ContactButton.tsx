import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  href,
  className = '',
  label = 'Contact Me',
}) => {
  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2 whitespace-nowrap">
      {label}
    </span>
  );

  const buttonClasses = `contact-btn-glow inline-flex items-center justify-center rounded-full text-white font-medium uppercase tracking-widest cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-all select-none ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
};
