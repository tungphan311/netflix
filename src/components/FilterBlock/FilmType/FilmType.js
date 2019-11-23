import React, { Component } from "react";
import { FILMTYPES } from "../../../constants/FilmTypes";
import Select from "../../Select/Select";
import "./FilmType.scss";

class FilmType extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: { value: "Both", label: "Both" }
    };
  }

  render() {
    const filmtype = FILMTYPES.map(type => ({ value: type, label: type }));
    const { onChange, selectedOption } = this.props;
    return (
      <div className="p--20">
        <div className="filmtype__title">Type of film</div>
        <Select
          options={filmtype}
          selectedOption={selectedOption}
          onChange={type => onChange(type)}
          className="filmtype__select p__t--10"
          defaultValue={{ value: "Both", label: "Both" }}
        />
      </div>
    );
  }
}
export default FilmType;
