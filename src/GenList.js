import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Gen from './Gen';
import { next } from './actions';

class GenList extends Component {
  constructor(...args) {
    super(...args);

    this.renderGen = this.renderGen.bind(this);
  }

  renderGen(gen) {
    const { onNext } = this.props;
    return (
      <Gen
        onNext={onNext}
        number={gen.used[gen.used.length - 1]}
        id={gen.id}
        title={gen.title}
        from={gen.from}
        to={gen.to}
        awailable={gen.awailable.length}
        key={gen.id} />
    );
  }

  render() {
    const { gens } = this.props;
    return (
      <section>
        <ul className="gen-list">
          {gens.map(gen => this.renderGen(gen))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  gens: state.gen
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onNext: next
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GenList);
