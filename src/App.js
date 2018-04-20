import React, { Component } from 'react';
import { Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import CreateGen from './CreateGen';
import GenList from './GenList';
import GenOptions from './GenOptions';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="main-menu">
          <NavLink exact activeClassName="current" to="/">Список</NavLink>
          <NavLink exact activeClassName="current" to="/create">Добавить</NavLink>
        </nav>
        <main>
          <Route exact path="/" component={GenList}/>
          <Route exact path="/create" component={CreateGen}/>
          <Route path="/gen/:id" component={GenOptions}/>
        </main>
      </div>
    );
  }
}

export default App;
