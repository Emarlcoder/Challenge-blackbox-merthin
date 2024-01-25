import { useState } from 'react';
import { MdFilterList, MdOutlineRestartAlt } from 'react-icons/md';
import Button from '../components/Button/Button.component';
import SelectedFilterCard from '../components/SelectedFilterCard/SelectedFilterCard.component';
import HidableFilterMenu from '../components/HidableFilterMenu/HidableFilterMenu.component';
import { filters } from './hidable-filter-menu-config.json';

interface Filters {
  filterTitle: string;
  filterValue: string;
}

export const FiltersLayout = () => {
  const filtersInitialState = [] as Filters[];
  const [selectedValues, setSelectedValues] =
    useState<Filters[]>(filtersInitialState);
  const [openFilters, setOpenFilters] = useState(false);

  const onSelect = (selectedValue: string, filterTitle: string) => {
    setSelectedValues((prevSelectedValues) => [
      ...prevSelectedValues,
      { filterTitle: filterTitle, filterValue: selectedValue },
    ]);
  };

  const onDelete = (title: string) => {
    setSelectedValues((prevSelectedValues) =>
      prevSelectedValues.filter(
        (selectedValue) => selectedValue.filterTitle !== title
      )
    );
  };

  const toggleFilters = () => {
    setOpenFilters(!openFilters);
  };

  const onReset = () => {
    setSelectedValues(filtersInitialState);
  };

  return (
    <div className="bg-[#16142B] w-full h-full pl-[18px]">
      <div className="flex pt-[11px] pb-[14px] gap-2.5">
        <Button
          icon={<MdFilterList />}
          label="Filter"
          onClick={toggleFilters}
          variant={openFilters ? 'primary' : 'secondary'}
        />
        {selectedValues?.map((selectedValue) => (
          <SelectedFilterCard
            filterTitle={selectedValue.filterTitle}
            filterSelection={selectedValue.filterValue}
            onClick={onDelete}
          />
        ))}
      </div>
      {openFilters && (
        <div className="w-[383px] px-5 pb-5 pt-7 grid bg-neutral-800 gap-[11px] rounded-[14px]">
          <div className="flex justify-between w-full items-center">
            <p className="text-white text-lg">Filter data by</p>
            <button
              className="text-primary-500 text-sm flex items-center gap-1"
              onClick={onReset}
            >
              <MdOutlineRestartAlt />
              Reset
            </button>
          </div>
          {filters.map((filter, index) => (
            <HidableFilterMenu
              key={index}
              onSelect={onSelect}
              selectedOptions={selectedValues}
              filterOptions={filter.filterOptions}
              inputType={filter.inputType === 'checkbox' ? 'checkbox' : 'radio'}
              title={filter.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};
