import React, { Component } from "react";

const name = 'Talão';
const description = 'Estou tentando constantemente lançar a brabinha. Até que tem dado certo.';

class About extends Component {
  render() {
    return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
    );
  }
}

export default About;