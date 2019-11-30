import React, { Component } from "react";
import { FILMTYPES } from "../../../constants/FilmTypes";
import Select from "../../Select/Select";

class FilmType extends Component {
  render() {
    const filmtype = FILMTYPES.map(type => ({ value: type, label: type }));
    const { onChange, selectedOption } = this.props;
    return (
      <div className="p--20">
        <div className="font__size--small">Type of film</div>
        <Select
          options={filmtype}
          selectedOption={selectedOption}
          onChange={type => onChange(type)}
          className="p__t--10"
          defaultValue={{ value: "Both", label: "Both" }}
        />
      </div>
    );
  }
}
export default FilmType;
