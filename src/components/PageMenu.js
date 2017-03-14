'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class PageMenu extends React.Component {
  render() {
    return (
      <nav className="page-menu">
        {this.props.pages.map(menuPage => {
          return <Link key={menuPage.id} to={`/page/${menuPage.id}`} activeClassName="active">
            {menuPage.name}
          </Link>;
        })}
      </nav>
    );
  }
}
