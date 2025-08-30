import React from "react";
import Select from "react-select";

const CategoryMultiSelect = ({ categories, selected, onChange }) => {
  const options = categories.map(cat => ({ value: cat._id, label: cat.name }));
  const value = options.filter(opt => selected.includes(opt.value));
  return (
    <Select
      isMulti
      options={options}
      value={value}
      onChange={opts => onChange(opts ? opts.map(o => o.value) : [])}
      className="react-select-container"
      classNamePrefix="react-select"
      placeholder="Select categories..."
      closeMenuOnSelect={false}
      styles={{ menu: base => ({ ...base, zIndex: 9999 }) }}
    />
  );
};

export default CategoryMultiSelect;