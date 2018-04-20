import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BibList from './BibList';
import { exclude, include, resetGen, removeGen } from './actions';

function isResetable(total, awailable) {
  return total !== awailable;
}

class GenOptions extends Component {
  render() {
    const { gen, onInclude, onExclude, onReset, onRemove } = this.props;
    return (
      <section className="gen-options">
        <h1>{gen.title}</h1>
        <BibList
          title="Выданные номера"
          items={gen.used}
          onSelect={bib => onInclude(gen.id, bib)}
          />
        <BibList
          title="Доступные номера"
          items={gen.awailable}
          onSelect={bib => onExclude(gen.id, bib)}
          />
        <div className="gen-info">
          <dl>
            <dt>{gen.from}</dt>
            <dd>Минимальный номер</dd>
          </dl>
          <dl>
            <dt>{gen.to}</dt>
            <dd>Максимальный номер</dd>
          </dl>
          <dl>
            <dt>{gen.awailable.length}</dt>
            <dd>Осталось номеров</dd>
          </dl>
          <div className="gen-card-panel">
            <button className="reset" style={{visibility: isResetable(gen.to - gen.from + 1, gen.awailable) ? 'initial' : 'hidden'}} onClick={e => onReset(gen.id)}>Сбросить</button>
            <button className="remove" onClick={e => onRemove(gen.id)}>Удалить</button>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    gen: state.gen.find(item => item.id === Number(ownProps.match.params.id))
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onExclude: exclude,
  onInclude: include,
  onReset: resetGen,
  onRemove: removeGen
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(GenOptions);
