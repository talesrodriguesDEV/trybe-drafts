import React, { Component } from 'react';

class Idade extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value <= 0 || value > 122) error = 'Insira uma idade válida';

    return (
      <label>
        Idade:
        <input
          type="number"
          name="idade"
          value={value}
          onChange={handleChange}
        />
        <span>{ error ? error : ''}</span>
      </label>
    )
  }
}

export default Idade;