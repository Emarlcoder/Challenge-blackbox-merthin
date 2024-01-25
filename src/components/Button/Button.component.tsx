import React from 'react';
import { BsList } from 'react-icons/bs';

interface ButtonProps {
  onClick: () => void;
  label: string;
  variant: 'primary' | 'secondary';
  icon: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, variant, icon }) => {
  return (
    <button
      className={`${
        variant === 'primary'
          ? 'bg-[#16142B] border-[1px] border-neutral-700'
          : 'bg-primary-600'
      } w-[98px] h-[37px] rounded-[8px]`}
      onClick={onClick}
    >
      <p
        className={`${
          variant === 'primary' ? 'text-primary-600' : 'text-white'
        } w-full flex items-center justify-center gap-x-[7px]`}
      >
        {icon ? icon : <BsList />} {label}
      </p>
    </button>
  );
};

export default Button;
