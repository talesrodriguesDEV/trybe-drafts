import React, { Component } from 'react'
import './Form.css'
import Idade from './Idade';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Arquivo selecionado: ${this.fileInput.current.files[0].name}`
    );
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =) <br />
              <textarea 
                name="estadoFavorito"
                value={this.state.estadoFavorito}
                onChange={this.handleChange} />
          </label>
          <Idade value={this.state.idade} handleChange={this.handleChange} />
          <label>
            Vai comparecer?
            <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer}
              onChange={this.handleChange}
            />
          </label>
          <fieldset>
            <label>
              Insira um arquivo:
              <input type='file' ref={this.fileInput} />
            </label>
          </fieldset>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    );
  }
}

export default Form;