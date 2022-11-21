import React, { Component } from "react";

import { colourOptions } from "./data.js";
import { default as ReactSelect } from "react-select";
import "./styles.css";
import { components } from "react-select";

const Option = (props) => {
  return (
    <div className="project">
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          style={{ color: props.label }}
          onChange={() => null}
        />{" "}
        <label style={{ color: props.label }}>{props.label}</label>
      </components.Option>
    </div>
  );
};

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionSelected: null,
    };
  }

  handleChange = (selected) => {
    this.setState({
      optionSelected: selected,
    });
  };

  render() {
    return (
      <span
        class="d-inline-block"
        data-toggle="popover"
        data-trigger="focus"
        data-content="Please selecet account(s)"
      >
        <ReactSelect
          options={colourOptions}
          isMulti
          closeMenuOnSelect={true}
          hideSelectedOptions={false}
          components={{
            Option,
          }}
          onChange={this.handleChange}
          allowSelectAll={false}
          value={this.state.optionSelected}
        />
      </span>
    );
  }
}
