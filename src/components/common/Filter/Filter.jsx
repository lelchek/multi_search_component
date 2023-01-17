import { useMemo } from "react";
import FilterButton from "./FilterButton";
import Dropdown from "../Dropdown";
import FilterOption from "./FilterOption";

const Filter = ({
  title,
  options,
  selectedOptions,
  setFilter,
  showDropdown,
  onClick,
}) => {
  const allOptionsLabel = useMemo(() => {
    return `Any ${title.toLowerCase()}`;
  }, [title]);

  // const [showDropdown, toggleShowDropdown] = useState(false);

  // const handleButtonClick = () => {
  //   // toggleShowDropdown((state) => !state);
  // };

  const handleCheckboxClick = (e, id) => {
    if (e.target.checked) {
      setFilter([...selectedOptions, id]);
    } else {
      const newSelectedOptions = selectedOptions.filter((item) => item !== id);
      setFilter(newSelectedOptions);
    }
  };

  const handleAllCheckboxClick = (e) => {
    if (e.target.checked) {
      const newSelectedOptions = options.map((item) => item.id);
      setFilter(newSelectedOptions);
    } else {
      setFilter([]);
    }
  };

  return (
    <div>
      <FilterButton isActive={showDropdown} onClick={onClick} title={title} />

      {showDropdown && (
        <Dropdown>
          <FilterOption
            id={allOptionsLabel}
            label={allOptionsLabel}
            checked={selectedOptions.length === options.length}
            onChange={handleAllCheckboxClick}
          />

          {options.map((item) => (
            <FilterOption
              key={item.id}
              id={item.id}
              label={item.label}
              onChange={handleCheckboxClick}
              checked={selectedOptions.includes(item.id)}
            />
          ))}
        </Dropdown>
      )}
    </div>
  );
};

export default Filter;
