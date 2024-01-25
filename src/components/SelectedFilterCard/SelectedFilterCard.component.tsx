import React from 'react';
import { MdClose } from 'react-icons/md';

interface SelectedFilterCardProps {
  filterTitle: string;
  filterSelection: string;
  onClick: (filterTitle: string) => void;
}

const SelectedFilterCard: React.FC<SelectedFilterCardProps> = ({
  filterTitle,
  filterSelection,
  onClick,
}) => {
  return (
    <button
      className="bg-neutral-700 h-[37px] flex items-center justify-between text-sm gap-1 pl-[11px] pr-[19px] rounded-[8px] text-white"
      onClick={() => onClick(filterTitle)}
    >
      <MdClose />{' '}
      <p>
        {filterTitle}: {filterSelection}
      </p>
    </button>
  );
};

export default SelectedFilterCard;
