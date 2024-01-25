import React, { useState } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

interface HidableFilterMenuOption {
  value: string;
  label: string;
}

interface Filters {
  filterTitle: string;
  filterValue: string;
}

interface HidableFilterMenuProps {
  title: string;
  filterOptions: HidableFilterMenuOption[];
  onSelect: (selectedValue: string, filterTitle: string) => void;
  selectedOptions: Filters[];
  inputType: 'radio' | 'checkbox';
}

const HidableFilterMenu: React.FC<HidableFilterMenuProps> = ({
  title,
  filterOptions,
  onSelect,
  selectedOptions,
  inputType,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-neutral-900 w-[340px] rounded-[14px]">
      <button
        className="bg-neutral-900 pb-3 px-5 pt-[15px] flex w-full items-center justify-between rounded-[14px]"
        onClick={toggleMenu}
      >
        <p className="text-white">{title}</p>
        {!isOpen ? (
          <MdKeyboardArrowDown color="#1967FF" />
        ) : (
          <MdKeyboardArrowUp color="#1967FF" />
        )}
      </button>
      {isOpen && (
        <div className="px-5 pb-[22px]">
          {filterOptions.map((option, index) => (
            <div className="grid grid-cols-[auto_1fr] gap-2" key={index}>
              <input
                type={inputType}
                id={option.label}
                name="orderType"
                value={option.value}
                required
                onChange={() => onSelect(option.value, title)}
                checked={selectedOptions.some(
                  (value) =>
                    value.filterTitle === title &&
                    value.filterValue === option.value
                )}
              />
              <label className="text-white">{option.label}</label>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HidableFilterMenu;
