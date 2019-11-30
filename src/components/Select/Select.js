import React, { Component } from "react";
import ReactSelect from "react-select";
import "./Select.scss";

class Select extends Component {
  render() {
    const {
      selectedOption,
      options,
      onChange,
      placeholder,
      className,
      disabled,
      onFocus,
      onBlur,
      name,
      defaultValue
    } = this.props;

    return (
      <div className={`md__dropdown ${className}`}>
        <ReactSelect
          name={name}
          options={options}
          // hideSelectedOptions
          classNamePrefix="md__select"
          defaultValue={defaultValue}
          value={selectedOption}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          isDisabled={disabled}
        />
      </div>
    );
  }
}

export default Select;
