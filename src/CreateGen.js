import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createGen } from './actions';

class CreateGen extends Component {
  constructor(...args) {
    super(...args);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { dispatch } = this.props;
    event.preventDefault();
    dispatch(createGen(
      Number(this.to.value),
      Number(this.from.value),
      this.title.value)
    );
    event.target.reset();
    dispatch(push('/'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Название:
          <input type="text" ref={node => this.title = node} />
        </label>
        <label>
          Диапазон:
          <fieldset>
            <input type="number" min="1" ref={node => this.from = node} />
            {' – '}
            <input type="number" min="1" ref={node => this.to = node} />
          </fieldset>
        </label>
        <button type="submit">Создать</button>
      </form>
    );
  }
}

export default connect()(CreateGen);
