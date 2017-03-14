'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class PagePreview extends React.Component {
  render() {
    return (
      <Link to={`/page/${this.props.id}`}>
        <div className="page-preview">
          <img src={`img/${this.props.img}`}/>
          <h2 className="name">{this.props.title}</h2>
        </div>
      </Link>
    );
  }
}
