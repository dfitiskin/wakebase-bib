import React from 'react';
import { Link } from 'react-router-dom';

function randomInt(min, max) {
  return Math.floor(max - Math.random() * (max - min));
}

function Gen({number, id, title, from, to, awailable, onNext}) {
  return (
    <li className="gen-card">
      <h2 className="gen-card-number">{number || '–'}</h2>
      <div className="gen-card-info">
        <span>{title}</span>
        <span className="gen-card-range">{from}–{to}</span>
        <span className="gen-card-awailable">{awailable}</span>
      </div>
      <div className="gen-card-panel">
        <button className="next" style={{visibility: awailable ? 'initial' : 'hidden'}} onClick={e => onNext(id, randomInt(0, awailable - 1))}>Новый</button>
        <Link to={`/gen/${id}`}>выбрать …</Link>
      </div>
    </li>
  );
}

export default Gen;
