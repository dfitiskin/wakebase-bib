import React, { Component } from 'react';

class BibList extends Component {
  render() {
    const { items, title, onSelect } = this.props;
    return (
      <section className="bib-list">
        <h2>{title}</h2>
        <ul>
          { items.map(item => <li key={item} onClick={e => onSelect(item)}>{item}</li> )}
        </ul>
      </section>
    );
  }
}

export default BibList;
